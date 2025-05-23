import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LuxuryHomeConstruction = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content */}
      <div className="pt-28 pb-20">
        {/* Hero */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury Home Construction</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Crafting stunning & luxurious residential buildings across Sydney & its suburbs for over 30 years.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                  Luxury Living
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">LUXURY HOME BUILDERS</h2>
                <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
                <p className="text-gray-600 mb-6">
                  For over three decades, Ausvest has crafted stunning luxury residences across Sydney and surrounding suburbs. 
                  With our impeccable excellence in building construction, we offer services that exceed our clients' expectations.
                </p>
                <p className="text-gray-600 mb-6">
                  At Ausvest, we take pride in our work culture that ensures efficient communication between you & our team. 
                  This communication approach allows us to deliver 100% satisfaction with every project we complete.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Custom luxury homes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Premium finishes & materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Architectural excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">30+ years industry experience</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="group bg-[#3b62c0] hover:bg-blue-700">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Luxury home with premium finishes]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Luxury Construction Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional luxury homes through a meticulous, client-focused approach
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Design",
                  description: "We begin with understanding your vision, preferences, and requirements for your dream luxury home."
                },
                {
                  step: "02",
                  title: "Planning & Approvals",
                  description: "Our experts handle all planning, documentation, and approval processes to ensure a smooth start."
                },
                {
                  step: "03", 
                  title: "Construction",
                  description: "Our skilled team brings your vision to life with precision, using only premium materials and finishes."
                },
                {
                  step: "04",
                  title: "Final Delivery",
                  description: "We complete a thorough quality inspection before handing over your stunning new luxury residence."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 shadow-lg border-l-4 border-[#3b62c0]"
                >
                  <div className="text-4xl font-bold text-[#3b62c0]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Dream Luxury Home?</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Let us create a stunning residence that exceeds your expectations
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#3b62c0] hover:bg-blue-700 rounded-none text-white px-8">
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LuxuryHomeConstruction;
