
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-700 rounded-sm flex items-center justify-center transform rotate-45">
            <span className="text-white font-bold transform -rotate-45">M</span>
          </div>
          <span className="font-bold tracking-tighter text-lg hidden sm:block">MIND OVER MATTER</span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest text-white/70">
          <a href="#" className="hover:text-red-600 transition-colors">PHILOSOPHY</a>
          <a href="#" className="hover:text-red-600 transition-colors">PROGRAMS</a>
          <a href="#" className="hover:text-red-600 transition-colors">FAQ</a>
        </nav>

        <button className="text-xs tracking-widest border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all">
          ENQUIRE
        </button>
      </div>
    </header>
  );
};

export default Header;
