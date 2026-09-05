import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Diwesh Sharma',
  description: 'AI/ML Engineer specializing in NLP, predictive modeling, and applied AI systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className={`font-sans min-h-screen bg-background bg-grid-white overflow-x-hidden relative`}>
        {/* Ambient Radial Glows */}
        <div className="pointer-events-none fixed inset-0 z-[-1] flex justify-center opacity-40">
          <div className="absolute top-[-10%] left-1/4 w-[80vw] md:w-[600px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[70vw] md:w-[500px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] md:w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
        </div>
        
        <Navbar />
        <div className="max-w-[1440px] mx-auto w-full relative z-0">
          {children}
        </div>
        <Chatbot />
      </body>
    </html>
  );
}
