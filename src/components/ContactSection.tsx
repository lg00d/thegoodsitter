
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { PawPrint } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

// EmailJS configuration
const EMAILJS_SERVICE_ID = "default_service"; // Replace with your actual Service ID
const EMAILJS_TEMPLATE_ID = "template_default"; // Replace with your actual Template ID
const EMAILJS_USER_ID = "user_xxxxxxxxxxxxx"; // Replace with your actual User ID

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message,
        to_email: "egoodman1180@gmail.com"
      };
      
      // Send the email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20" id="contact">
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-center mb-6">
              <PawPrint className="w-8 h-8 text-primary animate-paw-print" />
            </div>
            
            <div>
              <Input 
                placeholder="Your Name" 
                className={`w-full transition-all duration-300 hover:shadow-md ${errors.name ? "border-red-500" : ""}`}
                {...register("name")}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>
            
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className={`w-full transition-all duration-300 hover:shadow-md ${errors.email ? "border-red-500" : ""}`}
                {...register("email")}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            
            <div>
              <Input 
                type="tel" 
                placeholder="Your Phone Number" 
                className={`w-full transition-all duration-300 hover:shadow-md ${errors.phone ? "border-red-500" : ""}`}
                {...register("phone")}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            
            <div>
              <Textarea 
                placeholder="Your Message" 
                className={`w-full min-h-[120px] transition-all duration-300 hover:shadow-md ${errors.message ? "border-red-500" : ""}`}
                {...register("message")}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full hover:scale-105 transition-transform duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
