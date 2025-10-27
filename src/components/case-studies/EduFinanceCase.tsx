import { Button } from "../ui/button";
import { ArrowLeft, ExternalLink, BookOpen, TrendingUp, Users, Award } from "lucide-react";

export function EduFinanceCase() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Button 
            onClick={goBack}
            variant="outline" 
            className="mb-8 text-white border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm">
                Website Design & Branding • Information Architecture
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                EduFinance Campus
                <span className="block text-2xl font-normal text-white/80 mt-2">
                  Financial Education Platform
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                UX/UI design and information architecture for an educational platform teaching 
                personal finance management to young adults.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <p className="text-sm text-white/70">Duration</p>
                  <p className="font-semibold">6 months</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Team</p>
                  <p className="font-semibold">8 people</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Impact</p>
                  <p className="font-semibold text-green-300">+90% completion</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1642052502352-d280c0756b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMGZpbmFuY2UlMjBwbGF0Zm9ybSUyMHdlYnNpdGV8ZW58MXx8fHwxNzU5ODM3NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="EduFinance Campus Platform"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#a195f9]">The Challenge</h3>
              <p className="text-gray-600 mb-4">
                Young adults lack accessible financial education resources, leading to poor financial 
                decisions and long-term economic instability.
              </p>
              <p className="text-gray-600">
                Traditional financial education is often complex, boring, and disconnected from 
                real-world applications that resonate with younger audiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#f2a1f2]">The Solution</h3>
              <p className="text-gray-600 mb-4">
                Created an engaging, gamified learning platform that breaks down complex financial 
                concepts into digestible, interactive modules.
              </p>
              <p className="text-gray-600">
                Combined educational content with practical tools and personalized learning paths 
                to create a comprehensive financial literacy experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Information Architecture</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#a195f9]/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#a195f9]" />
              </div>
              <h3 className="font-semibold mb-2">Learning Modules</h3>
              <p className="text-gray-600 text-sm">
                Structured courses on budgeting, investing, debt management, and financial planning
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#f2a1f2]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-[#f2a1f2]" />
              </div>
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Visual dashboards showing learning progress and financial goal achievements
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#4b4bc3]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#4b4bc3]" />
              </div>
              <h3 className="font-semibold mb-2">Community Hub</h3>
              <p className="text-gray-600 text-sm">
                Peer support groups and expert mentorship for collaborative learning
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">User Journey Mapping</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#a195f9] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <p className="font-medium">Assessment & Onboarding</p>
                  <p className="text-gray-600 text-sm">Financial knowledge assessment and personalized learning path creation</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#f2a1f2] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <p className="font-medium">Interactive Learning</p>
                  <p className="text-gray-600 text-sm">Engaging modules with quizzes, simulations, and real-world scenarios</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#4b4bc3] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <p className="font-medium">Application & Tracking</p>
                  <p className="text-gray-600 text-sm">Tools for applying knowledge and tracking financial progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#a195f9]/10 to-[#f2a1f2]/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#a195f9]/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#a195f9]" />
              </div>
              <h3 className="font-semibold mb-2">Gamified Learning</h3>
              <p className="text-gray-600 text-sm">Points, badges, and leaderboards to motivate continuous learning</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f2a1f2]/10 to-[#4b4bc3]/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#f2a1f2]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-[#f2a1f2]" />
              </div>
              <h3 className="font-semibold mb-2">Budget Simulator</h3>
              <p className="text-gray-600 text-sm">Interactive tools for practicing budget creation and management</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#4b4bc3]/10 to-[#707ff5]/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#4b4bc3]/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#4b4bc3]" />
              </div>
              <h3 className="font-semibold mb-2">Peer Learning</h3>
              <p className="text-gray-600 text-sm">Study groups and discussion forums for collaborative learning</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#707ff5]/10 to-[#a195f9]/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#707ff5]/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#707ff5]" />
              </div>
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">Industry-recognized certificates upon course completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Impact & Results</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">+90%</div>
              <div className="text-gray-600">Course Completion Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">15K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">4.9/5</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">85%</div>
              <div className="text-gray-600">Improved Financial Literacy</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">User Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="text-gray-600 italic">
                "This platform made financial planning actually enjoyable. I finally understand how to manage my money!"
              </blockquote>
              <blockquote className="text-gray-600 italic">
                "The interactive tools helped me create my first budget and start investing. Highly recommend!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#f2a1f2] to-[#4b4bc3] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Want to see the complete design system?</h2>
          <p className="text-xl mb-8 text-white/90">
            Explore the detailed branding guidelines, wireframes, and user research that shaped this platform.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white/30 hover:bg-white/10"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Design System
          </Button>
        </div>
      </section>
    </div>
  );
}