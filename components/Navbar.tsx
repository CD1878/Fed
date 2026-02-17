import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Facebook, Instagram } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
  }`;

  const linkClasses = (page: string) => `uppercase text-sm tracking-wide font-medium hover:text-[#91112D] transition-colors cursor-pointer ${
    activePage === page ? 'text-[#91112D]' : isScrolled ? 'text-black' : 'text-white shadow-text'
  }`;

  const logoSrc = isScrolled 
    ? "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" // Using same logo, would typically swap for dark version if transparent
    : "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w";
  
  // Hack to make logo visible on white background if it's white text
  const logoStyle = isScrolled ? { filter: 'invert(1) brightness(0)' } : {};

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#f0f0f0] text-center text-xs py-2 tracking-wide font-light z-[60] relative">
        <p>nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!</p>
      </div>

      <nav className={navClasses}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="w-32 md:w-40 cursor-pointer" onClick={() => onNavigate('home')}>
             <img src={logoSrc} alt="Feduzzi" style={logoStyle} className="w-full h-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <span onClick={() => onNavigate('traiteur')} className={linkClasses('traiteur')}>Menu</span>
            <span onClick={() => onNavigate('broodjes')} className={linkClasses('broodjes')}>Broodjes</span>
            <span className={linkClasses('sfeer')}>Sfeer</span>
            <span className={linkClasses('over')}>Over ons</span>
            <span className={linkClasses('werken')}>Werken bij</span>
            <span className={linkClasses('vestigingen')}>Vestigingen</span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex space-x-2 ${isScrolled ? 'text-black' : 'text-white'}`}>
              <Facebook size={20} className="hover:text-[#91112D] cursor-pointer" />
              <Instagram size={20} className="hover:text-[#91112D] cursor-pointer" />
            </div>
            <button 
              onClick={() => onNavigate('broodjes')}
              className={`border px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                isScrolled 
                  ? 'border-[#91112D] text-[#91112D] hover:bg-[#91112D] hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Bestel broodjes
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
             <button onClick={() => onNavigate('broodjes')} className={`text-xs uppercase border px-2 py-1 ${isScrolled ? 'text-black border-black' : 'text-white border-white'}`}>Bestel</button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? 'text-black' : 'text-white'}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#91112D] z-40 flex flex-col justify-center items-center text-white space-y-6 pt-20">
             <span onClick={() => {onNavigate('traiteur'); setMobileMenuOpen(false)}} className="text-2xl font-serif cursor-pointer">Menu</span>
             <span onClick={() => {onNavigate('broodjes'); setMobileMenuOpen(false)}} className="text-2xl font-serif cursor-pointer">Broodjes</span>
             <span className="text-2xl font-serif cursor-pointer">Sfeer</span>
             <span className="text-2xl font-serif cursor-pointer">Over ons</span>
             <span className="text-2xl font-serif cursor-pointer">Vestigingen</span>
             
             <div className="flex space-x-6 mt-8">
               <Facebook size={28} />
               <Instagram size={28} />
             </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
