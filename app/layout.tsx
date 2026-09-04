import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Diwesh Sharma | AI/ML Engineer',
  description: 'AI/ML Engineer specializing in NLP, predictive modeling, and applied AI systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className={`font-sans min-h-screen pt-20 pb-10`}>
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
