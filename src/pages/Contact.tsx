
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        {/* Contact Hero */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Connect with Sydney's premier luxury construction specialists.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
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

        {/* Map Section - Placeholder */}
        <section className="py-8">
          <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-center p-4">
              [Suggested: Interactive map showing Ausvest's Sydney office location]
            </p>
          </div>
        </section>

        {/* Project Types */}
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
              {[
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
              ].map((specialty, index) => (
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
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
