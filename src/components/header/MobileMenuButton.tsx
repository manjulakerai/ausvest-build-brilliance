
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isHomepage?: boolean;
  scrolled?: boolean;
}

const MobileMenuButton = ({ isOpen, onClick, isHomepage = false, scrolled = false }: MobileMenuButtonProps) => {
  // Use white text only on homepage when not scrolled, otherwise use dark blue
  const textColor = isHomepage && !scrolled ? 'text-white' : 'text-blue-900';
  const textShadow = isHomepage && !scrolled ? 'drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]' : '';
  const textBg = isHomepage && !scrolled ? 'bg-black/20 backdrop-blur-sm' : '';

  return (
    <button 
      onClick={onClick}
      className={`${textColor} ${textShadow} ${textBg} p-3 rounded-md transition-all hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-8 w-8" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2.5}
      >
        {isOpen ? (
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
  );
};

export default MobileMenuButton;
