
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vision into Reality?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Let's discuss how our 30+ years of expertise can bring your dream project to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#3b62c0] hover:bg-blue-700 px-8 py-3 text-white">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
