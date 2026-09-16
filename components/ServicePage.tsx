'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import KeywordTicker from '@/components/KeywordTicker';
import ThemeCardRow from '@/components/ThemeCardRow';

/* ===========================================================================
   SHARED SERVICE PAGE
   ---------------------------------------------------------------------------
   All six service detail pages share one structure on the live site, so they
   share one component here. A page file just supplies its content.

   Motion: framer-motion `whileInView` rather than the `animate-on-scroll`
   class used elsewhere. That older pattern needs BOTH the class and an inline
   opacity:0 — miss the class and the section stays permanently invisible.
   whileInView has no such failure mode, and re-triggers properly on route
   changes, which matters on a six-page cluster users click between.
   =========================================================================== */

export type Stat = { value: string; label?: string; title: string; description: string };
export type Step = { title: string; description: string };
export type Benefit = { title: string; description: string };

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  accentWord: string;
  standfirst: string;
  ctaLabel: string;
  introHeading?: string;
  introParagraphs: string[];
  stats?: Stat[];
  processHeading?: string;
  processStandfirst?: string;
  steps?: Step[];
  benefitsHeading?: string;
  benefits?: Benefit[];
  /* optional: homepage-style card row. Omit and the row simply isn't rendered. */
  rowImage?: string;
  rowImageAlt?: string;
  /* optional hero visual (photo fills a rounded panel; .svg renders on a light panel) */
  heroImage?: string;
  heroImageAlt?: string;
  /* optional three-image strip after the benefits */
  galleryImages?: string[];
  /* cross-links to sibling services, shown at the bottom */
  relatedHrefs?: string[];
};

/* One-line descriptors reused across the cluster's "Related Services" row.
   Wording mirrors each service's own card copy on the homepage. */
