
import React from 'react';

const ProgramCard = ({ title, desc, icon, active = false }: { title: string, desc: string, icon: React.ReactNode, active?: boolean }) => (
  <div className={`p-10 border transition-all duration-500 group cursor-pointer ${active ? 'bg-red-700 border-red-700' : 'bg-neutral-900/50 border-white/5 hover:border-red-700 hover:bg-neutral-900'}`}>
    <div className={`w-12 h-12 mb-8 flex items-center justify-center transition-colors ${active ? 'text-white' : 'text-red-700 group-hover:text-white'}`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className={`text-sm leading-relaxed ${active ? 'text-white/80' : 'text-white/50 group-hover:text-white/70'}`}>
      {desc}
    </p>
    <div className="mt-8 flex items-center text-xs font-bold tracking-widest uppercase">
      <span>Read More</span>
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
);

const ProgramsGrid: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
        <div>
          <span className="text-red-700 font-bold tracking-[0.3em] text-xs uppercase block mb-2">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Explore Our Program</h2>
        </div>
        <button className="text-xs font-bold tracking-widest border border-white/10 px-8 py-4 hover:bg-white hover:text-black transition-all">
          VIEW ALL SERVICES
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal" style={{ transitionDelay: '0.2s' }}>
        <ProgramCard 
          active
          title="Cardio Strength"
          desc="High-intensity intervals designed to maximize metabolic burn and improve heart health."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
        />
        <ProgramCard 
          title="Fat Loss"
          desc="Precision nutrition and resistance training to preserve lean mass while shedding body fat."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" /></svg>}
        />
        <ProgramCard 
          title="Muscle Gain"
          desc="Hypertrophy focused programs utilizing cable machines and targeted isolation for growth."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        />
        <ProgramCard 
          title="Elite Performance"
          desc="Advanced athletic conditioning for peak performance in sport and daily life."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>
    </section>
  );
};

export default ProgramsGrid;
