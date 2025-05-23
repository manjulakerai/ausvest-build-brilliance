
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const DuplexConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Duplex Construction</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Specialized duplex building solutions that maximize land value and provide exceptional living environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-1 bg-indigo-50 rounded-full text-indigo-600 font-medium mb-4">
                  Dual Occupancy
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">DUPLEX BUILDERS SYDNEY</h2>
                <div className="h-1 w-20 bg-indigo-600 mb-6"></div>
                <p className="text-gray-600 mb-6">
                  With the rising popularity of Dual Occupancy dwellings in Sydney, the demand for expert Duplex Home builders 
                  has never been higher. Such homes offer significantly more flexibility for your land usage and boost your property's value.
                </p>
                <p className="text-gray-600 mb-6">
                  If you're looking for a suitable Duplex housing solution, our team at Ausvest will guide you through every step of 
                  the process. We specifically focus on your unique needs to create a perfect home that best suits your family's lifestyle.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Maximized land value</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Custom duplex designs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Dual income potential</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Premium construction quality</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="group bg-indigo-600 hover:bg-indigo-700">
                    Discuss Your Duplex Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Modern duplex development with contemporary architecture]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefits of Duplex Construction</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover why more Sydney homeowners are choosing duplex developments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Investment Potential",
                  description: "Generate rental income from the second dwelling or sell it separately while living in the other."
                },
                {
                  title: "Multi-generational Living", 
                  description: "Create connected yet separate living spaces for extended family members while maintaining privacy."
                },
                {
                  title: "Increased Property Value",
                  description: "Significantly boost your land value by converting a single dwelling block into two premium residences."
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <div className="h-1 w-10 bg-indigo-600 mb-4"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Maximize Your Property's Potential?</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Get expert advice on transforming your land into a premium duplex development
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 rounded-none text-white px-8">
                  Book a Free Consultation
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

export default DuplexConstruction;
