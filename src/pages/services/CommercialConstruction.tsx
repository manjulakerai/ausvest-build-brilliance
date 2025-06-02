
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
      content: "New Commercial Building Construction & Upgrades"
    },
    {
      content: "Industrial Facility Development"
    },
    {
      content: "Hospitality Venue Construction"
    },
    {
      content: "Childcare centres and medical centres"
    },
    {
      content: "Structural Remediation and Compliance Rectification"
    },
    {
      content: "Insurance-Related Construction and Repair Works"
    }
  ];

  const fitoutFeatures = [
    {
      content: "Office fit-outs & refurbishments"
    },
    {
      content: "Retail, restaurant & café fit-outs"
    },
    {
      content: "Gym & fitness centre fit-outs"
    },
    {
      content: "Custom joinery & cabinetry"
    },
    {
      content: "Premium flooring solutions"
    },
    {
      content: "Lighting & electrical installation"
    },
    {
      content: "Branded environmental design"
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Commercial Construction"
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
                  "Ausvest has delivered some of the most reliable commercial construction projects across Greater Sydney. With over 30 years of combined expertise, our team ensures every project is executed with accuracy, speed, and unmatched quality.",
                  "We specialise in Commercial Construction, offering durable, high-performing solutions for businesses that demand results. From ground-up builds to structural remediation, our fully managed services are designed to keep your project running smoothly, on time and within budget."
                ]}
                buttonText="Discuss Your Commercial Project"
                buttonLink="/contact"
                featureList={
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Our Services Include:</h3>
                    <FeatureList 
                      features={commercialFeatures}
                      iconColor="bg-amber-600"
                    />
                  </div>
                }
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Modern commercial construction]
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
                title="FIT-OUT CONSTRUCTION"
                accentColor="bg-amber-600"
                description={[
                  "At Ausvest, we specialise in delivering high-quality commercial fit-out projects across Greater Sydney. With over 30 years of combined industry experience, our team ensures each space is completed with precision, professionalism, and long-term value in mind.",
                  "We offer fully tailored fit-out solutions, managing everything from site preparation to final finishes, with a strong commitment to 100% client satisfaction.",
                  "Our fit-out specialists work closely with leading architects and designers to transform restaurants, cafés, gyms, offices, and retail spaces into functional, stylish environments where businesses thrive."
                ]}
                featureList={
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Fit-Out Services:</h3>
                    <FeatureList 
                      features={fitoutFeatures}
                      iconColor="bg-amber-600"
                    />
                  </div>
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
