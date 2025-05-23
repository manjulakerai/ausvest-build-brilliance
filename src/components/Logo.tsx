
import { CSSProperties } from 'react';

interface LogoProps {
  className?: string;
  style?: CSSProperties;
}

const Logo = ({ className = "", style }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`} style={style}>
      <img 
        src="/lovable-uploads/f15f540a-d742-4f95-9720-3db9dc53146c.png" 
        alt="Ausvest Projects" 
        className="h-14 w-auto" /* Increased from h-12 to h-14 */
      />
    </div>
  );
};

export default Logo;
