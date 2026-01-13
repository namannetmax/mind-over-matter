
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", light = false }) => {
  const color = light ? "white" : "#b91c1c"; // tailwind red-700 hex
  
  return (
    <div className={`relative flex flex-col items-center justify-center text-center ${className}`}>
      {/* Red Circular Border */}
      <div className="absolute inset-0 border-[1.5px] rounded-full border-red-700/80"></div>
      
      {/* Kettlebell & Dumbbell Icons (Simplified SVG) */}
      <div className="z-10 flex flex-col items-center -mt-1">
        <svg viewBox="0 0 100 60" className="w-8 h-8 fill-red-700">
          {/* Kettlebell */}
          <path d="M35 25c0-5.5 4.5-10 10-10s10 4.5 10 10v2h5v-2c0-8.3-6.7-15-15-15s-15 6.7-15 15v2h5v-2zM45 27c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z" />
          {/* Dumbbell */}
          <rect x="55" y="40" width="30" height="6" rx="1" />
          <rect x="52" y="32" width="6" height="22" rx="2" />
          <rect x="82" y="32" width="6" height="22" rx="2" />
        </svg>
        
        <div className="mt-1 leading-none">
          <div className="text-[7px] font-black tracking-tighter text-red-700 uppercase">MIND OVER MATTER</div>
          <div className="text-[5px] font-medium text-red-700/80 uppercase">Health & Fitness</div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
