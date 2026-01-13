
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center bg-gym-hero px-6 lg:px-24 overflow-hidden">
      <div className="max-w-4xl z-10 space-y-6">
        <span className="text-red-700 font-bold tracking-[0.5em] text-xs uppercase block reveal">Premium Research Based Exercise</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] reveal" style={{ transitionDelay: '0.2s' }}>
          KEEP BODY <br />
          <span className="text-white">FIT & </span>
          <span className="text-red-700">STRONG</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-white/60 font-light leading-relaxed reveal" style={{ transitionDelay: '0.4s' }}>
          Elite, 100% bespoke performance strategies. We apply elite kinesiology and research based exercise to ensure your progress is clinical and constant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-8 reveal" style={{ transitionDelay: '0.6s' }}>
          <button className="bg-red-700 text-white px-12 py-5 text-sm tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase">
            Book Consultation
          </button>
          <button className="border border-white/20 text-white px-12 py-5 text-sm tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase">
            Our Approach
          </button>
        </div>
      </div>
      
      {/* Cinematic Overlays */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-1/2 right-[-5%] transform -translate-y-1/2 text-[20vw] font-black text-outline pointer-events-none select-none uppercase">
        Research
      </div>
    </section>
  );
};

export default Hero;
