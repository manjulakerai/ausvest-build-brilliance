
import { motion, useEffect } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

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
                title="Duplex Construction"
                description="Specialized duplex developments that maximize land value and deliver exceptional living spaces for multiple families."
                delay={0.4}
                linkTo="/services/duplex-construction"
              />
              
              <ServiceCard
                icon="building"
                color="bg-purple-100" 
                title="Multi-Home Development"
                description="Premium multi-dwelling developments that provide excellent investment returns while maintaining quality construction."
                delay={0.6}
                linkTo="/services/multi-home-construction"
              />

              <ServiceCard
                icon="tools"
                color="bg-emerald-100" 
                title="Home Renovation & Extension"
                description="Transform your existing home with expertly crafted renovations, extensions, and additions that enhance livability and value."
                delay={0.2}
                linkTo="/services/home-renovation"
              />

              <ServiceCard
                icon="office"
                color="bg-amber-100"
                title="Commercial Construction"
                description="Office fitouts, hospitality refurbishments, and retail transformations that maximize your ROI with minimal disruption."
                delay={0.4}
                linkTo="/services/commercial-construction"
              />

              <ServiceCard
                icon="tools"
                color="bg-blue-100" 
                title="Maintenance Services"
                description="Tailored maintenance solutions for residential and commercial properties that ensure your building remains in perfect condition."
                delay={0.6}
                linkTo="/services/maintenance-services"
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
              <Link to="/contact">
                <Button size="lg" className="bg-[#3b62c0] hover:bg-blue-700 rounded-none text-white px-8">
                  Book a Consultation
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

export default Services;
