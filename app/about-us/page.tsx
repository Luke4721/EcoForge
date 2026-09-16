import React from 'react';
import KeywordTicker from '@/components/KeywordTicker';
import ImpactCounters from '@/components/ImpactCounters';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '100px' }}>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-4xl animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-6" style={{ letterSpacing: '0.2em', fontWeight: 900, color: '#16a34a' }}>â€¢ The Eco Forge Story</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>
              Engineering a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700" style={{ color: '#22c55e' }}>Zero Waste</span> Future.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl" style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '4rem' }}>
              Eco Forge is an industrial-scale materials recovery pioneer. We transform corporate liability into high-value environmental assets.
            </p>
          </div>
          <div className="relative hidden lg:block animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-300/60 group" style={{ borderRadius: '3rem' }}>
              <img src="/images/hero-info-image-1.jpg" alt="Materials recovery operations at Eco Forge" loading="eager"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl px-6 py-4 shadow-xl border border-slate-100"
              style={{ backgroundColor: '#fff', borderRadius: '1.5rem', padding: '1rem 1.5rem', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15)', border: '1px solid #f1f5f9' }}>
              <span className="block font-black" style={{ fontSize: '1.75rem', fontWeight: 900, color: '#16a34a', lineHeight: 1.1 }}>10</span>
              <span className="text-sm font-bold" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ImpactCounters />
      </section>

      <main className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="animate-on-scroll bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 mb-24 relative overflow-hidden" style={{ opacity: 0, transform: 'translateY(40px)', backgroundColor: '#fff', borderRadius: '3rem', padding: '3rem', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', marginBottom: '6rem' }}>
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-slate-900 dark:text-white" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>Company Overview &amp; Vision</h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium" style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '1.5rem' }}>
                  We are more than a recycling facility. We are your strategic partner in sustainability. We engineer closed-loop recovery systems tailored for modern enterprises, ensuring that your end-of-life assets are processed with military-grade security, unmatched material recovery rates, and complete EPR compliance.
                </p>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium" style={{ fontSize: '1.25rem', color: '#475569' }}>
                  By deploying advanced sorting infrastructure and precision recovery technologies, we future-proof enterprise supply chains, ensure absolute regulatory compliance, and lead the transition to a global circular economy.
                </p>
              </div>

              {/* ==== ORIGIN / MISSION / VISION (restored from live site) ==== */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                <div>
                  <p className="text-green-600 font-black tracking-[0.1em] uppercase mb-3" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Our Origin</p>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#475569' }}>
                    Founded on the conviction that urban mining is the future of raw materials, we built a highly scalable, tech-enabled infrastructure to permanently solve the escalating enterprise waste crisis.
                  </p>
                </div>
                <div>
                  <p className="text-green-600 font-black tracking-[0.1em] uppercase mb-3" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Our Mission</p>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#475569' }}>
                    To engineer advanced closed-loop recovery systems that extract 100% of high-purity value from complex waste streams, protecting our clients&rsquo; data and the planet simultaneously.
                  </p>
                </div>
                <div>
                  <p className="text-green-600 font-black tracking-[0.1em] uppercase mb-3" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Our Vision</p>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#475569' }}>
                    A completely circular global economy where the concept of &ldquo;waste&rdquo; is obsolete&mdash;replaced entirely by intelligent resource loops that transform discarded materials into critical assets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '8rem' }}>

            <div className="animate-on-scroll bg-slate-900 text-white rounded-[3rem] p-12 md:p-16 hover:-translate-y-2 transition-transform duration-500" style={{ opacity: 0, transform: 'translateX(-40px)', backgroundColor: '#0f172a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth text-green-500 mb-8" aria-hidden="true" style={{ color: '#22c55e', marginBottom: '2rem' }}><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
              <h3 className="text-3xl font-black mb-6" style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem' }}>Global Compliance</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#cbd5e1' }}>
                We strictly adhere to international environmental laws, ISO standards, and data security mandates to ensure that your discarded assets are processed with 100% legal compliance and absolute transparency.
              </p>
            </div>

            <div className="animate-on-scroll bg-green-600 text-white rounded-[3rem] p-12 md:p-16 hover:-translate-y-2 transition-transform duration-500" style={{ opacity: 0, transform: 'translateX(40px)', backgroundColor: '#16a34a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu text-green-200 mb-8" aria-hidden="true" style={{ color: '#bbf7d0', marginBottom: '2rem' }}><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>
              <h3 className="text-3xl font-black mb-6" style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem' }}>Advanced Tech</h3>
              <p className="text-green-100 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#dcfce3' }}>
                Our state-of-the-art facilities utilize proprietary hydrometallurgical processes and precision machinery to extract maximum value from retired technology and metals, preventing toxic runoff and atmospheric emissions.
              </p>
            </div>

          </div>

          {/* ==== THE JOURNEY TO ZERO WASTE (corrected to live-site milestones) ==== */}
          <div className="mb-10">
            <p className="text-green-600 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em' }}>â€¢ Our Evolution</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>The Journey to Zero Waste</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="border-l-4 border-slate-200 dark:border-slate-800 ml-6 md:ml-12 space-y-16 py-10 relative" style={{ borderLeft: '4px solid #e2e8f0', paddingLeft: '2.5rem' }}>

                <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', position: 'relative', marginBottom: '3rem' }}>
                  <div style={{ position: 'absolute', top: '10px', left: '-50px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                  <span style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>2014&ndash;2016</span>
                  <h4 style={{ fontSize: '1.875rem', fontWeight: 900, marginBottom: '1rem', color: '#0f172a' }}>The Foundation in Paper Waste</h4>
                  <p style={{ fontSize: '1.125rem', color: '#475569' }}>Focused on paper recycling, establishing our initial scale and commitment to sustainable resource recovery.</p>
                  <p style={{ fontSize: '0.95rem', color: '#16a34a', fontWeight: 700, marginTop: '0.5rem' }}>Initial Capacity: 20,000 MT/year</p>
                </div>

                <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', position: 'relative', marginBottom: '3rem' }}>
                  <div style={{ position: 'absolute', top: '10px', left: '-50px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                  <span style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>2016&ndash;2020</span>
                  <h4 style={{ fontSize: '1.875rem', fontWeight: 900, marginBottom: '1rem', color: '#0f172a' }}>Plastic &amp; General Waste Diversification</h4>
                  <p style={{ fontSize: '1.125rem', color: '#475569' }}>Diversifying into diverse plastic types and comprehensive general waste streams, scaling impact and service range.</p>
                  <p style={{ fontSize: '0.95rem', color: '#16a34a', fontWeight: 700, marginTop: '0.5rem' }}>Scale: 15,000 MT/year</p>
                </div>

                <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', position: 'relative', marginBottom: '3rem' }}>
                  <div style={{ position: 'absolute', top: '10px', left: '-50px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                  <span style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>2020&ndash;2025</span>
                  <h4 style={{ fontSize: '1.875rem', fontWeight: 900, marginBottom: '1rem', color: '#0f172a' }}>Waste-to-Energy &amp; High-Tech Recovery Solutions</h4>
                  <p style={{ fontSize: '1.125rem', color: '#475569' }}>Implementing complex recycling streams including retired tech assets and implementing waste-to-energy solutions, achieving wider circular integration.</p>
                  <p style={{ fontSize: '0.95rem', color: '#16a34a', fontWeight: 700, marginTop: '0.5rem' }}>Output: 2,000 MT/year</p>
                </div>

                <div className="animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '10px', left: '-50px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#16a34a' }}></div>
                  <span style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>2026&ndash;2028</span>
                  <h4 style={{ fontSize: '1.875rem', fontWeight: 900, marginBottom: '1rem', color: '#0f172a' }}>Upcoming Mega Plant in Andhra Pradesh</h4>
                  <p style={{ fontSize: '1.125rem', color: '#475569' }}>Projected massive facility expansion to set new benchmarks in regional recycling capacity and sustainability for unparalleled scale.</p>
                  <p style={{ fontSize: '0.95rem', color: '#16a34a', fontWeight: 700, marginTop: '0.5rem' }}>Projected Next Phase</p>
                </div>

              </div>
            </div>

            {/* ==== LEADERSHIP (single portrait, as on the original build) ==== */}
            <div className="animate-on-scroll flex flex-col items-center justify-center relative" style={{ opacity: 0, transform: 'scale(0.9)', textAlign: 'center' }}>
              <img src="/images/founder.png" alt="Founder & CEO" style={{ width: '20rem', height: '20rem', objectFit: 'cover', borderRadius: '50%', border: '8px solid white', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', marginBottom: '2rem', display: 'inline-block' }}/>
              <div>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>Founder &amp; CEO</h3>
                <p style={{ color: '#16a34a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Eco Forge Leadership</p>
                <div style={{ fontStyle: 'italic', color: '#475569', fontSize: '1.125rem', maxWidth: '300px', margin: '0 auto', lineHeight: 1.6 }}>
                  &ldquo;Our vision is a zero-waste future driven by continuous innovation, where end-of-life technology fuels the next generation of manufacturing.&rdquo;
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Key Management & R&D Extracted from Legacy Site */}
        <KeywordTicker />

        <div className="container mx-auto px-6 relative z-10 max-w-6xl mt-32 mb-16" id="key-management">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div className="animate-on-scroll bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-xl border border-slate-100 dark:border-slate-800" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <p className="text-green-600 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#16a34a' }}>â€¢ Leadership</p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Key Management</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Our executive team combines decades of specialized experience in industrial logistics, environmental compliance, and advanced material sciences. This seasoned leadership drives Eco Forge&rsquo;s vision, ensuring every enterprise partnership is executed with operational excellence and strict adherence to global sustainability standards.
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300 font-medium">
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Proven Industry Expertise</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Uncompromising Integrity</li>
              </ul>
            </div>

            <div className="animate-on-scroll bg-slate-900 dark:bg-slate-950 rounded-[2rem] p-10 shadow-xl border border-slate-800" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <p className="text-green-400 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#4ade80' }}>â€¢ Innovation</p>
              <h3 className="text-3xl font-black text-white mb-6">Technology And R&amp;D</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Innovation is the backbone of modern material recovery. Our dedicated R&amp;D division continuously pioneers proprietary extraction methods for Complex Electronics, Lithium Batteries, and Green Metals, maximizing recovery yields while minimizing the carbon footprint of our processing facilities.
              </p>
              <ul className="space-y-3 text-slate-300 font-medium">
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Next-Gen Separation Tech</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Data-Driven Process Optimization</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ==== OUR PRESENCE (restored from live site; reuses the facility-card style from Request Quote) ==== */}
        <div className="container mx-auto px-6 relative z-10 max-w-6xl mt-32 mb-16" id="our-presence">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>Our Presence</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
              Strategically positioned to manage high-volume enterprise logistics. Our Greater Noida facility combines large-scale processing capacity with operational efficiency, ensuring rapid, secure, and fully compliant material recovery for our partners across the region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border-b-4 border-green-500 flex flex-col h-full md:col-span-2" style={{ backgroundColor: '#1e293b', borderBottom: '4px solid #22c55e' }}>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">Greater Noida Facility</h3>
                <p className="text-green-400 font-bold text-sm tracking-wider uppercase mb-4" style={{ color: '#4ade80' }}>PLANT &amp; REGISTERED OFFICE</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Plot No. 479, Habibpur, Main Dadri Road,<br/>
                  Greater Noida, Uttar Pradesh, 201306
                </p>
              </div>
              <div className="h-48 w-full bg-gray-200 dark:bg-slate-800 relative">
                <iframe src="https://maps.google.com/maps?q=Plot%20479%20Habibpur%20Main%20Dadri%20Road%20Greater%20Noida&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Greater Noida Facility Map"></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* ==== VERIFIED COMPLIANCE (copy from homepage certifications band) ==== */}
        <div className="container mx-auto px-6 relative z-10 max-w-6xl mt-32 mb-16">
          <div className="text-center mb-10 animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <p className="text-green-600 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em' }}>â€¢ Verified Compliance</p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>Certifications &amp; Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'ISO Certification', body: 'Ensuring operational excellence, rigorous quality management, and strict environmental compliance across all asset disposition facilities.' },
              { title: 'Global Recycled Standard', body: 'Verifying safe, equitable, and transparent supply chains from end-of-life processing all the way to secondary raw material production.' },
              { title: 'Green Air Standard', body: 'Maintaining industry-leading emission controls and zero-harm atmospheric processing during complex metal extraction and dismantling.' },
            ].map((c, i) => (
              <div key={c.title} className={`animate-on-scroll ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-green-600'} rounded-[2rem] p-10 shadow-lg border ${i % 2 === 0 ? 'border-slate-100 dark:border-slate-800' : 'border-green-500'} hover:-translate-y-2 transition-transform duration-500`}
                style={{ opacity: 0, transform: 'translateY(20px)', borderRadius: '2rem', padding: '2.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i % 2 === 0 ? 'text-green-600 mb-6' : 'text-white mb-6'} style={{ color: i % 2 === 0 ? '#16a34a' : '#fff', marginBottom: '1.5rem' }} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                <h3 className={`text-2xl font-black mb-4 ${i % 2 === 0 ? 'text-slate-900 dark:text-white' : 'text-white'}`} style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: i % 2 === 0 ? '#0f172a' : '#fff' }}>{c.title}</h3>
                <p className="text-base leading-relaxed font-medium" style={{ color: i % 2 === 0 ? '#475569' : '#dcfce3' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

