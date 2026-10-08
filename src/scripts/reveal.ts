// Soft reveal for content that starts below the fold. Content above the fold, or any
// content when motion is reduced / IntersectionObserver is missing, is never hidden.
const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (motionOk && 'IntersectionObserver' in window) {
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const viewportBottom = window.innerHeight;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('reveal-in');
        el.classList.remove('reveal-pending');
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  for (const el of elements) {
    if (el.getBoundingClientRect().top < viewportBottom) continue;
    el.classList.add('reveal-pending');
    observer.observe(el);
  }
}
