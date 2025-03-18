
import { Card } from "./ui/card";
import { PawPrint } from "lucide-react";

const testimonials = [
  {
    text: "Wonderful and very reliable! We have booked Elizabeth a number of times and she is so great with our two big dogs. We love her!",
    author: "S.H.",
    role: "Dog Parent",
  },
  {
    text: "Elizabeth was absolutely amazing! She handled my babies so well and in my challenging environment! I had nothing to worry about while I was away!!",
    author: "M.M.",
    role: "Cat Parent",
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
                <PawPrint className="w-5 h-5 sm:w-6 sm:h-6 mb-4 text-primary opacity-80" style={{ animationDelay: `${index * 200}ms` }} />
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
