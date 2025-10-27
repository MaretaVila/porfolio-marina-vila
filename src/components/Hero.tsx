import { Button } from "./ui/button";
import { ArrowDown, Eye } from "lucide-react";
import marinaIllustration from 'figma:asset/1e0c951806814bc845fbd57e2721f5c17ef77c2f.png';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#4b4bc3]/10 to-[#a195f9]/10 border border-[#4b4bc3]/20">
              <span className="text-sm font-medium text-[#4b4bc3]">✨ Available for new projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900">
              Hi there,{" "}
              <span className="bg-gradient-to-r from-[#4b4bc3] to-[#a195f9] bg-clip-text text-transparent">
                I'm Marina
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              A Product Designer passionate about creating intuitive digital solutions 
              that solve real user problems and drive business growth
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToWork} 
              className="group bg-[#4b4bc3] hover:bg-[#1e1e76] text-white"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.hash = '#/resume'}
              className="border-[#4b4bc3] text-[#4b4bc3] hover:bg-[#4b4bc3] hover:text-white"
            >
              <Eye className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-2xl font-bold text-gray-900">4+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">25+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">User-Centered</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={marinaIllustration}
              alt="Marina Vila - Digital Illustration Character"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#707ff5] to-[#a195f9] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f2a1f2] to-[#4b4bc3] rounded-full opacity-15 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-[#1e1e76] to-[#707ff5] rounded-full opacity-25 animate-bounce delay-1000"></div>
        </div>
      </div>
    </section>
  );
}