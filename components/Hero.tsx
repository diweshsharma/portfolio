"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import profileData from '@/data/profile.json';
import React from 'react';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 grid place-items-center min-h-[70vh] perspective-1000">
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-4xl relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 rounded-[2rem] -z-10 blur-3xl transform-gpu opacity-50"
        />
        
        <div 
          className="p-8 md:p-14 mb-8 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm shadow-inner mb-8 transform-gpu hover:scale-105 transition-transform duration-300 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 mr-3 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            <span className="font-medium tracking-wide text-white/90">B.Tech CS (AI & ML) | Expected 2027</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white font-heading leading-tight" style={{ transform: "translateZ(50px)" }}>
             Building <span className="text-neutral-500 hover:text-white transition-colors duration-500 cursor-default">end-to-end</span> <br className="hidden md:block" /> machine learning systems.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed" style={{ transform: "translateZ(30px)" }}>
            I am <span className="text-white font-medium">{profileData.name}</span>, {profileData.positioning}
          </p>

          <div className="flex flex-col sm:flex-row gap-4" style={{ transform: "translateZ(60px)" }}>
            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              View Projects 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href={`/resume/Diwesh_Sharma_Resume (1).pdf`}
              target="_blank"
              className="group inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-black/60 px-8 text-sm font-medium text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1"
            >
              <FileText className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" /> Résumé
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
