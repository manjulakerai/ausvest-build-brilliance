
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import ContactSpecialties from "@/components/contact/ContactSpecialties";

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
    </div>
  );
};

// Add a new ContactInfo component to replace the form
const ContactInfo = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#3b62c0] mb-6 mx-auto"></div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to discuss your luxury construction project? Reach out to us directly.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-10">
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-3">Call Us</h3>
              <a href="tel:0412995208" className="text-xl text-[#3b62c0] hover:underline">
                0412 995 208
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-3">Email Us</h3>
              <a href="mailto:hello@ausvestprojects.com.au" className="text-xl text-[#3b62c0] hover:underline">
                hello@ausvestprojects.com.au
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-3">Visit Us</h3>
              <p className="text-xl text-gray-600">38/1 Limestone Road, Rouse Hill, 2155</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
