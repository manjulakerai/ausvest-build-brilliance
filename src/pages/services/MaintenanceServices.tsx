
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MaintenanceServices = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Maintenance Services</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Comprehensive maintenance solutions for residential and commercial properties across Sydney.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-blue-600 font-medium mb-4">
                  Property Care
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">TAILORED MAINTENANCE SERVICES</h2>
                <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
                <p className="text-gray-600 mb-6">
                  Our dedicated Maintenance team specializes in offering tailored maintenance services to residential 
                  & commercial buildings across Sydney. We also cover large commercial & industrial buildings under our maintenance service.
                </p>
                <p className="text-gray-600 mb-6">
                  With our reactive & planned maintenance services, we ensure your maintenance task is completed with perfection. 
                  Our team constantly works with passion & dedication so you can rest easy about your maintenance needs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Residential property maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Commercial building upkeep</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">24/7 emergency repair services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <span className="text-gray-700">Preventative maintenance programs</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="group bg-[#3b62c0] hover:bg-blue-700">
                    Schedule Maintenance Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Maintenance team working on a property]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Maintenance Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive services to keep your property in perfect condition
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Reactive Maintenance",
                  description: "Quick response to unexpected issues and repairs needed for your property.",
                  items: [
                    "Emergency repairs",
                    "Water damage response",
                    "Electrical issues",
                    "Plumbing emergencies"
                  ]
                },
                {
                  title: "Planned Maintenance",
                  description: "Scheduled maintenance programs to prevent issues and extend property life.",
                  items: [
                    "Quarterly inspections",
                    "Seasonal system checks",
                    "Preventative repairs",
                    "Long-term care planning"
                  ]
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <div className="h-1 w-16 bg-[#3b62c0] mb-4"></div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-[#3b62c0]/20 text-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                          ✓
                        </div>
                        <span className="text-gray-700">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {[
                {
                  title: "Residential Maintenance",
                  description: "Complete care for homes and residential properties.",
                  items: [
                    "Interior & exterior upkeep",
                    "Garden & landscape maintenance",
                    "Pool & outdoor area servicing",
                    "General home repairs"
                  ]
                },
                {
                  title: "Commercial Maintenance",
                  description: "Specialized services for office and retail spaces.",
                  items: [
                    "Office building maintenance",
                    "Retail space upkeep",
                    "Common area servicing",
                    "Building systems maintenance"
                  ]
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="bg-white p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <div className="h-1 w-16 bg-[#3b62c0] mb-4"></div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-[#3b62c0]/20 text-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                          ✓
                        </div>
                        <span className="text-gray-700">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Flawless Construction */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A SIMPLE & FLAWLESS CONSTRUCTION</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Finding the right construction & fit-out experts can be a daunting task. To offer you a seamless construction experience, 
                we at Ausvest offer end-to-end Project Management Solutions. Under this service, we handle everything from conceptualization, 
                paperwork, expert support & advising to construction & fit-outs. Our sole purpose is to ensure that your project completes 
                within the given deadline without any hiccups & you get the desired results.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-[#3b62c0] hover:bg-blue-700 rounded-none text-white px-8">
                  Experience the Difference
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

export default MaintenanceServices;
