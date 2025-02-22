
import { PawPrint } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#FDE1D3] to-white">
      <div className="container px-4 mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm">
          <PawPrint size={16} className="text-primary" />
          <span className="text-sm font-medium">Trusted Pet Care Services</span>
        </div>
        <h1 className="max-w-3xl mx-auto mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Your pets deserve the very best care
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-lg text-muted-foreground">
          Professional, loving care for your furry family members when you're away. Available 24/7 for your peace of mind.
        </p>
        <Button size="lg" className="rounded-full animate-fade-in" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Book a Consultation
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
