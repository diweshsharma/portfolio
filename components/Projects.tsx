'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <polyline points="9 18 9 22 15 22 15 18"></polyline>
  </svg>
);

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  
  if (!projects || projects.length === 0) return null;
  
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section id="projects" className="py-24 relative z-10">
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">03 // Projects</span>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mt-4">Selected work.</h3>
      </div>

      <div className="space-y-12">
        {/* Featured Project */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="group glass-card rounded-[2.5rem] overflow-hidden hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:border-primary/30 transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image Container */}
            <div className="relative h-[300px] lg:h-full min-h-[400px] overflow-hidden bg-black">
              {featured.image ? (
                <Image 
                  src={featured.image} 
                  alt={featured.title} 
                  fill 
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
              )}
              {/* Inner Shadow / Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] pointer-events-none" />
              
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Featured
              </div>
            </div>
            
            {/* Content Container */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h4 className="text-3xl md:text-4xl font-heading font-bold mb-6">{featured.title}</h4>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {featured.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {featured.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-xs font-mono text-white/70 bg-white/5 border border-white/10 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                {featured.liveUrl && featured.liveUrl !== '#' && (
                  <a href={featured.liveUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-transform">
                    <span>Live Demo</span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                )}
                {featured.codeUrl && featured.codeUrl !== '#' && (
                  <a href={featured.codeUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:bg-white/10 hover:text-white transition-colors font-medium">
                    <span>Source</span>
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {others.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-black">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-8 pt-0 flex flex-col flex-1 relative z-10">
                <h4 className="text-2xl font-heading font-bold mb-4">{project.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] font-mono text-white/60 bg-white/5 border border-white/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                      <ExternalLinkIcon className="w-3.5 h-3.5" /> Live
                    </a>
                  )}
                  {project.codeUrl && project.codeUrl !== '#' && (
                    <a href={project.codeUrl} target="_blank" className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                      <GithubIcon className="w-3.5 h-3.5" /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
