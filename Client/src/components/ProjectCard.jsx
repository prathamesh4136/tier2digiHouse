import React, { useState, useRef } from 'react';

const ProjectCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video
    }
  };

  return (
    <div 
      className="relative group w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. MEDIA DISPLAY */}
      {project.mediaType === 'video' ? (
        <>
          {/* Thumbnail (Shows when video is not playing) */}
          <img 
            src={project.thumbnailUrl} 
            alt={project.title} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Video (Plays on hover) */}
          <video
            ref={videoRef}
            src={project.mediaUrl}
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
        </>
      ) : (
        // For Images
        <img 
          src={project.mediaUrl} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      {/* 2. OVERLAY INFO */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-2">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;