'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

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
import Image from 'next/image';

export default function Profiles() {
  const { social } = PORTFOLIO_DATA;

  const profiles = [
    {
      name: "GitHub",
      url: social.github,
      icon: <GithubIcon className="w-8 h-8" />,
      stats: ["Open Source", "Repositories"],
      color: "from-gray-800 to-black"
    },
    {
      name: "LeetCode",
      url: social.leetcode,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.513 5.277 5.277 0 0 0 1.062 2.182 5.21 5.21 0 0 0 2.107 1.369 5.334 5.334 0 0 0 2.518.232 5.23 5.23 0 0 0 2.138-1.077l3.852-4.125m-6.425 2.894l4.237-4.526 2.37 2.222-4.237 4.526-2.37-2.222m8.65 3.393L13.79 17.58l-2.37-2.22 4.236-4.525 2.37 2.222M24 13.906a1.374 1.374 0 0 0-.437-.96l-5.405-5.788-2.37 2.22 4.237 4.526a2.637 2.637 0 0 1 .605 1.052 2.675 2.675 0 0 1 .063 1.256 2.638 2.638 0 0 1-.531 1.09 2.605 2.605 0 0 1-1.054.685 2.667 2.667 0 0 1-1.259.116 2.615 2.615 0 0 1-1.069-.538l-4.237-4.526-2.37 2.22 5.405 5.788a5.23 5.23 0 0 0 2.138 1.077 5.334 5.334 0 0 0 2.518-.232 5.21 5.21 0 0 0 2.107-1.369 5.277 5.277 0 0 0 1.062-2.182 5.35 5.35 0 0 0 .125-2.513 5.266 5.266 0 0 0-1.209-2.104" />
        </svg>
      ),
      stats: ["Algorithms", "Data Structures"],
      color: "from-yellow-600/20 to-orange-600/20"
    }
  ];

  return (
    <section id="coding" className="py-24 relative z-10">
      <div className="mb-16">
        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">06 // Profiles</span>
        <h3 className="text-4xl md:text-5xl font-heading font-bold mt-4">Coding Platforms.</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-card p-10 rounded-[2rem] flex flex-col relative overflow-hidden group border-white/10 hover:border-white/30 transition-all duration-500`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex justify-between items-start mb-12">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {profile.icon}
              </div>
              <ExternalLinkIcon className="w-6 h-6 text-white/30 group-hover:text-white transition-colors" />
            </div>

            <div className="relative z-10 mt-auto">
              <h4 className="text-3xl font-heading font-bold mb-4">{profile.name}</h4>
              <div className="flex gap-3">
                {profile.stats.map(stat => (
                  <span key={stat} className="px-3 py-1 bg-white/10 rounded-lg text-sm font-medium text-white/80">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
