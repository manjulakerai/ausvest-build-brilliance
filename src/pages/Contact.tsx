
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

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
                Let's discuss your construction project and how we can help bring it to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section id="contact" className="py-16">
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
                  Ready to discuss your next construction project? Let's talk about how we can help.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Phone", content: "0411 123 456" },
                    { title: "Email", content: "info@ausvestprojects.com.au" },
                    { title: "Office Hours", content: "Monday-Friday: 8:00 AM - 5:00 PM" },
                    { title: "Location", content: "Sydney, NSW" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 flex items-center">
                        <span className="w-4 h-1 bg-[#3b62c0] mr-3"></span> 
                        {item.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold text-slate-900 mb-4">Our Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sydney CBD", "North Shore", "Eastern Suburbs", 
                      "Inner West", "Western Sydney", "Hills District", 
                      "Northern Beaches", "Sutherland Shire"
                    ].map((area, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
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
                          <option>Residential</option>
                          <option>Commercial</option>
                          <option>Remediation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget (Approximate)</label>
                        <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none">
                          <option>Under $100,000</option>
                          <option>$100,000 - $500,000</option>
                          <option>$500,000 - $1,000,000</option>
                          <option>$1,000,000 - $5,000,000</option>
                          <option>$5,000,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#3b62c0] focus:border-transparent outline-none"
                          placeholder="Tell us about your project..."
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

        {/* Map Section (Placeholder) */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Our Location</h3>
              <p className="text-gray-600">Serving the greater Sydney metropolitan area</p>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <p className="text-gray-500 text-center p-4">
                [Suggested: Embed Google Maps showing your office location or service area]
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
