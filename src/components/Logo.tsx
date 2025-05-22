
import { CSSProperties } from 'react';

interface LogoProps {
  className?: string;
  style?: CSSProperties;
}

const Logo = ({ className = "", style }: LogoProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`} style={style}>
      <div className="flex">
        <svg width="36" height="36" viewBox="0 0 300 300" fill="none">
          <path d="M150 50C94.77 50 50 94.77 50 150C50 205.23 94.77 250 150 250" stroke="#3b62c0" strokeWidth="40" strokeLinecap="round"/>
          <path d="M150 50C205.23 50 250 94.77 250 150C250 205.23 205.23 250 150 250" stroke="#888888" strokeWidth="40" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold tracking-wider text-[#3b62c0]">AUSVEST</span>
        <span className="text-xs tracking-wider text-gray-500">PROJECTS</span>
      </div>
    </div>
  );
};

export default Logo;
