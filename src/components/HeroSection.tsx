
import { PawPrint, Dog, Cat, Heart } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#FFA885] to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side pets */}
        <div className="absolute top-20 left-10">
          <Dog className="w-16 h-16 text-white/40" />
        </div>
        <div className="absolute top-48 left-24">
          <PawPrint className="w-10 h-10 text-white/30" />
        </div>
        <div className="absolute bottom-32 left-16">
          <Cat className="w-16 h-16 text-white/40" />
        </div>
        
        {/* Right side pets - adjusted positioning */}
        <div className="absolute top-24 right-32">
          <Cat className="w-16 h-16 text-white/40" />
        </div>
        <div className="absolute top-48 right-16">
          <PawPrint className="w-10 h-10 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Dog className="w-16 h-16 text-white/40" />
        </div>

        {/* Additional paw prints */}
        <div className="absolute bottom-12 left-32">
          <PawPrint className="w-10 h-10 text-white/30" />
        </div>
        <div className="absolute top-16 right-48">
          <PawPrint className="w-10 h-10 text-white/30" />
        </div>
      </div>
      <div className="container px-4 mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <PawPrint size={16} className="text-[#FFA885]" />
          <span className="text-sm font-medium text-gray-800">The Good Sitter</span>
        </div>
        <h1 className="max-w-3xl mx-auto mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white">
          Your pets deserve the very best care
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700">
          Professional, loving care for your furry family members. 
          We treat every pet like our own, providing 24/7 attention and care.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Dog className="w-8 h-8 text-[#FFA885]" />
          <Heart className="w-8 h-8 text-[#FFA885]" />
          <Cat className="w-8 h-8 text-[#FFA885]" />
        </div>
        <Button 
          size="lg" 
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book a Consultation
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
