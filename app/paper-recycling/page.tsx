import React from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'High-Volume Paper and Fibrous Scrap Recycling | Eco Forge Solutions (P) Limited',
  description: "Deploying automated screening, mechanical de-inking, and precise classification processes to transform complex commercial pulp variants into industry-grade",
};

export default function PaperRecyclingPage() {
  return (
    <ServicePage
      eyebrow={"Industrial Cellulose Logistics"}
      title={"High-Volume Paper &"}
      accentWord={"Fibrous Scrap Recycling"}
      standfirst={"Deploying automated screening, mechanical de-inking, and precise classification processes to transform complex commercial pulp variants into industry-grade raw assets."}
      ctaLabel={"Schedule a Material Assessment"}
      introHeading={"Defending Forest Ecosystems. Compounding Materials."}
      introParagraphs={[
        "Industrial packaging components, commercial print matrices, and corporate file stockpiles demand structured, large-scale reclamation paths. Without systematic de-inking and advanced consistency refinement, post-consumer pulp fibers break down prematurely, rendering recovered material fragile and driving up enterprise reliance on raw virgin timber resources.",
        "Eco Forge deploys automated hydropulping units and mechanical de-inking flotation cells. We clean, decontaminate, and separate complex cellulose configurations, spanning old corrugated containers (OCC), sorted office papers, and graphical board substrates, restoring individual raw fibers to meet modern manufacturing demands."
      ]}
      stats={[
        { value: "200k", title: "MT Historical Recovery", description: "Substantial volume redirected from landfills into regional value paths." },
        { value: "60%", title: "Water Loop Conservation", description: "Proprietary filtration processes minimize total fluid ingestion during pulping." },
        { value: "Zero", title: "Chlorine Bleaching Agents", description: "Eco-friendly, chemical-free whitening preserves core cell tensile strength." }
      ]}
      processHeading={"The Paper Recovery Lifecycle"}
      processStandfirst={"A systematic processing sequence engineered to retain high cellulose material densities."}
      steps={[
        { title: "Mechanical Grade Sorting", description: "Incoming commercial paper and fiber assets are passed through high-capacity sorting systems. Materials are separated by structural cell length and thickness into uniform processing lines, separating dense corrugates from white office papers to prevent core fiber downgrades." },
        { title: "High-Consistency Hydropulping", description: "The classified fiber assets are introduced into industrial hydropulping systems. Mixed with recycled process water, massive rotors mechanically agitate the material into a uniform slush slurry, separating dense individual cellulose fibers without altering their lengths." },
        // Note: publishes this step with a heading and no body copy.
        // Left empty deliberately rather than invented.
        { title: "Centrifugal Contaminant Screening", description: "" },
        { title: "Flotation De-Inking Integration", description: "To prepare graphic paper lines for clean reuse, the pulp goes through specialized de-inking flotation cells. Eco-friendly surfactants generate microscopic bubbles that selectively bind to ink particles, lifting them to the surface for automated skimming." },
        { title: "Fiber Refining & Sheet Forming", description: "The decontaminated slurry is mechanically refined to align outer fiber properties for premium tensile strength. The clean pulp matrix is then water-extracted and pressed into raw, industrial-grade sheet materials, prepared for distribution back into supply chains." }
      ]}
      benefitsHeading={"Unlocking High-Volume Circular Operations"}
      benefits={[
        { title: "CPCB Compliance Alignment", description: "Fulfill your regional statutory Extended Producer Responsibility (EPR) recycling benchmarks with absolute assurance. Eco Forge provides complete mass-balance documentation to satisfy regulatory environmental checks." },
        { title: "Natural Resource Defensibility", description: "Sourcing recycled cellulose streams radically reduces your reliance on virgin timber materials. We deliver validated data tracking points to help lower your enterprise Scope 3 carbon footprint metrics." },
        { title: "Optimized Manufacturing Feedstock", description: "Our recovered pulp rolls undergo rigorous moisture and ash-content testing. This ensures the material functions perfectly on high-speed industrial corrugators and packaging assembly setups." },
        { title: "Predictable Cost Isolation", description: "Insulate your business from global raw wood market price swings. Sourcing high-quality processed recycled fiber options from Eco Forge offers stable, sustainable procurement budgets year-round." }
      ]}
      heroImage={"/images/about-us-image.jpg"}
      heroImageAlt={"Paper and fibrous scrap ready for closed-loop recycling"}
      galleryImages={["/images/post-1.jpg", "/images/hero-info-image-1.jpg", "/images/hero-info-image-2.jpg"]}
      relatedHrefs={["/plastic-waste-recycling", "/epr-consulting", "/green-metal-recovery"]}
    />
  );
}

