
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";

import ContactMap from "@/components/contact/ContactMap";
import ContactSpecialties from "@/components/contact/ContactSpecialties";
import ContactInfo from "@/components/contact/ContactInfo";
import MobilePhoneBar from "@/components/MobilePhoneBar";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        <ContactHero />
        <ContactInfo />
        <ContactMap />
        <ContactSpecialties />
      </div>
      <Footer />
      <MobilePhoneBar />
    </div>
  );
};


export default Contact;
