
import { motion } from 'framer-motion';
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Premium Construction Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-[#3b62c0] mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            With over 30 years of experience, we deliver exceptional construction services across residential and commercial sectors.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon="building"
            color="bg-blue-100"
            title="Luxury Home Construction"
            description="Custom-designed luxury residences with premium finishes and exceptional attention to detail, built to exacting standards."
            delay={0.2}
            linkTo="/services"
          />
          
          <ServiceCard
            icon="office"
            color="bg-indigo-100"
            title="Duplex & Multi-Home Development"
            description="Specialized duplex and multi-dwelling developments that maximize land value and deliver exceptional investment returns."
            delay={0.4}
            linkTo="/services"
          />
          
          <ServiceCard
            icon="tools"
            color="bg-purple-100" 
            title="Home Renovation & Extension"
            description="Transform your existing home with expertly crafted renovations, extensions, and additions that enhance livability and value."
            delay={0.6}
            linkTo="/services"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
