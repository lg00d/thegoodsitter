
import { useState } from "react";
import { Heart, Home, Leaf, ChevronDown, ChevronUp, Dog } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const services = [
  {
    icon: <Heart className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Pet Stop",
    description: "30 minute check-ins and care at your home throughout the day",
    pricing: "$24 for 30 mins, +$12 for full hour/extended time",
    rates: [
      "30 minutes - $24",
      "Full hour - $40",
      "Additional pet - $5"
    ],
    details: [
      "Feeding & Water",
      "Potty Stop",
      "Playtime",
      "Medication administration - if needed",
      "Status updates with photos"
    ]
  },
  {
    icon: <Dog className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Dog Walking",
    description: "Professional dog walking services to keep your furry friend active and happy",
    pricing: "$25 for 30 min walk",
    rates: [
      "30 minutes - $25",
      "Additional dog - $5"
    ],
    details: [
      "Exercise and socialization",
      "Leash training reinforcement",
      "Fresh water provided",
      "Updates with photos after each walk"
    ]
  },
  {
    icon: <Home className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "House Sitting",
    description: "Overnight care at your home",
    pricing: "Starting at $100 per night",
    rates: [
      "Standard rate - $100/night",
      "Holiday rate - $125/night",
      "Puppy rate - $115/night",
      "Additional dog - $20",
      "Cat care - $85/night",
      "Additional cat - $5"
    ],
    details: [
      "Extended evening and morning care",
      "Feeding and exercise routines",
      "House security checks",
      "Overnight companionship for your pets",
      "Daily updates and communication"
    ]
  },
  {
    icon: <Leaf className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Exotic Pet Care",
    description: "Specialized care for reptiles, fish, and small mammals",
    pricing: "Contact for pricing",
    rates: [
      "Contact for personalized rates"
    ],
    details: [
      "Species-specific handling and care",
      "Proper environment maintenance",
      "Specialized feeding protocols",
      "Health monitoring for exotic species",
      "Environment enrichment activities"
    ]
  }
];

interface ServiceCardProps {
  service: {
    icon: JSX.Element;
    title: string;
    description: string;
    pricing: string;
    rates: string[];
    details: string[];
  };
  isExpanded: boolean;
  toggleExpand: () => void;
}

const ServiceCard = ({ service, isExpanded, toggleExpand }: ServiceCardProps) => {
  return (
    <Card 
      className="p-5 sm:p-6 transition-all duration-300 hover:shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 mb-4 rounded-full bg-[#F1F0FB]">
          {service.icon}
        </div>
        <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3">{service.description}</p>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#6BA5E7] hover:text-[#FFA885] hover:bg-[#F1F0FB] transition-all"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <>
              Less Details <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              More Details <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
        
        <div className={`mt-4 overflow-hidden transition-all duration-300 w-full ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">What we offer:</h4>
            <ul className="text-sm text-left space-y-2 mb-4">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#6BA5E7] mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="font-medium text-gray-800 mb-2">Rates:</h4>
            <ul className="text-sm text-left space-y-2">
              {service.rates.map((rate, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#FFA885] mr-2">•</span>
                  <span className="font-medium">{rate}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ServicesSection = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <section className="py-16 sm:py-20" id="services">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-8 sm:mb-12 text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-[#333333]">
            Our Services
          </h2>
          <p className="text-gray-700">
            Comprehensive pet care services tailored to your needs
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              isExpanded={isExpanded}
              toggleExpand={toggleExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
