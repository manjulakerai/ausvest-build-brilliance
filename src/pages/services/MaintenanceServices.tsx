
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";

const MaintenanceServices = () => {
  const maintenanceFeatures = [
    { content: "Residential property maintenance" },
    { content: "Commercial building upkeep" },
    { content: "24/7 emergency repair services" },
    { content: "Preventative maintenance programs" }
  ];

  const serviceBlocks = [
    {
      title: "Reactive Maintenance",
      description: "Quick response to unexpected issues and repairs needed for your property.",
      items: [
        "Emergency repairs",
        "Water damage response",
        "Electrical issues",
        "Plumbing emergencies"
      ]
    },
    {
      title: "Planned Maintenance",
      description: "Scheduled maintenance programs to prevent issues and extend property life.",
      items: [
        "Quarterly inspections",
        "Seasonal system checks",
        "Preventative repairs",
        "Long-term care planning"
      ]
    },
    {
      title: "Residential Maintenance",
      description: "Complete care for homes and residential properties.",
      items: [
        "Interior & exterior upkeep",
        "Garden & landscape maintenance",
        "Pool & outdoor area servicing",
        "General home repairs"
      ]
    },
    {
      title: "Commercial Maintenance",
      description: "Specialized services for office and retail spaces.",
      items: [
        "Office building maintenance",
        "Retail space upkeep",
        "Common area servicing",
        "Building systems maintenance"
      ]
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Maintenance Services"
        description="Comprehensive maintenance solutions for residential and commercial properties across Sydney."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <ContentBlock
                tagText="Property Care"
                tagColor="bg-blue-50 text-blue-600"
                title="TAILORED MAINTENANCE SERVICES"
                accentColor="bg-[#3b62c0]"
                description={[
                  "Our dedicated Maintenance team specializes in offering tailored maintenance services to residential & commercial buildings across Sydney. We also cover large commercial & industrial buildings under our maintenance service.",
                  "With our reactive & planned maintenance services, we ensure your maintenance task is completed with perfection. Our team constantly works with passion & dedication so you can rest easy about your maintenance needs."
                ]}
                buttonText="Schedule Maintenance Service"
                buttonLink="/contact"
                featureList={
                  <FeatureList 
                    features={maintenanceFeatures}
                    iconColor="bg-[#3b62c0]"
                  />
                }
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Maintenance team working on a property]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Maintenance Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to keep your property in perfect condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceBlocks.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <div className="h-1 w-16 bg-[#3b62c0] mb-4"></div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((listItem, listIndex) => (
                    <li key={listIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-[#3b62c0]/20 text-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                        ✓
                      </div>
                      <span className="text-gray-700">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {serviceBlocks.slice(2, 4).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <div className="h-1 w-16 bg-[#3b62c0] mb-4"></div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((listItem, listIndex) => (
                    <li key={listIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-[#3b62c0]/20 text-[#3b62c0] mt-1 mr-3 flex items-center justify-center">
                        ✓
                      </div>
                      <span className="text-gray-700">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Flawless Construction */}
      <ServiceCTA 
        title="A SIMPLE & FLAWLESS CONSTRUCTION"
        description="Finding the right construction & fit-out experts can be a daunting task. To offer you a seamless construction experience, we at Ausvest offer end-to-end Project Management Solutions. Under this service, we handle everything from conceptualization, paperwork, expert support & advising to construction & fit-outs. Our sole purpose is to ensure that your project completes within the given deadline without any hiccups & you get the desired results."
        buttonText="Experience the Difference"
        buttonLink="/contact"
        buttonColor="bg-[#3b62c0] hover:bg-blue-700"
      />
    </ServicePageLayout>
  );
};

export default MaintenanceServices;
