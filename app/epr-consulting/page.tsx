import React from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'EPR Consulting | Eco Forge Solutions (P) Limited',
  description: 'End-to-end compliance management for Extended Producer Responsibility â€” target management, documentation, filing and audit representation.',
};

export default function EprConsultingPage() {
  return (
    <ServicePage
      eyebrow={"Eco Forge Services"}
      title={"EPR"}
      accentWord={"Consulting"}
      standfirst={"End-to-end compliance management for Extended Producer Responsibility."}
      ctaLabel={"Request an Enterprise Quote"}
      introParagraphs={[
        "At Eco Forge, our EPR Consulting operations are designed for high-volume enterprise clients who require uncompromising compliance, complete data security, and verifiable environmental impact. We act as an extension of your compliance team to fulfil your mandated Extended Producer Responsibility targets."
      ]}
      stats={[
        { value: "100%", title: "Regulatory Target Fulfillment", description: "Extended Producer Responsibility targets calculated, executed and reported end to end." },
        { value: "CPCB", title: "Audit-Ready Filings", description: "Quarterly and annual returns managed with central pollution control boards." },
        { value: "4", title: "Compliance Pillars", description: "Target management, action plan strategy, documentation and audit representation." }
      ]}
      benefitsHeading={"Why Choose Our Facility?"}
      benefits={[
        { title: "Zero-Landfill Policy", description: "100% of processed materials are diverted from landfills and reintroduced into the circular economy." },
        { title: "Regulatory Compliance", description: "Fully certified operations meeting all national and international environmental standards." },
        { title: "Pan-India Logistics", description: "Secure chain-of-custody transportation from your facility directly to our processing plants." }
      ]}
      heroImage={"/images/graphic-circular-loop.svg"}
      heroImageAlt={"Circular economy material loop"}
      galleryImages={["/images/hero-info-image-1.jpg", "/images/about-us-image.jpg", "/images/post-1.jpg"]}
      relatedHrefs={["/plastic-waste-recycling", "/green-metal-recovery"]}
    />
  );
}

