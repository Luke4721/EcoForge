import React from 'react';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Eco Forge Solutions (P) Limited',
  description: 'How Eco Forge Solutions (P) Limited collects, uses, maintains, and discloses information collected from users of our website and services.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      dateLabel="Effective Date: May 22, 2026"
      intro="At Eco Forge Solutions (P) Limited, we value your trust and are committed to protecting your personal information. This Privacy Policy governs the manner in which Eco Forge Solutions (P) Limited collects, uses, maintains, and discloses information collected from users of our website and services."
      sections={[
        {
          heading: 'Personal Identification Information',
          body: 'We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, fill out a form, or in connection with other activities, services, features, or resources we make available. Users may be asked for, as appropriate, name, email address, mailing address, and phone number.',
        },
        {
          heading: 'Non-Personal Identification Information',
          body: "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our Site.",
        },
        {
          heading: 'How We Use Collected Information',
          body: "Eco Forge Solutions (P) Limited may collect and use Users' personal information for the following purposes:",
          bullets: [
            '<strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.',
            '<strong>To improve our Site:</strong> We may use feedback you provide to improve our products and services.',
            '<strong>To send periodic emails:</strong> We may use the email address to respond to their inquiries, questions, and/or other requests.',
          ],
        },
        {
          heading: 'Protection of Your Information',
          body: 'We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.',
        },
        {
          heading: 'Sharing Your Personal Information',
          body: "We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.",
        },
        {
          heading: 'Changes to This Privacy Policy',
          body: 'Eco Forge Solutions (P) Limited has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes.',
        },
        {
          heading: 'Contacting Us',
          body: 'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:',
        },
      ]}
    />
  );
}

