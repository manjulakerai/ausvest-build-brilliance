
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";
import OurProcess from "@/components/about/OurProcess";
import { projectsData } from "@/data/projectsData";
import fitoutConstructionImage from "@/assets/fitout-construction.jpg";

const FitoutConstruction = () => {
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
        title="Fit-out Construction"
        description="Premium fit-out solutions transforming commercial and retail spaces across Sydney."
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
                  "At Ausvest, we specialise in delivering high-quality commercial fit-out projects across Greater Sydney. With over 30 years of combined industry experience, our team ensures each space is completed with precision, professionalism, and long-term value in mind.",
                  "We offer fully tailored fit-out solutions, managing everything from site preparation to final finishes, with a strong commitment to 100% client satisfaction.",
                  "Our fit-out specialists work closely with leading architects and designers to transform restaurants, cafés, gyms, offices, and retail spaces into functional, stylish environments where businesses thrive."
                ]}
                buttonText="Discuss Your Fit-Out Project"
                buttonLink="/contact"
                featureList={
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Fit-Out Services:</h3>
                    <FeatureList 
                      features={fitoutFeatures}
                      iconColor="bg-purple-600"
                    />
                  </div>
                }
              />
            </div>
            <div className="md:col-span-2">
              <img 
                src={fitoutConstructionImage} 
                alt="Modern fit-out construction"
                className="w-full h-full object-cover rounded-md aspect-[4/3]"
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
              Our premium fit-out portfolio across Sydney
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectsData
              .filter(project => project.category === "fitout" && project.image)
              .slice(0, 6)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white shadow-lg overflow-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                        <p className="text-gray-500">Project Image</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <ServiceCTA 
        title="Ready to Transform Your Space?"
        description="Partner with Ausvest for premium fit-out construction services"
        buttonText="Request Fit-Out Consultation"
        buttonLink="/contact"
        buttonColor="bg-purple-600 hover:bg-purple-700"
      />
    </ServicePageLayout>
  );
};

export default FitoutConstruction;
