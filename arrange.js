/* ============================================================
   RICHIE TAN — Edit toolbar (owner-only). Drag-reorder + Add +
   Remove + Restore, all persisted per browser. HIDDEN from the
   public: only shows when edit mode is on (set by the Content
   Studio, or ?edit=1 in the URL; turn off with ?edit=0 or "Done").
   Loaded AFTER data.js, which exposes window.__mountGalleries and
   tags each rendered grid with [data-collname].
   ============================================================ */
(function () {
  "use strict";

  var EKEY = "rt_edit_mode", OKEY = "rt_order_v1", AKEY = "rt_added_v1", RKEY = "rt_removed_v1";

  /* URL switch so the owner can toggle on any page */
  try {
    var pe = new URLSearchParams(location.search).get("edit");
    if (pe === "1") localStorage.setItem(EKEY, "1");
    else if (pe === "0") localStorage.setItem(EKEY, "0");
  } catch (e) {}

  function editOn() { try { return localStorage.getItem(EKEY) === "1"; } catch (e) { return false; } }
  function ls(k) { try { return JSON.parse(localStorage.getItem(k) || "{}"); } catch (e) { return {}; } }
  function save(k, o) { try { localStorage.setItem(k, JSON.stringify(o)); return true; } catch (e) { return false; } }
  function containers() { return [].slice.call(document.querySelectorAll("[data-collname]")); }

  var toolbar, toast, drag = null;

  function flash(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toast.classList.remove("show"); }, 1600);
  }

  function rerender() {
    if (window.__mountGalleries) window.__mountGalleries();
    scanControls();
    updateToolbar();
  }

  /* ---- Add / Remove ---- */
  function blankItem(name) {
    if (name.indexOf("exhphoto:") === 0) return { u: "", new_added: true };
    if (name.indexOf("exhwork:") === 0) return { t: "New Work", cn: "", story: "", img: "", new_added: true };
    if (name.indexOf("exhlogo:") === 0) return { u: "", new_added: true };
    switch (name) {
      case "abstract": return { t: "New Artwork", y: "2026", status: "Available", price: "Price on enquiry", u: "", new_added: true };
      case "projects": return { t: "New Exhibition", sub: "2026", yr: "2026", desc: "", video: "", u: "", imgs: [], new_added: true };
      case "press": return { outlet: "New Feature", quote: "", tag: "Press", yr: "2026", link: "#", u: "", new_added: true };
      case "partners-all": return { name: "New Partner", logo: "", new_added: true };
      case "portfolio-figurative":
      case "portfolio-abstract": return { t: "New Work", desc: "", m: "", p: "", new_added: true };
      default: return { new_added: true };
    }
  }
  function doAdd(name) {
    var store = ls(AKEY);
    if (!store[name]) store[name] = [];
    store[name].push(blankItem(name));
    save(AKEY, store);
    rerender();
    flash("Added — fill in its details & image in the Content Studio");
  }
  function doRemove(name, ord) {
    var store = ls(RKEY);
    if (!store[name]) store[name] = [];
    if (store[name].indexOf(ord) === -1) store[name].push(ord);
    save(RKEY, store);
    rerender();
    flash("Removed — use “Restore hidden” to bring it back");
  }
  function removedCount() {
    var r = ls(RKEY), n = 0;
    for (var k in r) { if (r.hasOwnProperty(k)) n += (r[k] || []).length; }
    return n;
  }
  function restoreAll() { save(RKEY, {}); rerender(); flash("Hidden items restored"); }

  /* ---- inject per-card Remove + per-grid Add tile ---- */
  function scanControls() {
    containers().forEach(function (cont) {
      var cn = cont.getAttribute("data-collname");
      [].slice.call(cont.children).forEach(function (child) {
        if (child.classList.contains("rt-add-tile")) return;
        if (!child.hasAttribute("data-ord")) return;
        if (!child.querySelector(":scope > .rt-rm")) {
          var b = document.createElement("button");
          b.className = "rt-rm"; b.type = "button"; b.title = "Remove"; b.textContent = "✕";
          child.appendChild(b);
        }
        /* exhibition cards link to their own page — add an explicit Open
           button since a plain click is otherwise captured for dragging */
        if (cn === "projects" && !child.querySelector(":scope > .rt-open")) {
          var href = child.getAttribute("href");
          if (!href) { var a = child.querySelector("a"); href = a && a.getAttribute("href"); }
          if (href) {
            var o = document.createElement("button");
            o.className = "rt-open"; o.type = "button"; o.setAttribute("data-href", href);
            o.textContent = "Open to edit ↗";
            child.appendChild(o);
          }
        }
      });
      var tile = cont.querySelector(":scope > .rt-add-tile");
      if (!tile) {
        tile = document.createElement("button");
        tile.className = "rt-add-tile"; tile.type = "button";
        tile.innerHTML = '<span class="plus">+</span><span class="lbl">Add</span>';
        cont.appendChild(tile);
      } else {
        cont.appendChild(tile); // keep it last
      }
    });
  }

  /* ---- pointer drag reorder ---- */
  function onDown(e) {
    if (!editOn() || (e.button != null && e.button !== 0)) return;
    if (e.target.closest(".rt-rm") || e.target.closest(".rt-add-tile") || e.target.closest(".rt-open")) return;
    var item = e.target.closest("[data-ord]");
    if (!item) return;
    var cont = item.parentElement;
    if (!cont || !cont.hasAttribute("data-collname")) return;
    e.preventDefault();
    drag = { item: item, cont: cont, sx: e.clientX, sy: e.clientY, moved: false };
    try { item.setPointerCapture(e.pointerId); } catch (_) {}
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onUp);
  }
  function onMove(e) {
    if (!drag) return;
    if (!drag.moved) {
      if (Math.abs(e.clientX - drag.sx) < 5 && Math.abs(e.clientY - drag.sy) < 5) return;
      drag.moved = true; drag.item.classList.add("rt-dragging");
    }
    var x = e.clientX, y = e.clientY;
    var sibs = [].slice.call(drag.cont.children).filter(function (c) {
      return c !== drag.item && c.hasAttribute("data-ord") && c.offsetParent !== null;
    });
    var best = null, bestD = Infinity, before = true;
    sibs.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var d = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      if (d < bestD) { bestD = d; best = el; before = (y < cy - 1) || (Math.abs(y - cy) <= r.height * 0.5 && x < cx); }
    });
    if (best) {
      if (before) drag.cont.insertBefore(drag.item, best);
      else drag.cont.insertBefore(drag.item, best.nextSibling);
    }
    var at = drag.cont.querySelector(":scope > .rt-add-tile");
    if (at) drag.cont.appendChild(at);
  }
  function onUp() {
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    document.removeEventListener("pointercancel", onUp);
    if (!drag) return;
    var d = drag; drag = null;
    d.item.classList.remove("rt-dragging");
    if (!d.moved) return;
    var name = d.cont.getAttribute("data-collname");
    var order = [].slice.call(d.cont.children)
      .filter(function (c) { return c.hasAttribute("data-ord"); })
      .map(function (c) { return parseInt(c.getAttribute("data-ord"), 10); })
      .filter(function (n) { return !isNaN(n); });
    var store = ls(OKEY); store[name] = order;
    flash(save(OKEY, store) ? "Order saved ✓" : "Couldn't save — storage full");
  }

  /* ---- click routing (capture phase): suppress nav/lightbox in edit mode ---- */
  function onClick(e) {
    if (!editOn()) return;
    var op = e.target.closest(".rt-open");
    if (op) {
      e.preventDefault(); e.stopPropagation();
      var href = op.getAttribute("data-href");
      if (href) { try { localStorage.setItem(EKEY, "1"); } catch (_) {} location.href = href; }
      return;
    }
    var rm = e.target.closest(".rt-rm");
    if (rm) {
      e.preventDefault(); e.stopPropagation();
      var it = rm.closest("[data-ord]"); var c = it && it.parentElement;
      if (c) doRemove(c.getAttribute("data-collname"), parseInt(it.getAttribute("data-ord"), 10));
      return;
    }
    var add = e.target.closest(".rt-add-tile");
    if (add) {
      e.preventDefault(); e.stopPropagation();
      var cc = add.closest("[data-collname]");
      if (cc) doAdd(cc.getAttribute("data-collname"));
      return;
    }
    var item = e.target.closest("[data-ord]");
    if (item && item.parentElement && item.parentElement.hasAttribute("data-collname")) {
      e.preventDefault(); e.stopPropagation();
    }
  }

  function updateToolbar() {
    if (!toolbar) return;
    var rb = toolbar.querySelector(".rt-restore");
    var rc = removedCount();
    if (rb) { if (rc > 0) { rb.style.display = ""; rb.textContent = "Restore hidden (" + rc + ")"; } else rb.style.display = "none"; }
  }

  function buildToolbar() {
    toolbar = document.createElement("div");
    toolbar.className = "rt-edit-bar";
    toolbar.innerHTML =
      '<span class="rt-edit-dot"></span>' +
      '<span class="rt-edit-label">Editing — drag to reorder · <b>+</b> add · <b>✕</b> remove</span>' +
      '<button type="button" class="rt-restore" style="display:none">Restore hidden</button>' +
      '<button type="button" class="rt-edit-done">Done</button>';
    document.body.appendChild(toolbar);

    toast = document.createElement("div");
    toast.className = "rt-arrange-toast";
    document.body.appendChild(toast);

    toolbar.querySelector(".rt-edit-done").addEventListener("click", function () {
      try { localStorage.setItem(EKEY, "0"); } catch (e) {}
      location.reload();
    });
    toolbar.querySelector(".rt-restore").addEventListener("click", restoreAll);
  }

  function init() {
    if (!editOn() || !containers().length) return;
    document.body.classList.add("rt-arranging", "rt-editmode");
    buildToolbar();
    scanControls();
    updateToolbar();
    document.addEventListener("pointerdown", onDown, { passive: false });
    document.addEventListener("click", onClick, true);
    window.RTArrange = { scan: function () { scanControls(); updateToolbar(); } };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
