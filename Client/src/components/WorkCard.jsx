import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const WorkCard = ({ project, index }) => {
  return (
    <motion.div
      // 1. Entrance Animation (Fade Up)
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      
      // 2. Hover Animation (Lift Card)
      whileHover={{ y: -12 }}
      
      // 3. Styling (bg-white fixes the black screen issue)
      className="group bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full overflow-hidden relative"
    >
      
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
           <a 
             href={project.link} 
             className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white"
             title="View Live"
           >
             <ExternalLink size={20} />
           </a>
           <a 
             href={project.github} 
             className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 bg-white p-3 rounded-full hover:bg-gray-900 hover:text-white"
             title="View Code"
           >
             <Github size={20} />
           </a>
        </div>

        {/* The Image Itself - Zooms on hover */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content Body */}
      <div className="p-8 flex flex-col flex-grow relative">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50 rounded-full border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
};

export default WorkCard;