
import { PawPrint } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full py-3 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <PawPrint size={24} className="text-[#FFA885]" />
          <span className="text-lg font-semibold text-gray-800">The Good Sitter</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-gray-700 hover:text-[#FFA885] transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-[#FFA885] transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#FFA885] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
