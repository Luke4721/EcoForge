'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/* ===========================================================================
   THEME LINK ROUTER
   ---------------------------------------------------------------------------
   The header, footer and the remaining homepage sections are injected as raw
   theme HTML, so their links are plain <a> tags, not next/link. The theme's
   own JavaScript (smooth-scroll / one-page nav, loaded from the vendor bundle)
   binds a delegated click handler on document and calls preventDefault on
   anchors — which is why clicking a service card jumps to the top of the
   current page instead of navigating.

   This listens in the CAPTURE phase, so it runs BEFORE the theme's bubbling
   handler gets the event. Internal links are handed to the Next router;
   everything else (anchors, mailto, tel, external, new-tab) is left alone.
   =========================================================================== */

export default function ThemeLinkRouter() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // let the browser handle modified clicks (new tab, download, etc.)
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      // leave in-page anchors, mail and phone links to the browser/theme
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      // internal route?
      let path: string | null = null;
      if (href.startsWith('/')) {
        path = href;
      } else if (/^https?:\/\//i.test(href)) {
        try {
          const u = new URL(href);
          if (u.origin === window.location.origin) path = u.pathname + u.search + u.hash;
        } catch { /* malformed href — ignore */ }
      }
      if (!path) return;

      e.preventDefault();
      e.stopPropagation();

      const before = window.location.pathname;
      router.push(path);

      // Fallback. If the client-side navigation doesn't take — a route that
      // isn't compiled yet in dev, a theme script that swallows the
      // transition, a stale router after the header is re-rendered by the
      // sticky-header code — fall back to a real browser navigation rather
      // than leaving the click doing nothing at all.
      window.setTimeout(() => {
        if (window.location.pathname === before && before !== path.split(/[?#]/)[0]) {
          window.location.assign(path);
        }
      }, 700);
    };

    document.addEventListener('click', onClick, true); // capture
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  return null;
}
