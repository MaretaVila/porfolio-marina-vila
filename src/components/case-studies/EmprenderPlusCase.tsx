import { Button } from "../ui/button";
import { ArrowLeft, ExternalLink, Heart, Users, TrendingUp, Globe } from "lucide-react";

export function EmprenderPlusCase() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#f2a1f2] to-[#4b4bc3] text-white">
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
                Website Design & Branding • Social Impact
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Emprender+
                <span className="block text-2xl font-normal text-white/80 mt-2">
                  NGO Entrepreneurship Support
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Complete website design and branding for an NGO supporting at-risk entrepreneurs, 
                featuring resource libraries and mentorship matching.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <p className="text-sm text-white/70">Duration</p>
                  <p className="font-semibold">4 months</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Team</p>
                  <p className="font-semibold">6 people</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Impact</p>
                  <p className="font-semibold text-green-300">+200% volunteers</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1642054220942-d3c7dd1466cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxub25wcm9maXQlMjBvcmdhbml6YXRpb24lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1OTgzNzQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Emprender+ NGO Website"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Emprender+</h2>
          
          <div className="bg-gradient-to-r from-[#f2a1f2]/10 to-[#4b4bc3]/10 rounded-xl p-8 mb-12">
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Emprender+ is a nonprofit organization dedicated to empowering at-risk entrepreneurs 
              by providing mentorship, resources, and community support to help them build sustainable businesses 
              and break cycles of poverty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 bg-[#f2a1f2]/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-[#f2a1f2]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
              <p className="text-gray-600 mb-4">
                At-risk entrepreneurs face significant barriers including lack of access to mentorship, 
                limited resources, and social isolation that prevents them from building successful businesses.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Limited access to business mentorship</li>
                <li>Lack of funding and resources</li>
                <li>Social stigma and isolation</li>
                <li>Complex bureaucratic processes</li>
              </ul>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-[#4b4bc3]/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-[#4b4bc3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
              <p className="text-gray-600 mb-4">
                Created a comprehensive digital platform that connects entrepreneurs with mentors, 
                provides educational resources, and builds a supportive community ecosystem.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mentor-entrepreneur matching system</li>
                <li>Comprehensive resource library</li>
                <li>Community support network</li>
                <li>Streamlined application processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Design & Development Process</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#f2a1f2]">Brand Identity</h3>
                <p className="text-gray-600 mb-4">
                  Developed a warm, approachable brand identity that reflects hope, empowerment, 
                  and community while maintaining professional credibility.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Logo design and brand guidelines</li>
                  <li>Color palette reflecting growth and hope</li>
                  <li>Typography system for accessibility</li>
                  <li>Photography and illustration style</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#f2a1f2] rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-gray-600">Primary</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4b4bc3] rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-gray-600">Secondary</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-[#4b4bc3]">User Experience Design</h3>
                <p className="text-gray-600 mb-4">
                  Designed intuitive user flows that make it easy for entrepreneurs to find resources 
                  and connect with mentors, while enabling volunteers to easily contribute.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>User journey mapping for multiple personas</li>
                  <li>Accessibility-first design approach</li>
                  <li>Mobile-responsive interface</li>
                  <li>Multilingual support system</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm md:order-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4b4bc3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#4b4bc3]" />
                  </div>
                  <p className="text-sm text-gray-600">User-Centered Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Platform Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f2a1f2]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#f2a1f2]" />
              </div>
              <h3 className="font-semibold mb-2">Mentor Matching</h3>
              <p className="text-gray-600 text-sm">
                AI-powered system that connects entrepreneurs with mentors based on industry, experience, and goals
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#4b4bc3]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-[#4b4bc3]" />
              </div>
              <h3 className="font-semibold mb-2">Resource Library</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive collection of business tools, templates, and educational materials
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#707ff5]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-[#707ff5]" />
              </div>
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Dashboard for entrepreneurs to track their business development milestones and goals
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#a195f9]/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-[#a195f9]" />
              </div>
              <h3 className="font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-600 text-sm">
                Safe space for entrepreneurs to share experiences, ask questions, and support each other
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f2a1f2]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-[#f2a1f2]" />
              </div>
              <h3 className="font-semibold mb-2">Volunteer Portal</h3>
              <p className="text-gray-600 text-sm">
                Easy registration and management system for volunteers and mentors to contribute
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#4b4bc3]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-[#4b4bc3]" />
              </div>
              <h3 className="font-semibold mb-2">Impact Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Real-time analytics showing the organization's impact and success stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Social Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">+200%</div>
              <div className="text-gray-600">Volunteer Registration</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Entrepreneurs Supported</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">85%</div>
              <div className="text-gray-600">Business Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">1200+</div>
              <div className="text-gray-600">Mentorship Connections</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Success Story</h3>
              <blockquote className="text-gray-600 italic mb-4">
                "Thanks to Emprender+, I was able to connect with a mentor who helped me navigate 
                the legal aspects of starting my catering business. Now I employ 5 people from my community."
              </blockquote>
              <p className="text-gray-500 text-sm">- Maria S., Entrepreneur</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p className="text-gray-600 mb-4">
                The platform has created a ripple effect in underserved communities, with successful 
                entrepreneurs becoming mentors themselves and creating local employment opportunities.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>800+ jobs created in local communities</li>
                <li>60% of graduates become mentors</li>
                <li>$2M+ in revenue generated by supported businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4b4bc3] to-[#f2a1f2] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Interested in social impact design?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how design can create positive change in communities and drive social innovation.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white/30 hover:bg-white/10"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Let's Collaborate
          </Button>
        </div>
      </section>
    </div>
  );
}