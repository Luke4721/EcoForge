import React from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'High-Purity Plastic Waste Recycling | Eco Forge Solutions (P) Limited',
  description: "Transforming commercial, post-industrial, and EPR-mandated plastic streams into high-performance, manufacturing-ready granules. Advanced decontamination wi",
};

export default function PlasticWasteRecyclingPage() {
  return (
    <ServicePage
      eyebrow={"Industrial Polymer Recovery"}
      title={"High-Purity Plastic"}
      accentWord={"Waste Recycling"}
      standfirst={"Transforming commercial, post-industrial, and EPR-mandated plastic streams into high-performance, manufacturing-ready granules. Advanced decontamination with absolute circular traceability."}
      ctaLabel={"Submit a Bulk Scrap Request"}
      introHeading={"Eliminating Linear Plastics. Compounding Value."}
      introParagraphs={[
        "Mixed polymers, post-industrial packaging waste, and surplus commercial plastic present modern enterprises with massive structural management bottlenecks and evolving plastic tracking levies. Without precision molecular and density isolation, complex plastics are downgraded or landfilled, amplifying your operational liabilities.",
        "Eco Forge deploys automated mechanical recycling, optical NIR sensor sorting, and mechanical extrusion systems. We separate overlapping polymer families, including PET, HDPE, PP, and LDPE materials, decontaminating them completely to construct sustainable regranulated resins that fit right into existing supply chains."
      ]}
      stats={[
        { value: "99%+", title: "Polymer Purity Thresholds", description: "Advanced optical NIR scanning isolates uniform resin streams." },
        { value: "100%", title: "Traceable Mass-Balance", description: "Complete regulatory audit logs confirming clean EPR fulfillment." },
        { value: "70%", title: "Energy Reduction Metrics", description: "Processing regranulated polymers uses significantly less power than virgin oil alternatives." }
      ]}
      processHeading={"The Polymer Recovery Pipeline"}
      processStandfirst={"A rigorous mechanical extraction sequence ensuring uniform mechanical and structural specifications."}
      steps={[
        { title: "Bulk Sorting & NIR Spectrum Analysis", description: "Incoming industrial and commercial plastic batches are directed onto high-speed sorting belts. Advanced Near-Infrared (NIR) optical sensors scan the molecular signature of each item, instantly deflecting and sorting items into isolated resin streams (PET, HDPE, PP, LDPE) with complete automated efficiency." },
        { title: "Mechanical Shredding & Granulation", description: "Once separated by exact polymer groups, the structural plastic arrays are pushed into industrial shredders. Heavy rotary knives cut down the rigid containers and flexible sheets into clean, standardized 10-12mm flakes designed for downstream uniform chemical washing." },
        { title: "Friction Washing & Sink-Float Separation", description: "The granulated plastic flakes enter high-temperature friction washers where specialized eco-friendly detergents strip off residues, paper labels, and chemical adhesives. The clean flakes then enter sink-float tanks, leveraging specific material gravity to cleanly isolate structural resins from multi-layered caps or films." },
        { title: "Thermal Devolatilization & Extrusion", description: "The moisture-extracted flakes move into state-of-the-art dual-gas twin-screw extruders. Under localized thermal control, the plastic flakes are melted down while high-vacuum degassing zones draw out Volatile Organic Compounds (VOCs), ink pigments, and gas bubbles to secure maximum structural integrity." },
        { title: "Strand Pelletization & Quality Sorting", description: "The purified, molten polymer matrix is extruded through micro-dies into continuous strands, rapidly water-cooled, and cut into uniform plastic granules. These pellets go through automated optical filters to ensure complete structural stability before packing for circular reuse." }
      ]}
      benefitsHeading={"Unlocking Verified Industrial Value Loops"}
      benefits={[
        { title: "Flawless EPR Shielding", description: "Fulfill your regional statutory Extended Producer Responsibility (EPR) requirements with complete confidence. Eco Forge absorbs your processing metrics, delivering verifiable mass-balance documents directly aligned with government environmental rules." },
        { title: "Scope 3 Emissions Optimization", description: "Substitutes high-carbon virgin crude-oil resins with clean, recycled Eco Forge polymer pellets across your packaging infrastructure. We provide traceable carbon reduction metrics to bolster your corporate ESG statements." },
        { title: "Premium Manufacturing Grade", description: "Our recycled granules undergo rigorous melt-flow index (MFI) and density filtration assessments. This guarantees that your recycled plastic stock matches strict structural manufacturing tolerances for trouble-free injection molding." },
        { title: "Hedge Petrochemical Volatility", description: "Break loose from unpredictable international oil price shocks that throw off manufacturing budgets. Sourcing clean recycled pellets from Eco Forge locks in predictable, sustainable operational cost structures for long-term planning." }
      ]}
      heroImage={"/images/hero-info-image-1.jpg"}
      heroImageAlt={"Sorting plastic waste for precision pelletizing"}
      galleryImages={["/images/about-us-image.jpg", "/images/post-1.jpg", "/images/hero-info-image-2.jpg"]}
      relatedHrefs={["/paper-recycling", "/epr-consulting"]}
    />
  );
}

