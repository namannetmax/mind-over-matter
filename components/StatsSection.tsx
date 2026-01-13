
import React from 'react';

const StatItem = ({ val, label }: { val: string, label: string }) => (
  <div className="text-center md:text-left reveal">
    <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
      {val}<span className="text-red-700">+</span>
    </div>
    <div className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">
      {label}
    </div>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <section className="bg-black py-20 px-6 lg:px-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        <StatItem val="10" label="Years Experience" />
        <StatItem val="500" label="Happy Clients" />
        <StatItem val="50" label="Expert Trainers" />
        <StatItem val="15k" label="Instagram Followers" />
      </div>
    </section>
  );
};

export default StatsSection;
