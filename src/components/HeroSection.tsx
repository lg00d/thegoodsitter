
import { PawPrint, Dog, Cat } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#FFA885] to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce-slight">
          <Dog className="w-12 h-12 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce-slight" style={{ animationDelay: "1s" }}>
          <Cat className="w-12 h-12 text-white/30" />
        </div>
      </div>
      <div className="container px-4 mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <PawPrint size={16} className="text-[#FFA885] animate-paw-print" />
          <span className="text-sm font-medium text-gray-800">Trusted Pet Care Services</span>
        </div>
        <h1 className="max-w-3xl mx-auto mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white">
          Your pets deserve the very best care
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700">
          Professional, loving care for your furry family members when you're away. Available 24/7 for your peace of mind.
        </p>
        <Button 
          size="lg" 
          className="rounded-full animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book a Consultation
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
