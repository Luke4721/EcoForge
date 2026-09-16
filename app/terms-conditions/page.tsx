import React from 'react';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms and Conditions | Eco Forge Solutions (P) Limited',
  description: 'Terms and conditions for the use of the Eco Forge Solutions (P) Limited website and services.',
};

export default function TermsConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      dateLabel="Last Updated: May 22, 2026"
      intro="Welcome to Eco Forge Solutions (P) Limited. These terms and conditions outline the rules and regulations for the use of our website and services."
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: "By accessing this website, we assume you accept these terms and conditions. Do not continue to use Eco Forge Solutions (P) Limited's website if you do not agree to take all of the terms and conditions stated on this page.",
        },
        {
          heading: 'Intellectual Property Rights',
          body: 'Unless otherwise stated, Eco Forge Solutions (P) Limited and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms and conditions.',
        },
        {
          heading: 'User Obligations',
          body: 'Users agree to the following:',
          bullets: [
            'You will provide accurate, current, and complete information when requested.',
            'You will not use the website in any way that causes damage to the website or impairment of the availability or accessibility of the website.',
            'You will not engage in any data harvesting, data mining, or data extraction activities.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: 'To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit any of our liabilities in any way that is not permitted under applicable law.',
        },
        {
          heading: 'Termination',
          body: 'We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
        },
        {
          heading: 'Governing Law',
          body: 'These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Uttar Pradesh.',
        },
        {
          heading: 'Contacting Us',
          body: 'If you have any questions about these Terms and Conditions, please contact us:',
        },
      ]}
    />
  );
}

