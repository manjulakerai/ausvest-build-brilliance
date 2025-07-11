
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import OurProcess from "@/components/about/OurProcess";
import AboutCTA from "@/components/about/AboutCTA";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const About = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        <AboutHero />
        <OurStory />
        <OurValues />
        <OurProcess />
        <AboutCTA />
      </div>
      <Footer />
    </div>
  );
};

export default About;
