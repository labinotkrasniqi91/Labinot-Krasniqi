
import React from 'react';
import { Layer } from '../types';

interface LayerCardProps {
  layer: Layer;
}

const LayerCard: React.FC<LayerCardProps> = ({ layer }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500/20 to-blue-600/5 text-blue-400 border-blue-500/30';
      case 'purple': return 'from-purple-500/20 to-purple-600/5 text-purple-400 border-purple-500/30';
      case 'emerald': return 'from-emerald-500/20 to-emerald-600/5 text-emerald-400 border-emerald-500/30';
      case 'rose': return 'from-rose-500/20 to-rose-600/5 text-rose-400 border-rose-500/30';
      default: return 'from-gray-500/20 to-gray-600/5 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className={`p-6 rounded-3xl border bg-gradient-to-b ${getColorClasses(layer.color)} transition-all hover:scale-[1.02] hover:shadow-2xl`}>
      <div className="mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={layer.icon} />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{layer.title}</h3>
      <p className="text-sm opacity-80 mb-6 leading-relaxed h-12">
        {layer.description}
      </p>
      
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Stack 2026</span>
        <div className="flex flex-wrap gap-2">
          {layer.tools.map((tool, i) => (
            <span key={i} className="px-2 py-1 rounded bg-black/40 text-[11px] mono border border-white/10 text-white/80">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayerCard;
