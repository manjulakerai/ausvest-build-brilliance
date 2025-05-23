
import { CSSProperties } from 'react';

interface LogoProps {
  className?: string;
  style?: CSSProperties;
  variant?: 'default' | 'full';
}

const Logo = ({ className = "", style, variant = 'default' }: LogoProps) => {
  if (variant === 'full') {
    return (
      <div className={`flex items-center ${className}`} style={style}>
        <img 
          src="/lovable-uploads/777d067c-3a81-40fb-8266-253cfd8a34bb.png" 
          alt="Ausvest Projects" 
          className="h-10 w-auto" 
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`} style={style}>
      <div className="flex mb-1">
        <div className="relative w-10 h-10">
          <img src="/lovable-uploads/bbcb5ffa-b10c-4e01-aa48-c9c88f9a6341.png" alt="Blue link" className="absolute inset-0 w-full h-full" />
          <img src="/lovable-uploads/f2cf4cca-6d64-4692-8a1f-c68bffa3edee.png" alt="Gray link 1" className="absolute inset-0 w-4/5 h-4/5 transform -translate-x-0.5" />
          <img src="/lovable-uploads/d94d808e-1eed-4566-9498-54699d91705c.png" alt="Gray link 2" className="absolute inset-0 w-4/5 h-4/5 transform translate-x-0.5" />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <img src="/lovable-uploads/4f0e137a-c204-4ad2-a00c-d8b690718c79.png" alt="AUSVEST" className="h-4 w-auto" />
        <img src="/lovable-uploads/8e0311d4-ea7b-4da9-8528-d73e23b27f16.png" alt="PROJECTS" className="h-2 w-auto" />
      </div>
    </div>
  );
};

export default Logo;
