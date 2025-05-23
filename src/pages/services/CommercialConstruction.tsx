
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CommercialConstruction = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial & Retail Construction</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Premium commercial construction and fit-out solutions for businesses across Sydney.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-1 bg-amber-50 rounded-full text-amber-600 font-medium mb-4">
                  Commercial Excellence
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">RETAIL & COMMERCIAL CONSTRUCTION</h2>
                <div className="h-1 w-20 bg-amber-600 mb-6"></div>
                <p className="text-gray-600 mb-6">
                  Ausvest has delivered some of the top-rated Retail & Commercial projects throughout Sydney, 
                  Bella Vista, & Orange. Our team of experts with a collective experience of more than 20 years ensures 
                  that your every project is executed with perfection & precision.
                </p>
                <p className="text-gray-600 mb-6">
                  We specialize in Commercial & Retail Construction, offering premium-quality, long-term commercial construction solutions. 
                  Our fully tailored & professional services cover everything from site clearance to final execution, 
                  with a commitment to 100% client satisfaction on every project.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Office fit-outs & refurbishments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Retail space construction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Restaurant & café construction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Gym & fitness center development</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="group bg-amber-600 hover:bg-amber-700">
                    Discuss Your Commercial Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Modern retail or commercial space]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fit-Out Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Premium commercial fit-out]
                  </p>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-1 bg-amber-50 rounded-full text-amber-600 font-medium mb-4">
                  Premium Fit-Outs
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">FIT-OUTS</h2>
                <div className="h-1 w-20 bg-amber-600 mb-6"></div>
                <p className="text-gray-600 mb-6">
                  Our fit-out specialists ensure your retail or commercial space looks pristine & presentable. 
                  We collaborate with leading architects to oversee your fit-out requirements and deliver exceptional results.
                </p>
                <p className="text-gray-600 mb-6">
                  We ensure top-quality fit-outs for restaurants, gyms, cafes, offices, and retail spaces that create the perfect 
                  environment for your business to thrive.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Custom joinery & cabinetry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Premium flooring solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Lighting & electrical installations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Branded environmental design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Commercial Projects</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our premium commercial construction portfolio across Sydney
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Bella Vista Office",
                  type: "Corporate Headquarters",
                  description: "Modern office space with premium finishes and innovative workspace design."
                },
                {
                  name: "Sydney CBD Restaurant", 
                  type: "Hospitality",
                  description: "High-end restaurant fit-out featuring custom joinery and specialized lighting systems."
                },
                {
                  name: "Orange Retail Complex", 
                  type: "Retail Development",
                  description: "Multi-tenant retail development with contemporary design and custom storefronts."
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-200 aspect-video w-full flex items-center justify-center">
                    <p className="text-gray-500">
                      [Suggested image: {item.name} project]
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                    <p className="text-amber-600 font-medium mb-3">{item.type}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to Create an Exceptional Commercial Space?</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Partner with Ausvest for premium construction and fit-out services
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 rounded-none text-white px-8">
                  Request Commercial Consultation
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

export default CommercialConstruction;