const RELATED: Record<string, { title: string; description: string }> = {
  '/lithium-battery-recycling': { title: 'Lithium Battery Recycling', description: 'High-purity extraction of lithium and cobalt from EV and electronic batteries.' },
  '/plastic-waste-recycling': { title: 'Plastic Waste Recycling', description: 'Advanced sorting and precision pelletizing into reusable manufacturing materials.' },
  '/paper-recycling': { title: 'Paper Recycling', description: 'Closed-loop processing that saves trees, conserves water and cuts corporate carbon footprint.' },
  '/green-metal-recovery': { title: 'Green Metal Recovery', description: 'High-yield extraction of iron, copper and aluminum from complex industrial waste streams.' },
  '/epr-consulting': { title: 'EPR Consulting', description: 'Strategic guidance to navigate regulations and achieve mandated EPR targets.' },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const viewport = { once: true, amount: 0.25 };

const relatedItems = (p: ServicePageProps) =>
  (p.relatedHrefs || [])
    .map((href) => (RELATED[href] ? { ...RELATED[href], href } : null))
    .filter((r): r is { title: string; description: string; href: string } => Boolean(r));


export default function ServicePage(p: ServicePageProps) {
  const related = relatedItems(p);
  const stats = p.stats ?? [];
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '100px' }}>

      {/* ---------- HERO ---------- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className={`container mx-auto px-6 relative z-10 max-w-6xl ${p.heroImage ? 'grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center' : ''}`}>
          <div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-green-600 font-black tracking-[0.2em] uppercase mb-6"
            style={{ letterSpacing: '0.2em', fontWeight: 900, color: '#16a34a' }}>
            • {p.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-4xl"
            style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>
            {p.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700" style={{ color: '#22c55e' }}>
              {p.accentWord}
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-10"
            style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '2.5rem' }}>
            {p.standfirst}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
            <Link href="/request-quote"
              className="inline-block bg-green-600 text-white font-black text-lg px-10 py-4 rounded-full hover:-translate-y-0.5 transition-transform"
              style={{ backgroundColor: '#16a34a', color: '#fff', fontWeight: 900, padding: '1rem 2.5rem', borderRadius: '9999px', display: 'inline-block' }}>
              {p.ctaLabel}
            </Link>
          </motion.div>
          </div>

          {p.heroImage ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
              className="relative hidden lg:block">
              {p.heroImage.endsWith('.svg') ? (
                <div className="rounded-[3rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 flex items-center justify-center"
                  style={{ borderRadius: '3rem', backgroundColor: '#fff', height: '440px', padding: '3.5rem' }}>
                  <img src={p.heroImage} alt={p.heroImageAlt || p.title} className="max-h-full w-auto" loading="eager" />
                </div>
              ) : (
                <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-300/60 group"
                  style={{ borderRadius: '3rem' }}>
                  <img src={p.heroImage} alt={p.heroImageAlt || p.title} loading="eager"
                    className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              {stats[0] ? (
                <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl px-6 py-4 shadow-xl border border-slate-100"
                  style={{ backgroundColor: '#fff', borderRadius: '1.5rem', padding: '1rem 1.5rem', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15)', border: '1px solid #f1f5f9' }}>
                  <span className="block font-black" style={{ fontSize: '1.75rem', fontWeight: 900, color: '#16a34a', lineHeight: 1.1 }}>{stats[0].value}</span>
                  <span className="text-sm font-bold" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>{stats[0].title}</span>
                </div>
              ) : null}
            </motion.div>
          ) : null}
        </div>
      </section>

      <main className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* ---------- INTRO ---------- */}
          <motion.div variants={rise} initial="hidden" whileInView="show" viewport={viewport}
            className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 mb-20"
            style={{ backgroundColor: '#fff', borderRadius: '3rem', padding: '3rem', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', marginBottom: '5rem' }}>
            {p.introHeading ? (
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8"
                style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>
                {p.introHeading}
              </h2>
            ) : null}
            <div className="space-y-6 max-w-3xl">
              {p.introParagraphs.map((t, i) => (
                <p key={i} className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
                  style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '1.5rem' }}>{t}</p>
              ))}
            </div>
          </motion.div>

          {p.rowImage ? (
            <ThemeCardRow cards={[
              { kind: 'dark', eyebrow: p.eyebrow, title: p.introHeading || p.title, ctaLabel: p.ctaLabel, ctaHref: '/request-quote' },
              { kind: 'image', src: p.rowImage, alt: p.rowImageAlt || '' },
              { kind: 'lime', eyebrow: 'Process', title: p.processHeading || 'Our Process' },
              { kind: 'fill' },
            ]} />
          ) : null}

          {/* ---------- STATS (dark spine) ---------- */}
          {p.stats && p.stats.length ? (
          <motion.div variants={rise} initial="hidden" whileInView="show" viewport={viewport}
            className="bg-slate-900 rounded-[3rem] p-12 md:p-16 mb-32"
            style={{ backgroundColor: '#0f172a', borderRadius: '3rem', padding: '3rem', marginBottom: '8rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem' }}>
              {p.stats.map((s, i) => (
                <motion.div key={s.title} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}>
                  {s.label ? (
                    <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#4ade80', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      {s.label}
                    </p>
                  ) : null}
                  <span className="block font-black text-white"
                    style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '1rem' }}>
                    {s.value}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3"
                    style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p className="text-slate-300 leading-relaxed" style={{ color: '#cbd5e1' }}>{s.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          ) : null}

          {/* ---------- PROCESS ---------- */}
          {p.steps && p.steps.length ? (
          <div className="mb-32">
            <motion.div variants={rise} initial="hidden" whileInView="show" viewport={viewport} className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
                style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
                {p.processHeading}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto"
                style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '48rem', margin: '0 auto' }}>
                {p.processStandfirst}
              </p>
            </motion.div>

            <div className="space-y-6">
              {p.steps.map((s, i) => (
                <motion.div key={s.title} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}
                  className="group bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-10"
                  style={{ backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', border: '1px solid #f1f5f9', marginBottom: '1.5rem', display: 'flex', gap: '2rem' }}>
                  <span className="font-black shrink-0 group-hover:scale-110 transition-transform"
                    style={{ fontSize: '2.75rem', fontWeight: 900, color: '#16a34a', lineHeight: 1, minWidth: '4rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3"
                      style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem' }}>{s.title}</h3>
                    {/* If description is empty the source page has no copy for this step — see page file note. */}
                    {s.description ? (
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                        style={{ fontSize: '1.125rem', color: '#475569' }}>{s.description}</p>
                    ) : null}
                  </div>
                </motion.div>
                ))}
            </div>
          </div>
          ) : null}

          <KeywordTicker dark />

          {/* ---------- BENEFITS ---------- */}
          {p.benefits && p.benefits.length ? (
          <div className="mb-32">
            <motion.h2 variants={rise} initial="hidden" whileInView="show" viewport={viewport}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-12 text-center"
              style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '3rem', textAlign: 'center' }}>
              {p.benefitsHeading}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {p.benefits.map((b, i) => {
                const dark = i % 2 === 0;
                return (
                  <motion.div key={b.title} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}
                    className={`${dark ? 'bg-slate-900' : 'bg-green-600'} text-white rounded-[3rem] p-10 md:p-12 hover:-translate-y-2 transition-transform duration-500`}
                    style={{ backgroundColor: dark ? '#0f172a' : '#16a34a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
                    <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>{b.title}</h3>
                    <p className="text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: dark ? '#cbd5e1' : '#dcfce3' }}>
                      {b.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          ) : null}

          {/* ---------- GALLERY STRIP ---------- */}
          {p.galleryImages && p.galleryImages.length ? (
            <div className="mb-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {p.galleryImages.map((src, i) => (
                  <motion.div key={src + i} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}
                    className="rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/60 group"
                    style={{ borderRadius: '2rem', minHeight: '260px' }}>
                    <img src={src} alt={`${p.title} operations ${i + 1}`} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ height: '280px' }} />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : null}

          {/* ---------- RELATED SERVICES ---------- */}
          {related.length ? (
            <div>
              <motion.h2 variants={rise} initial="hidden" whileInView="show" viewport={viewport}
                className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center"
                style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '3rem', textAlign: 'center' }}>
                Related Services
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {related.map((r, i) => {
                  const dark = i % 2 === 0;
                  return (
                    <motion.div key={r.href} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}
                      className={`${dark ? 'bg-slate-900' : 'bg-green-600'} text-white rounded-[3rem] p-10 flex flex-col hover:-translate-y-2 transition-transform duration-500`}
                      style={{ backgroundColor: dark ? '#0f172a' : '#16a34a', color: '#fff', borderRadius: '3rem', padding: '2.5rem' }}>
                      <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>{r.title}</h3>
                      <p className="text-base leading-relaxed font-medium mb-8" style={{ fontSize: '1rem', color: dark ? '#cbd5e1' : '#dcfce3' }}>
                        {r.description}
                      </p>
                      <Link href={r.href} className="mt-auto inline-flex items-center gap-2 font-black text-white hover:gap-3 transition-all"
                        style={{ fontWeight: 900, color: '#fff', marginTop: 'auto' }}>
                        Explore Service <span aria-hidden="true">→</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : null}

        </div>
      </main>
    </div>
  );
}
