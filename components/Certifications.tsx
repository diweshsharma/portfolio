'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

const AwardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
    <circle cx="12" cy="8" r="6"></circle>
  </svg>
);

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA as any;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="mb-16">
        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">07 // Certifications</span>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mt-4">Professional Growth.</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-[2rem] flex items-start gap-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
              <AwardIcon className="text-primary w-6 h-6" />
            </div>
            
            <div>
              <h4 className="text-xl font-heading font-bold mb-2 text-foreground/90">{cert.name}</h4>
              <p className="text-muted-foreground font-medium">{cert.issuer}</p>
              <div className="mt-4 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg inline-block text-xs font-mono text-primary tracking-widest">
                {cert.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
