
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
      {animationComplete ? (
        <img 
          src="/lovable-uploads/777d067c-3a81-40fb-8266-253cfd8a34bb.png"
          alt="Ausvest Projects"
          className="w-64 h-auto"
        />
      ) : (
        <div className="relative w-64 h-64 flex flex-col items-center">
          {/* Logo Animation */}
          <motion.div
            className="w-44 h-44 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="/lovable-uploads/f15f540a-d742-4f95-9720-3db9dc53146c.png"
              alt="Ausvest Projects Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          {/* AUSVEST Text */}
          <motion.div
            className="w-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <img 
              src="/lovable-uploads/8e0311d4-ea7b-4da9-8528-d73e23b27f16.png"
              alt="PROJECTS"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default LogoAnimation;
