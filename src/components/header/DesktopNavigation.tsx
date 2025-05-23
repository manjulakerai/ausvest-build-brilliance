
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

interface DesktopNavigationProps {
  servicePages: {
    name: string;
    link: string;
  }[];
  navItems: {
    name: string;
    link: string;
  }[];
}

const DesktopNavigation = ({ servicePages, navItems }: DesktopNavigationProps) => {
  return (
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
  );
};

export default DesktopNavigation;
