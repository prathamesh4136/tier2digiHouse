import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', phone: '', serviceType: 'Video Ads (Reels / YouTube)', message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tier2digihouse-1.onrender.com/api/inquiry', formData);
      setStatus('Message Sent! We will contact you soon.');
      setFormData({ fullName: '', companyName: '', email: '', phone: '', serviceType: 'Video Ads (Reels / YouTube)', message: '' });
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary blur-[150px] opacity-20 rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-5xl font-bold mb-4">Let's Create <br /><span className="text-brand-primary">Something Epic.</span></h2>
        <p className="text-slate-400 mb-12 text-xl">Ready to transform your brand? Fill out the form below.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="fullName" placeholder="Your Name" value={formData.fullName} onChange={handleChange} required className="bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-brand-primary outline-none transition" />
            <input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-brand-primary outline-none transition" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-brand-primary outline-none transition" />
            <input name="phone" placeholder="Phone / WhatsApp" value={formData.phone} onChange={handleChange} required className="bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-brand-primary outline-none transition" />
          </div>

          <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-brand-primary outline-none transition text-slate-300">
            <option>Video Ads (Reels / YouTube)</option>
            <option>Poster / Banner Designing</option>
            <option>Social Media Marketing</option>
            <option>Branding / Logo Design</option>
            <option>Other</option>
          </select>

          <textarea name="message" rows="4" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-brand-primary outline-none transition"></textarea>

          <button type="submit" className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 text-lg">
            Send Message <Send size={20} />
          </button>

          {status && <p className="text-center text-brand-primary font-bold mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;