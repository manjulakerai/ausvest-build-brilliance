
import { motion } from "framer-motion";

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

const ValueCard = ({ title, description, index }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 shadow-lg border-b-4 border-[#3b62c0]"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const OurValues = () => {
  const values = [
    {
      title: "Uncompromising Quality",
      description: "We maintain the highest standards across all our projects, from material selection to final execution."
    },
    {
      title: "Transparent Communication",
      description: "We believe in clear, honest dialogue throughout every phase of your construction journey."
    },
    {
      title: "Expert Craftsmanship",
      description: "Our team of skilled professionals brings decades of experience to every project we undertake."
    },
    {
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and are committed to completing projects on schedule."
    },
    {
      title: "Client-Focused Approach",
      description: "Your vision and satisfaction are our top priorities from initial concept to final handover."
    },
    {
      title: "Innovative Solutions",
      description: "We embrace modern techniques and technologies to deliver superior construction outcomes."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
          <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Ausvest, we take pride in our work culture that ensures efficient communication between you and our team,
            delivering 100% satisfaction with every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
