
import { Heart, Home, Baby } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: <Heart className="w-10 h-10 text-primary animate-paw-print" />,
    title: "Pet Sitting",
    description: "In-home care and attention for your pets while you're away",
  },
  {
    icon: <Home className="w-10 h-10 text-primary animate-paw-print" style={{ animationDelay: "0.3s" }} />,
    title: "House Visits",
    description: "Regular check-ins and care at your home throughout the day",
  },
  {
    icon: <Baby className="w-10 h-10 text-primary animate-paw-print" style={{ animationDelay: "0.6s" }} />,
    title: "Puppy Care",
    description: "Special attention and training for your young pets",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FF8C4B] to-white" id="services">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-white/80">
            Comprehensive pet care services tailored to your needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in group bg-white/90 backdrop-blur-sm" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
