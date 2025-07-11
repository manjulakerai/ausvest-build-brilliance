
import { CSSProperties } from 'react';

interface LogoProps {
  className?: string;
  style?: CSSProperties;
}

const Logo = ({ className = "", style }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`} style={style}>
      <img 
        src="/lovable-uploads/efe4365f-10ee-45b4-a6c4-7d80dbdedad0.png" 
        alt="Ausvest Projects" 
        className="h-16 w-auto"
      />
    </div>
  );
};

export default Logo;
