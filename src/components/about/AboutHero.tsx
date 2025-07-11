
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ausvest</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Three decades of creating exceptional buildings across Sydney and beyond.
          </p>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="cursor-pointer hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2"
          aria-label="Scroll to content"
        >
          <ChevronDown className="text-white size-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutHero;
