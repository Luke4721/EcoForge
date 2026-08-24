const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Logo replacement
code = code.replace(/\/logo_transparent\.png/g, '/eg-logo.png');
code = code.replace(/\/logo_white_text\.png/g, '/eg-logo.png');

// 2. Hero Section Adjustments
code = code.replace(
  'className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-6 py-2.5 rounded-full text-green-400 font-bold tracking-widest uppercase text-sm mb-8"',
  'className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-6 py-2.5 rounded-full text-green-400 font-bold tracking-widest uppercase text-sm mb-8 float-right"'
);

code = code.replace(
  'className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight"',
  'className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight clear-both"'
);


fs.writeFileSync('app/page.tsx', code);
console.log("Replaced using simple string replacement.");
