
import React from 'react';

const OfferCTA: React.FC = () => {
  return (
    <section className="bg-red-700 py-24 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 reveal opacity-0 translate-y-10 transition-all duration-1000">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase leading-tight">
          Your first training <br /> session is free
        </h2>
        <p className="text-white/90 text-xl font-light mb-10 max-w-xl mx-auto">
          Experience the difference of research-based training. No obligations, just results.
        </p>
        <button className="bg-black text-white px-12 py-5 text-sm tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105 duration-300">
          MAKE AN APPOINTMENT
        </button>
      </div>
      
      {/* Texture overlays */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </section>
  );
};

export default OfferCTA;
