
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

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
                <PawPrint size={40} className="text-[#FFA885] mr-4" />
                <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The Good Sitter was founded with a simple mission: to provide loving, attentive care for pets when their owners are away. What started as a small, neighborhood service has grown into a trusted pet care solution for families throughout the area.
              </p>
              <p className="text-gray-700 mb-4">
                With years of experience caring for dogs, cats, and exotic pets, we understand that each animal has unique needs and personalities. Our approach is tailored to ensure your pets receive the individual attention they deserve.
              </p>
              <p className="text-gray-700">
                We believe that pets are family, and we treat them with the same care and respect we would want for our own furry companions. When you choose The Good Sitter, you're choosing peace of mind.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-[#FFA885] rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong>Reliability:</strong> We show up when we say we will, every time.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFA885] rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong>Compassion:</strong> Every pet receives loving attention and care.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFA885] rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong>Communication:</strong> We keep you updated about your pet's well-being.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FFA885] rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong>Expertise:</strong> We continuously educate ourselves on best pet care practices.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Sarah Johnson</h3>
                  <p className="text-gray-600 italic mb-3">Founder & Lead Pet Sitter</p>
                  <p className="text-gray-700">
                    With over 10 years of experience in animal care and a degree in veterinary technology, Sarah ensures that every pet receives exceptional care.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Michael Torres</h3>
                  <p className="text-gray-600 italic mb-3">Dog Walking Specialist</p>
                  <p className="text-gray-700">
                    Michael's energy and enthusiasm make him a favorite among our canine clients. He's trained in pet first aid and handling techniques.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ready to Experience The Good Sitter Difference?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/">
                  <Button className="bg-[#FFA885] hover:bg-[#FF9671] text-white px-6 py-2">
                    View Our Services
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-[#FFA885] text-[#FFA885] hover:bg-[#FFA885]/10"
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
