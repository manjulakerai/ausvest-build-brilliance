
import { CSSProperties } from 'react';

interface LogoProps {
  className?: string;
  style?: CSSProperties;
}

const Logo = ({ className = "", style }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`} style={style}>
      <img 
        src="/lovable-uploads/777d067c-3a81-40fb-8266-253cfd8a34bb.png" 
        alt="Ausvest Projects" 
        className="h-10 w-auto" 
      />
    </div>
  );
};

export default Logo;
