
import { PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center md:w-1/3 justify-start">
            <PawPrint className="h-6 w-6 text-[#FFA885] mr-2" />
          </div>
          
          <div className="flex flex-col items-center md:w-1/3 justify-center my-4 md:my-0">
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
              <span className="text-[10px] text-gray-400">&copy; {new Date().getFullYear()} The Good Sitter. All rights reserved.</span>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-end">
            {/* Empty div to maintain flex spacing */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
