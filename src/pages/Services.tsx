
import { motion } from "framer-motion";
import { useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ServiceCard
                icon="building"
                color="bg-blue-100"
                title="Luxury Home Construction"
                description="Custom-designed luxury residences with premium finishes and exceptional attention to detail, built to exacting standards."
                delay={0.2}
                linkTo="/services/luxury-home-construction"
              />
              
              <ServiceCard
                icon="office"
                color="bg-indigo-100"
                title="Commercial Construction"
                description="Premium commercial construction projects including office buildings, retail spaces, and specialized commercial facilities."
                delay={0.4}
                linkTo="/services/commercial-construction"
              />
              
              <ServiceCard
                icon="tools"
                color="bg-purple-100" 
                title="Fit-out Construction"
                description="Expert fit-out services transforming commercial and retail spaces with premium finishes and custom solutions."
                delay={0.6}
                linkTo="/services/commercial-construction"
              />
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
              <a href="tel:0412995208">
                <Button size="lg" className="bg-[#3b62c0] hover:bg-blue-700 rounded-none text-white px-8 flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call Us Now
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
