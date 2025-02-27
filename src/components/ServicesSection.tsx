
import { Heart, Home, Baby, Cat, Clock, Leaf } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: <Heart className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Pet Stop",
    description: "Regular check-ins and care at your home throughout the day",
  },
  {
    icon: <Home className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "House Visits",
    description: "Overnight care at your home",
  },
  {
    icon: <Baby className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Puppy Care",
    description: "Special attention and training for your young pets",
  },
  {
    icon: <Cat className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Feeding & Medication",
    description: "Precise feeding schedules and medication administration",
  },
  {
    icon: <Clock className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Overnight Care",
    description: "Extended stays and overnight pet sitting in your home",
  },
  {
    icon: <Leaf className="w-7 h-7 md:w-8 md:h-8 text-[#6BA5E7]" />,
    title: "Exotic Pet Care",
    description: "Specialized care for reptiles, birds, and small mammals",
  }
];

const ServicesSection = () => {
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
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-5 sm:p-6 transition-all duration-300 hover:shadow-lg bg-white/90 backdrop-blur-sm" 
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 mb-4 rounded-full bg-[#F1F0FB]">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
