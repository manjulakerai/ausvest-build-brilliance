import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "@/components/Logo";
import LogoAnimation from "@/components/LogoAnimation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading complete after initial animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    }),
  };

  // About Section with animation
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Initial logo animation */}
      <LogoAnimation />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Premium Construction Services
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#3b62c0] mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              With over 30 years of experience, we deliver exceptional construction services across residential and commercial sectors.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="building"
              color="bg-blue-100"
              title="Luxury Home Construction"
              description="Custom-designed luxury residences with premium finishes and exceptional attention to detail, built to exacting standards."
              delay={0.2}
              linkTo="/services"
            />
            
            <ServiceCard
              icon="office"
              color="bg-indigo-100"
              title="Duplex & Multi-Home Development"
              description="Specialized duplex and multi-dwelling developments that maximize land value and deliver exceptional investment returns."
              delay={0.4}
              linkTo="/services"
            />
            
            <ServiceCard
              icon="tools"
              color="bg-purple-100" 
              title="Home Renovation & Extension"
              description="Transform your existing home with expertly crafted renovations, extensions, and additions that enhance livability and value."
              delay={0.6}
              linkTo="/services"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              custom={0.1}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
            >
              <div className="inline-block px-4 py-1 bg-blue-900/50 rounded-full text-[#6f8fda] font-medium mb-4">
                About Ausvest
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Three Decades of <span className="text-[#6f8fda]">Construction Excellence</span>
              </h2>
              <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
              <p className="text-xl text-gray-300 mb-6">
                Since 1993, Ausvest has been creating stunning luxury residences and commercial spaces across Sydney
                that exceed expectations and stand the test of time.
              </p>
              <p className="text-gray-300 mb-8">
                Our diverse team of engineers, builders, and project managers brings extensive expertise across
                luxury residential, duplex developments, and premium commercial projects. Our focus on efficient communication
                ensures 100% client satisfaction with every project.
              </p>
              <div className="space-y-4">
                {[
                  "Seamless end-to-end project management",
                  "Transparent communication throughout",
                  "Quality craftsmanship guaranteed"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    custom={0.3 + index * 0.1}
                    initial="hidden"
                    animate={aboutInView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                  >
                    <div className="w-6 h-6 bg-[#3b62c0] rounded-none flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-white rounded-none"></div>
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-[#3b62c0] hover:bg-blue-700 rounded-none transform hover:-translate-y-0.5 transition-all">
                    Learn Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              custom={0.4}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="bg-slate-800 p-8 shadow-2xl border-l-4 border-[#3b62c0]"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#6f8fda]">Our Promise</h3>
              <blockquote className="text-lg italic text-gray-300 mb-6 border-l-2 border-[#3b62c0] pl-4">
                "We create luxury spaces that exceed expectations through impeccable craftsmanship and attention to detail.
                Our commitment to excellence ensures your project is completed on time, on budget, and to your complete satisfaction."
              </blockquote>
              <Link to="/projects">
                <Button className="bg-[#3b62c0] hover:bg-blue-700 rounded-none transform hover:-translate-y-0.5 transition-all">
                  View Our Projects
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4"
            >
              Our Leadership
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Meet the Directors
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#3b62c0] mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Industry leaders with proven track records delivering excellence across all project types.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                initials: "MP",
                name: "Manish Pindoria",
                position: "Construction Manager",
                description: "Expert in contract management, costing, and fit-out delivery. Manish brings precision and efficiency to every project, from residential builds to complex commercial fitouts.",
                projects: ["Toongabbie Townhouses", "Sunboost Office Fitout", "Multiple Commercial Projects"],
                color: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                initials: "AB",
                name: "Andrew Beard",
                position: "Director",
                description: "Leadership excellence in WHS compliance and major education and public builds. Andrew's reputation for clear communication and on-time delivery is unmatched.",
                projects: ["St Lukes School Project", "Wentworthville Public School", "ANSTO Facility"],
                color: "bg-indigo-100",
                textColor: "text-indigo-600"
              }
            ].map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className={`w-24 h-24 ${director.color} ${director.textColor} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                      <span className="text-2xl font-bold">{director.initials}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{director.name}</h3>
                    <p className="text-[#3b62c0] font-semibold mb-4">{director.position}</p>
                    <p className="text-gray-600 mb-6">{director.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      {director.projects.map((project, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3b62c0] mr-2"></div>
                          {project}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/51b74c71-4fe0-491c-8176-361cc560cd4f.png')] bg-center bg-no-repeat opacity-5"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Create Your Dream Space?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's bring your vision to life with our 30+ years of luxury construction expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-[#3b62c0] px-8 py-6 text-lg rounded-none shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
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
                {[
                  { title: "Phone", content: "0411 123 456" },
                  { title: "Email", content: "info@ausvestprojects.com.au" },
                  { title: "Location", content: "Sydney, NSW" }
                ].map((item, index) => (
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
