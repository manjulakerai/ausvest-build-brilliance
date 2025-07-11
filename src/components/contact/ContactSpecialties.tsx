
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const specialties = [
  {
    title: "Luxury Home Construction",
    description: "Custom-designed luxury homes with premium finishes and features.",
    link: "/services/luxury-home-construction"
  },
  {
    title: "Commercial Construction",
    description: "Premium commercial buildings and office developments.",
    link: "/services/commercial-construction"
  },
  {
    title: "Fit-out Construction",
    description: "Transform commercial spaces with our specialized fit-out services.",
    link: "/services/fitout-construction"
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

        <div className="grid md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                to={specialty.link}
                className="block p-6 bg-white shadow-md border-l-4 border-[#3b62c0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 mr-2 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/1e3b15f4-e23c-4368-8a8d-a2364fd83747.png" 
                      alt="Bullet point" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{specialty.title}</h3>
                </div>
                <p className="text-gray-600">{specialty.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSpecialties;
