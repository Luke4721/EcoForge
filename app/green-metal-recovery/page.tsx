import React from 'react';
import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'Green Metal Recovery | Eco Forge Solutions (P) Limited',
  description: 'High-purity extraction of precious and ferrous metals from industrial waste streams at our Greater Noida facility.',
};

export default function GreenMetalRecoveryPage() {
  return (
    <ServicePage
      eyebrow={"Eco Forge Services"}
      title={"Green Metal"}
      accentWord={"Recovery"}
      standfirst={"High-purity extraction of precious and ferrous metals from industrial waste."}
      ctaLabel={"Request an Enterprise Quote"}
      introParagraphs={[
        "At Eco Forge, our Green Metal Recovery operations are designed for high-volume enterprise clients who require uncompromising compliance, complete data security, and verifiable environmental impact. We process materials through state-of-the-art facility located in Greater Noida, utilizing cutting-edge extraction and recovery technologies."
      ]}
      stats={[
        { value: "22+", title: "Green Metals Recovered", description: "Distinct metals recovered at greater than 99.5% purity, reintegrated into manufacturing supply chains." },
        { value: "100%", title: "Zero-Landfill Policy", description: "Processed materials are diverted from landfills and reintroduced into the circular economy." },
        { value: "1", title: "Processing Facility", description: "State-of-the-art facility located in Greater Noida." }
      ]}
      benefitsHeading={"Why Choose Our Facility?"}
      benefits={[
        { title: "Zero-Landfill Policy", description: "100% of processed materials are diverted from landfills and reintroduced into the circular economy." },
        { title: "Regulatory Compliance", description: "Fully certified operations meeting all national and international environmental standards." },
        { title: "Pan-India Logistics", description: "Secure chain-of-custody transportation from your facility directly to our processing plants." }
      ]}
      heroImage={"/images/graphic-green-metals.svg"}
      heroImageAlt={"Green metals recovered: iron, copper, lithium, cobalt, aluminium"}
      galleryImages={["/images/post-1.jpg", "/images/hero-info-image-2.jpg", "/images/about-us-image.jpg"]}
      relatedHrefs={["/lithium-battery-recycling", "/epr-consulting"]}
    />
  );
}

