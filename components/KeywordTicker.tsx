'use client';

import React from 'react';

/* ===========================================================================
   KEYWORD TICKER
   ---------------------------------------------------------------------------
   The homepage's scrolling keyword strip, reusable as a section divider on any
   inner page. Carries no claims and no figures — it is purely a visual bridge
   between two existing sections, so it can be dropped in anywhere without
   touching the content around it.
   =========================================================================== */

const DEFAULT_WORDS = ['RECYCLING', 'GOGREEN', 'ECOCONSCIOUS', 'SUSTAINABILITY', 'ECOFRIENDLY', 'GREENLIVING'];

const css = `
.hp-tick{position:relative;overflow:hidden;padding:26px 0;background:#f6f8f7;border-top:1px solid rgba(0,177,64,.12);border-bottom:1px solid rgba(0,177,64,.12);
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);}
.hp-tick--dark{background:#141c18;border-color:rgba(0,177,64,.22);}
.hp-tick-track{display:flex;width:max-content;animation:hp-tick-scroll 34s linear infinite;}
.hp-tick:hover .hp-tick-track{animation-play-state:paused;}
@keyframes hp-tick-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.hp-tick-item{display:flex;align-items:center;gap:16px;padding:0 26px;font-family:'Rajdhani',sans-serif;
  font-weight:700;letter-spacing:.14em;font-size:17px;color:#17301f;white-space:nowrap;}
.hp-tick--dark .hp-tick-item{color:#e6efe9;}
.hp-tick-dot{width:8px;height:8px;border-radius:50%;background:#00b140;flex:0 0 auto;}
@media (prefers-reduced-motion:reduce){.hp-tick-track{animation:none;}}
`;

export default function KeywordTicker({
  words = DEFAULT_WORDS,
  dark = false,
}: { words?: string[]; dark?: boolean }) {
  const lane = [...words, ...words];
  return (
    <div className={`hp-tick${dark ? ' hp-tick--dark' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="hp-tick-track">
        {lane.map((w, i) => (
          <span className="hp-tick-item" key={`${w}-${i}`} aria-hidden={i >= words.length}>
            <span className="hp-tick-dot" />
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
