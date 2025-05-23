import { motion } from "framer-motion";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ step, title, description, index }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-8 items-start"
    >
      <div className="w-20 h-20 flex-shrink-0 bg-[#3b62c0] text-white text-2xl font-bold flex items-center justify-center">
        {step}
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="w-5 h-5 mr-2 flex-shrink-0">
            <img 
              src="/lovable-uploads/1e3b15f4-e23c-4368-8a8d-a2364fd83747.png" 
              alt="Bullet point" 
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const OurProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion to understand your vision, requirements, and budget."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our design team works with you to create a concept that perfectly aligns with your goals."
    },
    {
      step: "03",
      title: "Detailed Planning",
      description: "We handle all paperwork, permits, and create comprehensive construction plans."
    },
    {
      step: "04",
      title: "Construction Phase",
      description: "Our expert team executes the project with precision, quality, and attention to detail."
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Rigorous inspections ensure every element meets our high standards before completion."
    },
    {
      step: "06",
      title: "Project Handover",
      description: "We deliver your finished project on time, on budget, and to your complete satisfaction."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-[#3b62c0] font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple & Flawless Construction Experience</h2>
          <div className="h-1 w-20 bg-[#3b62c0] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that finding the right construction experts can be challenging. That's why we've created
            a seamless end-to-end project management solution.
          </p>
        </motion.div>

        <div className="space-y-12 mt-16">
          {processSteps.map((process, index) => (
            <ProcessStep
              key={index}
              step={process.step}
              title={process.title}
              description={process.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
