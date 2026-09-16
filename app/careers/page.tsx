import React from 'react';
import KeywordTicker from '@/components/KeywordTicker';

export default function CareersPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '100px' }}>
      {/* HERO â€” same shell as About: blur orbs, eyebrow, oversized black headline */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-4xl animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-6" style={{ letterSpacing: '0.2em', fontWeight: 900, color: '#16a34a' }}>â€¢ Join The Circular Revolution</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>
              Build a Career with Purpose. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700" style={{ color: '#22c55e' }}>Engineer</span> the Future.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl" style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '2rem' }}>
              We are a team of environmental scientists, engineers, and logistical experts working to eliminate industrial waste. Join us in transforming global liabilities into sustainable resources.
            </p>
            <a href="#apply-now" className="inline-block bg-green-600 text-white font-black text-lg px-10 py-4 rounded-full hover:-translate-y-0.5 transition-transform" style={{ backgroundColor: '#16a34a', color: '#fff', fontWeight: 900, padding: '1rem 2.5rem', borderRadius: '9999px', display: 'inline-block' }}>
              Pitch Your Profile
            </a>
          </div>
          <div className="relative hidden lg:block animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-300/60 group" style={{ borderRadius: '3rem' }}>
              <img src="/images/testimonials-image.jpg" alt="The Eco Forge team on site" loading="eager"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl px-6 py-4 shadow-xl border border-slate-100"
              style={{ backgroundColor: '#fff', borderRadius: '1.5rem', padding: '1rem 1.5rem', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15)', border: '1px solid #f1f5f9' }}>
              <span className="block font-black" style={{ fontSize: '1.75rem', fontWeight: 900, color: '#16a34a', lineHeight: 1.1 }}>84</span>
              <span className="text-sm font-bold" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>Partners</span>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* INTRO CARD â€” same big white card used for "Company Overview & Vision" */}
          <div className="animate-on-scroll bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 mb-24 relative overflow-hidden" style={{ opacity: 0, transform: 'translateY(40px)', backgroundColor: '#fff', borderRadius: '3rem', padding: '3rem', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', marginBottom: '6rem' }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>Work at the Forefront of Sustainability.</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-3xl" style={{ fontSize: '1.25rem', color: '#475569' }}>
                At Eco Forge, you aren&rsquo;t just taking a job&mdash;you are joining a mission to solve one of the planet&rsquo;s most critical industrial challenges. We operate at the intersection of advanced technology, supply chain logistics, and environmental science.
              </p>
            </div>
          </div>

          {/* THREE VALUE CARDS â€” dark / green / dark rhythm, same as the Sustainability pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '8rem' }}>

            <div className="animate-on-scroll bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 hover:-translate-y-2 transition-transform duration-500" style={{ opacity: 0, transform: 'translateY(30px)', backgroundColor: '#0f172a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mb-8" aria-hidden="true" style={{ color: '#22c55e', marginBottom: '2rem' }}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>Impact-Driven Work</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#cbd5e1' }}>
                Every role here has a measurable, immediate impact. Whether you are in operations, engineering, or corporate advisory, your daily work directly reduces carbon footprints and landfill dependencies.
              </p>
            </div>

            <div className="animate-on-scroll bg-green-600 text-white rounded-[3rem] p-10 md:p-12 hover:-translate-y-2 transition-transform duration-500" style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '0.1s', backgroundColor: '#16a34a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-200 mb-8" aria-hidden="true" style={{ color: '#bbf7d0', marginBottom: '2rem' }}><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>
              <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>Cutting-Edge Facilities</h3>
              <p className="text-green-100 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#dcfce3' }}>
                Leave legacy systems behind. Work hands-on with state-of-the-art hydrometallurgical recycling technology, AI-driven optical sorters, and advanced chemical processing infrastructure.
              </p>
            </div>

            <div className="animate-on-scroll bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 hover:-translate-y-2 transition-transform duration-500" style={{ opacity: 0, transform: 'translateY(30px)', transitionDelay: '0.2s', backgroundColor: '#0f172a', color: '#fff', borderRadius: '3rem', padding: '3rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mb-8" aria-hidden="true" style={{ color: '#22c55e', marginBottom: '2rem' }}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <h3 className="text-2xl font-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>Collaborative Growth</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium" style={{ fontSize: '1.125rem', color: '#cbd5e1' }}>
                We invest heavily in our team. Expect continuous training, industry certifications, and cross-departmental mobility designed to accelerate your career in the green tech sector.
              </p>
            </div>

          </div>

          {/* OPEN APPLICATION CTA â€” same green CTA block as Business Solutions */}
          {/* ==== LIFE AT ECOFORGE (photo strip) ==== */}
          <div className="mb-32">
            <div className="text-center mb-10 animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <p className="text-green-600 font-black tracking-[0.1em] uppercase mb-4" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.1em' }}>â€¢ Life at Eco Forge</p>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a' }}>On the Ground, In the Loop</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                '/images/hero-info-image-1.jpg',
                '/images/hero-info-image-2.jpg',
                '/images/about-us-image.jpg',
              ].map((src, i) => (
                <div key={src} className="animate-on-scroll rounded-[2rem] overflow-hidden shadow-lg group" style={{ opacity: 0, transform: 'translateY(20px)', borderRadius: '2rem' }}>
                  <img src={src} alt={`Life at Eco Forge ${i + 1}`} loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ height: '280px' }}/>
                </div>
              ))}
            </div>
          </div>

          <div id="apply-now" className="animate-on-scroll bg-green-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mb-32" style={{ opacity: 0, transform: 'translateY(30px)', backgroundColor: '#16a34a', borderRadius: '3rem', padding: '4rem', textAlign: 'center', marginBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]" style={{ position: 'absolute', bottom: 0, right: 0, width: '16rem', height: '16rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem' }}>We Are Always Looking for Talent.</h2>
              <p className="text-xl text-green-50 font-medium mb-10 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', color: '#dcfce3', maxWidth: '42rem', margin: '0 auto 2.5rem' }}>
                Don&rsquo;t see a specific role listed? We are continuously expanding our operations, engineering, and corporate teams. Send us an open application outlining how your skills can help drive our mission forward.
              </p>
              <a href="mailto:operation@ecoforge.eco?subject=Eco%20Forge%20Careers%20-%20Open%20Application%20Submission" className="inline-block bg-white text-green-700 font-black text-lg px-10 py-4 rounded-full hover:-translate-y-0.5 transition-transform" style={{ backgroundColor: '#fff', color: '#15803d', fontWeight: 900, padding: '1rem 2.5rem', borderRadius: '9999px', display: 'inline-block' }}>
                Email Your Resume to HR
              </a>
            </div>
          </div>

          {/* FAQ â€” identical card treatment to the Sustainability FAQ block */}
          <KeywordTicker />

          <div id="faqs">
            <div className="text-center mb-12">
              <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.2em' }}>â€¢ Hiring</p>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>Application &amp; Hiring FAQ</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium" style={{ fontSize: '1.125rem', color: '#475569' }}>Everything you need to know about joining the Eco Forge team.</p>
            </div>

            <div className="space-y-6">

              <div className="animate-on-scroll bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>What happens after I send my resume?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569' }}>
                  Once you submit your application to our HR inbox, our recruitment team will review your credentials against our current and upcoming departmental needs. If your profile aligns with an open or pending position, we will contact you within 7 to 10 business days to schedule an initial screening call.
                </p>
              </div>

              <div className="animate-on-scroll bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>What is the standard interview process?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569' }}>
                  The process typically involves a brief HR screening call, followed by a technical or domain-specific interview with the relevant department lead. For senior or specialized engineering roles, there may be a final culture-fit round with executive management. We strive to make the process transparent and efficient.
                </p>
              </div>

              <div className="animate-on-scroll bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm" style={{ opacity: 0, transform: 'translateY(20px)', backgroundColor: '#fff', borderRadius: '2rem', padding: '2.5rem', border: '1px solid #f1f5f9' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Do you support remote work or hybrid schedules?</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" style={{ fontSize: '1.125rem', color: '#475569' }}>
                  It depends entirely on the division. Roles based in Plant Operations, Heavy Engineering, and R&amp;D require an on-site presence at our processing facilities to ensure safety and operational control. However, roles within EPR Consulting, Software Logistics, B2B Sales, and Corporate Advisory often support hybrid or fully remote frameworks.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}


