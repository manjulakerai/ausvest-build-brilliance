
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactInfo {
  title: string;
  content: string;
}

const ContactSection = () => {
  const contactInfo: ContactInfo[] = [
    { title: "Phone", content: "0411 123 456" },
    { title: "Email", content: "info@ausvestprojects.com.au" },
    { title: "Location", content: "Sydney, NSW" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
              {contactInfo.map((item, index) => (
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

export default ContactSection;
