
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/51b74c71-4fe0-491c-8176-361cc560cd4f.png')] bg-center bg-no-repeat opacity-5"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Create Your Dream Space?
        </motion.h2>
        <motion.p 
          className="text-xl text-blue-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's bring your vision to life with our 30+ years of luxury construction expertise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-[#3b62c0] px-8 py-6 text-lg rounded-none shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Book Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
