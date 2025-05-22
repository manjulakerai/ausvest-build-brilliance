
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/51b74c71-4fe0-491c-8176-361cc560cd4f.png')] bg-center bg-no-repeat opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="inline-block mb-6 px-4 py-1.5 bg-[#3b62c0]/10 border border-[#3b62c0]/20 rounded-full text-[#6f8fda]"
          >
            Sydney's Tier 1 Construction Partner
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            Fast, Lean &<br />
            <span className="text-[#6f8fda]">Built to Last</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            Construction, Fitouts & Refurbishments — We solve the biggest pain points: slow builds, 
            budget overruns, and poor communication. Delivering quality builds within budget and on schedule.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 }}
          >
            <Button 
              size="lg" 
              className="bg-[#3b62c0] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-none transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-none transition-all hover:-translate-y-0.5"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/70" />
        </motion.div>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
    </section>
  );
};

export default HeroSection;
