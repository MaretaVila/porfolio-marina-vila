import { Button } from "../ui/button";
import { ArrowLeft, ExternalLink, Users, Target, TrendingUp, Clock, Check, Search, Smartphone, CreditCard, Star } from "lucide-react";
import ticketeraCaseImage from 'figma:asset/fe92bb2c44adbcc56bc5316bac92a834051ffc1b.png';
import ticketeraFullCase from 'figma:asset/9bc6d3bf220168c9f9740758dec636440bd9b631.png';

export function TicketeraCase() {
  const goBack = () => {
    window.location.hash = '#';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button onClick={goBack} variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1e1e76] to-[#4b4bc3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6">
              Ticketera
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Redesigning the ticket purchasing experience for cultural events through an app with intuitive navigation
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-sm opacity-80">ROLE</div>
                <div className="text-lg">UX/UI Designer</div>
              </div>
              <div>
                <div className="text-sm opacity-80">PLATFORM</div>
                <div className="text-lg">Mobile App</div>
              </div>
              <div>
                <div className="text-sm opacity-80">CATEGORY</div>
                <div className="text-lg">Cultural Events</div>
              </div>
              <div>
                <div className="text-sm opacity-80">TYPE</div>
                <div className="text-lg">Ticket Booking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl mb-8 text-gray-900">Description</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Ticketera is a cultural event ticket purchasing app designed for young adults 
              between 18 and 35 years old who seek authentic cultural experiences. The project 
              aims to redesign the digital ticket buying experience, making it more intuitive, 
              visual, and user-centered.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through a complete UX process that includes research, wireframing, prototyping, and 
              usability testing, a solution was developed that simplifies the ticket discovery 
              and purchase process, significantly improving the user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Target & Challenge */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">Target</h2>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <Users className="w-12 h-12 text-[#4b4bc3] mb-4" />
                <h3 className="text-xl mb-4">Young Adults 18-35 years</h3>
                <p className="text-gray-700 leading-relaxed">
                  Users interested in cultural events, concerts, theater, and exhibitions. 
                  They seek a smooth and visual digital experience that allows them to discover 
                  and purchase tickets quickly and securely.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">Challenge</h2>
              <div className="bg-purple-50 p-8 rounded-2xl">
                <Target className="w-12 h-12 text-[#4b4bc3] mb-4" />
                <h3 className="text-xl mb-4">Redesign the experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create a mobile application that simplifies the ticket purchasing process, 
                  improving navigation, event discovery, and trust in the payment process, 
                  while maintaining an attractive and modern interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Case Study Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <img 
            src={ticketeraFullCase}
            alt="Ticketera UX Case Study - Complete Design Process"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="text-center pt-8 border-t border-gray-200">
          <Button onClick={goBack} size="lg" className="bg-[#4b4bc3] hover:bg-[#1e1e76] text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
