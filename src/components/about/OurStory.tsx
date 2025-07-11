
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/src/assets/leadership-team.jpg" 
                alt="Ausvest Projects leadership team in professional office setting with architectural plans"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
              Our Legacy
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Three Decades of Excellence</h2>
            <div className="h-1 w-20 bg-[#3b62c0] mb-6"></div>
            <p className="text-gray-600 mb-4">
              For over 30 years, Ausvest has been crafting stunning and luxurious residential buildings across Sydney and its suburbs. 
              Our journey began with a simple mission: to create homes and buildings that exceed expectations through impeccable 
              craftsmanship and attention to detail.
            </p>
            <p className="text-gray-600 mb-6 mx-0">
              Today, we stand as one of Sydney's most trusted construction partners, with a portfolio that spans luxury homes, 
              commercial developments, and speciality projects. Our team's collective expertise and unwavering commitment to quality 
              have established Ausvest as a leader in the Australian construction industry.
            </p>
            <Link to="/team">
              <Button className="group bg-[#3b62c0] hover:bg-blue-700">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
