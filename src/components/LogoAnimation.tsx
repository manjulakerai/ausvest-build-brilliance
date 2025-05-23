
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
        {/* Logo Links Animation */}
        <div className="relative w-32 h-32 mb-4">
          {/* Blue Link */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img 
              src="/lovable-uploads/bbcb5ffa-b10c-4e01-aa48-c9c88f9a6341.png"
              alt="Blue link"
              className="w-full h-auto"
            />
          </motion.div>

          {/* First Gray Link */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <img 
              src="/lovable-uploads/f2cf4cca-6d64-4692-8a1f-c68bffa3edee.png"
              alt="Gray link 1"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Second Gray Link */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <img 
              src="/lovable-uploads/d94d808e-1eed-4566-9498-54699d91705c.png"
              alt="Gray link 2"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* AUSVEST Text */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
        >
          <img 
            src="/lovable-uploads/4f0e137a-c204-4ad2-a00c-d8b690718c79.png"
            alt="AUSVEST"
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* PROJECTS Text */}
        <motion.div 
          className="w-3/4 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
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
