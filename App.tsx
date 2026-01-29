
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LayerCard from './components/LayerCard';
import ComparisonTable from './components/ComparisonTable';
import BlueprintStep from './components/BlueprintStep';
import ArchitectChat from './components/ArchitectChat';
import { Layer, Step } from './types';

const LAYERS: Layer[] = [
  {
    title: "Application Layer",
    description: "The UI where human-agent interaction happens.",
    tools: ["Next.js", "Streamlit", "Base44", "Tailwind"],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "blue"
  },
  {
    title: "Orchestration Layer",
    description: "The 'Brain' that decides which tools and paths to take.",
    tools: ["LangGraph", "CrewAI", "PydanticAI"],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "purple"
  },
  {
    title: "Knowledge Layer",
    description: "Your custom data stored for RAG and context injection.",
    tools: ["Pinecone", "Supabase Vector", "Weaviate"],
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    color: "emerald"
  },
  {
    title: "Model Layer",
    description: "The raw intelligence providing reasoning capabilities.",
    tools: ["Gemini 3 Pro", "GPT-4o", "Llama 3.1", "Claude 3.5"],
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    color: "rose"
  }
];

const STEPS: Step[] = [
  {
    id: 1,
    title: "The Vibe Coding Scaffold",
    subtitle: "Skip the boilerplate, start with a prompt.",
    description: "Use Cursor Composer to scaffold your Next.js frontend and Supabase backend in seconds.",
    actionPrompt: "Build a dashboard with file uploads and vector storage..."
  },
  {
    id: 2,
    title: "Implement Agentic Logic",
    subtitle: "Intelligence that acts, not just talks.",
    description: "Define workflows where your agent can browse, search, and self-correct using LangGraph.",
    actionPrompt: "Create a cyclic graph for research agents..."
  },
  {
    id: 3,
    title: "Grounding (RAG)",
    subtitle: "Context is the ultimate moat.",
    description: "Feed your agent specific data by vectorizing assets and retrieving relevant chunks.",
    actionPrompt: "Setup embedding pipeline for PDF documentation..."
  },
  {
    id: 4,
    title: "Deploy in One Click",
    subtitle: "From dev to production instantly.",
    description: "Push to GitHub and deploy on Vercel or Railway with environment variables auto-injected.",
    actionPrompt: "Connect Vercel to main branch..."
  }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('layers');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-purple-500/30">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
        {/* Header Hero */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Architect Your 2026 AI App
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The "old path" of learning basics for months is dead. Build your functional MVP in days using the modern agentic blueprint.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveSection('agent')}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Consult the AI Architect
            </button>
            <button 
              onClick={() => setActiveSection('paths')}
              className="px-8 py-3 bg-gray-900 border border-gray-800 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
            >
              Compare Paths
            </button>
          </div>
        </div>

        {/* Section: Architecture Layers */}
        {activeSection === 'layers' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {LAYERS.map((layer, idx) => (
                <LayerCard key={idx} layer={layer} />
              ))}
            </div>
            <div className="mt-20">
              <ComparisonTable />
            </div>
          </div>
        )}

        {/* Section: Step-by-Step Execution */}
        {activeSection === 'steps' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold border-l-4 border-purple-500 pl-4 mb-10">Step-by-Step Execution</h2>
            <div className="grid grid-cols-1 gap-12">
              {STEPS.map((step) => (
                <BlueprintStep key={step.id} step={step} />
              ))}
            </div>
          </div>
        )}

        {/* Section: AI Agent Consultation */}
        {activeSection === 'agent' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
            <ArchitectChat />
          </div>
        )}

        {/* Section: Success Cheat Sheet */}
        {activeSection === 'cheat-sheet' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <div className="text-purple-400 mb-4 font-bold uppercase tracking-widest text-xs">Principal 01</div>
              <h3 className="text-2xl font-bold mb-3">Context is King</h3>
              <p className="text-gray-400">Most AI apps fail because they give generic answers. Use Context Engineering to feed the AI exactly what it needs for the task.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <div className="text-emerald-400 mb-4 font-bold uppercase tracking-widest text-xs">Principal 02</div>
              <h3 className="text-2xl font-bold mb-3">The 80/20 Rule</h3>
              <p className="text-gray-400">Let AI write 80% of the code. Your job is to review the architecture and ensure the "user journey" makes sense and flows naturally.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <div className="text-rose-400 mb-4 font-bold uppercase tracking-widest text-xs">Principal 03</div>
              <h3 className="text-2xl font-bold mb-3">Human-in-the-Loop</h3>
              <p className="text-gray-400">For high-stakes apps (finance, health), always build a step where a human must "approve" or "sanity check" the AI's action.</p>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-900 py-12 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>© 2026 AI Architect Blueprint. Built for the future of orchestration.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Vibe Coding Guide</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
