
import { CSSProperties } from 'react';

interface LogoProps {
  className?: string;
  style?: CSSProperties;
}

const Logo = ({ className = "", style }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`} style={style}>
      <img 
        src="/lovable-uploads/e3962a70-9d53-4d95-8cca-397f42ed0f0a.png" 
        alt="Ausvest Projects" 
        className="h-14 w-auto"
      />
    </div>
  );
};

export default Logo;
