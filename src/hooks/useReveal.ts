import { useEffect, useRef } from 'react';

/**
 * Reveal static page elements once they approach the viewport.
 * Content remains visible for reduced-motion users and without IntersectionObserver.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.classList.contains('reveal')
      ? [root]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    const revealAll = () => targets.forEach((target) => target.classList.add('is-visible'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px 32px 0px' }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      // Ensure no section stays hidden during route or layout transitions.
      revealAll();
    };
  }, []);

  return ref;
}
