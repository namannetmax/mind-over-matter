
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-40 px-6 text-center border-t border-white/5 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 reveal">
        <p className="text-red-700 text-xs tracking-[0.4em] font-bold uppercase mb-6">Start Today</p>
        <h3 className="text-5xl md:text-7xl font-black mb-12 leading-tight tracking-tighter uppercase">
          Focus on your <span className="text-red-700">Workouts</span> <br /> Not your limits
        </h3>
        <button className="bg-white text-black px-16 py-6 text-sm tracking-[0.2em] font-bold hover:bg-red-700 hover:text-white transition-all transform hover:-translate-y-2 uppercase shadow-xl">
          Make An Appointment
        </button>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-outline opacity-5 pointer-events-none select-none">
        MOM
      </div>
    </section>
  );
};

export default FinalCTA;
