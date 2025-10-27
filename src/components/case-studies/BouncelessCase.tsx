import { Button } from "../ui/button";
import { ArrowLeft, Mail, Shield, BarChart3, Clock, Check, Users, Target, TrendingUp, Zap, Database, Globe } from "lucide-react";
import bouncelessOverview from 'figma:asset/9be45d70bee771019835200a8227e044e979e79e.png';
import bouncelessDetails from 'figma:asset/c00d6e17492b589b360fc714cc032ef07694ab87.png';

export function BouncelessCase() {
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4b4bc3] to-[#707ff5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6">
              Bounceless
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Email validation platform that helps businesses ensure their emails reach the inbox and boost productivity
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-sm opacity-80">ROLE</div>
                <div className="text-lg">Product Designer</div>
              </div>
              <div>
                <div className="text-sm opacity-80">PLATFORM</div>
                <div className="text-lg">Web Application</div>
              </div>
              <div>
                <div className="text-sm opacity-80">CATEGORY</div>
                <div className="text-lg">SaaS Platform</div>
              </div>
              <div>
                <div className="text-sm opacity-80">TYPE</div>
                <div className="text-lg">Email Validation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Bounceless is an email validation and verification platform designed to help businesses 
              maintain clean email lists and improve deliverability. The challenge was to create a 
              user-friendly interface for a technically complex service that handles bulk email validation, 
              real-time API integration, and detailed reporting.
            </p>
            <p>
              The project required designing an intuitive dashboard that simplifies complex data visualization, 
              streamlines the validation workflow, and provides actionable insights while maintaining trust 
              through transparent processes and clear communication.
            </p>
          </div>
        </div>
      </section>

      {/* Target & Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">Target Audience</h2>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <Users className="w-12 h-12 text-[#4b4bc3] mb-4" />
                <h3 className="text-xl mb-4">Marketing Teams & Business Owners</h3>
                <p className="text-gray-700 leading-relaxed">
                  Email marketers, growth teams, and businesses that rely on email campaigns 
                  for customer acquisition and retention. They need to ensure high deliverability 
                  rates, protect sender reputation, and optimize email marketing ROI.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">Challenge</h2>
              <div className="bg-purple-50 p-8 rounded-2xl">
                <Target className="w-12 h-12 text-[#4b4bc3] mb-4" />
                <h3 className="text-xl mb-4">Simplify Technical Complexity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transform a technically complex email validation process into an intuitive, 
                  trustworthy platform that both technical and non-technical users can confidently 
                  use to validate thousands of emails with clear, actionable results.
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
            src={bouncelessOverview}
            alt="Bounceless UX Case Study - Complete Design Process"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Additional Case Study Details */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <img 
            src={bouncelessDetails}
            alt="Bounceless UX Case Study - Design Details"
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
