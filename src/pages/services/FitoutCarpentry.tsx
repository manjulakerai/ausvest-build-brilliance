
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";
import ServiceCTA from "@/components/services/ServiceCTA";
import { motion } from "framer-motion";

const FitoutCarpentry = () => {
  const processSteps = [
    {
      step: "01",
      title: "Design Consultation",
      description: "We work with you to understand your vision and create custom carpentry solutions that perfectly fit your space and requirements."
    },
    {
      step: "02", 
      title: "Technical Planning",
      description: "Our expert carpenters develop detailed plans and specifications, ensuring all carpentry work integrates seamlessly with your fit-out."
    },
    {
      step: "03",
      title: "Precision Crafting",
      description: "Using premium materials and advanced techniques, we craft bespoke carpentry elements with exceptional attention to detail."
    },
    {
      step: "04",
      title: "Expert Installation",
      description: "Our skilled team installs all carpentry work with precision, ensuring perfect alignment and finish quality."
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "We conduct thorough inspections and provide finishing touches to ensure every detail meets our exacting standards."
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero
        title="Fit-out Carpentry"
        subtitle="Precision custom carpentry for commercial and retail fit-outs"
        description="Transform your space with our expert carpentry services, creating bespoke solutions that combine functionality with exceptional craftsmanship."
        backgroundImage="/lovable-uploads/f2cf4cca-6d64-4692-8a1f-c68bffa3edee.png"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContentBlock
                tagText="Specialized Carpentry"
                tagColor="bg-amber-100 text-amber-800"
                title="Bespoke Carpentry Solutions"
                accentColor="border-amber-500"
                description={[
                  "Our fit-out carpentry services specialize in creating custom solutions for commercial and retail spaces. From reception desks and built-in storage to decorative features and structural elements, we deliver precision craftsmanship that enhances your space.",
                  "With over 30 years of experience, our master carpenters combine traditional techniques with modern tools to create functional and beautiful carpentry that stands the test of time."
                ]}
                quote={{
                  text: "Every piece is crafted with precision and passion.",
                  highlight: "Custom solutions for every space."
                }}
                featureList={
                  <FeatureList
                    title="Carpentry Services"
                    features={[
                      "Custom reception desks and counters",
                      "Built-in storage and shelving systems",
                      "Decorative wall panels and features",
                      "Commercial joinery and millwork",
                      "Retail display fixtures",
                      "Office partitions and screens"
                    ]}
                  />
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center mb-8">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Custom carpentry work in a commercial fit-out]
                </p>
              </div>
              <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Detail shot of precision carpentry work]
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Carpentry Process</h2>
            <div className="h-1 w-20 bg-amber-500 mb-6 mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, our systematic approach ensures exceptional results for every carpentry project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-amber-500 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Carpenter at work on custom joinery]
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContentBlock
                tagText="Expert Craftsmanship"
                tagColor="bg-amber-100 text-amber-800"
                title="Why Choose Our Carpentry Services"
                accentColor="border-amber-500"
                description={[
                  "Our team of master carpenters brings decades of experience to every project, combining traditional craftsmanship with modern techniques to deliver exceptional results.",
                  "We use only the finest materials and latest tools to ensure every piece meets the highest standards of quality and durability."
                ]}
                featureList={
                  <FeatureList
                    title="Our Advantages"
                    features={[
                      "Master craftsmen with 30+ years experience",
                      "Premium materials and modern techniques",
                      "Custom solutions for every requirement",
                      "Precise project management and timelines",
                      "Comprehensive warranty on all work",
                      "Seamless integration with fit-out projects"
                    ]}
                  />
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ServiceCTA />
    </ServicePageLayout>
  );
};

export default FitoutCarpentry;
