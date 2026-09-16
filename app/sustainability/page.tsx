import React from 'react';
import KeywordTicker from '@/components/KeywordTicker';
import StackingWasteGraph from '@/components/StackingWasteGraph';

export default function SustainabilityPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '100px' }}>
      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="text-center mb-24 animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', textAlign: 'center', marginBottom: '6rem' }}>
            <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>â€¢ The Sustainability Manifesto</p>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-8" style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '2rem' }}>
              The Green Standard: <br/>
              Directing the Future of Circular Economies
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto" style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto' }}>
              True environmental sustainability cannot coexist with low-grade material downcycling. We are rewriting global reprocessing principles through deep elemental recovery, setting the benchmarks for completely emission-optimized extraction pipelines.
            </p>
          </div>

          <style>{`@keyframes eg-spin-slow { to { transform: rotate(360deg); } } .eg-spin-slow { animation: eg-spin-slow 45s linear infinite; }`}</style>
          <div className="hidden lg:flex justify-center -mt-10 mb-20">
            <div className="relative rounded-[3rem] bg-white border border-slate-100 shadow-xl flex items-center justify-center" style={{ borderRadius: '3rem', backgroundColor: '#fff', width: '420px', height: '360px', padding: '2.5rem' }}>
              <img src="/images/graphic-circular-loop.svg" alt="The Eco Forge circular material loop" className="eg-spin-slow" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>

          {/* ==== CORE STRUCTURAL FRAMEWORKS / THREE PILLARS (restored) ==== */}
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>Our Core Structural Frameworks</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto" style={{ fontSize: '1.125rem', color: '#475569' }}>
                We guide global brands away from fragmented linear models toward resilient circularity by adhering to three uncompromising operational baselines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

              <div className="animate-on-scroll bg-slate-900 text-white rounded-[3rem] p-10 md:p-12" style={{ opacity: 0, transform: 'translateY(30px)', backgroundColor: '#0f172a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
                <p className="text-green-400 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#4ade80', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '1rem' }}>Pillar 01</p>
                <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>Absolute Retention</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#cbd5e1' }}>
                  Instead of downcycling complex polymers and electronic scrap into single-use components, we isolate and capture base chemical chains at their highest value points to enable continuous reuse cycles.
                </p>
              </div>

              <div className="animate-on-scroll bg-green-600 text-white rounded-[3rem] p-10 md:p-12" style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '0.1s', backgroundColor: '#16a34a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
                <p className="text-green-100 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#dcfce3', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '1rem' }}>Pillar 02</p>
                <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>Scope 3 Displacement</h3>
                <p className="text-green-100 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#dcfce3' }}>
                  We treat waste processing as a primary method for reducing mining emissions. By restoring pure circular materials locally, we eliminate the heavy ecological damage of distant open-pit extractions.
                </p>
              </div>

              <div className="animate-on-scroll bg-slate-900 text-white rounded-[3rem] p-10 md:p-12" style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '0.2s', backgroundColor: '#0f172a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
                <p className="text-green-400 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#4ade80', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '1rem' }}>Pillar 03</p>
                <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>Verifiable Auditing</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#cbd5e1' }}>
                  Every weight metric, chemical conversion parameter, and material lifecycle trace is backed by transparent logs, delivering audit-ready structural evidence for national ESG filings.
                </p>
              </div>

            </div>
          </div>

          {/* ==== THE CHEMISTRY OF CONSERVATION (metrics corrected to live-site values) ==== */}
          <div className="animate-on-scroll bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 mb-20" style={{ opacity: 0, transform: 'scale(0.95)', backgroundColor: '#fff', borderRadius: '3rem', padding: '5rem', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', border: '1px solid #f1f5f9', marginBottom: '5rem' }}>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 text-center" style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>The Chemistry of Conservation</h2>
            <div className="max-w-3xl mx-auto text-center mb-16" style={{ maxWidth: '48rem', margin: '0 auto 4rem', textAlign: 'center' }}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4" style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1rem' }}>
                Linear manufacturing processes count on unending resource extraction. At Eco Forge, we approach circularity through precise hydrometallurgical operations that completely avoid the high-emission smelting steps traditional recycling lines use.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#475569' }}>
                Our processing centers operate with complete fluid recycling loops and close-door gas management, ensuring that end-of-life battery cells and complex tech hardware change back into premium manufacturing compounds with near-zero residual runoff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem' }}>

              <div className="flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
                <div className="relative w-48 h-48 mb-6" style={{ position: 'relative', width: '12rem', height: '12rem', marginBottom: '1.5rem' }}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="8" fill="none"></circle>
                    <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeLinecap="round" strokeDashoffset="0"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8', marginBottom: '0.5rem' }}><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                    <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a' }}>100%</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#16a34a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Water Intense</p>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Closed Liquid Hydro-Loops</h4>
                <p style={{ fontSize: '1rem', color: '#475569', textAlign: 'center' }}>Internal fluid neutralization and cleaning circuits prevent hazardous runoff into regional eco-basins.</p>
              </div>

              <div className="flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
                <div className="relative w-48 h-48 mb-6" style={{ position: 'relative', width: '12rem', height: '12rem', marginBottom: '1.5rem' }}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="8" fill="none"></circle>
                    <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeLinecap="round" strokeDashoffset="50.24"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8', marginBottom: '0.5rem' }}><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
                    <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a' }}>80%</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#16a34a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Emissions</p>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Carbon Footprint Reductions</h4>
                <p style={{ fontSize: '1rem', color: '#475569', textAlign: 'center' }}>Chemical element isolation generates far fewer structural gas outputs than primary mining operations.</p>
              </div>

              <div className="flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
                <div className="relative w-48 h-48 mb-6" style={{ position: 'relative', width: '12rem', height: '12rem', marginBottom: '1.5rem' }}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="8" fill="none"></circle>
                    <circle cx="50" cy="50" r="40" stroke="#14b8a6" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeLinecap="round" strokeDashoffset="0"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8', marginBottom: '0.5rem' }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                    <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a' }}>Zero</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#16a34a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Land Hazard</p>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Landfill Redirection Thresholds</h4>
                <p style={{ fontSize: '1rem', color: '#475569', textAlign: 'center' }}>Every piece of complex processing residue is mechanically managed, aiming for zero continuous soil disposal across our footprint.</p>
              </div>

            </div>
          </div>

          {/* ==== KEYWORD TICKER ==== */}
          <KeywordTicker dark />

          {/* ==== ZERO-LANDFILL VISUALISATION (canvas) ==== */}
          <div className="mt-20 md:mt-24 mb-20" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative" style={{ backgroundColor: '#0f172a', borderRadius: '3rem' }}>
              <div className="absolute top-0 left-0 right-0 p-8 md:p-10 z-10">
                <p className="text-green-400 font-black tracking-[0.1em] uppercase mb-2" style={{ color: '#4ade80', fontWeight: 900, letterSpacing: '0.1em' }}>â€¢ Zero Waste to Landfill</p>
                <h2 className="text-3xl font-black text-white" style={{ fontSize: '1.875rem', fontWeight: 900, color: '#fff' }}>Materials Recovered, Never Buried</h2>
              </div>
              <div style={{ height: '400px', overflow: 'hidden' }}>
                <StackingWasteGraph />
              </div>
            </div>
          </div>

          <div className="mt-20" id="faqs">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>The Authority Guide: Circular Inquiries</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto" style={{ fontSize: '1.125rem', color: '#475569' }}>
                Educating the industry and answering complex enterprise questions regarding true sustainability architecture and circular logistics.
              </p>
            </div>

            <div className="space-y-6">

              <div className="animate-on-scroll bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>What is the difference between true circular recovery and standard industrial downcycling?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569' }}>
                  Standard downcycling chops up or melts together mixed materials, which permanently shortens fiber lengths and down-grades polymer structures. This forces materials into low-value secondary products that eventually end up in landfills. True circular recovery uses advanced chemical separation to keep molecules intact, yielding raw chemical crystals and pristine base granules that match virgin materials exactly and can be reused indefinitely.
                </p>
              </div>

              <div className="animate-on-scroll bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>How does Eco Forge calculate and verify Scope 3 carbon displacement for enterprise partners?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569' }}>
                  Our tracking calculations use direct weight comparison modeling. We map the total mass of pure elements and polymers recovered in our facilities against the documented carbon emissions data required to mine and process an identical weight of virgin materials. This difference provides a clear carbon avoidance index, which we convert into certified, audit-ready data tables for your internal corporate ESG reports.
                </p>
              </div>

              <div className="animate-on-scroll bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Why is a hydrometallurgical recycling loop superior to traditional pyrometallurgical thermal smelting?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569' }}>
                  Traditional pyrometallurgical methods rely on fossil-fueled furnaces running over 1200&deg;C to melt down scrap metals. This incinerates high-value adjacent components like plastics and battery active foils, releasing heavy carbon gases into the atmosphere. Our closed-loop hydrometallurgical process uses eco-friendly water-chemical solutions to isolate individual element lines at low temperatures, preserving adjacent materials while running on an 80% lower energy threshold.
                </p>
              </div>

              <div className="animate-on-scroll bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', border: '1px solid #f1f5f9' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>How do our processing methods support enterprise alignment with evolving national EPR regulations?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569' }}>
                  Extended Producer Responsibility rules are moving past simple collection quotas toward strict material tracking standards. Eco Forge provides fully traceable mass-balance validation, proving exactly how much material is recovered from your returned products. This gives our enterprise partners clean data streams that fully satisfy central regulatory checks and eliminate statutory compliance risks.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

