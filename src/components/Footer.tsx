
import { PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <PawPrint className="h-6 w-6 text-[#FFA885] mr-2" />
            <span className="text-gray-700 font-medium">The Good Sitter</span>
          </div>
          
          <div className="flex flex-col items-center">
            <a 
              href="https://www.petcareins.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 mb-2"
            >
              <img 
                src="https://www.petcareins.com/uploads/seals/pci-badge-color-100x95.png" 
                alt="Pet Care and Pet Sitting Insurance Seal" 
                className="h-16 w-auto"
              />
            </a>
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1">Fully Insured Pet Care Professional</span>
              <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} The Good Sitter. All rights reserved.</span>
            </div>
          </div>
          
          <div className="invisible md:visible">
            {/* Empty div to maintain flex spacing */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
