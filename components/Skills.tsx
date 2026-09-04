"use client";

import { motion } from 'framer-motion';
import skillsData from '@/data/skills.json';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Engineering Capabilities</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Core competencies across machine learning, language models, backend, and statistical analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
          >
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-foreground/90 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
