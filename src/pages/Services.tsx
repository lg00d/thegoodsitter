
import { Heart, Home, Baby, PawPrint, Clock, Cat, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const allServices = [
  {
    icon: <Heart className="w-10 h-10 text-primary animate-paw-print" />,
    title: "Pet Stop",
    description: "In-home care and attention for your pets while you're away"
  },
  {
    icon: <Home className="w-10 h-10 text-primary animate-paw-print" style={{ animationDelay: "0.3s" }} />,
    title: "House Visits",
    description: "Regular check-ins and care at your home throughout the day. Perfect for pets who prefer familiar surroundings and need multiple visits for feeding and walks."
  },
  {
    icon: <Baby className="w-10 h-10 text-primary animate-paw-print" style={{ animationDelay: "0.6s" }} />,
    title: "Puppy Care",
    description: "Special attention and training for your young pets. Includes potty training assistance, basic obedience training, socialization exercises, and lots of playtime."
  },
  {
    icon: <Cat className="w-10 h-10 text-primary animate-paw-print" style={{ animationDelay: "0.4s" }} />,
    title: "Feeding & Medication",
    description: "Precise feeding schedules and medication administration. We follow your instructions exactly and can handle special dietary needs and medical requirements."
  },
  {
    icon: <Clock className="w-10 h-10 text-primary animate-paw-print" style={{ animationDelay: "0.5s" }} />,
    title: "Overnight Care",
    description: "Extended stays and overnight pet sitting in your home. Provides your pets with companionship through the night and maintains their regular routines."
  },
  {
    icon: <Leaf className="w-10 h-10 text-primary animate-paw-print" style={{ animationDelay: "0.7s" }} />,
    title: "Exotic Pet Care",
    description: "Specialized care for reptiles, birds, small mammals, and other exotic pets. Our experienced sitters can handle the unique needs of all types of animal companions."
  }
];

const ServicesPage = () => {
  return (
    <>
      <Navigation />
      <div 
        className="min-h-screen py-20"
        style={{ 
          background: "linear-gradient(to bottom, #D3E4FD 0%, white 100%)",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
            <h1 className="mb-4 text-4xl font-bold text-[#333333]">
              Our Complete Services
            </h1>
            <p className="text-gray-700 mb-8">
              Comprehensive pet care services tailored to your needs and your pet's comfort
            </p>
            <div className="flex justify-center mb-12">
              <PawPrint size={40} className="text-[#6BA5E7]" />
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service, index) => (
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
          
          <div className="max-w-xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Not sure what you need?</h2>
            <p className="text-gray-700 mb-6">
              Every pet is unique. Contact us for a personalized consultation to create the perfect care plan for your furry friend.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#6BA5E7] text-white font-medium hover:bg-[#5A94D6] transition-colors shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
