import React from 'react';

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '100px' }}>
      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="text-center mb-24" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4" style={{ color: '#16a34a', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>â€¢ Impact Report</p>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-8" style={{ fontSize: '4.5rem', fontWeight: 900, color: '#0f172a', lineHeight: 1, letterSpacing: '-0.025em', marginBottom: '2rem' }}>
              Data-Driven <br/>
              Conservation
            </h1>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 mb-20" style={{ backgroundColor: '#fff', borderRadius: '3rem', padding: '5rem', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', border: '1px solid #f1f5f9', marginBottom: '5rem' }}>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-16 text-center" style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a', marginBottom: '4rem', textAlign: 'center' }}>2026 Recovery Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem' }}>
              
              <div className="flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="relative w-48 h-48 mb-6" style={{ position: 'relative', width: '12rem', height: '12rem', marginBottom: '1.5rem' }}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="8" fill="none"></circle>
                    <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeLinecap="round" strokeDashoffset="25.12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8', marginBottom: '0.5rem' }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                    <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a' }}>90%</span>
                  </div>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Metals Recovered</h4>
              </div>

              <div className="flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="relative w-48 h-48 mb-6" style={{ position: 'relative', width: '12rem', height: '12rem', marginBottom: '1.5rem' }}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="8" fill="none"></circle>
                    <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeLinecap="round" strokeDashoffset="50.24"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8', marginBottom: '0.5rem' }}><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                    <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a' }}>80%</span>
                  </div>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Water Recycled</h4>
              </div>

              <div className="flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="relative w-48 h-48 mb-6" style={{ position: 'relative', width: '12rem', height: '12rem', marginBottom: '1.5rem' }}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="8" fill="none"></circle>
                    <circle cx="50" cy="50" r="40" stroke="#14b8a6" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeLinecap="round" strokeDashoffset="12.56"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8', marginBottom: '0.5rem' }}><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
                    <span style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0f172a' }}>95%</span>
                  </div>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Emissions Cut</h4>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="bg-slate-900 text-white rounded-[3rem] p-12 relative overflow-hidden" style={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '3rem', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]" style={{ position: 'absolute', top: 0, right: 0, width: '16rem', height: '16rem', backgroundColor: 'rgba(34, 197, 94, 0.2)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
              <h3 className="text-6xl font-black mb-4" style={{ fontSize: '3.75rem', fontWeight: 900, marginBottom: '1rem' }}>Zero</h3>
              <p className="text-xl text-slate-300 font-medium" style={{ fontSize: '1.25rem', color: '#cbd5e1', fontWeight: 500 }}>Landfill Policy. We ensure 100% of received materials and retired assets are processed, repurposed, or securely recycled.</p>
            </div>
            <div className="bg-green-600 text-white rounded-[3rem] p-12 relative overflow-hidden" style={{ backgroundColor: '#16a34a', color: '#fff', borderRadius: '3rem', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]" style={{ position: 'absolute', bottom: 0, right: 0, width: '16rem', height: '16rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
              <h3 className="text-6xl font-black mb-4" style={{ fontSize: '3.75rem', fontWeight: 900, marginBottom: '1rem' }}>100%</h3>
              <p className="text-xl text-green-100 font-medium" style={{ fontSize: '1.25rem', color: '#dcfce3', fontWeight: 500 }}>Renewable energy powers our primary sorting facilities in London and Berlin.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

