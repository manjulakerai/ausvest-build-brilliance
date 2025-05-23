
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const servicePages = [
    { name: 'Luxury Home Construction', link: '/services/luxury-home-construction' },
    { name: 'Duplex Construction', link: '/services/duplex-construction' },
    { name: 'Multi-Home Construction', link: '/services/multi-home-construction' },
    { name: 'Home Renovation', link: '/services/home-renovation' },
    { name: 'Commercial Construction', link: '/services/commercial-construction' },
    { name: 'Maintenance Services', link: '/services/maintenance-services' },
  ];

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Team', link: '/team' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-slate-700 hover:text-[#3b62c0] font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#3b62c0] after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link 
                to="/services"
                className="text-slate-700 hover:text-[#3b62c0] font-medium transition-colors flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#3b62c0] after:transition-all group-hover:after:w-full"
              >
                Services <ChevronDown className="h-4 w-4" />
              </Link>
              
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {servicePages.map((service) => (
                    <Link 
                      key={service.name}
                      to={service.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3b62c0]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.link}
                className="text-slate-700 hover:text-[#3b62c0] font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#3b62c0] after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
            
            <Button className="bg-[#3b62c0] hover:bg-blue-700 text-white px-6 py-2 rounded-none transition-all hover:-translate-y-0.5 shadow-lg">
              Get Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={`lg:hidden absolute w-full bg-white shadow-lg`}
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: 'auto', opacity: 1, display: 'block' },
          closed: { height: 0, opacity: 0, transitionEnd: { display: 'none' } }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-4 py-4 space-y-4">
          <Link 
            to="/"
            className="block text-slate-700 hover:text-[#3b62c0] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div className="relative">
            <div
              className="flex justify-between items-center cursor-pointer text-slate-700 hover:text-[#3b62c0] transition-colors"
              onClick={() => document.getElementById('mobile-services')?.classList.toggle('hidden')}
            >
              <Link 
                to="/services"
                className="block text-slate-700 hover:text-[#3b62c0] transition-colors"
                onClick={(e) => {
                  e.stopPropagation(); // This prevents the dropdown from toggling when clicking the link
                  setMobileMenuOpen(false);
                }}
              >
                Services
              </Link>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div id="mobile-services" className="hidden pl-4 mt-2 space-y-2">
              {servicePages.map((service) => (
                <Link 
                  key={service.name}
                  to={service.link}
                  className="block py-1 text-slate-700 hover:text-[#3b62c0] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.link}
              className="block text-slate-700 hover:text-[#3b62c0] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <Button 
            className="w-full bg-[#3b62c0] hover:bg-blue-700 text-white rounded-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Quote
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
