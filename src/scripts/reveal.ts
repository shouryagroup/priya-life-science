// Soft reveal for content that starts below the fold. Content visible on load, or any
// content when motion is reduced / IntersectionObserver is missing, is never hidden.
// The observer's first callback decides which elements start hidden, avoiding a forced layout read.
const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (motionOk && 'IntersectionObserver' in window) {
  const seen = new WeakSet<Element>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        const firstReport = !seen.has(el);
        seen.add(el);

        if (entry.isIntersecting) {
          if (!firstReport) {
            el.classList.add('reveal-in');
            el.classList.remove('reveal-pending');
          }
          observer.unobserve(el);
        } else if (firstReport) {
          el.classList.add('reveal-pending');
        }
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
}
