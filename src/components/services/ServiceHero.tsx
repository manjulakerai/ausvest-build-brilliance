
import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  description: string;
}

const ServiceHero = ({ title, description }: ServiceHeroProps) => {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
