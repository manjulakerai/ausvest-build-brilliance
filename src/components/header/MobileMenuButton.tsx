
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isHomepage?: boolean;
}

const MobileMenuButton = ({ isOpen, onClick, isHomepage = false }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`${isHomepage ? 'text-white' : 'text-slate-700'} focus:outline-none`}
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
