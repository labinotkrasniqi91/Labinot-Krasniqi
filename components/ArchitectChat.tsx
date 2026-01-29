
import React, { useState, useRef, useEffect } from 'react';
import { generateArchitectAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const ArchitectChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const advice = await generateArchitectAdvice(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: advice }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "The architectural grid is experiencing high latency. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden flex flex-col h-[650px] shadow-2xl">
      <div className="p-6 border-b border-gray-800 bg-gray-900/80 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-black">
            AI
          </div>
          <div>
            <h3 className="font-bold text-white">System Architect v2026</h3>
            <p className="text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              Core Interface Active
            </p>
          </div>
        </div>
        <div className="text-[10px] mono text-gray-600 hidden sm:block">GEMINI_3_FLASH_DIRECT_LINK</div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-10">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 text-gray-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Hello, Architect.</h4>
            <p className="text-gray-500 text-sm">Describe the AI application you want to build. I will break down the orchestration, knowledge, and model layers for you.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setInput("Build a legal research agent for startups")}
                className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full text-xs text-gray-300 transition-colors"
              >
                Legal Research Agent
              </button>
              <button 
                onClick={() => setInput("Create a multi-agent system for travel planning")}
                className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full text-xs text-gray-300 transition-colors"
              >
                Travel Planner System
              </button>
            </div>
          </div>
        )}
        
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-purple-600 text-white shadow-lg' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-200'
            }`}>
              <div className="whitespace-pre-wrap leading-relaxed prose prose-invert prose-sm">
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-4 flex gap-2">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 bg-gray-900/80">
        <div className="relative flex items-center">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your app concept (e.g., 'An AI fitness coach with computer vision')..."
            className="w-full bg-black border border-gray-800 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-purple-500 transition-colors text-sm"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-3 p-2 bg-white text-black rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white transition-all shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArchitectChat;
