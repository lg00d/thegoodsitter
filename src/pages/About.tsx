
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PawPrint, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About The Good Sitter</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-6">
                <PawPrint size={40} className="text-[#FFDEE2] mr-4" />
                <h2 className="text-2xl font-semibold text-gray-800">My Story</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Hi, I'm Liz Goodman, the face behind The Good Sitter! Animals have always been at the center of my life. I was raised riding horses, which meant growing up surrounded by all kinds of animals…from barn cats to working dogs and, of course, horses. That hands-on experience taught me not only how to care for animals but also how to understand them, their needs, their personalities, and the little details that make each one unique.
              </p>
              <p className="text-gray-700 mb-4">
                My journey with animals became more structured when I got my first Australian Cattle Dog. Together, we went through all levels of obedience training and later took on the challenge of agility courses. That experience deepened my appreciation for training, patience, and the special bond between animals and their humans.
              </p>
              <p className="text-gray-700 mb-4">
                For three years, I managed an A-rated show barn, overseeing the care of 12+ horses. My responsibilities included preparing horses for daily training, feeding, medication administration, show preparation, grooming, and maintaining a safe and organized environment for both the horses and people. This level of responsibility required reliability, attention to detail, and an understanding that animals don't just need care—they need thoughtful, consistent care.
              </p>
              <p className="text-gray-700 mb-4">
                Now, as The Good Sitter, I bring that same level of dedication, experience, and love for animals to pet sitting and dog walking. I know how important it is to find someone you can trust—someone who will treat your pets like their own. Whether it's a walk, in-home pet sitting, or specialized care, my goal is to ensure your pets feel safe, comfortable, and happy while you're away.
              </p>
              <p className="text-gray-700">
                I'd love to meet you and your pets, let's chat and see how I can help!
              </p>
              <p className="text-gray-700 font-semibold mt-4">
                Good Sitter. Better Pets. Happier You.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Heart size={40} className="text-[#FFDEE2]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Passionate Care</h3>
                  <p className="text-gray-700 text-center">
                    Every pet receives loving attention tailored to their unique personality and needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Star size={40} className="text-[#FFDEE2]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Professional Experience</h3>
                  <p className="text-gray-700 text-center">
                    With years of professional animal care experience, your pets are in expert hands.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <PawPrint size={40} className="text-[#FFDEE2]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Peace of Mind</h3>
                  <p className="text-gray-700 text-center">
                    Rest easy knowing your beloved pets are in caring, dependable hands while you're away.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ready to Experience The Good Sitter Difference?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/">
                  <Button className="bg-[#FFDEE2] hover:bg-[#FFCFD5] text-white px-6 py-2">
                    View Our Services
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-[#FFDEE2] text-[#FFDEE2] hover:bg-[#FFDEE2]/10"
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
