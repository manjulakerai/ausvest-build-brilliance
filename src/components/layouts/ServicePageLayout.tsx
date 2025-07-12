
import { ReactNode, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobilePhoneBar from "@/components/MobilePhoneBar";

interface ServicePageLayoutProps {
  children: ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        {children}
      </div>
      <Footer />
      <MobilePhoneBar />
    </div>
  );
};

export default ServicePageLayout;
