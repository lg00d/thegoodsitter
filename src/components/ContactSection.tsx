
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Ready to ensure your pets get the best care? Contact us today!
          </p>
        </div>
        <Card className="max-w-md p-6 mx-auto animate-fade-in">
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full min-h-[120px]" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
