// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.souldeepquantumhealing.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.souldeepquantumhealing.com/","title_tag":"Quantum Healing Hypnosis Arizona | Soul Deep Quantum Healing","meta_description":"Experience Quantum Healing Hypnosis, past life regression, and mind body healing with Soul Deep Quantum Healing, based in Arizona, for profound spiritual growth."},{"page_url":"https://www.souldeepquantumhealing.com/about-4","title_tag":"Spiritual Growth Sessions Arizona | Soul Deep Quantum Healing","meta_description":"Meet Jayme of Soul Deep Quantum Healing in Arizona, offering spiritual growth sessions, self healing techniques, and soul deep healing through Quantum Healing Hypnosis."},{"page_url":"https://www.souldeepquantumhealing.com/services","title_tag":"Quantum Healing & Reiki Services Arizona | Soul Deep Healing","meta_description":"Book Quantum Healing Hypnosis, past life regression, and Traditional Usui Reiki services with Soul Deep Quantum Healing in Arizona for energy healing and self healing."},{"page_url":"https://www.souldeepquantumhealing.com/blank","title_tag":"Privacy Policy | Soul Deep Quantum Healing Arizona","meta_description":"Read the Privacy Policy for Soul Deep Quantum Healing in Arizona. Learn how your data is protected for hypnosis, Reiki, and spiritual growth sessions."},{"page_url":"https://www.souldeepquantumhealing.com/blank-2","title_tag":"Terms & Conditions | Soul Deep Quantum Healing Arizona","meta_description":"Review the Terms & Conditions for Soul Deep Quantum Healing hypnotherapy and energy healing services in Arizona, including session policies and client rights."}],"keywords":["Quantum Healing Arizona","Hypnosis Sessions Santa Rosa","Past Life Regression","Traditional Usui Reiki","Quantum Healing Hypnosis","Spiritual Growth Sessions","Mind Body Healing","Self Healing Techniques","Energy Healing Arizona","Soul Deep Healing"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.souldeepquantumhealing.com/#localbusiness",
  "name": "Soul Deep Quantum Healing",
  "url": "https://www.souldeepquantumhealing.com/",
  "description": "Soul Deep Quantum Healing offers transformative Quantum Healing Hypnosis Technique (QHHT) and Traditional Usui Reiki sessions for deep healing of mind, body, and spirit through past life regression, body scans, and personalized spiritual guidance.",
  "image": [
    "https://static.wixstatic.com/media/11062b_bb0757a2e5b4464896f14f10516b75fa~mv2.jpeg/v1/fill/w_39,h_22,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_bb0757a2e5b4464896f14f10516b75fa~mv2.jpeg",
    "https://static.wixstatic.com/media/11062b_d8bb51365d2c4e7cb43e3f3d554c8556~mv2.jpg/v1/fill/w_147,h_159,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_d8bb51365d2c4e7cb43e3f3d554c8556~mv2.jpg"
  ],
  "email": "mailto:Jayme@souldeepquantumhealing.com",
  "telephone": "+1-480-734-5004",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Arizona"
  },
  "founder": {
    "@type": "Person",
    "name": "Jayme",
    "email": "mailto:Jayme@souldeepquantumhealing.com"
  },
  "sameAs": [
    "https://www.youtube.com/",
    "https://www.instagram.com/",
    "https://www.tiktok.com/"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Quantum Healing Hypnosis Technique Session",
      "price": "333",
      "priceCurrency": "USD",
      "description": "A 4-hour Quantum Healing Hypnosis Technique (QHHT) session including past life regression, body scans, and messages for spiritual growth.",
      "itemOffered": {
        "@type": "Service",
        "name": "Quantum Healing Hypnosis Technique",
        "serviceType": "Hypnotherapy"
      }
    },
    {
      "@type": "Offer",
      "name": "Reiki Session",
      "price": "60",
      "priceCurrency": "USD",
      "description": "A 1-hour Traditional Usui Reiki energy healing session to support balance and well-being.",
      "itemOffered": {
        "@type": "Service",
        "name": "Reiki",
        "serviceType": "Reiki"
      }
    },
    {
      "@type": "Offer",
      "name": "Sequel Session",
      "price": "222",
      "priceCurrency": "USD",
      "description": "A 4-hour follow-up hypnotherapy session to continue and deepen previous Quantum Healing work.",
      "itemOffered": {
        "@type": "Service",
        "name": "Sequel Session",
        "serviceType": "Hypnotherapy"
      }
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Brenda Marquez"
      },
      "reviewBody": "Tender and patient. She radiates sunlight the moment you feel her presence. You can sense her genuine care for your well-being, making you feel safe and protected during a QHHT session. A strong, resilient, and inspiring woman — a true warrior with a pure heart."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Christina LeMieux"
      },
      "reviewBody": "I recently had the good fortune to have a QHHT session with Jayme of Soul Deep Quantum Healing. My main goal was just to see if I could get a past life regression, but I ended up getting more than I expected. Jayme was prompt, caring, and professional, just lovely, and quickly took me to a light trance state which I thought probably lasted about 45 minutes, but actually turned out to be over 2 hours! I could hear her soothing voice the whole time and felt very safe. I was able to access scenes from three different lifetimes, and some knowledge from what I believe was my higher self. I ended the session feeling enlightened and very peaceful, a feeling which has lasted since."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jowita Klusek"
      },
      "reviewBody": "Jayme radiates warmth and wonder like sunshine in human form. She brings joy, heart, and a divine curiosity that invites others to feel safe, seen, and celebrated."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
