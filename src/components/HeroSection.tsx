
import { PawPrint, Dog, Cat, Bird, Fish, Heart } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#FFA885] to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left pets */}
        <div className="absolute top-20 left-10 animate-bounce-slight">
          <Dog className="w-12 h-12 text-white/30" />
        </div>
        <div className="absolute top-40 left-20 animate-bounce-slight" style={{ animationDelay: "0.5s" }}>
          <PawPrint className="w-8 h-8 text-white/30" />
        </div>
        
        {/* Top right pets */}
        <div className="absolute top-32 right-24 animate-bounce-slight" style={{ animationDelay: "0.7s" }}>
          <Bird className="w-10 h-10 text-white/30" />
        </div>
        <div className="absolute top-16 right-12 animate-bounce-slight" style={{ animationDelay: "1.2s" }}>
          <Heart className="w-8 h-8 text-white/30" />
        </div>

        {/* Bottom pets */}
        <div className="absolute bottom-20 right-10 animate-bounce-slight" style={{ animationDelay: "1s" }}>
          <Cat className="w-12 h-12 text-white/30" />
        </div>
        <div className="absolute bottom-32 left-16 animate-bounce-slight" style={{ animationDelay: "1.5s" }}>
          <Fish className="w-10 h-10 text-white/30" />
        </div>
        <div className="absolute bottom-12 left-32 animate-bounce-slight" style={{ animationDelay: "0.8s" }}>
          <PawPrint className="w-8 h-8 text-white/30" />
        </div>
      </div>
      <div className="container px-4 mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <PawPrint size={16} className="text-[#FFA885] animate-paw-print" />
          <span className="text-sm font-medium text-gray-800">The Good Sitter</span>
        </div>
        <h1 className="max-w-3xl mx-auto mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white">
          Your pets deserve the very best care
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700">
          Professional, loving care for your furry family members. 
          We treat every pet like our own, providing 24/7 attention and care.
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <PawPrint className="w-6 h-6 text-[#FFA885] animate-bounce-slight" style={{ animationDelay: "0.2s" }} />
          <Heart className="w-6 h-6 text-[#FFA885] animate-bounce-slight" style={{ animationDelay: "0.4s" }} />
          <PawPrint className="w-6 h-6 text-[#FFA885] animate-bounce-slight" style={{ animationDelay: "0.6s" }} />
        </div>
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
