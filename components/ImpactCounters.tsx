'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

const ImpactChart3D = dynamic(() => import('./ImpactChart3D'), { ssr: false });

/* ===========================================================================
   IMPACT FIGURES — edit this block only.
     base   the figure shown
     unit   suffix printed next to it
     rows   how many blocks the stack draws
     per    what one block stands for — printed under the stack, and it must
            stay true to base: rows x per <= base, with no rounding up.
   =========================================================================== */
export const IMPACT_STATS = [
  { base: 10, unit: 'Yrs', label: 'Years Experience', rows: 10, per: '1 year' },
  { base: 8, unit: '', label: 'Awards Won', rows: 8, per: '1 award' },
  { base: 342, unit: '+', label: 'Happy Clients', rows: 19, per: '18 clients' },
  { base: 84, unit: '+', label: 'Partners', rows: 14, per: '6 partners' },
];

const COUNT_MS = 1500;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type Phase = 'idle' | 'armed' | 'run';

function Counter({ base, unit, running }: { base: number; unit: string; running: boolean }) {
  // Holds the real figure first, so the server render, no-JS and crawlers all
  // see the published numbers; the section drops it to zero only when it is
  // about to count.
  const [display, setDisplay] = useState(base);

  useEffect(() => {
    if (!running) {
      setDisplay(0);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / COUNT_MS, 1);
      setDisplay(Math.round(easeOutCubic(p) * base));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, base]);

  return (
    <span className="eg-num">
      {display.toLocaleString('en-IN')}
      <span>{unit}</span>
    </span>
  );
}

export default function ImpactCounters() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef<number | null>(null);
  const started = useRef(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) setReduced(true);
    else setPhase('armed');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setVisible(e.isIntersecting);
          if (!e.isIntersecting || isReduced || started.current) return;
          started.current = true;
          setStartedAt(performance.now());
          setPhase('run');
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hover = (i: number | null) => {
    activeRef.current = i;
    setActive(i);
  };

  const summary = IMPACT_STATS.map(
    (s) => `${s.base} ${s.label.toLowerCase()}, drawn as ${s.rows} blocks of ${s.per}`
  ).join('; ');

  return (
    <section ref={sectionRef} className="eg-sec eg-impact" data-phase={phase} aria-labelledby="eg-impact-h">
      <div className="eg-wrap">
        <div className="eg-impact-head">
          <div>
            <p className="eg-eyebrow">Eco Forge in numbers</p>
            <h2 className="eg-impact-h" id="eg-impact-h">
              Our Impact
            </h2>
          </div>
          <p className="eg-impact-note">Unit chart — the value one block stands for is printed under each stack.</p>
        </div>

        <div className="eg-chart">
          <div className="eg-chart-stage">
            <div className="eg-chart-canvas" aria-hidden="true">
              <ImpactChart3D
                rows={IMPACT_STATS.map((s) => s.rows)}
                startedAt={startedAt}
                activeRef={activeRef}
                reduced={reduced}
                paused={!visible}
              />
            </div>
            <div className="eg-chart-zones" aria-hidden="true">
              {IMPACT_STATS.map((s, i) => (
                <span key={s.label} className="eg-zone" onMouseEnter={() => hover(i)} onMouseLeave={() => hover(null)} />
              ))}
            </div>
          </div>

          {IMPACT_STATS.map((s, i) => (
            <div
              key={s.label}
              className={active === i ? 'eg-stat is-active' : 'eg-stat'}
              onMouseEnter={() => hover(i)}
              onMouseLeave={() => hover(null)}
            >
              <span className="eg-stat-idx">{String(i + 1).padStart(2, '0')}</span>
              <Counter base={s.base} unit={s.unit} running={phase === 'run'} />
              <p className="eg-stat-label">{s.label}</p>
              <p className="eg-stat-unit">
                <i aria-hidden="true" />
                <span className="eg-unit-prefix">1 block&nbsp;=&nbsp;</span>
                {s.per}
              </p>
            </div>
          ))}
        </div>

        <p className="sr-only">Unit chart. {summary}.</p>

        <div className="eg-metals">
          Redefining Green Metals: <b>Iron</b> &middot; <b>Copper</b> &middot; <b>Lithium</b> &middot; <b>Cobalt</b> &middot; <b>Aluminum</b>
        </div>
      </div>
    </section>
  );
}
