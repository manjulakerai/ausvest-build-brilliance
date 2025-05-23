
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5b29a271-b608-416d-9d0a-c0b981181d66.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="inline-block mb-6 px-4 py-1.5 bg-[#3b62c0]/10 border border-[#3b62c0]/20 rounded-full text-[#6f8fda]"
          >
            Sydney's Premier Luxury Builder - Established 1993
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0 }}
          >
            Crafting Luxury<br />
            <span className="text-[#6f8fda]">For Over 30 Years</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
          >
            From stunning residential estates to premium commercial spaces — we create extraordinary 
            buildings with impeccable attention to detail, delivering exceptional quality on time and on budget.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.4 }}
          >
            <a href="tel:0412995208">
              <Button 
                size="lg" 
                className="bg-[#3b62c0] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-none transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Call Us Now
              </Button>
            </a>
            <Link to="/projects">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-white text-slate-900 hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-none transition-all hover:-translate-y-0.5"
              >
                View Our Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.6 }}
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
