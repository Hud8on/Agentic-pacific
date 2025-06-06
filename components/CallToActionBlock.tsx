

import React from 'react';

const CallToActionBlock: React.FC = () => {
  return (
    <div className="bg-blue-100 py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Explore AI for Your Business?</h2>
      <p className="text-lg mb-6">Schedule a free consultation and let us show you what’s possible – no jargon, no pressure.</p>
      <a
        href="/contact"
        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Book a Free Consultation
      </a>
    </div>
  );
};

export default CallToActionBlock;