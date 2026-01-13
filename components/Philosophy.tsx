
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="bg-neutral-950 flex flex-col lg:flex-row min-h-[600px]">
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center reveal">
        <span className="text-red-700 text-xs font-bold tracking-[0.3em] mb-4 block uppercase">Our Core</span>
        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">Unleashing Potential With <br /><span className="text-red-700">Intense</span> Fitness</h2>
        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
          <p>
            Efficiency isn't just about speed; it's about the efficacy of every rep. We leverage 
            scientific principles of muscle recruitment and recovery to optimize your results.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-700 flex-shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-sm font-bold tracking-wide uppercase">Science-backed methodologies</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-700 flex-shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-sm font-bold tracking-wide uppercase">Safety through controlled machine loads</span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-700 flex-shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-sm font-bold tracking-wide uppercase">Measurable long-term clinical data</span>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <button className="bg-red-700 text-white px-10 py-4 text-xs tracking-widest font-bold uppercase hover:bg-white hover:text-black transition-all">
            More About Us
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?q=80&w=2070&auto=format&fit=crop" 
          alt="Cable Machine Training" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent lg:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:hidden block" />
      </div>
    </section>
  );
};

export default Philosophy;
