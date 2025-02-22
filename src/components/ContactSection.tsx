import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { PawPrint } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFB499] to-[#FFA885]" id="contact">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold text-[#333333]">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            Ready to ensure your pets get the best care? Contact us today!
          </p>
        </div>
        <Card className="max-w-md p-6 mx-auto animate-fade-in bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
          <form className="space-y-4">
            <div className="flex justify-center mb-6">
              <PawPrint className="w-8 h-8 text-primary animate-paw-print" />
            </div>
            <div>
              <Input placeholder="Your Name" className="w-full transition-all duration-300 hover:shadow-md" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="w-full transition-all duration-300 hover:shadow-md" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full min-h-[120px] transition-all duration-300 hover:shadow-md" />
            </div>
            <Button className="w-full rounded-full hover:scale-105 transition-transform duration-300">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
