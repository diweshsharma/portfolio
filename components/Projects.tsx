"use client";

import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const featuredOnly = projectsData.filter((p) => p.featured);
  
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Case Studies</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Deep-dive technical reviews into the machine learning applications I have built and deployed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {featuredOnly.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
          >
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-emerald-500 mb-2">0{idx + 1} {"//"} CASE STUDY</div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10">
                  {project.summary}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6 lg:mb-0">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white/10 text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-6">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors">
                    <Code className="w-4 h-4 mr-2" /> Code
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-primary hover:text-primary/70 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">The Problem</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">Technical Decisions</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">{project.technical_decisions}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-500/70 uppercase tracking-wider mb-2">Results</h4>
                <ul className="list-disc list-inside text-sm text-foreground/80 leading-relaxed space-y-1">
                  {project.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
