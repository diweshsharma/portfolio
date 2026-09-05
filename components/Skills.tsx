'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  
  // Flatten skills for the marquee
  const allSkills = [
    ...skills.languages, 
    ...skills.frameworks, 
    ...skills.tools, 
    {name: "Generative AI"}, 
    {name: "RAG"}, 
    {name: "Agentic AI"}, 
    {name: "Deep Learning"}
  ].map(s => s.name);

  return (
    <section id="skills" className="py-24 relative z-10">
      
      {/* Atmospheric Transition Marquee */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden mb-32 opacity-10 hover:opacity-20 transition-opacity duration-500 select-none group cursor-default">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
            <span key={index} className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter uppercase mx-8 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent hover:text-white transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Section Header */}
      <div className="mb-16">
        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">02 // Skills</span>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mt-4">Tools I build with.</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Languages" items={skills.languages} delay={0.1} />
        <SkillCategory title="ML / DL Frameworks" items={skills.frameworks} delay={0.2} />
        <SkillCategory title="Tools & Tech" items={skills.tools} delay={0.3} />
      </div>
    </section>
  );
}

function SkillCategory({ title, items, delay }: { title: string, items: {name: string}[], delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 rounded-[2rem] flex flex-col h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-primary/20 transition-all duration-500"
    >
      <h4 className="text-xl font-heading font-bold mb-8 text-foreground/90">{title}</h4>
      <div className="flex flex-wrap gap-3 mt-auto">
        {items.map(item => (
          <span 
            key={item.name}
            className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-lg text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-colors duration-300 cursor-default"
          >
            {item.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
