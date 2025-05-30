import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";
import OurProcess from "@/components/about/OurProcess";

const CommercialConstruction = () => {
  const commercialFeatures = [
    {
      content: "Office fit-outs & refurbishments"
    },
    {
      content: "Retail space construction"
    },
    {
      content: "Restaurant & café construction"
    },
    {
      content: "Gym & fitness center development"
    }
  ];

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
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Commercial & Retail Construction"
        description="Premium commercial construction and fit-out solutions for businesses across Sydney."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Commercial Excellence"
                tagColor="bg-amber-50 text-amber-600"
                title="COMMERCIAL CONSTRUCTION"
                accentColor="bg-amber-600"
                description={[
                  "Ausvest has delivered some of the top-rated Commercial projects throughout Sydney, Bella Vista, & Orange. Our team of experts with a collective experience of more than 20 years ensures that your every project is executed with perfection & precision.",
                  "We specialize in Commercial Construction, offering premium-quality, long-term commercial construction solutions. Our fully tailored & professional services cover everything from site clearance to final execution, with a commitment to 100% client satisfaction on every project."
                ]}
                buttonText="Discuss Your Commercial Project"
                buttonLink="/contact"
                featureList={
                  <FeatureList 
                    features={commercialFeatures}
                    iconColor="bg-amber-600"
                  />
                }
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Modern retail or commercial space]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fit-Out Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Premium commercial fit-out]
                </p>
              </div>
            </div>
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Premium Fit-Outs"
                tagColor="bg-amber-50 text-amber-600"
                title="FIT-OUTS"
                accentColor="bg-amber-600"
                description={[
                  "Our fit-out specialists ensure your retail or commercial space looks pristine & presentable. We collaborate with leading architects to oversee your fit-out requirements and deliver exceptional results.",
                  "We ensure top-quality fit-outs for restaurants, gyms, cafes, offices, and retail spaces that create the perfect environment for your business to thrive."
                ]}
                featureList={
                  <FeatureList 
                    features={fitoutFeatures}
                    iconColor="bg-amber-600"
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Commercial Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our premium commercial construction portfolio across Sydney
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Bella Vista Office",
                type: "Corporate Headquarters",
                description: "Modern office space with premium finishes and innovative workspace design."
              },
              {
                name: "Sydney CBD Restaurant", 
                type: "Hospitality",
                description: "High-end restaurant fit-out featuring custom joinery and specialized lighting systems."
              },
              {
                name: "Orange Retail Complex", 
                type: "Retail Development",
                description: "Multi-tenant retail development with contemporary design and custom storefronts."
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
                  <p className="text-amber-600 font-medium mb-3">{item.type}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA 
        title="Looking to Create an Exceptional Commercial Space?"
        description="Partner with Ausvest for premium construction and fit-out services"
        buttonText="Request Commercial Consultation"
        buttonLink="/contact"
        buttonColor="bg-amber-600 hover:bg-amber-700"
      />
    </ServicePageLayout>
  );
};

export default CommercialConstruction;
