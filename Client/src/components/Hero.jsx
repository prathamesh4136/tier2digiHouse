import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-white overflow-hidden">
      
      {/* 3D BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#9333ea" // Brand Purple
              attach="material"
              distort={0.5} // Amount of wobbly movement
              speed={2} // Speed of movement
            />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* TEXT CONTENT LAYER */}
      <div className="z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6"
        >
          YOUR BRAND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            DESERVES CINEMA.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto"
        >
          We craft immersive visual experiences that captivate audiences and elevate your identity.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;