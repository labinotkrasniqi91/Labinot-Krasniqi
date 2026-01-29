
import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <div className="bg-gray-900/30 rounded-3xl border border-gray-800 overflow-hidden">
      <div className="p-8 border-b border-gray-800">
        <h2 className="text-2xl font-bold">Choose Your Path</h2>
        <p className="text-gray-400 text-sm mt-1">Speed vs. Control in 2026</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-900/50">
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Feature</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-purple-400">Path A: Vibe Coding</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-blue-400">Path B: AI Architect (Pro)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            <tr>
              <td className="px-8 py-6 font-medium text-gray-300">Tools</td>
              <td className="px-8 py-6 text-gray-400">Base44, Despia, Bubble</td>
              <td className="px-8 py-6 text-gray-400">Cursor, LangGraph, FastAPI</td>
            </tr>
            <tr>
              <td className="px-8 py-6 font-medium text-gray-300">Best For</td>
              <td className="px-8 py-6 text-gray-400">Rapid prototypes, Personal apps</td>
              <td className="px-8 py-6 text-gray-400">Scalable SaaS, Enterprise tools</td>
            </tr>
            <tr>
              <td className="px-8 py-6 font-medium text-gray-300">Time to MVP</td>
              <td className="px-8 py-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold">1–3 Days</span>
              </td>
              <td className="px-8 py-6">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">1–2 Weeks</span>
              </td>
            </tr>
            <tr>
              <td className="px-8 py-6 font-medium text-gray-300">Learning Curve</td>
              <td className="px-8 py-6 text-gray-400">Very Low</td>
              <td className="px-8 py-6 text-gray-400">Moderate</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
