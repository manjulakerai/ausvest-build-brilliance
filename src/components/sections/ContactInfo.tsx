
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#3b62c0] mb-6 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next construction project? Contact us directly using the information below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white shadow-lg p-8 text-center"
          >
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-[#3b62c0]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Phone</h3>
            <a href="tel:0412995208" className="text-[#3b62c0] hover:underline text-lg">
              0412 995 208
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-lg p-8 text-center"
          >
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-[#3b62c0]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <a href="mailto:hello@ausvestprojects.com.au" className="text-[#3b62c0] hover:underline text-lg break-words">
              hello@ausvestprojects.com.au
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white shadow-lg p-8 text-center"
          >
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-[#3b62c0]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-gray-600 text-lg">
              38/1 Limestone Road, Rouse Hill, 2155
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
