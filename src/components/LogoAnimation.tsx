
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const LogoAnimation = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
      animate={{ opacity: animationComplete ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (animationComplete) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'hidden';
        }
      }}
      style={{ pointerEvents: animationComplete ? 'none' : 'auto' }}
    >
      <div className="relative w-64 h-64 flex flex-col items-center">
        {/* Logo Animation with Magical Movement */}
        <motion.div
          className="w-44 h-44 mb-8"
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            rotate: -180,
            x: -100,
            y: 50
          }}
          animate={{ 
            opacity: 1, 
            scale: [0.5, 1.2, 0.9, 1.1, 1],
            rotate: [0, 360, 0],
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1],
            rotate: { duration: 1.5, ease: "easeInOut" },
            x: { duration: 2, ease: "easeInOut" },
            y: { duration: 2, ease: "easeInOut" }
          }}
        >
          <motion.img 
            src="/lovable-uploads/f15f540a-d742-4f95-9720-3db9dc53146c.png"
            alt="Ausvest Projects Logo"
            className="w-full h-full object-contain"
            animate={{
              filter: [
                "brightness(1) hue-rotate(0deg)",
                "brightness(1.2) hue-rotate(10deg)",
                "brightness(1) hue-rotate(0deg)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: 1,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* AUSVEST Text */}
        <motion.div
          className="w-full mb-4"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: [0.8, 1.05, 1],
            rotate: [0, 2, -1, 0]
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut", 
            delay: 1.2,
            scale: { duration: 0.6 },
            rotate: { duration: 0.6 }
          }}
        >
          <img 
            src="/lovable-uploads/4f0e137a-c204-4ad2-a00c-d8b690718c79.png"
            alt="AUSVEST"
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* PROJECTS Text */}
        <motion.div 
          className="w-3/4"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: [0.9, 1.03, 1],
            y: 0,
            rotate: [0, -1, 1, 0]
          }}
          transition={{ 
            duration: 0.6, 
            delay: 1.8,
            ease: "easeOut",
            rotate: { duration: 0.5 }
          }}
        >
          <img 
            src="/lovable-uploads/8e0311d4-ea7b-4da9-8528-d73e23b27f16.png"
            alt="PROJECTS"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoAnimation;
