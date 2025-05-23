
import { motion } from "framer-motion";

const TeamHero = () => {
  return (
    <section className="relative py-16 bg-slate-900 text-white">
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/lovable-uploads/b6385a70-a870-457e-b67a-fe090357bd95.png')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Meet the experienced professionals who bring your projects to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;
