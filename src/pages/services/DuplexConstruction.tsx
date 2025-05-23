
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";

const DuplexConstruction = () => {
  const duplexFeatures = [
    { content: "Maximized land value" },
    { content: "Custom duplex designs" },
    { content: "Dual income potential" },
    { content: "Premium construction quality" }
  ];

  const benefitItems = [
    {
      title: "Investment Potential",
      description: "Generate rental income from the second dwelling or sell it separately while living in the other."
    },
    {
      title: "Multi-generational Living", 
      description: "Create connected yet separate living spaces for extended family members while maintaining privacy."
    },
    {
      title: "Increased Property Value",
      description: "Significantly boost your land value by converting a single dwelling block into two premium residences."
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Duplex Construction"
        description="Specialized duplex building solutions that maximize land value and provide exceptional living environments."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Dual Occupancy"
                tagColor="bg-indigo-50 text-indigo-600"
                title="DUPLEX BUILDERS SYDNEY"
                accentColor="bg-indigo-600"
                description={[
                  "With the rising popularity of Dual Occupancy dwellings in Sydney, the demand for expert Duplex Home builders has never been higher. Such homes offer significantly more flexibility for your land usage and boost your property's value.",
                  "If you're looking for a suitable Duplex housing solution, our team at Ausvest will guide you through every step of the process. We specifically focus on your unique needs to create a perfect home that best suits your family's lifestyle."
                ]}
                buttonText="Discuss Your Duplex Project"
                buttonLink="/contact"
                featureList={
                  <FeatureList 
                    features={duplexFeatures}
                    iconColor="bg-indigo-600"
                  />
                }
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Modern duplex development with contemporary architecture]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefits of Duplex Construction</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why more Sydney homeowners are choosing duplex developments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefitItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <div className="h-1 w-10 bg-indigo-600 mb-4"></div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA 
        title="Ready to Maximize Your Property's Potential?"
        description="Get expert advice on transforming your land into a premium duplex development"
        buttonText="Book a Free Consultation"
        buttonLink="/contact"
        buttonColor="bg-indigo-600 hover:bg-indigo-700"
      />
    </ServicePageLayout>
  );
};

export default DuplexConstruction;
