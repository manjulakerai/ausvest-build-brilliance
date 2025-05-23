
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";

const MultiHomeConstruction = () => {
  const multiHomeFeatures = [
    { content: "End-to-end development solutions" },
    { content: "Premium quality construction" },
    { content: "Maximum investment return" },
    { content: "Streamlined approval process" }
  ];

  const projectItems = [
    {
      location: "Northern Beaches",
      units: "6 Townhouses",
      description: "Contemporary multi-dwelling development with premium finishes and landscaping."
    },
    {
      location: "Eastern Suburbs", 
      units: "4 Executive Residences",
      description: "Luxury townhouses with high-end finishes and resort-style amenities."
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Multi-Home Development"
        description="Premium multi-dwelling developments that deliver exceptional investment returns."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Multi-Dwelling"
                tagColor="bg-purple-50 text-purple-600"
                title="MULTI-HOME BUILDER SYDNEY"
                accentColor="bg-purple-600"
                description={[
                  "Multi-Home Building is one of the most lucrative real estate investment options in Sydney. That's why more families are choosing this option for their property development needs.",
                  "Creating beautiful multi-home developments requires professional expertise. At Ausvest, we believe in quality and offer premium-grade multi-home development services that align with the great Australian dream of home ownership.",
                  "From initial conceptualization and designing to construction and final delivery, we take care of every aspect of your multi-home development project!"
                ]}
                buttonText="Explore Multi-Home Options"
                buttonLink="/contact"
                featureList={
                  <FeatureList 
                    features={multiHomeFeatures}
                    iconColor="bg-purple-600"
                  />
                }
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Multi-home development with premium finishes]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Multi-Home Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our premium multi-dwelling developments across Sydney
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-200 aspect-video w-full flex items-center justify-center">
                  <p className="text-gray-500">
                    [Suggested image: {item.location} project]
                  </p>
                </div>
                <div className="bg-white p-6 shadow-lg relative -mt-16 ml-8 mr-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.location}</h3>
                  <p className="text-purple-600 font-medium mb-2">{item.units}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA 
        title="Ready to Discuss Your Multi-Home Development?"
        description="Let our experts help you maximize your investment potential"
        buttonText="Request Development Consultation"
        buttonLink="/contact"
        buttonColor="bg-purple-600 hover:bg-purple-700"
      />
    </ServicePageLayout>
  );
};

export default MultiHomeConstruction;
