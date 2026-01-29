
import React from 'react';
import { Step } from '../types';

interface BlueprintStepProps {
  step: Step;
}

const BlueprintStep: React.FC<BlueprintStepProps> = ({ step }) => {
  return (
    <div className="group relative flex gap-8 items-start">
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-2xl font-black text-purple-500 group-hover:scale-110 transition-transform">
        0{step.id}
      </div>
      
      <div className="flex-grow pt-2">
        <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
        <p className="text-purple-400 font-medium text-sm mb-3">{step.subtitle}</p>
        <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
          {step.description}
        </p>
        
        <div className="bg-black/40 border border-gray-800 rounded-xl p-4 flex items-center justify-between group-hover:border-purple-500/50 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-bold mono text-xs">PROMPT</span>
            <span className="text-sm mono text-gray-300 italic">"{step.actionPrompt}"</span>
          </div>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(step.actionPrompt);
              alert("Prompt copied to clipboard!");
            }}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-500 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueprintStep;
