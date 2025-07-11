
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";
import { projectsData } from "@/data/projectsData";

const LuxuryHomeConstruction = () => {
  const luxuryFeatures = [
    { content: "Custom luxury homes" },
    { content: "Premium finishes & materials" },
    { content: "Architectural excellence" },
    { content: "30+ years industry experience" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Design",
      description: "We begin with understanding your vision, preferences, and requirements for your dream luxury home."
    },
    {
      step: "02",
      title: "Planning & Approvals",
      description: "Our experts handle all planning, documentation, and approval processes to ensure a smooth start."
    },
    {
      step: "03", 
      title: "Construction",
      description: "Our skilled team brings your vision to life with precision, using only premium materials and finishes."
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "We complete a thorough quality inspection before handing over your stunning new luxury residence."
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Luxury Home Construction"
        description="Crafting stunning & luxurious residential buildings across Sydney & its suburbs for over 30 years."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Luxury Living"
                tagColor="bg-blue-50 text-[#3b62c0]"
                title="LUXURY HOME BUILDERS"
                accentColor="bg-[#3b62c0]"
                description={[
                  "For over three decades, Ausvest has crafted stunning luxury residences across Sydney and surrounding suburbs. With our impeccable excellence in building construction, we offer services that exceed our clients' expectations.",
                  "At Ausvest, we take pride in our work culture that ensures efficient communication between you & our team. This communication approach allows us to deliver 100% satisfaction with every project we complete."
                ]}
                buttonText="Contact Us"
                buttonLink="/contact-us/"
                featureList={
                  <FeatureList 
                    features={luxuryFeatures}
                    iconColor="bg-[#3b62c0]"
                  />
                }
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Luxury home with premium finishes]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Luxury Construction Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional luxury homes through a meticulous, client-focused approach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg border-l-4 border-[#3b62c0]"
              >
                <div className="text-4xl font-bold text-[#3b62c0]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Luxury Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our premium luxury home portfolio across Sydney
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectsData
              .filter(project => project.category === "residential")
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
                        <span key={tagIndex} className="px-2 py-1 bg-blue-50 text-[#3b62c0] text-xs rounded">
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
        title="Ready to Build Your Dream Luxury Home?"
        description="Let us create a stunning residence that exceeds your expectations"
        buttonText="Schedule a Consultation"
        buttonLink="/contact-us/"
        buttonColor="bg-[#3b62c0] hover:bg-blue-700"
      />
    </ServicePageLayout>
  );
};

export default LuxuryHomeConstruction;
