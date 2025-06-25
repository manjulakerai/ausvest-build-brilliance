
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecurityHeaders from "@/components/SecurityHeaders";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Service pages
import LuxuryHomeConstruction from "./pages/services/LuxuryHomeConstruction";
import DuplexConstruction from "./pages/services/DuplexConstruction";
import MultiHomeConstruction from "./pages/services/MultiHomeConstruction";
import HomeRenovation from "./pages/services/HomeRenovation";
import MaintenanceServices from "./pages/services/MaintenanceServices";
import CommercialConstruction from "./pages/services/CommercialConstruction";
import FitoutConstruction from "./pages/services/FitoutConstruction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SecurityHeaders />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Service routes */}
          <Route path="/luxury-home-builders" element={<LuxuryHomeConstruction />} />
          <Route path="/luxury-home-builders/" element={<LuxuryHomeConstruction />} />
          <Route path="/duplex-builders" element={<DuplexConstruction />} />
          <Route path="/duplex-builders/" element={<DuplexConstruction />} />
          <Route path="/multi-home-builders" element={<MultiHomeConstruction />} />
          <Route path="/multi-home-builders/" element={<MultiHomeConstruction />} />
          <Route path="/home-renovation" element={<HomeRenovation />} />
          <Route path="/home-renovation/" element={<HomeRenovation />} />
          <Route path="/maintenance-services" element={<MaintenanceServices />} />
          <Route path="/maintenance-services/" element={<MaintenanceServices />} />
          <Route path="/retail-commercial-services" element={<CommercialConstruction />} />
          <Route path="/retail-commercial-services/" element={<CommercialConstruction />} />
          <Route path="/services/fitout-construction" element={<FitoutConstruction />} />
          
          {/* Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
