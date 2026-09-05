'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative z-10">
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">05 // Education</span>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mt-4">Academic Background.</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card p-10 rounded-[2rem] flex flex-col hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="text-primary font-mono text-sm font-bold tracking-widest mb-4">
              {edu.duration}
            </div>
            <h4 className="text-2xl font-heading font-bold mb-2 text-foreground/90 leading-snug">
              {edu.degree}
            </h4>
            <p className="text-lg text-muted-foreground mt-auto pt-8">
              {edu.institution}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
