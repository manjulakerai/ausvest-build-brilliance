
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import { motion } from 'framer-motion';
import { servicePages } from './header/navigationData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-400">
              Sydney's trusted construction partner for over 30 years, specializing in luxury homes, commercial projects, and quality renovations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <span className="w-4 h-0.5 bg-[#3b62c0] mr-2"></span>
              Services
            </h4>
            <div className="space-y-2 text-gray-400">
              {servicePages.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link} 
                  className="block hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <span className="w-4 h-0.5 bg-[#3b62c0] mr-2"></span>
              Company
            </h4>
            <div className="space-y-2 text-gray-400">
              <Link 
                to="/" 
                className="block hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              <Link 
                to="/about-us" 
                className="block hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </Link>
              <Link 
                to="/team" 
                className="block hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Our Team
              </Link>
              <Link 
                to="/projects" 
                className="block hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Projects
              </Link>
              <Link 
                to="/contact-us" 
                className="block hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <span className="w-4 h-0.5 bg-[#3b62c0] mr-2"></span>
              Contact
            </h4>
            <div className="space-y-2 text-gray-400">
              <a href="tel:0412995208" className="hover:text-white transition-colors">0412 995 208</a>
              <a href="mailto:hello@ausvestprojects.com.au" className="block hover:text-white transition-colors">hello@ausvestprojects.com.au</a>
              <div className="hover:text-white transition-colors">38/1 Limestone Road, Rouse Hill, 2155</div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {currentYear} Ausvest Projects. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
