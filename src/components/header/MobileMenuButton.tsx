
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isHomepage?: boolean;
  scrolled?: boolean;
}

const MobileMenuButton = ({ isOpen, onClick, isHomepage = false, scrolled = false }: MobileMenuButtonProps) => {
  // Use white text only on homepage when not scrolled, otherwise use dark blue
  const textColor = isHomepage && !scrolled ? 'text-white' : 'text-blue-900';

  return (
    <button 
      onClick={onClick}
      className={`${textColor} focus:outline-none`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-7 w-7" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
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
