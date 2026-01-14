
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'methods') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'methods') => {
    onNavigate?.(page);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-3 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <Logo className="w-14 h-14" />
          <span className="font-black tracking-tighter text-lg hidden sm:block">MIND OVER MATTER</span>
        </button>

        <nav className="hidden md:flex space-x-8 text-[11px] font-bold tracking-[0.2em] text-white/70">
          <button onClick={() => handleNavClick('home')} className="hover:text-red-600 transition-colors uppercase">Home</button>
          <button onClick={() => handleNavClick('methods')} className="hover:text-red-600 transition-colors uppercase">Methods</button>
          <a href="#" className="hover:text-red-600 transition-colors uppercase">Benefits</a>
          <a href="#" className="hover:text-red-600 transition-colors uppercase">Goals</a>
          <a href="#" className="hover:text-red-600 transition-colors uppercase">Questions</a>
          <a href="#" className="hover:text-red-600 transition-colors uppercase">Blog</a>
          <a href="#" className="hover:text-red-600 transition-colors uppercase">Contact</a>
        </nav>

        <button className="text-[10px] font-bold tracking-[0.3em] border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all uppercase">
          Enquire
        </button>
      </div>
    </header>
  );
};

export default Header;
