
import { useState } from "react";
import { PawPrint, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAnchorClick = (anchor: string) => {
    setIsMenuOpen(false);
    if (isHomePage) return; // If already on home page, let the browser handle the anchor
  };

  // Create links that work from any page
  const createLink = (anchor: string, label: string) => {
    const url = isHomePage ? `#${anchor}` : `/#${anchor}`;
    return (
      <a 
        href={url} 
        className="text-gray-700 hover:text-[#FFA885] transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full py-3 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <PawPrint size={24} className="text-[#FFA885]" />
          <span className="text-lg font-semibold text-gray-800">The Good Sitter</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {createLink("services", "Services")}
          {createLink("testimonials", "Testimonials")}
          {createLink("contact", "Contact")}
          <Link to="/about" className="text-gray-700 hover:text-[#FFA885] transition-colors">
            About
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden animate-fade-in z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href={isHomePage ? "#services" : "/#services"} 
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href={isHomePage ? "#testimonials" : "/#testimonials"} 
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href={isHomePage ? "#contact" : "/#contact"} 
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
