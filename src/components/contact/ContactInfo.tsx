import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      content: "0412 995 208",
      href: "tel:0412995208",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@ausvestprojects.com.au",
      href: "mailto:hello@ausvestprojects.com.au",
      description: "Send us a message anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "38/1 Limestone Road, Rouse Hill, 2155",
      href: "https://maps.google.com/?q=38/1+Limestone+Road+Rouse+Hill+NSW+2155",
      description: "Visit our office"
    },
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="contact-info-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="contact-info-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your construction project? We're here to help with all your building needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactDetails.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#3b62c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3b62c0]/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-[#3b62c0]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{detail.title}</h3>
                    {detail.href ? (
                      <a 
                        href={detail.href}
                        className="text-[#3b62c0] hover:text-blue-700 font-semibold block mb-2 underline focus:outline-none focus:ring-2 focus:ring-[#3b62c0] focus:ring-offset-2 rounded"
                        target={detail.href.startsWith('http') ? '_blank' : undefined}
                        rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={`${detail.title}: ${detail.content}`}
                      >
                        {detail.content}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-semibold mb-2">{detail.content}</p>
                    )}
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;