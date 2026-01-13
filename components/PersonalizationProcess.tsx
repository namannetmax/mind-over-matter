
import React from 'react';

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="relative p-8 border border-white/5 bg-neutral-900/30 group hover:border-red-700 transition-all duration-500 reveal">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-700 flex items-center justify-center text-white font-black text-xl italic group-hover:scale-110 transition-transform">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-4 mt-2 tracking-tight uppercase">{title}</h3>
    <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors">
      {desc}
    </p>
  </div>
);

const PersonalizationProcess: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-red-700 font-bold tracking-[0.4em] text-xs uppercase block mb-4">The Methodology</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">How We Build <span className="text-red-700">You</span></h2>
          <p className="max-w-2xl mx-auto text-white/50 font-light text-lg">
            Forget generic routines. We operate on a system of absolute personalization, 
            where every variable is tuned to your specific biological signature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep 
            number="01" 
            title="Bio-Mechanical Audit" 
            desc="We begin with a deep dive into your mobility, history, and metabolic baseline to understand exactly where you are."
          />
          <ProcessStep 
            number="02" 
            title="Strategic Blueprint" 
            desc="Your coach constructs a bespoke loading strategy, selecting specific machine-based movements that fit your structure."
          />
          <ProcessStep 
            number="03" 
            title="Precision Execution" 
            desc="Every session is 100% supervised, ensuring high-intensity output with clinically perfect form on elite equipment."
          />
          <ProcessStep 
            number="04" 
            title="Data-Driven Evolution" 
            desc="We track every gram of resistance and every second of tension, evolving your plan as your physiology adapts."
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalizationProcess;
