
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";

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
                From residential builds to commercial fitouts and remediation work, 
                we deliver quality construction across all sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16">
              {/* Residential Construction */}
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
                      Residential
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Residential Construction</h2>
                    <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      Our residential construction services cover a wide range of projects from new home builds 
                      to major renovations and additions. We work closely with homeowners to create spaces that 
                      reflect their vision while offering expert guidance on materials, layout, and smart design choices.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">New home construction</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Major renovations and additions</span>
                      </li>
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
                        <span className="text-gray-700">Multi-dwelling developments</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Modern residential property completed by Ausvest, showing exterior and quality finishes]
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Commercial & Retail */}
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
                        [Suggested image: Commercial office space or retail fit-out showing modern, functional design]
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3 md:order-1">
                    <div className="inline-block px-4 py-1 bg-indigo-50 rounded-full text-indigo-600 font-medium mb-4">
                      Commercial
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Commercial & Retail</h2>
                    <div className="h-1 w-20 bg-indigo-600 mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      Our commercial construction expertise spans office fit-outs, retail transformations, and hospitality renovations. 
                      We understand that minimal disruption to your business operations is critical, which is why we plan meticulously 
                      to deliver efficiently within agreed timeframes.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Office fit-outs and refurbishments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Retail store transformations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Hospitality venue renovations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Fast-track construction</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Remediation & Upgrades */}
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
                      Remediation
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Remediation & Upgrades</h2>
                    <div className="h-1 w-20 bg-purple-600 mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      Our specialized remediation team tackles structural repairs, defect rectification, and insurance works 
                      with precision and expertise. We have built a reputation for solving complex building issues where others 
                      have failed, delivering permanent solutions that stand the test of time.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Structural repairs and reinforcement</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Water damage remediation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Fire damage restoration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 bg-purple-600 mt-1 mr-3 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                        <span className="text-gray-700">Building code compliance upgrades</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-500 text-center p-4">
                        [Suggested image: Before/after comparison of a remediation project, showing transformation]
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
