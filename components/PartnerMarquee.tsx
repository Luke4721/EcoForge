'use client';

import React from 'react';

/* ===========================================================================
   PARTNER LOGOS
   ---------------------------------------------------------------------------
   Drop the logo files in:   public/images/partners/
   They are then served at:  /images/partners/<file>

   Use the exact filenames below, or edit `src` to match what you save.
   SVG is strongly preferred — it stays sharp at any size and any DPI.
   If a brand only offers PNG, use one at least 400px wide on a transparent
   background.

   `wide: true` gives a long wordmark a roomier slot (Whirlpool, Mercedes-Benz,
   Paytm). `tall: true` is for stacked lockups where the mark sits above the
   name (ITC) — it raises the height cap so the wordmark stays legible.
   Leave both off for compact marks (Samsung, Vivo, HCL, Haier).
   =========================================================================== */
export const PARTNERS = [
  { name: 'Samsung',       src: '/images/partners/samsung.svg' },
  { name: 'Oppo',          src: '/images/partners/oppo.svg' },
  { name: 'Vivo',          src: '/images/partners/vivo.svg' },
  { name: 'Whirlpool',     src: '/images/partners/whirlpool.png', wide: true },
  { name: 'HCL',           src: '/images/partners/hcl.svg' },
  { name: 'ITC Limited',   src: '/images/partners/itc.png',       tall: true },
  { name: 'Haier',         src: '/images/partners/haier.png' },
  { name: 'Wipro',         src: '/images/partners/wipro.svg' },
  { name: 'Mercedes-Benz', src: '/images/partners/mercedes-benz.png', wide: true },
  { name: 'Paytm',         src: '/images/partners/paytm.svg',     wide: true },
];

export default function PartnerMarquee() {
  // rendered twice so the loop is seamless; the second pass is decorative
  const lane = [...PARTNERS, ...PARTNERS];

  return (
    <section className="eg-sec eg-partners">
      <div className="eg-wrap">
        <p className="eg-eyebrow">Our Partners</p>
        <h2 className="eg-h2">Trusted by Industry Leaders</h2>
        <p className="eg-lede" style={{ margin: '0 auto' }}>
          Partnering with global brands to ensure secure, compliant, and zero-waste IT asset disposition and green metal recovery.
        </p>
      </div>
      <div className="eg-marquee">
        <div className="eg-track">
          {lane.map((p, i) => (
            <div
              className={`eg-logo${p.wide ? ' eg-logo--wide' : ''}${p.tall ? ' eg-logo--tall' : ''}`}
              key={`${p.name}-${i}`}
              aria-hidden={i >= PARTNERS.length}
            >
              <img src={p.src} alt={i >= PARTNERS.length ? '' : p.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
