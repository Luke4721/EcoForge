'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* Shared shell for Terms and Privacy. Same tokens as the rest of the site;
   long-form legal text sits in one white statement card for readability. */

export type LegalSection = { heading: string; body?: string; bullets?: string[] };

export type LegalPageProps = {
  title: string;
  dateLabel: string;   // e.g. "Last Updated: May 22, 2026"
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, dateLabel, intro, sections }: LegalPageProps) {
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '100px' }}>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4"
            style={{ fontSize: '3rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-green-600 font-black tracking-[0.1em] uppercase"
            style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em' }}>
            {dateLabel}
          </motion.p>
        </div>
      </section>

      <main className="pb-32 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800"
            style={{ backgroundColor: '#fff', borderRadius: '3rem', padding: '3rem', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', border: '1px solid #f1f5f9' }}>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-12"
              style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '3rem' }}>{intro}</p>

            {sections.map((s, i) => (
              <div key={s.heading} style={{ marginBottom: '2.5rem' }}>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
                  <span style={{ color: '#16a34a', marginRight: '0.6rem' }}>{i + 1}.</span>{s.heading}
                </h2>
                {s.body ? (
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                    style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8 }}>{s.body}</p>
                ) : null}
                {s.bullets ? (
                  <ul className="space-y-3 mt-4" style={{ marginTop: '1rem' }}>
                    {s.bullets.map((b) => (
                      <li key={b} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed flex gap-3"
                        style={{ fontSize: '1.125rem', color: '#475569', display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <span style={{ color: '#16a34a', fontWeight: 900 }}>&bull;</span>
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', marginTop: '1rem' }}>
              <p className="font-bold text-slate-900 dark:text-white mb-3" style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                Eco Forge Solutions (P) Limited
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.9 }}>
                <strong>Address:</strong> 479, Habibpur, Dadri, Gr. Noida, Uttar Pradesh<br />
                <strong>Call:</strong> <a href="tel:+919319253708" style={{ color: '#16a34a' }}>+91 93192 53708</a><br />
                <strong>Email:</strong> <a href="mailto:operation@ecoforge.eco" style={{ color: '#16a34a' }}>operation@ecoforge.eco</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
