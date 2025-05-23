
import { motion } from "framer-motion";

const specialties = [
  {
    title: "Luxury Home Construction",
    description: "Custom-designed luxury homes with premium finishes and features."
  },
  {
    title: "Duplex Developments",
    description: "Maximize your land value with our dual occupancy solutions."
  },
  {
    title: "Home Extensions & Additions",
    description: "Expand your living space with seamlessly integrated extensions."
  },
  {
    title: "Commercial Construction",
    description: "Premium retail and office spaces built to exacting standards."
  },
  {
    title: "Maintenance Services",
    description: "Comprehensive maintenance for residential and commercial properties."
  },
  {
    title: "Retail Fit-outs",
    description: "Transform commercial spaces with our specialized fit-out services."
  }
];

const ContactSpecialties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Specialties</h2>
          <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over three decades of experience, we excel in various construction specialties.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white shadow-md border-l-4 border-[#3b62c0]"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{specialty.title}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSpecialties;
