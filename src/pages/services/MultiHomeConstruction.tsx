
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const MultiHomeConstruction = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Multi-Home Development</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Premium multi-dwelling developments that deliver exceptional investment returns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-1 bg-purple-50 rounded-full text-purple-600 font-medium mb-4">
                  Multi-Dwelling
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">MULTI-HOME BUILDER SYDNEY</h2>
                <div className="h-1 w-20 bg-purple-600 mb-6"></div>
                <p className="text-gray-600 mb-6">
                  Multi-Home Building is one of the most lucrative real estate investment options in Sydney. 
                  That's why more families are choosing this option for their property development needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Creating beautiful multi-home developments requires professional expertise. At Ausvest, we believe in quality 
                  and offer premium-grade multi-home development services that align with the great Australian dream of home ownership.
                </p>
                <p className="text-gray-600 mb-6">
                  From initial conceptualization and designing to construction and final delivery, we take care of every aspect 
                  of your multi-home development project!
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">End-to-end development solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Premium quality construction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Maximum investment return</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Streamlined approval process</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="group bg-purple-600 hover:bg-purple-700">
                    Explore Multi-Home Options
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Multi-home development with premium finishes]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Multi-Home Projects</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our premium multi-dwelling developments across Sydney
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  location: "Northern Beaches",
                  units: "6 Townhouses",
                  description: "Contemporary multi-dwelling development with premium finishes and landscaping."
                },
                {
                  location: "Eastern Suburbs", 
                  units: "4 Executive Residences",
                  description: "Luxury townhouses with high-end finishes and resort-style amenities."
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gray-200 aspect-video w-full flex items-center justify-center">
                    <p className="text-gray-500">
                      [Suggested image: {item.location} project]
                    </p>
                  </div>
                  <div className="bg-white p-6 shadow-lg relative -mt-16 ml-8 mr-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.location}</h3>
                    <p className="text-purple-600 font-medium mb-2">{item.units}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Multi-Home Development?</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Let our experts help you maximize your investment potential
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 rounded-none text-white px-8">
                  Request Development Consultation
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

export default MultiHomeConstruction;
