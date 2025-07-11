import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center" role="banner">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2a70cfa3-f02b-4a19-b64b-97bf622bd4e6.png')] bg-cover bg-center opacity-95" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="inline-block mb-6 px-6 py-3 bg-white/90 border-2 border-white rounded-full text-slate-900 font-semibold text-lg drop-shadow-xl backdrop-blur-sm"
          >
            Sydney's Premier Luxury Builder - Established 1993
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.0 }}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
          >
            Crafting Luxury<br />
            <span className="text-[#3b62c0] drop-shadow-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>For Over 30 Years</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            From stunning residential estates to premium commercial spaces — we create extraordinary 
            buildings with impeccable attention to detail, delivering exceptional quality on time and on budget.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.4 }}
          >
            <a href="tel:+61412995208" aria-label="Call Ausvest Projects at 0412 995 208">
              <Button 
                size="lg" 
                className="bg-[#3b62c0] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-none transition-all hover:-translate-y-0.5 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Call Us Now
              </Button>
            </a>
            <Link to="/projects" aria-label="View our construction projects portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-white text-slate-900 hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-none transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Our Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Button */}
      <motion.div 
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.6 }}
        style={{ pointerEvents: 'auto' }}
      >
        <a 
          href="#next-section" 
          className="scroll-down block w-[30px] h-[50px] border-2 border-white rounded-[25px] cursor-pointer no-underline relative hover:scale-110 transition-transform duration-300"
          onClick={(e) => {
            e.preventDefault();
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              const headerOffset = 80; // Account for sticky header
              const elementPosition = nextSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }}
          style={{ pointerEvents: 'auto' }}
        >
          <span className="absolute top-[10px] left-1/2 w-[6px] h-[6px] bg-white rounded-full transform -translate-x-1/2 animate-scroll pointer-events-none"></span>
        </a>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default HeroSection;
