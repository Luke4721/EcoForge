import React from 'react';

export default function RequestQuotePage() {
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <main className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-5xl mx-auto overflow-hidden relative border border-gray-100 dark:border-slate-800 animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <div className="px-8 py-12 sm:px-16 sm:py-16">
            <div className="mb-14 text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2 uppercase" style={{ color: '#16a34a' }}>Get Quote</h1>
              <p className="text-gray-500 dark:text-slate-500 font-medium mb-4">What services are you looking for?</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm font-semibold text-green-700 dark:text-green-400">
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Response within 24 hours</span>
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Pan-India reverse logistics</span>
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>100% Data Security Guaranteed</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
                {[
                  { name: 'Battery', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg> },
                  { name: 'Plastic', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg> },
                  { name: 'Paper', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> },
                  { name: 'Metals', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg> },
                  { name: 'EPR', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg> }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center cursor-pointer group">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-50 dark:bg-slate-900 text-orange-400 group-hover:bg-green-50 group-hover:scale-105 border border-gray-100 dark:border-slate-800" style={{ color: '#f97316', backgroundColor: '#f8fafc' }}>
                      {item.icon}
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-slate-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-px bg-gray-100 dark:bg-slate-800 w-full mb-12"></div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Your Information</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 text-gray-800" placeholder="Full name"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 text-gray-800" placeholder="Phone number"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 text-gray-800" placeholder="Email address"/>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 text-gray-800" placeholder="Company name"/>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Estimated Volume (Monthly)</label>
                    <div className="flex gap-2">
                      <input type="text" className="w-1/3 px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 text-gray-800 text-center" placeholder="Qty"/>
                      <select className="w-2/3 px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 text-gray-800">
                        <option value="kg">Kilograms (KG)</option>
                        <option value="mt">Metric Tons (MT)</option>
                        <option value="units">Individual Units</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* ==== RESTORED FROM LIVE SITE: Solutions Looking For + Query ==== */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Solutions Looking For *</label>
                    <select name="solution" required defaultValue="battery" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 dark:text-white">
                      <option value="battery">Lithium Battery Solutions</option>
                      <option value="paper">Paper Solution</option>
                      <option value="green-metal">Green Metal &amp; Metal Recovery Solutions</option>
                      <option value="epr">EPR Consulting</option>
                      <option value="plastic">Plastic Waste Solutions</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Query *</label>
                    <textarea name="query" required rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 dark:text-white" placeholder="Tell us about your requirement"></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100 dark:border-slate-800">
                  <div className="col-span-2 flex flex-wrap gap-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-4">Pickup Frequency</label>
                      <div className="flex items-center gap-6">
                        <label className="flex flex-col items-center cursor-pointer group">
                          <input type="radio" className="peer sr-only" name="frequency" defaultChecked />
                          <div className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-slate-800 peer-checked:border-orange-500 peer-checked:bg-green-50 flex items-center justify-center text-gray-400 peer-checked:text-orange-500 transition-all">
                            <span className="w-6 h-6 rounded-full peer-checked:bg-green-500" style={{ backgroundColor: '#16a34a' }}></span>
                          </div>
                          <span className="mt-2 text-sm font-bold text-gray-700 dark:text-slate-300">One-time</span>
                        </label>
                        <label className="flex flex-col items-center cursor-pointer group">
                          <input type="radio" className="peer sr-only" name="frequency" />
                          <div className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-slate-800 peer-checked:border-orange-500 peer-checked:bg-green-50 flex items-center justify-center text-gray-400 peer-checked:text-orange-500 transition-all">
                            <span className="w-6 h-6 rounded-full peer-checked:bg-green-500"></span>
                          </div>
                          <span className="mt-2 text-sm font-bold text-gray-400">Regular</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-4">Location</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all bg-gray-50 dark:bg-slate-900 text-gray-800">
                        <option>Select Region...</option>
                        <option>Delhi NCR</option>
                        <option>Uttar Pradesh</option>
                        <option>Haryana</option>
                        <option>Other (Pan India)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end h-full">
                    <button type="button" className="w-full hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5" style={{ backgroundColor: '#16a34a' }}>
                      Display Quotes
                    </button>
                    <p className="text-xs text-gray-400 font-medium mt-3 w-full text-center">100% Privacy Guaranteed</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ==== WHAT HAPPENS NEXT (reuses the promises listed above the form) ==== */}
        <div className="w-full max-w-5xl mx-auto mt-16 relative z-10 animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Response within 24 hours', body: 'Our enterprise team reviews your requirement and reverts within one business day.' },
              { step: '02', title: 'Pan-India reverse logistics', body: 'We schedule secure pickup of your assets through our chain-of-custody transport network.' },
              { step: '03', title: '100% Data Security Guaranteed', body: 'Certified data destruction with serialized certificates issued for every batch.' },
            ].map((c) => (
              <div key={c.step} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:-translate-y-1 transition-transform" style={{ borderRadius: '1rem' }}>
                <span className="block font-black text-3xl mb-3" style={{ color: '#16a34a', fontWeight: 900 }}>{c.step}</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto mt-16 pt-12 border-t border-gray-200 dark:border-slate-800/60 relative z-10 animate-on-scroll" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-4" style={{ color: '#166534' }}>Our Strategic Location</h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
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
                <iframe src="https://maps.google.com/maps?q=Plot%20479%20Habibpur%20Main%20Dadri%20Road%20Greater%20Noida&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity"></iframe>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
