
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactSpecialties from "@/components/contact/ContactSpecialties";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        <ContactHero />
        <ContactForm />
        <ContactMap />
        <ContactSpecialties />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
