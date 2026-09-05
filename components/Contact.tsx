'use client';

import { PORTFOLIO_DATA } from '@/lib/data';
import { motion } from 'framer-motion';

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <polyline points="9 18 9 22 15 22 15 18"></polyline>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const { personal, social } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5 mt-20">
      
      {/* Background glow specific to contact */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20 -z-10">
        <div className="w-full max-w-4xl h-[400px] bg-primary/20 blur-[150px] rounded-[100%] mix-blend-screen" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase mb-4 block">08 // Contact</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6">
            Let's build <br/>something.
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mb-12 leading-relaxed">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some AI magic, let's talk.
          </p>

          <div className="flex flex-col gap-4 max-w-sm">
            <ContactMethod icon={<MailIcon />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
            <ContactMethod icon={<LinkedinIcon />} label="LinkedIn" value="Diwesh Sharma" href={social.linkedin} />
            <ContactMethod icon={<GithubIcon />} label="GitHub" value="@diweshsharma" href={social.github} />
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem]"
        >
          <h3 className="text-2xl font-heading font-bold mb-8">Send Me a Message</h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none placeholder:text-white/20"
                placeholder="How can I help you?"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Diwesh Sharma. All rights reserved.</p>
      </div>
    </section>
  );
}

function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      className="flex items-center gap-6 p-4 rounded-2xl glass-card hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{label}</p>
        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}
