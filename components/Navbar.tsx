
import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'layers', label: 'Architecture' },
    { id: 'steps', label: 'Execution' },
    { id: 'agent', label: 'AI Architect' },
    { id: 'cheat-sheet', label: 'Cheat Sheet' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-xl border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveSection('layers')}>
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg group-hover:rotate-12 transition-transform">
            A
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">ARCHITECT <span className="text-gray-500">2026</span></span>
        </div>

        <div className="flex gap-2 sm:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
