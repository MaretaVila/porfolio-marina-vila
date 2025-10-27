import { Button } from "./ui/button";
import { Logo } from "./Logo";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-sm text-gray-600 hover:text-[#4b4bc3] transition-colors font-medium"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm text-gray-600 hover:text-[#4b4bc3] transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => window.location.hash = '#/resume'}
            className="text-sm text-gray-600 hover:text-[#4b4bc3] transition-colors font-medium"
          >
            Resume
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm text-gray-600 hover:text-[#4b4bc3] transition-colors font-medium"
          >
            Contact
          </button>
        </div>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-[#4b4bc3] hover:bg-[#1e1e76] text-white"
        >
          Get in Touch
        </Button>
      </div>
    </nav>
  );
}