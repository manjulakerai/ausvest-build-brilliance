
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "text-white" }: LogoProps) => {
  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-14 h-14">
        <img 
          src="/lovable-uploads/f15f540a-d742-4f95-9720-3db9dc53146c.png"
          alt="Ausvest Projects Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="w-28">
          <img 
            src="/lovable-uploads/4f0e137a-c204-4ad2-a00c-d8b690718c79.png"
            alt="AUSVEST"
            className="w-full h-auto"
          />
        </div>
        <div className="w-20 -mt-1">
          <img 
            src="/lovable-uploads/8e0311d4-ea7b-4da9-8528-d73e23b27f16.png"
            alt="PROJECTS"
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;
