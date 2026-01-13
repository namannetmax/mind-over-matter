
import React from 'react';
import Logo from './Logo';

const BrandIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="flex justify-center mb-10">
          <Logo className="w-24 h-24" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 uppercase">
          Mind Over Matter <br />
          <span className="text-white/40 font-normal">&mdash; Research Based Exercise &mdash;</span>
        </h2>
        
        <div className="w-24 h-px bg-red-700 mx-auto mb-8" />
        
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          We reject the "one-size-fits-all" industry standard. 
          At Mind Over Matter, every client receives a meticulously crafted service 
          founded on absolute **research based exercise**, biological efficiency, and high-intensity principles.
        </p>
        
        <button className="px-12 py-4 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all text-xs tracking-widest font-bold uppercase">
          Experience the Science
        </button>
      </div>
    </section>
  );
};

export default BrandIntro;
