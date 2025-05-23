
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  servicePages: {
    name: string;
    link: string;
  }[];
  navItems: {
    name: string;
    link: string;
  }[];
}

const MobileMenu = ({ isOpen, onClose, servicePages, navItems }: MobileMenuProps) => {
  return (
    <motion.div 
      className="lg:hidden absolute w-full bg-white shadow-lg"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
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
          onClick={onClose}
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
                onClose();
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
                onClick={onClose}
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
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        
        <Button 
          className="w-full bg-[#3b62c0] hover:bg-blue-700 text-white rounded-none"
          onClick={onClose}
        >
          Get Quote
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
