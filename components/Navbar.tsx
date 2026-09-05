'use client';

import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/lib/data';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'coding', 'certifications', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Coding', href: '#coding', id: 'coding' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-black tracking-tighter flex items-center gap-1 group relative z-10">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
          <span className="text-primary group-hover:text-white transition-colors duration-300 relative z-10">DS</span>
          <span className="text-white group-hover:text-primary transition-colors duration-300 relative z-10">.</span>
        </Link>
        
        {/* Desktop Navigation Pill Container */}
        <div className={`hidden lg:flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[15px] font-medium px-4 py-2 rounded-full transition-all duration-300 relative ${activeSection === link.id ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
            >
              {activeSection === link.id && (
                <div className="absolute inset-0 bg-white/10 rounded-full z-[-1]"></div>
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <div className="flex items-center gap-4 z-10">
          <a 
            href={PORTFOLIO_DATA.personal.resumeUrl} 
            target="_blank" 
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Resume
          </a>
          
          {/* Mobile Menu Toggle (Placeholder - simplified for now) */}
          <div className="lg:hidden w-10 h-10 rounded-full glass-card flex items-center justify-center">
             <span className="w-5 h-0.5 bg-white shadow-[0_-6px_0_white,0_6px_0_white] rounded-full"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
