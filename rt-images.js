/* ============================================================
   RICHIE TAN — editable image layer
   Loaded FIRST (before data.js / site.js).
   Stores per-browser image overrides in localStorage so the
   user can replace/upload any picture from the Content Studio.
   ============================================================ */
(function () {
  "use strict";
  var KEY = "rt_images_v1";

  function load() {
    var ls = {};
    try { ls = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { ls = {}; }
    // baked published content as baseline; per-browser localStorage wins on top
    var baked = (window.__SITE_CONTENT && window.__SITE_CONTENT.images) || {};
    var merged = {};
    for (var k in baked) if (baked.hasOwnProperty(k)) merged[k] = baked[k];
    for (var j in ls) if (ls.hasOwnProperty(j)) merged[j] = ls[j];
    return merged;
  }
  var store = load();

  var RT = {
    KEY: KEY,
    all: function () { return store; },
    reload: function () { store = load(); return store; },
    get: function (slot) {
      return (slot && store[slot]) ? store[slot] : null;
    },
    /* returns override if present, else the provided default url */
    src: function (slot, def) {
      return (slot && store[slot]) ? store[slot] : def;
    },
    set: function (slot, url) {
      if (!slot) return true;
      var prev = store[slot];
      if (url == null || url === "") delete store[slot];
      else store[slot] = url;
      try {
        localStorage.setItem(KEY, JSON.stringify(store));
        return true;
      } catch (e) {
        // quota exceeded — roll back
        if (prev == null) delete store[slot]; else store[slot] = prev;
        return false;
      }
    },
    /* swap src on every static [data-slot] image that has an override */
    applyAll: function (root) {
      (root || document).querySelectorAll("img[data-slot]").forEach(function (im) {
        var o = store[im.getAttribute("data-slot")];
        if (o && im.getAttribute("src") !== o) im.src = o;
      });
    },
    /* downscale a File to a data URL (max edge px), for uploads */
    fromFile: function (file, maxEdge, quality, type) {
      maxEdge = maxEdge || 1600;
      quality = quality || 0.85;
      type = type || "image/jpeg";
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
          var img = new Image();
          img.onload = function () {
            var w = img.naturalWidth, h = img.naturalHeight;
            var scale = Math.min(1, maxEdge / Math.max(w, h));
            var cw = Math.round(w * scale), ch = Math.round(h * scale);
            var cv = document.createElement("canvas");
            cv.width = cw; cv.height = ch;
            cv.getContext("2d").drawImage(img, 0, 0, cw, ch);
            try { resolve(cv.toDataURL(type, quality)); }
            catch (e) { reject(e); }
          };
          img.onerror = reject;
          img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
  };

  window.RTImages = RT;

  /* apply to static images as soon as DOM is ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { RT.applyAll(); });
  } else {
    RT.applyAll();
  }
})();
