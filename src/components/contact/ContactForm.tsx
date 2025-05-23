
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Get In Touch</h2>
            <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
            <p className="text-xl text-gray-600 mb-8">
              Ready to discuss your luxury construction project? Our team is here to bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Phone className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-gray-600">0411 123 456</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Mail className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@ausvestprojects.com.au</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <MapPin className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                  <p className="text-gray-600">Sydney, NSW</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Clock className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start"
              >
                <div className="bg-blue-50 p-3 mr-4">
                  <Building className="h-6 w-6 text-[#3b62c0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Experience</h3>
                  <p className="text-gray-600">Over 30 years in luxury construction</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none">
                      <option>Luxury Home Construction</option>
                      <option>Duplex Development</option>
                      <option>Home Renovation & Addition</option>
                      <option>Commercial Construction</option>
                      <option>Maintenance Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#3b62c0] hover:bg-blue-700 text-white px-6 py-3 rounded-none transform hover:-translate-y-0.5 transition-all shadow-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
