
import { PawPrint, Dog, Cat, Heart, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  // Booking URL - replace with your actual booking URL
  const bookingUrl = "https://calendly.com/thegoodsitter/booking";

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-12">
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Left side pets - moved further out */}
        <div className="absolute top-12 left-8">
          <Dog className="w-16 h-16 text-white/40" />
        </div>
        <div className="absolute top-48 left-16">
          <PawPrint className="w-10 h-10 text-white/30" />
        </div>
        <div className="absolute top-24 left-40">
          <Cat className="w-14 h-14 text-white/35" />
        </div>
        <div className="absolute bottom-32 left-12">
          <Cat className="w-16 h-16 text-white/40" />
        </div>
        <div className="absolute bottom-48 left-36">
          <PawPrint className="w-12 h-12 text-white/35" />
        </div>
        
        {/* Right side pets - moved further out */}
        <div className="absolute top-16 right-28">
          <Cat className="w-16 h-16 text-white/40" />
        </div>
        <div className="absolute top-48 right-12">
          <PawPrint className="w-10 h-10 text-white/30" />
        </div>
        <div className="absolute top-28 right-52">
          <Dog className="w-14 h-14 text-white/35" />
        </div>
        <div className="absolute bottom-20 right-16">
          <Dog className="w-16 h-16 text-white/40" />
        </div>
        <div className="absolute bottom-44 right-36">
          <PawPrint className="w-12 h-12 text-white/35" />
        </div>

        {/* Center decorative elements - reduced size and opacity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Heart className="w-40 h-40 text-[#FFA885]" />
        </div>
      </div>
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h1 className="mx-auto mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
          Your pets deserve the very best care
        </h1>
        <p className="mx-auto mb-8 text-lg text-gray-700 max-w-2xl">
          Professional, loving care for your furry family members. 
          We treat every pet like our own, providing 24/7 attention and care.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Dog className="w-8 h-8 text-[#FFA885]" />
          <Heart className="w-8 h-8 text-[#FFA885]" />
          <Cat className="w-8 h-8 text-[#FFA885]" />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Button 
            size="lg" 
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Consultation
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2 w-full sm:w-auto"
            onClick={() => window.open(bookingUrl, '_blank')}
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
