
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const HomeRenovation = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Renovation & Extension</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Give your home the complete transformation it deserves with our comprehensive renovation services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block px-4 py-1 bg-emerald-50 rounded-full text-emerald-600 font-medium mb-4">
                  Transformation
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">GIVE YOUR HOME THE COMPLETE TRANSFORMATION IT DESERVES!</h2>
                <div className="h-1 w-20 bg-emerald-600 mb-6"></div>
                <p className="text-gray-600 mb-6">
                  We specialize in Home Renovation, Extension & Home Addition across Sydney. Our comprehensive services are built 
                  to ease your renovation, extension or addition requirements.
                </p>
                <p className="text-gray-600 mb-6">
                  Our experts work with you to understand your home challenges & create tailored solutions that deliver your desired results.
                  We collaborate with you throughout the entire process - from conceptualization and designing to completion of the project - 
                  helping you build your dream home.
                </p>
                <div className="bg-emerald-50 p-6 border-l-4 border-emerald-600 mb-6">
                  <p className="text-lg font-semibold text-slate-900">A home reflects your lifestyle,</p>
                  <p className="text-lg font-semibold text-emerald-600">So make sure you have a stunning one!</p>
                </div>
                <Link to="/contact">
                  <Button className="group bg-emerald-600 hover:bg-emerald-700">
                    Transform Your Home
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div>
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center mb-8">
                  <p className="text-gray-500 text-center p-4">
                    [Suggested image: Before/after home renovation]
                  </p>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Full home renovations</span>
                      <p className="text-gray-600">Complete interior and exterior transformations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Kitchen & bathroom upgrades</span>
                      <p className="text-gray-600">Luxurious, functional spaces with premium fixtures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-600 mt-1 mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Heritage home restoration</span>
                      <p className="text-gray-600">Preserving character while adding modern amenities</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Renovation & Extension Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to transform your living space
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Home Addition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">HOME ADDITION</h3>
                <div className="h-1 w-16 bg-emerald-600 mb-6"></div>
                <p className="text-gray-600 mb-4">
                  In terms of the construction industry, Home addition means constructing a floor above your existing home. This saves you 
                  a lot of money while your crucial land stays open.
                </p>
                <p className="text-gray-600 mb-6">
                  You can enjoy your life in a much better way with the addition of extra living space. At Ausvest, we offer personalized 
                  Home Addition services that seamlessly blend with your existing structure. We ensure you get sufficient privacy & don't 
                  have to compromise with the beauty of your home.
                </p>
                <p className="text-gray-600">
                  Before we move forward, our specialists perform extensive testing of the strength of the existing structure. This 
                  ensures you do not face problems with the stability & integrity of your home.
                </p>
              </motion.div>
              
              {/* Home Extension */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">HOME EXTENSION</h3>
                <div className="h-1 w-16 bg-emerald-600 mb-6"></div>
                <p className="text-gray-600 mb-4">
                  Home extension means adding a floor or room to your existing free space. Depending on your lifestyle, you might 
                  prefer a home without any staircase!
                </p>
                <p className="text-gray-600 mb-6">
                  Home extension can be a perfect option for you. But the challenge is extending your home in a way that it 
                  seamlessly integrates with your existing structure.
                </p>
                <p className="text-gray-600">
                  Our experts are here to help create a larger home with enhanced functionality and improved overall layout 
                  using your existing free space to its maximum potential.
                </p>
              </motion.div>
              
              {/* Home Renovation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">HOME RENOVATION</h3>
                <div className="h-1 w-16 bg-emerald-600 mb-6"></div>
                <p className="text-gray-600 mb-4">
                  A timely renovation or restoration upgrades your home, increases its market value & enhances your lifestyle.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you want to transform your home into a completely modern living space, or restore the lost glory of your home, 
                  quality renovation & restoration can prove extremely helpful.
                </p>
                <p className="text-gray-600">
                  At Ausvest, we offer extensive experience in Home Renovation & Restoration that allows us to deliver best-in-class service. 
                  Our experts will visit your home, analyze your needs, and offer you the most suitable renovation options.
                </p>
              </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Living Space?</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                Let our renovation experts bring your vision to life
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 rounded-none text-white px-8">
                  Book a Free Assessment
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

export default HomeRenovation;
