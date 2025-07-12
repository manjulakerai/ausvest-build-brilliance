
import { useState, useEffect } from "react";
import LogoAnimation from "@/components/LogoAnimation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactInfo from "@/components/sections/ContactInfo";
import Footer from "@/components/Footer";
import MobilePhoneBar from "@/components/MobilePhoneBar";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading complete after initial animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Initial logo animation */}
      <LogoAnimation />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Info Section */}
      <ContactInfo />

      {/* Footer */}
      <Footer />
      
      {/* Mobile Phone Bar */}
      <MobilePhoneBar />
    </div>
  );
};

export default Index;
