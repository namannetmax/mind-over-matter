
import React from 'react';

const BrandIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 border-2 border-red-700 flex items-center justify-center transform rotate-45 shadow-[0_0_15px_rgba(185,28,28,0.3)]">
            <span className="text-red-700 text-2xl font-bold transform -rotate-45 uppercase">MoM</span>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 uppercase">
          Mind Over Matter <br />
          <span className="text-white/40 font-normal">&mdash; Elite Personal Training &mdash;</span>
        </h2>
        
        <div className="w-24 h-px bg-red-700 mx-auto mb-8" />
        
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          We reject the "one-size-fits-all" industry standard. 
          At Mind Over Matter, there are no generic programs. Every client receives a 
          meticulously crafted service focused on high-intensity training, biological efficiency, 
          and individual results.
        </p>
        
        <button className="px-12 py-4 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all text-xs tracking-widest font-bold uppercase">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default BrandIntro;
