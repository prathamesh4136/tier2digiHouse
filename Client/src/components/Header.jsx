import React, { useState, useEffect } from 'react';
import myLogo from '../assets/images/logo.png'; // Your logo import
import { Menu, X } from 'lucide-react'; // Icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Effect: Change navbar style when scrolling down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION - INCREASED SIZE */}
        <a href="/" className="flex items-center">
          <img 
            src={myLogo} 
            alt="Tier 2 Digi House Logo" 
            // CHANGED HERE: h-16 (64px) for mobile, h-20 (80px) for desktop
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-brand-dark/80">
          <a href="#work" className="hover:text-brand-primary transition">Work</a>
          <a href="#services" className="hover:text-brand-primary transition">Services</a>
          <a href="#contact" className="hover:text-brand-primary transition">Contact</a>
          
          <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-dark transition shadow-lg shadow-purple-500/30">
            Get Started
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#7e22ce" size={32} /> : <Menu color="#7e22ce" size={32} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden">
          <a href="#work" onClick={() => setIsOpen(false)} className="text-lg font-medium">Work</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</a>
          <button className="bg-brand-primary text-white py-3 rounded-lg font-bold">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Header;