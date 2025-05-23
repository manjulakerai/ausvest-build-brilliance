
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        {/* Services Hero */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                With over 30 years of experience, we deliver exceptional construction services across residential and commercial sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-20">
              {/* Luxury Home Building */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-5 gap-8 items-center"
                >
                  <div className="md:col-span-3">
                    <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
                      Luxury Living
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Luxury Home Construction</h2>
                    <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      For over three decades, Ausvest has crafted stunning luxury residences across Sydney and surrounding suburbs. 
                      Our impeccable attention to detail and commitment to excellence have established us as Sydney's premier luxury 
                      home builder. We create sophisticated living spaces that exceed expectations and stand the test of time.
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
                        <span className="text-gray-700">Complete home renovations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Home extensions & additions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Premium finishes & materials</span>
                      </li>
                    </ul>
                    <Link to="/projects">
                      <Button className="group bg-[#3b62c0] hover:bg-blue-700">
                        View Luxury Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Modern luxury home with elegant façade]
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Duplex & Multi-Home Development */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-5 gap-8 items-center"
                >
                  <div className="md:col-span-2 md:order-2">
                    <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Modern duplex development with contemporary architecture]
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3 md:order-1">
                    <div className="inline-block px-4 py-1 bg-indigo-50 rounded-full text-indigo-600 font-medium mb-4">
                      Multi-Dwelling
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Duplex & Multi-Home Development</h2>
                    <div className="h-1 w-20 bg-indigo-600 mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      Recognizing the rising popularity of dual occupancy dwellings in Sydney, we specialize in creating 
                      premium duplex and multi-home developments that maximize land value and provide exceptional living 
                      environments. Our developments blend quality construction with intelligent design to create beautiful, functional spaces.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Duplex construction specialists</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Multi-home developments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Land optimization strategies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Investment property developments</span>
                      </li>
                    </ul>
                    <Link to="/projects">
                      <Button className="group bg-indigo-600 hover:bg-indigo-700">
                        Explore Multi-Dwelling Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Home Renovation & Extension */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-5 gap-8 items-center"
                >
                  <div className="md:col-span-3">
                    <div className="inline-block px-4 py-1 bg-purple-50 rounded-full text-purple-600 font-medium mb-4">
                      Transformation
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Home Renovation & Extension</h2>
                    <div className="h-1 w-20 bg-purple-600 mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      Give your home the complete transformation it deserves. Whether you need more space with a home extension, 
                      a second-story addition, or a comprehensive renovation, our team creates tailored solutions that perfectly 
                      blend with your existing structure while enhancing functionality and value.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Full home renovations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Second-story additions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Ground floor extensions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Heritage home restoration</span>
                      </li>
                    </ul>
                    <Link to="/projects">
                      <Button className="group bg-purple-600 hover:bg-purple-700">
                        View Transformation Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Before/after comparison of home renovation]
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Commercial Construction */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-5 gap-8 items-center"
                >
                  <div className="md:col-span-2 md:order-2">
                    <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Modern retail or commercial space with premium finishes]
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3 md:order-1">
                    <div className="inline-block px-4 py-1 bg-emerald-50 rounded-full text-emerald-600 font-medium mb-4">
                      Commercial
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Retail & Commercial Construction</h2>
                    <div className="h-1 w-20 bg-emerald-600 mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      Ausvest has delivered top-rated retail and commercial projects across Sydney, Bella Vista, and Orange. 
                      Our expert team offers premium-quality, long-term commercial construction solutions from site clearance 
                      to final execution, with a focus on pristine fit-outs and presentable spaces.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-emerald-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Retail store fit-outs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-emerald-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Restaurant & cafe construction</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-emerald-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Office & commercial spaces</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-emerald-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Gym & fitness center construction</span>
                      </li>
                    </ul>
                    <Link to="/projects">
                      <Button className="group bg-emerald-600 hover:bg-emerald-700">
                        Explore Commercial Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Maintenance Services */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-5 gap-8 items-center"
                >
                  <div className="md:col-span-3">
                    <div className="inline-block px-4 py-1 bg-amber-50 rounded-full text-amber-600 font-medium mb-4">
                      Maintenance
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Tailored Maintenance Services</h2>
                    <div className="h-1 w-20 bg-amber-600 mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      Our dedicated maintenance team specializes in providing tailored services for residential 
                      and commercial buildings across Sydney, including large commercial and industrial properties. 
                      With both reactive and planned maintenance options, we ensure your property remains in peak condition.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Residential maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Commercial property upkeep</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Reactive maintenance services</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-amber-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Planned maintenance programs</span>
                      </li>
                    </ul>
                    <Button className="group bg-amber-600 hover:bg-amber-700">
                      Schedule Maintenance
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Maintenance professionals working on a property]
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience a Simple & Flawless Construction Journey</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Let us handle everything from conceptualization to completion with our end-to-end project management solutions.
              </p>
              <Button size="lg" className="bg-[#3b62c0] hover:bg-blue-700 rounded-none text-white px-8">
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
