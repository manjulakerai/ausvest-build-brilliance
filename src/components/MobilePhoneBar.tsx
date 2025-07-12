import { Phone } from "lucide-react";

const MobilePhoneBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#3b62c0] text-white p-4 shadow-lg z-50 md:hidden">
      <a 
        href="tel:+61412995208" 
        className="flex items-center justify-center gap-3 w-full"
        aria-label="Call Ausvest Projects at 0412 995 208"
      >
        <Phone className="w-5 h-5" />
        <span className="font-semibold text-lg">Call Now: 0412 995 208</span>
      </a>
    </div>
  );
};

export default MobilePhoneBar;