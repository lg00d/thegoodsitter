
import { Card } from "./ui/card";
import { PawPrint } from "lucide-react";
import { useEffect } from "react";

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
    text: "Always happy to come home, and see a cheerful pup having had a lovely walk with Lizzy!",
    author: "E.F.",
    role: "Dog Parent",
  },
];

const TestimonialsSection = () => {
  // Add structured data for testimonials (rich snippets)
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Good Sitter",
      "review": testimonials.map((testimonial, index) => ({
        "@type": "Review",
        "reviewBody": testimonial.text,
        "author": {
          "@type": "Person",
          "name": testimonial.author
        }
      }))
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
          <h2 id="testimonials-heading" className="mb-4 text-3xl font-bold text-[#333333]">
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
                <blockquote className="flex-1 mb-4">
                  <p className="italic text-gray-600">"{testimonial.text}"</p>
                </blockquote>
                <footer>
                  <cite className="not-italic">
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </cite>
                </footer>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
