
import { PawPrint, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <PawPrint className="h-6 w-6 text-[#FFA885] mr-2" />
            <span className="text-gray-700 font-medium">Snuggly Sitter</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-gray-700">Fully Insured Pet Care Professional</span>
            </div>
            
            <a 
              href="https://www.petcareins.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://www.petcareins.com/uploads/seals/pci-badge-color-100x95.png" 
                alt="Pet Care and Pet Sitting Insurance Seal" 
                className="h-16 w-auto"
              />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Snuggly Sitter. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
