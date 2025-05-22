
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
      <div className="relative w-64 h-64">
        {/* Blue Link */}
        <motion.div
          className="absolute"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <svg width="120" height="120" viewBox="0 0 300 300" fill="none">
            <path d="M150 50C94.77 50 50 94.77 50 150C50 205.23 94.77 250 150 250" stroke="#3b62c0" strokeWidth="40" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* Gray Link */}
        <motion.div
          className="absolute"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <svg width="120" height="120" viewBox="0 0 300 300" fill="none">
            <path d="M150 50C205.23 50 250 94.77 250 150C250 205.23 205.23 250 150 250" stroke="#888888" strokeWidth="40" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* AUSVEST Text */}
        <motion.div
          className="absolute -bottom-16 w-full text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
        >
          <div className="text-4xl font-bold tracking-wider text-[#3b62c0]">AUSVEST</div>
          <motion.div 
            className="text-xl text-gray-400 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          >
            PROJECTS
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoAnimation;
