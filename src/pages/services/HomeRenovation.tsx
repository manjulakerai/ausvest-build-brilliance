
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/layouts/ServicePageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContentBlock from "@/components/services/ContentBlock";
import FeatureList from "@/components/services/FeatureList";

const HomeRenovation = () => {
  const renovationFeatures = [
    {
      title: "Full home renovations",
      description: "Complete interior and exterior transformations"
    },
    {
      title: "Kitchen & bathroom upgrades",
      description: "Luxurious, functional spaces with premium fixtures"
    },
    {
      title: "Heritage home restoration",
      description: "Preserving character while adding modern amenities"
    }
  ];

  return (
    <ServicePageLayout>
      <ServiceHero 
        title="Home Renovation & Extension"
        description="Give your home the complete transformation it deserves with our comprehensive renovation services."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ContentBlock
              tagText="Transformation"
              tagColor="bg-emerald-50 text-emerald-600"
              title="GIVE YOUR HOME THE COMPLETE TRANSFORMATION IT DESERVES!"
              accentColor="bg-emerald-600"
              description={[
                "We specialize in Home Renovation, Extension & Home Addition across Sydney. Our comprehensive services are built to ease your renovation, extension or addition requirements.",
                "Our experts work with you to understand your home challenges & create tailored solutions that deliver your desired results. We collaborate with you throughout the entire process - from conceptualization and designing to completion of the project - helping you build your dream home."
              ]}
              quote={{
                text: "A home reflects your lifestyle,",
                highlight: "So make sure you have a stunning one!"
              }}
              buttonText="Transform Your Home"
              buttonLink="/contact"
            />
            
            <div>
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center mb-8">
                <p className="text-gray-500 text-center p-4">
                  [Suggested image: Before/after home renovation]
                </p>
              </div>
              <FeatureList 
                features={renovationFeatures}
                iconColor="bg-emerald-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Renovation & Extension Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to transform your living space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HOME ADDITION",
                content: [
                  "In terms of the construction industry, Home addition means constructing a floor above your existing home. This saves you a lot of money while your crucial land stays open.",
                  "You can enjoy your life in a much better way with the addition of extra living space. At Ausvest, we offer personalized Home Addition services that seamlessly blend with your existing structure. We ensure you get sufficient privacy & don't have to compromise with the beauty of your home.",
                  "Before we move forward, our specialists perform extensive testing of the strength of the existing structure. This ensures you do not face problems with the stability & integrity of your home."
                ]
              },
              {
                title: "HOME EXTENSION",
                content: [
                  "Home extension means adding a floor or room to your existing free space. Depending on your lifestyle, you might prefer a home without any staircase!",
                  "Home extension can be a perfect option for you. But the challenge is extending your home in a way that it seamlessly integrates with your existing structure.",
                  "Our experts are here to help create a larger home with enhanced functionality and improved overall layout using your existing free space to its maximum potential."
                ]
              },
              {
                title: "HOME RENOVATION",
                content: [
                  "A timely renovation or restoration upgrades your home, increases its market value & enhances your lifestyle.",
                  "Whether you want to transform your home into a completely modern living space, or restore the lost glory of your home, quality renovation & restoration can prove extremely helpful.",
                  "At Ausvest, we offer extensive experience in Home Renovation & Restoration that allows us to deliver best-in-class service. Our experts will visit your home, analyze your needs, and offer you the most suitable renovation options."
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <div className="h-1 w-16 bg-emerald-600 mb-6"></div>
                {service.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA 
        title="Ready to Transform Your Living Space?"
        description="Let our renovation experts bring your vision to life"
        buttonText="Book a Free Assessment"
        buttonLink="/contact"
        buttonColor="bg-emerald-600 hover:bg-emerald-700"
      />
    </ServicePageLayout>
  );
};

export default HomeRenovation;
