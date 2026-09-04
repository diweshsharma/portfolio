import Link from 'next/link';
import { Code, Briefcase, FileCode } from 'lucide-react';
import profileData from '@/data/profile.json';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg hover:text-primary transition-colors">
          Diwesh Sharma <span className="text-muted-foreground font-normal ml-1">/ AI/ML Engineer</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Skills
          </Link>
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Code className="w-5 h-5" />
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Briefcase className="w-5 h-5" />
          </a>
          <a
            href={profileData.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FileCode className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
