'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ===========================================================================
   SCROLL REVEAL
   ---------------------------------------------------------------------------
   Several pages mark sections with `animate-on-scroll` AND an inline
   opacity:0 / transform. The theme's script reveals them — but it only runs
   once, on full page load. With client-side navigation the script never runs
   again, so a soft-navigated page mounts invisible and only appears after a
   manual reload.

   This re-scans on every route change and reveals elements itself. It writes
   to element.style directly because an inline opacity cannot be overridden by
   a CSS class — the usual `.is-visible { opacity: 1 }` approach silently does
   nothing here.

   Safety net: anything still hidden after FAILSAFE_MS is revealed
   unconditionally. Content must never be permanently invisible because an
   observer didn't fire.
   =========================================================================== */

const FAILSAFE_MS = 1500;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const show = (el: HTMLElement) => {
      if (el.dataset.egShown === '1') return;
      el.dataset.egShown = '1';
      if (!reduced) el.style.transition = 'opacity .6s ease-out, transform .6s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'none';
    };

    // rAF lets the new route paint before we measure
    const raf = requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>('.animate-on-scroll')
      );

      if (reduced) {
        els.forEach(show);
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              show(e.target as HTMLElement);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      els.forEach((el) => {
        // already on screen at mount (very common after a route change,
        // which lands you at the top of a fresh page) — reveal immediately
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) show(el);
        else io.observe(el);
      });

      cleanup = () => io.disconnect();
    });

    let cleanup: (() => void) | undefined;

    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('.animate-on-scroll')
        .forEach((el) => {
          if (getComputedStyle(el).opacity === '0') show(el);
        });
    }, FAILSAFE_MS);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(failsafe);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
