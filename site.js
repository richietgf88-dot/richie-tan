/* ============================================================
   RICHIE TAN — site behaviour
   ============================================================ */
(function () {
  "use strict";

  /* ---- Nav: transparent -> solid on scroll ---- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile drawer ---- */
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.querySelector(".drawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", function () {
      drawer.classList.toggle("open");
      document.body.style.overflow = drawer.classList.contains("open") ? "hidden" : "";
    });
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        drawer.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Reveal on scroll (re-runnable) ---- */
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  function bindReveals() {
    document.querySelectorAll(".reveal:not(.in), .reveal-img:not(.in)").forEach(function (el) {
      io.observe(el);
    });
  }
  bindReveals();

  /* ---- SAFETY NET: never leave reveal content permanently hidden ----
     If the IntersectionObserver misses elements (timing, dynamic injection,
     reduced-motion, or any host quirk), force them visible so nothing stays
     invisible. Content visibility must never depend on the animation firing. */
  function revealAll() {
    document.querySelectorAll(".reveal:not(.in), .reveal-img:not(.in)").forEach(function (el) {
      el.classList.add("in");
    });
  }
  /* re-scan whenever new content is injected (galleries, cards, images) */
  if (window.MutationObserver) {
    var _rtScan;
    var _mo = new MutationObserver(function () {
      clearTimeout(_rtScan);
      _rtScan = setTimeout(bindReveals, 60);
    });
    try { _mo.observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  }
  /* guaranteed fallbacks: reveal anything still hidden shortly after load */
  window.addEventListener("load", function () { setTimeout(revealAll, 1200); });
  setTimeout(revealAll, 2600);
  if (!("IntersectionObserver" in window)) revealAll();

  /* ---- Artwork card -> deep link to contact (re-runnable) ---- */
  function bindEnquire() {
    document.querySelectorAll("[data-enquire]").forEach(function (card) {
      if (card.__bound) return;
      card.__bound = true;
      // cards that open the detail lightbox handle their own click
      if (card.hasAttribute("data-coll")) return;
      card.addEventListener("click", function (ev) {
        if (ev.target.closest("a[href]")) return;
        var title = card.getAttribute("data-enquire") || "";
        window.location.href = "contact.html?artwork=" + encodeURIComponent(title);
      });
    });
  }
  bindEnquire();

  /* expose for dynamically rendered galleries (data.js) */
  window.__bindDynamic = function () {
    bindReveals();
    bindEnquire();
  };

  /* ---- Graceful image fallback ---- */
  function failImage(el) {
    el.classList.add("failed");
    var p = el.closest(".frame, .figure");
    if (p) p.classList.add("failed");
  }
  document.addEventListener(
    "error",
    function (e) {
      if (e.target && e.target.tagName === "IMG") failImage(e.target);
    },
    true
  );
  // catch already-broken images
  document.querySelectorAll("img").forEach(function (im) {
    if (im.complete && im.naturalWidth === 0) failImage(im);
  });

  /* ---- Footer year ---- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Contact form ---- */
  var form = document.querySelector("#enquiry-form");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var art = params.get("artwork");
    var artField = form.querySelector("[name=artwork]");
    if (art && artField) {
      artField.value = art;
      var hint = document.querySelector("#prefill-hint");
      if (hint) {
        hint.textContent = "Enquiring about “" + art + "”";
        hint.style.display = "block";
      }
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        if (!f.value.trim()) {
          ok = false;
          f.style.borderColor = "var(--crimson)";
        } else {
          f.style.borderColor = "";
        }
      });
      var email = form.querySelector("[name=email]");
      if (email && email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        ok = false;
        email.style.borderColor = "var(--crimson)";
      }
      if (!ok) return;

      var btn = form.querySelector("[type=submit]");
      var btnHtml = btn ? btn.innerHTML : "";
      if (btn) { btn.disabled = true; btn.innerHTML = "Sending\u2026"; }

      var endpoint = form.getAttribute("action");
      var ajax = endpoint.replace("formsubmit.co/", "formsubmit.co/ajax/");
      var data = {};
      new FormData(form).forEach(function (v, k) { if (k.charAt(0) !== "_" || k === "_subject") data[k] = v; });

      function showSuccess() {
        form.style.display = "none";
        var msg = document.querySelector("#form-success");
        if (msg) msg.classList.add("show");
      }
      function fallbackMailto() {
        // last resort: open the visitor's mail client pre-filled, so the enquiry is never lost
        var subj = encodeURIComponent("Enquiry \u2014 " + (data.artwork || "richietan.com"));
        var body = encodeURIComponent(
          "Name: " + (data.name || "") + "\nEmail: " + (data.email || "") +
          "\nPhone: " + (data.phone || "") + "\nInterest: " + (data.intent || "") +
          "\nArtwork: " + (data.artwork || "") + "\n\n" + (data.message || ""));
        window.location.href = "mailto:richietgf88@gmail.com?subject=" + subj + "&body=" + body;
      }

      fetch(ajax, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (r.ok && (j.success === "true" || j.success === true || r.status === 200)) {
            showSuccess();
          } else {
            throw new Error("send failed");
          }
        });
      }).catch(function () {
        if (btn) { btn.disabled = false; btn.innerHTML = btnHtml; }
        var note = form.querySelector(".form-note");
        if (note) {
          note.innerHTML = 'Having trouble sending. <a href="#" class="gold" id="mailto-fallback">Email Richie directly instead \u2192</a>';
          var fb = note.querySelector("#mailto-fallback");
          if (fb) fb.addEventListener("click", function (ev) { ev.preventDefault(); fallbackMailto(); });
        }
      });
    });
  }

  /* ---- Subtle hero parallax ---- */
  var heroImg = document.querySelector(".hero-bg img");
  if (heroImg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        if (y < window.innerHeight) {
          heroImg.style.transform = "scale(1.06) translateY(" + y * 0.18 + "px)";
        }
      },
      { passive: true }
    );
  }

  /* ---- Scroll progress hairline ---- */
  var prog = document.createElement("div");
  prog.className = "rt-progress";
  document.body.appendChild(prog);
  function onProg() {
    var h = document.documentElement;
    var max = (h.scrollHeight - h.clientHeight) || 1;
    var p = Math.min(1, Math.max(0, (window.scrollY || h.scrollTop) / max));
    prog.style.width = (p * 100).toFixed(2) + "%";
  }
  window.addEventListener("scroll", onProg, { passive: true });
  window.addEventListener("resize", onProg, { passive: true });
  onProg();

  /* ---- Cinematic page transitions + first-visit intro ---- */
  var reduceMo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var veil = document.getElementById("rt-veil");
  var isIntro = !!veil; // present in markup only on the home page

  if (!veil) {
    veil = document.createElement("div");
    veil.id = "rt-veil";
    veil.className = "rt-veil hidden"; // start hidden → no flash on inner pages
    document.body.appendChild(veil);
  }

  function hideVeilInstant() {
    veil.style.transition = "none";
    veil.classList.add("hidden");
    void veil.offsetWidth; // reflow
    veil.style.transition = "";
  }

  if (isIntro) {
    var seen = false;
    try { seen = !!sessionStorage.getItem("rt_intro_seen"); } catch (e) {}
    if (seen || reduceMo) {
      hideVeilInstant();
    } else {
      try { sessionStorage.setItem("rt_intro_seen", "1"); } catch (e) {}
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { veil.classList.add("reveal-mark"); });
      });
      var lift = setTimeout(function () { veil.classList.add("hidden"); }, 1750);
      var skip = function () { clearTimeout(lift); veil.classList.add("hidden"); };
      window.addEventListener("wheel", skip, { passive: true, once: true });
      window.addEventListener("touchstart", skip, { passive: true, once: true });
    }
  }

  // Cover-then-navigate on internal links
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest("a");
    if (!a) return;
    var href = a.getAttribute("href");
    if (!href) return;
    if (a.target && a.target !== "_self") return;
    if (a.hasAttribute("download")) return;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return;
    if (href.charAt(0) === "#") return;
    var url;
    try { url = new URL(a.href, location.href); } catch (_) { return; }
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.hash) return; // in-page anchor
    e.preventDefault();
    veil.classList.remove("hidden");
    veil.classList.remove("reveal-mark");
    setTimeout(function () { window.location.href = a.href; }, 470);
  });

  // Clear veil if page restored from back/forward cache
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) hideVeilInstant();
  });
})();
