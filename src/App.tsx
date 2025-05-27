
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import LuxuryHomeConstruction from "./pages/services/LuxuryHomeConstruction";
import DuplexConstruction from "./pages/services/DuplexConstruction";
import MultiHomeConstruction from "./pages/services/MultiHomeConstruction";
import HomeRenovation from "./pages/services/HomeRenovation";
import CommercialConstruction from "./pages/services/CommercialConstruction";
import FitoutConstruction from "./pages/services/FitoutConstruction";
import MaintenanceServices from "./pages/services/MaintenanceServices";

// ScrollToTop component to ensure all page changes start at the top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/services/luxury-home-construction" element={<LuxuryHomeConstruction />} />
          <Route path="/services/duplex-construction" element={<DuplexConstruction />} />
          <Route path="/services/multi-home-construction" element={<MultiHomeConstruction />} />
          <Route path="/services/home-renovation" element={<HomeRenovation />} />
          <Route path="/services/commercial-construction" element={<CommercialConstruction />} />
          <Route path="/services/fitout-construction" element={<FitoutConstruction />} />
          <Route path="/services/maintenance-services" element={<MaintenanceServices />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
