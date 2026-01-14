import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-brand-primary">Tier 2 Digi House</h2>
          <p className="text-slate-500 text-sm mt-2">Where vision meets cinema.</p>
        </div>

        <div className="space-y-2 text-slate-400 text-sm">
          <p>📍 123 Creative Street, Mumbai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@tier2digihouse.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;