'use client';

import React from 'react';
import Link from 'next/link';

/* ===========================================================================
   THEME CARD ROW
   ---------------------------------------------------------------------------
   The homepage's signature motif: a row of four cards — dark / lime / gradient
   / image — in the THEME's design language (Rajdhani, #00b140, 18-26px radii),
   not the Tailwind language the inner pages use.

   Purely additive. Drop one into any page between existing sections; it reads
   nothing from and changes nothing about the sections around it.

   Card text should be a label that already appears on that page (a section
   heading, a service name). These cards are navigational furniture, not new
   copy — do not put claims or figures here that aren't already on the page.
   =========================================================================== */

export type ThemeCard =
  | { kind: 'dark'; eyebrow?: string; title: string; ctaLabel?: string; ctaHref?: string }
  | { kind: 'lime'; eyebrow?: string; title: string }
  | { kind: 'fill' }
  | { kind: 'image'; src: string; alt: string };

const css = `
.hp-row{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin:0 auto;max-width:1200px;padding:0 20px;}
.hp-card{position:relative;overflow:hidden;border-radius:22px;min-height:300px;display:flex;flex-direction:column;justify-content:flex-end;padding:32px 30px;}
.hp-card--dark{background:linear-gradient(158deg,#1b241e 0%,#101713 100%);}
.hp-card--lime{background:radial-gradient(100% 80% at 86% 10%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 58%),linear-gradient(155deg,#b7e858 0%,#a3dc46 48%,#8ecb36 100%);}
.hp-card--fill{background:radial-gradient(120% 90% at 12% 0%,rgba(0,177,64,.10) 0%,rgba(0,177,64,0) 58%),linear-gradient(158deg,#f7faf8 0%,#fff 52%,#eef6f0 100%);border:1px solid rgba(0,177,64,.10);}
.hp-card--image{padding:0;min-height:300px;}
.hp-card--image img{width:100%;height:100%;object-fit:cover;display:block;border-radius:22px;}
.hp-card--fill::after,.hp-card--lime::after{content:"";position:absolute;inset:0;pointer-events:none;border-radius:inherit;
  background-image:repeating-linear-gradient(135deg,rgba(0,0,0,.028) 0 1px,rgba(0,0,0,0) 1px 13px);}
.hp-eyebrow{font-family:'Rajdhani',sans-serif;font-weight:700;letter-spacing:.16em;text-transform:uppercase;font-size:13px;margin:0 0 10px;}
.hp-title{font-family:'Rajdhani',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:0;}
.hp-card--dark .hp-eyebrow{color:#00b140;} .hp-card--dark .hp-title{color:#fff;}
.hp-card--lime .hp-eyebrow{color:#17301f;opacity:.72;} .hp-card--lime .hp-title{color:#17301f;}
.hp-btn{display:inline-flex;align-items:center;gap:9px;margin-top:22px;padding:12px 24px;border-radius:30px;
  border:1px solid #00b140;color:#00b140;text-decoration:none;font-family:'Rajdhani',sans-serif;font-weight:700;
  letter-spacing:.05em;text-transform:uppercase;font-size:13px;align-self:flex-start;transition:background .25s,color .25s;}
.hp-btn:hover{background:#00b140;color:#0f1512;}
@media (max-width:1024px){.hp-row{grid-template-columns:repeat(2,1fr);}}
@media (max-width:600px){.hp-row{grid-template-columns:1fr;}.hp-card{min-height:230px;}}
`;

export default function ThemeCardRow({ cards, style }: { cards: ThemeCard[]; style?: React.CSSProperties }) {
  return (
    <section style={{ padding: '70px 0', ...style }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="hp-row">
        {cards.map((c, i) => {
          if (c.kind === 'image') {
            return (
              <div className="hp-card hp-card--image" key={i}>
                <img src={c.src} alt={c.alt} loading="lazy" />
              </div>
            );
          }
          if (c.kind === 'fill') return <div className="hp-card hp-card--fill" key={i} aria-hidden="true" />;
          return (
            <div className={`hp-card hp-card--${c.kind}`} key={i}>
              {c.eyebrow ? <p className="hp-eyebrow">{c.eyebrow}</p> : null}
              <h3 className="hp-title">{c.title}</h3>
              {c.kind === 'dark' && c.ctaLabel && c.ctaHref ? (
                <Link href={c.ctaHref} className="hp-btn">
                  {c.ctaLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
