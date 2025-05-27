
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";
import OurProcess from "@/components/about/OurProcess";

const FitoutConstruction = () => {
  const fitoutFeatures = [
    {
      content: "Custom joinery & cabinetry"
    },
    {
      content: "Premium flooring solutions"
    },
    {
      content: "Lighting & electrical installations"
    },
    {
      content: "Branded environmental design"
    },
    {
      content: "Complete shopfitting services"
    },
    {
      content: "Suspended ceiling systems"
    }
  ];

  const carpentryFeatures = [
    {
      content: "Bespoke furniture design & construction"
    },
    {
      content: "Custom storage solutions"
    },
    {
      content: "Feature wall installations"
    },
    {
      content: "Reception desk construction"
    },
    {
      content: "Built-in shelving systems"
    },
    {
      content: "Specialized joinery work"
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Fit-out Construction"
        description="Premium fit-out and carpentry solutions transforming commercial and retail spaces across Sydney."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Premium Fit-Outs"
                tagColor="bg-purple-50 text-purple-600"
                title="FIT-OUT CONSTRUCTION"
                accentColor="bg-purple-600"
                description={[
                  "Our fit-out specialists ensure your retail or commercial space looks pristine & presentable. We collaborate with leading architects to oversee your fit-out requirements and deliver exceptional results.",
                  "We ensure top-quality fit-outs for restaurants, gyms, cafes, offices, and retail spaces that create the perfect environment for your business to thrive."
                ]}
                buttonText="Discuss Your Fit-Out Project"
                buttonLink="/contact"
                featureList={
                  <FeatureList 
                    features={fitoutFeatures}
                    iconColor="bg-purple-600"
                  />
                }
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Modern fit-out construction]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carpentry Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Custom carpentry work]
                </p>
              </div>
            </div>
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Custom Carpentry"
                tagColor="bg-purple-50 text-purple-600"
                title="CARPENTRY & JOINERY"
                accentColor="bg-purple-600"
                description={[
                  "Our skilled carpenters create bespoke furniture and joinery solutions that perfectly complement your space. From custom reception desks to built-in storage systems, we deliver craftsmanship that combines functionality with aesthetic appeal.",
                  "Every piece is designed and constructed to meet your specific requirements, ensuring a perfect fit and finish that enhances your business environment."
                ]}
                featureList={
                  <FeatureList 
                    features={carpentryFeatures}
                    iconColor="bg-purple-600"
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcess />

      {/* Project Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Fit-Out Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our premium fit-out and carpentry portfolio across Sydney
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "The Bond Level 6",
                type: "Office Fit-Out",
                description: "Premium office fit-out featuring custom joinery and modern workspace design."
              },
              {
                name: "Hills Kebab Restaurant", 
                type: "Restaurant Fit-Out",
                description: "Complete restaurant fit-out with custom kitchen fixtures and dining area design."
              },
              {
                name: "Cuppa Coffee Café", 
                type: "Café Fit-Out",
                description: "Warm and inviting café space with custom counter and seating solutions."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white shadow-lg overflow-hidden"
              >
                <div className="bg-gray-200 aspect-video w-full flex items-center justify-center">
                  <p className="text-gray-500">
                    [Suggested image: {item.name} project]
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{item.type}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA 
        title="Ready to Transform Your Space?"
        description="Partner with Ausvest for premium fit-out construction and custom carpentry services"
        buttonText="Request Fit-Out Consultation"
        buttonLink="/contact"
        buttonColor="bg-purple-600 hover:bg-purple-700"
      />
    </ServicePageLayout>
  );
};

export default FitoutConstruction;
