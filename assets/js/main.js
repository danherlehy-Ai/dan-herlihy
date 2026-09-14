// Dan Herlehy — personal site interactions.
// 1. Reveal-on-scroll for .reveal elements.
// 2. Subtle header shadow after scrolling.

(function () {
  "use strict";

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // Header elevation on scroll
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 24
      ? "0 10px 30px rgba(0,0,0,0.45)"
      : "none";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
