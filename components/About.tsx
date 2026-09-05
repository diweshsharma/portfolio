'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21.42 10.922a2 2 0 0 0-.019-3.838L12.83 4.3a2 2 0 0 0-1.66 0l-8.57 2.784a2 2 0 0 0-.02 3.838l8.57 2.829a2 2 0 0 0 1.68 0z"></path>
    <path d="M22 10v6"></path>
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
  </svg>
);

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-32 relative z-10">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">01 // About</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.2] mb-8">
            An AI/ML engineer building <br/><span className="text-muted-foreground">for the real world.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
            <p>
              I specialize in designing and deploying intelligent systems that solve actual problems. From training predictive models to architecting Agentic workflows with LLMs, I bridge the gap between theoretical AI and robust software engineering.
            </p>
            <p>
              {personal.bio}
            </p>
          </div>
        </motion.div>

        {/* Right Column: Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <InfoCard 
            icon={<GraduationCapIcon className="w-5 h-5 text-primary" />}
            label="Education"
            value="B.Tech CSE — AI/ML"
            delay={0.1}
          />
          <InfoCard 
            icon={<MapPinIcon className="w-5 h-5 text-primary" />}
            label="Based In"
            value={personal.location}
            delay={0.2}
          />
          <InfoCard 
            icon={<TargetIcon className="w-5 h-5 text-primary" />}
            label="Focus"
            value="AI/ML + Generative AI"
            delay={0.3}
          />
          <InfoCard 
            icon={<ZapIcon className="w-5 h-5 text-primary" />}
            label="Currently Building"
            value="RAG + Agentic AI"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-8 rounded-2xl flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300 group"
    >
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">{label}</div>
      <div className="text-lg font-semibold text-foreground">{value}</div>
    </motion.div>
  );
}
