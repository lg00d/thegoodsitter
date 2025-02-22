
import { Heart, Home, Baby } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Pet Sitting",
    description: "In-home care and attention for your pets while you're away",
  },
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: "House Visits",
    description: "Regular check-ins and care at your home throughout the day",
  },
  {
    icon: <Baby className="w-10 h-10 text-primary" />,
    title: "Puppy Care",
    description: "Special attention and training for your young pets",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive pet care services tailored to your needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
