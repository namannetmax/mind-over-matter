
import React from 'react';

const TailoredProgram: React.FC = () => {
  return (
    <section className="bg-black flex flex-col lg:flex-row-reverse min-h-[600px]">
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center reveal">
        <span className="text-red-700 text-xs font-bold tracking-[0.3em] mb-4 block uppercase">Personalized</span>
        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">A Perfectly <br /> Tailored Program</h2>
        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
          <p>
            We don't believe in generic routines. Every program is built around your unique 
            biomechanics, goals, and metabolic profile using state-of-the-art equipment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-white font-bold mb-2 tracking-widest uppercase text-xs border-l-2 border-red-700 pl-4">Individual Goals</h4>
              <p className="text-sm text-white/50">Structured specifically for your body type and metabolic needs.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 tracking-widest uppercase text-xs border-l-2 border-red-700 pl-4">Personal Intensity</h4>
              <p className="text-sm text-white/50">Safe, high-intensity machine sets for maximum fiber recruitment.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 tracking-widest uppercase text-xs border-l-2 border-red-700 pl-4">Progression</h4>
              <p className="text-sm text-white/50">Detailed data tracking to ensure continuous adaptation.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 tracking-widest uppercase text-xs border-l-2 border-red-700 pl-4">Expert Coaching</h4>
              <p className="text-sm text-white/50">Constant technical supervision for perfect execution.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" 
          alt="Modern Gym Machine" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent lg:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden block" />
      </div>
    </section>
  );
};

export default TailoredProgram;
