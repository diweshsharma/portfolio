'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative z-10" ref={containerRef}>
      
      {/* Section Header */}
      <div className="mb-20">
        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">04 // Experience</span>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mt-4">Where I've worked.</h3>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* The glowing vertical timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-blue-500 via-primary to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          />
        </div>

        <div className="space-y-24">
          {experience.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index }: { experience: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

      {/* Empty space for alternating layout on desktop */}
      <div className="hidden md:block w-[45%]" />

      {/* Content Card */}
      <div className="w-full pl-20 md:pl-0 md:w-[45%]">
        <div className="glass-card p-8 rounded-[2rem] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
          <span className="text-primary font-mono text-sm font-bold tracking-widest">{experience.duration}</span>
          <h4 className="text-2xl font-heading font-bold mt-2 text-foreground/90">{experience.role}</h4>
          <h5 className="text-lg font-medium text-muted-foreground mb-6">{experience.company} <span className="mx-2">•</span> {experience.location}</h5>
          
          <ul className="space-y-4">
            {experience.highlights.map((highlight: string, idx: number) => (
              <li key={idx} className="flex gap-4 items-start group/item">
                <span className="text-primary mt-1.5 opacity-60 group-hover/item:opacity-100 transition-opacity">▹</span>
                <span className="text-muted-foreground leading-relaxed text-[15px]">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </motion.div>
  );
}
