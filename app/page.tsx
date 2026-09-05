import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Profiles from '@/components/Profiles';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Profiles />
      <Certifications />
      <Contact />
    </main>
  );
}
