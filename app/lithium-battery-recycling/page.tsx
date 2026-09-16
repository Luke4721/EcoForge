import React from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'Advanced Lithium-Ion Battery Recycling | Eco Forge Solutions (P) Limited',
  description: "Pioneering eco-friendly hydrometallurgical recycling systems for electric vehicles, energy storage systems (ESS), and industrial electronics. Unlocking pur",
};

export default function LithiumBatteryRecyclingPage() {
  return (
    <ServicePage
      eyebrow={"EV & Lithium-Ion Lifecycle"}
      title={"Advanced Lithium-Ion"}
      accentWord={"Battery Recycling"}
      standfirst={"Pioneering eco-friendly hydrometallurgical recycling systems for electric vehicles, energy storage systems (ESS), and industrial electronics. Unlocking pure closed-loop battery circularity."}
      ctaLabel={"Request a Recycling Audit"}
      introHeading={"Powering the Future. Recovering the Past."}
      introParagraphs={[
        "The global shift toward fleet electrification and green infrastructure demands an equally scalable solution for end-of-life battery cells. Spent lithium-ion packs contain critical transition metals that are finite, geo-politically constrained, and highly volatile if discarded.",
        "Eco Forge engineers proprietary black mass processing and state-of-the-art chemical recovery systems. We safely deactivate spent batteries and extract battery-grade active materials with minimal carbon footprints, offering domestic supply chain autonomy for cell manufacturers while preventing landfill hazards."
      ]}
      stats={[
        { value: "98%+", title: "High-Yield Metal Extraction", description: "Industry-leading recovery of Lithium, Cobalt, and Nickel." },
        { value: "Pure", title: "Battery-Grade Output", description: "Recovered chemicals refined to >99.5% purity thresholds." },
        { value: "Zero", title: "Thermal Runaway Risk", description: "Military-grade discharging and secure climate storage lines." }
      ]}
      processHeading={"The Recycling Architecture"}
      processStandfirst={"A closed-loop extraction path that transforms spent hazardous modules into active precursors."}
      steps={[
        { title: "Safe Discharging & Deactivation", description: "Incoming multi-cell modules from electric vehicles and consumer electronics are channeled into specialized deactivation vaults. They undergo smart deep-discharging cycles to deplete residual electricity, eliminating the potential for thermal runaway or electric arcing." },
        { title: "Controlled Atmospheric Crushing", description: "Deactivated modules are automatically disassembled and fed into customized shredders operating under a precise inert gas atmosphere. This prevents volatile chemical oxidization while mechanical sorters split outer aluminum plates, copper foils, and plastics." },
        { title: "Black Mass Isolation", description: "The vital core energy-carrying materials are pulverized and sifted out to isolate high-grade Black Mass. This highly concentrated powder contains critical mineral nodes, specifically localized Lithium, Cobalt, Nickel, and Manganese compounds." },
        { title: "Hydrometallurgical Refining", description: "Using proprietary wet-chemical hydrometallurgical systems, the isolated black mass is completely liquefied. Without high-emission smelting, we isolate individual element lines and crystalize them into high-purity chemical salts, including Lithium Carbonate and Cobalt Sulfate." },
        { title: "Closed-Loop Upcycling", description: "The recovered chemical precursors are validated through quality assurance steps and shipped directly back to commercial gigafactories. This finishes the circular loop, supplying raw material matrices without launching destructive new mining operations." }
      ]}
      benefitsHeading={"Engineered for Modern Enterprise Operations"}
      benefits={[
        { title: "Supply Chain Security", description: "Protect your enterprise from raw mineral resource scarcity and global mining import friction. By recycling your secondary battery scrap, you gain clean access to pure, manufacturing-ready domestic battery precursors." },
        { title: "Total Regulatory Shield", description: "Lithium disposal involves severe structural liabilities. Our eco-certified chemical processing plant entirely fulfills your Extended Producer Responsibility (EPR) mandates, removing compliance friction with authorized tracking trails." },
        { title: "Low-Carbon Footprint", description: "Our specialized hydrometallurgical closed loop generates up to 80% lower greenhouse gas indicators compared to traditional mineral mining operations. We pass on verifiable Scope 3 reduction data directly to your ESG reports." },
        { title: "Absolute Operational Safety", description: "From heavy industrial vehicle packs to mobile consumer arrays, our sorting facilities are fortified by constant thermal monitoring systems, automated cooling lines, and hazardous material experts." }
      ]}
      heroImage={"/images/hero-info-image-2.jpg"}
      heroImageAlt={"Worker sorting recyclable materials at an Eco Forge facility"}
      galleryImages={["/images/hero-info-image-2.jpg", "/images/about-us-image.jpg", "/images/post-1.jpg"]}
      relatedHrefs={["/plastic-waste-recycling", "/green-metal-recovery"]}
    />
  );
}

