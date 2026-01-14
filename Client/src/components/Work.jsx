import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Work = () => {
  const [projects, setProjects] = useState([]);
  // We track which card is being hovered to play the video
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetch('https://tier2digihouse-1.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data);
        }
      })
      .catch(err => console.error("Error fetching work:", err));
  }, []);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            Featured <span className="text-purple-600">Work</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A selection of our best campaigns, motion graphics, and brand identities.
          </p>
        </motion.div>
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                // 1. Staggered Entrance Animation
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                
                // 2. Mouse Events for Video Playback
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}

                className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-[400px]"
              >
                {/* MEDIA CONTAINER */}
                <div className="absolute inset-0 w-full h-full bg-slate-200">
                  
                  {/* Logic: If it's a video AND hovered, show video. Otherwise show Image */}
                  <AnimatePresence>
                    {project.mediaType === 'video' && hoveredIndex === index ? (
                      <motion.video
                        key="video"
                        src={project.mediaUrl}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <motion.img
                        key="image"
                        src={project.thumbnailUrl}
                        alt={project.title}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Dark Overlay Gradient (Better Text Readability) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                {/* TEXT CONTENT (Positioned at bottom with Hover Animation) */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white uppercase bg-purple-600 rounded-full">
                    {project.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-white mt-4 group-hover:w-full transition-all duration-500 ease-out" />
                </div>

              </motion.div>
            ))
          ) : (
             // Loading State
             <div className="col-span-full text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-slate-500">Loading your masterpiece...</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;