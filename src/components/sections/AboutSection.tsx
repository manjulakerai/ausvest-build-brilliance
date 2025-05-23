
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  return (
    <section id="about" ref={ref} className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            custom={0.1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
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
                  animate={inView ? "visible" : "hidden"}
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
            animate={inView ? "visible" : "hidden"}
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
  );
};

export default AboutSection;
