
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in touch with us</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Ready to discuss your construction project? Contact us directly using the information below.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-semibold text-slate-900 mr-2">Phone:</span>
                      <a href="tel:+61412995208" className="text-[#3b62c0] hover:underline">0412 995 208</a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-slate-900 mr-2">Email:</span>
                      <a href="mailto:hello@ausvestprojects.com.au" className="text-[#3b62c0] hover:underline">hello@ausvestprojects.com.au</a>
                    </div>
                    <div className="flex items-start">
                      <span className="font-semibold text-slate-900 mr-2">Address:</span>
                      <a 
                        href="https://maps.google.com/?q=38/1+Limestone+Road,+Rouse+Hill+NSW+2155,+Australia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3b62c0] hover:underline"
                      >
                        38/1 Limestone Road, Rouse Hill, 2155
                      </a>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="w-full bg-[#3b62c0] hover:bg-blue-700 text-white px-6 py-3 rounded-none transform hover:-translate-y-0.5 transition-all shadow-lg"
                  >
                    Visit Our Contact Page
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
