import React from 'react';
import { Video, PenTool, TrendingUp, MonitorPlay } from 'lucide-react'; // Icons

const services = [
  { title: "Video Production", desc: "Cinematic commercials & films.", icon: <Video size={40} /> },
  { title: "Creative Direction", desc: "Strategic visual storytelling.", icon: <PenTool size={40} /> },
  { title: "Ad Campaigns", desc: "High-impact social ads.", icon: <TrendingUp size={40} /> },
  { title: "Motion Graphics", desc: "3D animations & VFX.", icon: <MonitorPlay size={40} /> },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-brand-dark">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-brand-primary mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;