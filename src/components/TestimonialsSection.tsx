
import { Card } from "./ui/card";

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
    <section className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold">What Pet Parents Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it - hear from our happy clients
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                <p className="flex-1 mb-4 italic text-muted-foreground">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
