
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 lg:px-12 text-white/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Logo className="w-16 h-16" />
            <span className="font-bold tracking-tighter text-white">MIND OVER MATTER</span>
          </div>
          <p className="text-sm font-light leading-relaxed">
            Premium health & fitness studio dedicated to the science of human performance through research based exercise.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Schedules</h4>
          <ul className="text-sm space-y-3 font-light">
            <li>Mon - Fri: 06:00 - 21:00</li>
            <li>Saturday: 08:00 - 16:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Useful Links</h4>
          <ul className="text-sm space-y-3 font-light">
            <li><a href="#" className="hover:text-red-700 transition-colors">Training Philosophy</a></li>
            <li><a href="#" className="hover:text-red-700 transition-colors">Our Methodology</a></li>
            <li><a href="#" className="hover:text-red-700 transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-red-700 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Contact</h4>
          <ul className="text-sm space-y-3 font-light">
            <li>123 Elite Plaza, Suite 400</li>
            <li>London, United Kingdom</li>
            <li>contact@mindovermatter.fit</li>
            <li>+44 (0) 20 7946 0123</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-[0.2em] uppercase">
        <p>&copy; 2024 MIND OVER MATTER – HEALTH & FITNESS. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
