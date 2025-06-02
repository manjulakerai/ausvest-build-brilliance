
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, label, delay }: StatItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <motion.div 
        className="text-4xl md:text-5xl font-bold text-[#3b62c0] mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-gray-600 font-medium">{label}</div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <StatItem value="30+" label="Projects Completed" delay={0.1} />
          <StatItem value="$60M+" label="Total Project Value" delay={0.2} />
          <StatItem value="30+" label="Years Experience" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
