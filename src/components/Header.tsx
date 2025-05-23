
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from "./Logo";
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenuButton from './header/MobileMenuButton';
import { servicePages, navItems } from './header/navigationData';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
          <DesktopNavigation 
            servicePages={servicePages}
            navItems={navItems}
            isHomepage={isHomepage}
            scrolled={scrolled}
          />

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
              isHomepage={isHomepage}
              scrolled={scrolled}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        servicePages={servicePages}
        navItems={navItems}
      />
    </motion.header>
  );
};

export default Header;
