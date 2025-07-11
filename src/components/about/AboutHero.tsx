
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
    </section>
  );
};

export default AboutHero;
