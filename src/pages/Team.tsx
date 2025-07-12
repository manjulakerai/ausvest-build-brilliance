
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamHero from "@/components/team/TeamHero";
import LeadershipTeam from "@/components/team/LeadershipTeam";
import CoreTeam from "@/components/team/CoreTeam";
import MobilePhoneBar from "@/components/MobilePhoneBar";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Content with top padding to account for the fixed header */}
      <div className="pt-28 pb-20">
        <TeamHero />
        <LeadershipTeam />
        <CoreTeam />
      </div>
      <Footer />
      <MobilePhoneBar />
    </div>
  );
};

export default Team;
