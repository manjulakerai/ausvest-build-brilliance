
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  color: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, color, title, description, delay }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-none overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border-b-4 border-transparent hover:border-[#3b62c0]"
    >
      <div className="p-8">
        <div className={`w-16 h-16 ${color} rounded-none flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
          <div className="w-8 h-8 bg-current rounded-none"></div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>
        <Button variant="ghost" className="group/btn p-0 text-[#3b62c0] hover:text-blue-700">
          Learn More 
          <motion.div
            className="inline-block ml-1"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
