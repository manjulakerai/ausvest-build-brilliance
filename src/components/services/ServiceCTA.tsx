
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonColor: string;
}

const ServiceCTA = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  buttonColor 
}: ServiceCTAProps) => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button 
              size="lg" 
              className={`${buttonColor} rounded-none text-white px-8`}
            >
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
