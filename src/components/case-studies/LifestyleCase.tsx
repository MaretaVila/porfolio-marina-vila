import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import lifestyleCase from 'figma:asset/f1be061eec79ab228ad0b5b00cc2e846a82394f4.png';

export function LifestyleCase() {
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

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <img 
          src={lifestyleCase} 
          alt="Lifestyle App Case Study" 
          className="w-full h-auto"
        />
      </div>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="text-center pt-8 border-t border-gray-200">
          <Button onClick={goBack} size="lg" className="bg-[#3ECFAE] hover:bg-[#35B89B] text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
