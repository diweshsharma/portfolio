'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

const MailIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const GithubIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <polyline points="9 18 9 22 15 22 15 18"></polyline>
  </svg>
);

const LinkedinIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LeetcodeIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} className={`fill-current ${className}`}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.513 5.277 5.277 0 0 0 1.062 2.182 5.21 5.21 0 0 0 2.107 1.369 5.334 5.334 0 0 0 2.518.232 5.23 5.23 0 0 0 2.138-1.077l3.852-4.125m-6.425 2.894l4.237-4.526 2.37 2.222-4.237 4.526-2.37-2.222m8.65 3.393L13.79 17.58l-2.37-2.22 4.236-4.525 2.37 2.222M24 13.906a1.374 1.374 0 0 0-.437-.96l-5.405-5.788-2.37 2.22 4.237 4.526a2.637 2.637 0 0 1 .605 1.052 2.675 2.675 0 0 1 .063 1.256 2.638 2.638 0 0 1-.531 1.09 2.605 2.605 0 0 1-1.054.685 2.667 2.667 0 0 1-1.259.116 2.615 2.615 0 0 1-1.069-.538l-4.237-4.526-2.37 2.22 5.405 5.788a5.23 5.23 0 0 0 2.138 1.077 5.334 5.334 0 0 0 2.518-.232 5.21 5.21 0 0 0 2.107-1.369 5.277 5.277 0 0 0 1.062-2.182 5.35 5.35 0 0 0 .125-2.513 5.266 5.266 0 0 0-1.209-2.104" />
  </svg>
);

const FileTextIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const ArrowUpRightIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
import Image from 'next/image';

export default function Hero() {
  const { personal, social } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start z-10"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Available for work</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] mb-1 tracking-tight text-white">
            Hello, I'm
          </motion.h2>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[90px] font-heading font-black leading-[1.1] text-gradient tracking-tighter mb-6">
            {personal.name}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground max-w-[500px] leading-relaxed mb-6">
            A BTech CSE student passionate about <strong>AI/ML</strong> and <strong>problem-solving</strong> — building intelligent pipelines and <span className="text-white">Agentic systems</span> that feel effortless.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground mb-10">
            <MapPinIcon className="w-5 h-5 text-primary" />
            <span className="text-[15px] font-medium tracking-wide">{personal.location}</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300 text-sm">
              View My Work
              <ArrowUpRightIcon size={16} />
            </a>
            <a href={personal.resumeUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-colors duration-300 text-sm text-white">
              <FileTextIcon size={16} />
              View Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a href={social.github} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all"><GithubIcon size={18} /></a>
            <a href={social.linkedin} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all"><LinkedinIcon size={18} /></a>
            <a href={social.leetcode} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all"><LeetcodeIcon size={18} /></a>
            <a href={`mailto:${personal.email}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all"><MailIcon size={18} /></a>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[700px] w-full flex items-center justify-center lg:justify-end"
        >
          {/* Image and Floating Card Wrapper */}
          <div className="relative">
            {/* Main Portrait Container */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-[3rem] overflow-hidden group border border-white/5">
              {/* Color backdrop */}
              <div className="absolute inset-0 bg-yellow-500 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <Image 
                src={personal.profileImage}
                alt={personal.name}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
              
              {/* Soft inner shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-20 pointer-events-none" />
            </div>

            {/* Floating Information Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 lg:-bottom-6 lg:-left-12 z-30 bg-[#080b18] p-5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl min-w-[140px]"
            >
              <h4 className="font-heading font-black text-3xl leading-tight mb-1 text-white">CSE</h4>
              <p className="text-[11px] text-muted-foreground font-mono tracking-widest uppercase">DCE - 2027</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
