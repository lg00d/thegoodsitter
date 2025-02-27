
import { Card } from "./ui/card";
import { PawPrint } from "lucide-react";

const testimonials = [
  {
    text: "The best pet sitter we've ever had! Our cats were so happy and well-cared for.",
    author: "Sarah M.",
    role: "Cat Parent",
  },
  {
    text: "Incredibly professional and caring. I felt completely at ease leaving my dog in their care.",
    author: "Michael R.",
    role: "Dog Parent",
  },
  {
    text: "Responsive, reliable, and genuinely loves animals. Highly recommended!",
    author: "Emily L.",
    role: "Pet Parent",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20" id="testimonials">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold text-[#333333]">
            What Pet Parents Say
          </h2>
          <p className="text-gray-700">
            Don't just take our word for it - hear from our happy clients
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in bg-white/90 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                <PawPrint className="w-6 h-6 mb-4 text-primary animate-wag" style={{ animationDelay: `${index * 200}ms` }} />
                <p className="flex-1 mb-4 italic text-gray-600">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
