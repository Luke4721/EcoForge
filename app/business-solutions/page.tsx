'use client';
import React from 'react';
import KeywordTicker from '@/components/KeywordTicker';
import PartnerMarquee from '@/components/PartnerMarquee';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MonitorPlay, Zap, Droplets, Factory, ShieldCheck, Recycle } from 'lucide-react';

export default function BusinessSolutions() {
  return (
    <div className="bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white" style={{ paddingTop: '100px' }}>
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4" style={{ color: '#16a34a' }}>â€¢ Enterprise Services</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-8">
              SECURE. CERTIFIED. <br/>ENGINEERED for Circular Economy
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6">
              Why Enterprises trust ECO FORGE
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-12">
              We empower global brands to achieve zero-waste goals through state-of-the-art recycling technology and uncompromising data security. By integrating circular economy principles with pan-India logistics, we ensure your retired assets are managed with absolute transparency and 100% regulatory compliance.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="text-3xl font-black text-green-600 mb-2">84</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Partners</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-2">Trusted Network Across Industries</p>
               </div>
               <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="text-3xl font-black text-green-600 mb-2">10</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Years Experience</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-2">Pioneers in Urban Mining &amp; R&amp;D</p>
               </div>
               <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="text-3xl font-black text-green-600 mb-2">8</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Awards Won</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-2">Recognized for Excellence in Recycling</p>
               </div>
               <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="text-3xl font-black text-green-600 mb-2">342</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Happy Clients</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-2">Serving Commercial &amp; Industrial Needs</p>
               </div>
            </motion.div>
          </div>

          {/* ==== RESOURCE RECOVERY SERVICES ==== */}
          
          <div className="mb-20 mt-32 max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center text-slate-900 dark:text-white mb-4">Enterprise Resource Recovery Portfolio</h2>
            <p className="text-center text-slate-500 font-medium mb-12 max-w-3xl mx-auto">We provide end-to-end, compliance-driven recycling solutions that transform corporate liabilities into sustainable assets for the global circular economy.</p>

            

            {/* ==== SUPPORTING SERVICES ==== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Link href="/lithium-battery-recycling" className="bg-green-600 rounded-[2rem] p-10 md:p-14 relative overflow-hidden group block" style={{ backgroundColor: '#16a34a' }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 transform group-hover:rotate-12 transition-transform duration-700">
                  <Zap size={200} className="text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                    <Zap size={32} className="text-white" />
                  </div>
                  <p className="text-green-100 font-bold tracking-wider mb-2 text-sm uppercase">98% Extraction Efficiency Rate</p>
                  <h3 className="text-3xl font-black text-white mb-4">Lithium-Ion Battery Recycling</h3>
                  <p className="text-green-50 text-lg font-medium mb-6">Specialized closed-loop recovery for EV, telecom, and consumer electronics batteries. We utilize advanced hydrometallurgical processes to safely recover critical active materials.</p>
                  <ul className="space-y-3 text-green-50 font-medium">
                    <li><span className="text-white font-bold">Thermal Management:</span> Safe discharging and neutralization to eliminate thermal runaway risks.</li>
                    <li><span className="text-white font-bold">Mechanical Shredding:</span> Submerged shredding protocols to safely break down complex battery architectures.</li>
                    <li><span className="text-white font-bold">Black Mass Refining:</span> Isolation of the highly valuable black mass containing critical cathode materials.</li>
                    <li><span className="text-white font-bold">Chemical Precipitation:</span> Extraction of battery-grade Lithium, Cobalt, and Nickel ready for new cell manufacturing.</li>
                  </ul>
                </div>
              </Link>

              <Link href="/plastic-waste-recycling" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-10 md:p-14 relative overflow-hidden group hover:border-green-500 transition-colors block">
                <Recycle size={48} className="text-slate-900 dark:text-white mb-6 transform group-hover:scale-110 transition-transform" />
                <p className="text-green-600 dark:text-green-400 font-bold tracking-wider mb-2 text-sm uppercase">PCR+ High-Grade Post-Consumer Resin</p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Plastic Waste Recycling</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">Transforming industrial and commercial plastic waste into high-quality, reusable polymers, drastically reducing corporate carbon footprints and virgin plastic dependency.</p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                  <li><span className="text-slate-900 dark:text-white font-bold">Polymer Identification:</span> Infrared sorting technology to separate ABS, Polycarbonate, and standard thermoplastics.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Granulation &amp; Washing:</span> High-friction washing lines remove contaminants, labels, and residual adhesives.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Precision Pelletizing:</span> Extruding clean flakes into uniform, industry-standard Post-Consumer Resin (PCR) pellets.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Circular Integration:</span> Supplying manufacturers with sustainable raw materials for new product casings and packaging.</li>
                </ul>
              </Link>

              <Link href="/paper-recycling" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-10 md:p-14 relative overflow-hidden group hover:border-green-500 transition-colors block">
                <Factory size={48} className="text-slate-900 dark:text-white mb-6 transform group-hover:scale-110 transition-transform" />
                <p className="text-green-600 dark:text-green-400 font-bold tracking-wider mb-2 text-sm uppercase">Zero Waste to Landfill Impact</p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Corporate Paper Recycling</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">Secure document destruction and high-volume paper recycling solutions designed to help enterprises conserve water, save timber, and achieve Zero-Waste-to-Landfill certifications.</p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                  <li><span className="text-slate-900 dark:text-white font-bold">Confidential Shredding:</span> On-site or off-site cross-cut shredding for sensitive financial and legal documents.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Pulping &amp; De-inking:</span> Advanced chemical-free flotation processes to remove inks and adhesives from paper fibers.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Fiber Recovery:</span> Screening and cleaning pulp to prepare it for manufacturing new tissue, cardboard, and printing paper.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Sustainability Metrics:</span> Providing exact data on trees saved and water conserved for your annual ESG reports.</li>
                </ul>
              </Link>

              <Link href="/green-metal-recovery" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-10 md:p-14 relative overflow-hidden group hover:border-green-500 transition-colors block">
                <Droplets size={48} className="text-slate-900 dark:text-white mb-6 transform group-hover:scale-110 transition-transform" />
                <p className="text-green-600 dark:text-green-400 font-bold tracking-wider mb-2 text-sm uppercase">99.9% Precious Metal Purity Yield</p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Green Metal Extraction</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">We mine the urban landscape. Our clean technologies extract highly valuable precious and base metals from complex industrial waste streams, eliminating the massive carbon footprint of virgin mining.</p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                  <li><span className="text-slate-900 dark:text-white font-bold">Hydrometallurgical Processing:</span> Proprietary, emission-free chemical processes that outperform traditional polluting smelters.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Precious Metal Yields:</span> High-efficiency recovery of Gold, Silver, and Palladium from Printed Circuit Boards (PCBs).</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Base Metal Refining:</span> Extracting industrial-grade Copper, Iron, and Aluminum ready for commodity markets.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Closed-Loop Supply:</span> Reintegrating recovered metals directly back into global manufacturing supply chains.</li>
                </ul>
              </Link>

              <Link href="/epr-consulting" className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-10 md:p-14 relative overflow-hidden group hover:border-green-500 transition-colors block">
                <ShieldCheck size={48} className="text-slate-900 dark:text-white mb-6 transform group-hover:scale-110 transition-transform" />
                <p className="text-green-600 dark:text-green-400 font-bold tracking-wider mb-2 text-sm uppercase">100% Regulatory Target Fulfillment</p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">EPR Compliance Consulting</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">Strategic guidance to seamlessly navigate CPCB regulations and government mandates. We act as an extension of your compliance team to fulfill your Extended Producer Responsibility targets.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 dark:text-slate-400 font-medium">
                  <li><span className="text-slate-900 dark:text-white font-bold">Target Management:</span> Calculating and executing your mandated sustainable resource and plastic waste collection targets.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Documentation &amp; Filing:</span> Managing all quarterly and annual returns required by central pollution control boards.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Action Plan Strategy:</span> Developing robust, long-term EPR frameworks that align with your corporate sustainability goals.</li>
                  <li><span className="text-slate-900 dark:text-white font-bold">Audit Representation:</span> Providing transparent, verifiable data trails to ensure smooth government audits.</li>
                </ul>
              </Link>
            </div>
          </div>

          <div className="mt-32 max-w-5xl mx-auto">
            <KeywordTicker dark />

            <h2 className="text-4xl font-black text-center text-slate-900 dark:text-white mb-4">Closed-Loop Ecosystem</h2>
            <p className="text-center text-slate-500 font-medium mb-16 max-w-2xl mx-auto">From secure ingestion to high-purity extraction, our proprietary processes ensure maximum material recovery with zero environmental harm.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3"><span className="text-green-600 mr-2">01</span> Secure Ingestion</h4>
                 <p className="text-slate-600 dark:text-slate-400">End-of-life assets are collected through our pan-India reverse logistics network, weighed, and integrated into our transparent tracking system.</p>
               </div>
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3"><span className="text-green-600 mr-2">02</span> Data Sanitization</h4>
                 <p className="text-slate-600 dark:text-slate-400">Before physical breakdown, all enterprise storage devices undergo rigorous, military-grade data destruction to guarantee absolute information security.</p>
               </div>
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3"><span className="text-green-600 mr-2">03</span> High-Purity Extraction</h4>
                 <p className="text-slate-600 dark:text-slate-400">Our proprietary technology enables {">"}98% efficiency in extracting retired tech assets and Li-ion batteries, recovering 22 distinct green metals at greater than 99.5% purity.</p>
               </div>
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3"><span className="text-green-600 mr-2">04</span> Continuous Innovation</h4>
                 <p className="text-slate-600 dark:text-slate-400">Our dedicated R&amp;D team continuously improves recovery technologies, supported by rigorous in-house output testing to define the future of the circular economy.</p>
               </div>
            </div>
          </div>

          {/* ==== CLOSING CTA (restored from live site) ==== */}
          <div className="mt-32 max-w-5xl mx-auto bg-green-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden" style={{ backgroundColor: '#16a34a' }}>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]" style={{ position: 'absolute', bottom: 0, right: 0, width: '16rem', height: '16rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Secure Your Supply Chain?</h2>
              <p className="text-xl text-green-50 font-medium mb-10 max-w-2xl mx-auto">Partner with us for certified sustainable resource recovery, guaranteed data security, and seamless EPR compliance. Let&rsquo;s build a zero-waste strategy for your enterprise.</p>
              <Link href="/request-quote" className="inline-block bg-white text-green-700 font-black text-lg px-10 py-4 rounded-full hover:-translate-y-0.5 transition-transform">
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>

        {/* ==== PARTNER SOCIAL PROOF (same marquee as homepage) ==== */}
        <PartnerMarquee />
      </main>
    </div>
  );
}


