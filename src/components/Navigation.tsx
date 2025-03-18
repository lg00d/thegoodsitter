import { useState, useEffect } from "react";
import { PawPrint, Menu, X, Calendar } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Booking URL - updated to Time To Pet portal
  const bookingUrl = "https://www.timetopet.com/portal/thegoodsitter/create-account";

  // Handle scrolling to anchors when URL changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Get the element with that id
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Wait a bit for the page to fully load before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Handle anchor link clicks
  const handleAnchorClick = (anchor: string) => {
    setIsMenuOpen(false);
    
    if (isHomePage) {
      // If already on home page, just scroll to the section
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with hash
      navigate(`/#${anchor}`);
    }
  };

  // Create links that work from any page
  const createLink = (anchor: string, label: string) => {
    return (
      <button 
        onClick={() => handleAnchorClick(anchor)}
        className="text-gray-700 hover:text-[#FFA885] transition-colors text-left"
      >
        {label}
      </button>
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
          <Button 
            className="rounded-full gap-2 hover:scale-105"
            onClick={() => window.open(bookingUrl, '_blank')}
            variant="default"
            size="sm"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </Button>
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
            <button 
              onClick={() => handleAnchorClick("services")}
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => handleAnchorClick("testimonials")}
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100 text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleAnchorClick("contact")}
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100 text-left"
            >
              Contact
            </button>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-[#FFA885] transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              className="rounded-full gap-2 w-full"
              onClick={() => {
                window.open(bookingUrl, '_blank');
                setIsMenuOpen(false);
              }}
              variant="default"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
