"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = { role: 'user' | 'assistant', content: string };

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I am the AI assistant for Diwesh Sharma. Ask me anything about his projects, skills, or experience!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    
    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMsg }),
      });
      
      if (!res.ok || !res.body) throw new Error('API Error');
      
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantMsg = '';
      
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const text = decoder.decode(value);
        assistantMsg += text;
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = assistantMsg;
          return newMessages;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't connect to my AI backend. You can still browse the portfolio normally!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(168,85,247,0.4)] z-40 transition-transform duration-300 hover:scale-110 ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open Ask AI"
      >
        <Bot className="w-6 h-6" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-md"><Sparkles className="w-4 h-4 text-primary" /></div>
                <div>
                  <h3 className="font-semibold text-sm">Ask AI</h3>
                  <p className="text-xs text-muted-foreground">Portfolio Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`flex items-center gap-2 mb-1 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      {msg.role === 'user' ? <User className="w-3 h-3 text-white/50" /> : <Bot className="w-3 h-3 text-primary" />}
                    </div>
                    <span className="text-xs text-white/40">{msg.role === 'user' ? 'You' : 'AI'}</span>
                  </div>
                  <div className={`p-3 max-w-[85%] text-sm rounded-xl whitespace-pre-wrap leading-relaxed ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-white/5 border border-white/10 rounded-tl-sm text-foreground/90'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground ml-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              )}
            </div>
            
            <form onSubmit={sendMessage} className="p-4 border-t border-white/10 bg-black">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Diwesh's skills or projects..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg pr-12 pl-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-1.5 bg-primary/20 text-primary rounded-md hover:bg-primary/30 disabled:opacity-50 disabled:hover:bg-primary/20 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
