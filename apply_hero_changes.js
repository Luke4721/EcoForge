const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Logo replacement
code = code.replace(/\/logo_transparent\.png/g, '/eg-logo.png');
code = code.replace(/\/logo_white_text\.png/g, '/eg-logo.png');

// 2. Hero Section Adjustments
const oldHero = `<motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-6 py-2.5 rounded-full text-green-400 font-bold tracking-widest uppercase text-sm mb-8">
                <CheckCircle2 size={18} />
                Leading Waste Management 2026
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight">`;

const newHero = `<div className="flex w-full justify-end mb-8">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-6 py-2.5 rounded-full text-green-400 font-bold tracking-widest uppercase text-sm">
                  <CheckCircle2 size={18} />
                  Leading Waste Management 2026
                </motion.div>
              </div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">`;

if (code.includes(oldHero)) {
    code = code.replace(oldHero, newHero);
    console.log("Hero section replaced successfully.");
} else {
    console.log("Hero section regex did NOT match. Need manual fix.");
}

fs.writeFileSync('app/page.tsx', code);
