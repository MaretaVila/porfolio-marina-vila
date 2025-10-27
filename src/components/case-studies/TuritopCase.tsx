import { Button } from "../ui/button";
import { ArrowLeft, ExternalLink, Users, Target, TrendingUp, Clock, Check, Search, Smartphone, CreditCard, Star, Shield, Zap, Database, Globe } from "lucide-react";
import turitopSketchImage from 'figma:asset/2fbbe84871c07bf1ef11a3992a64761f403c0208.png';
import turitopDesignImage from 'figma:asset/05b2ec6ea044ad62236c802338b70d874832bf8f.png';
import turitopOverviewImage from 'figma:asset/991042c05a5d9ba4fc816c224b9b57115ee75065.png';

export function TuritopCase() {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6">
              Turitop
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Cross-platform mobile app for tourism booking with subdomain-specific authentication and comprehensive user management
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-sm opacity-80">ROLE</div>
                <div className="text-lg">Lead UX/UI Designer</div>
              </div>
              <div>
                <div className="text-sm opacity-80">DURATION</div>
                <div className="text-lg">6 months</div>
              </div>
              <div>
                <div className="text-sm opacity-80">PLATFORM</div>
                <div className="text-lg">Cross-Platform Mobile</div>
              </div>
              <div>
                <div className="text-sm opacity-80">TEAM</div>
                <div className="text-lg">8 members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-medium mb-6 text-gray-900">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Turitop is a comprehensive tourism booking platform designed to provide travelers with authentic 
                  local experiences while offering businesses a robust multi-tenant system. The challenge was to 
                  create a cross-platform mobile application with complex authentication flows and seamless user 
                  experience across different company subdomains.
                </p>
                <p>
                  The project required sophisticated technical solutions including subdomain-specific authentication, 
                  session isolation, and performance optimization while maintaining an intuitive user interface 
                  for booking travel experiences.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={turitopOverviewImage}
                alt="Turitop Mobile Login Screen"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">Project Goals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <Globe className="w-8 h-8 text-[#4b4bc3] mb-4" />
                <h3 className="font-medium mb-3">Cross-Platform Delivery</h3>
                <p className="text-sm text-gray-600">
                  Build a consistent, performant, and responsive mobile app on both Android and iOS platforms
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Shield className="w-8 h-8 text-[#707ff5] mb-4" />
                <h3 className="font-medium mb-3">Subdomain Authentication</h3>
                <p className="text-sm text-gray-600">
                  Enable secure login based on company-specific subdomains, routing requests to appropriate tenants
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Check className="w-8 h-8 text-[#a195f9] mb-4" />
                <h3 className="font-medium mb-3">Comprehensive Login Flow</h3>
                <p className="text-sm text-gray-600">
                  Implement subdomain, email, and password validation with accurate error messages
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <CreditCard className="w-8 h-8 text-[#f2a1f2] mb-4" />
                <h3 className="font-medium mb-3">Password Recovery Flow</h3>
                <p className="text-sm text-gray-600">
                  Allow users to securely reset passwords only after validating their subdomain
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Database className="w-8 h-8 text-[#1e1e76] mb-4" />
                <h3 className="font-medium mb-3">Session Isolation</h3>
                <p className="text-sm text-gray-600">
                  Ensure login sessions are strictly scoped to authenticated subdomain preventing cross-tenant access
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Zap className="w-8 h-8 text-[#4b4bc3] mb-4" />
                <h3 className="font-medium mb-3">Performance Optimization</h3>
                <p className="text-sm text-gray-600">
                  Integrate caching and responsive design principles for smooth mobile experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Phase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">01. Discovery</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Technical Research Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4b4bc3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Analyze multi-tenant authentication patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4b4bc3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Research cross-platform mobile development challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4b4bc3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Study tourism booking user behaviors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4b4bc3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Define security requirements for session management</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Research Methods</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-[#4b4bc3] mb-2">15</div>
                  <div className="text-sm">User Interviews</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-[#4b4bc3] mb-2">8</div>
                  <div className="text-sm">Technical Workshops</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-[#4b4bc3] mb-2">12</div>
                  <div className="text-sm">Business Stakeholder Sessions</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-[#4b4bc3] mb-2">5</div>
                  <div className="text-sm">Competitor Platform Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Issues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">02. Insights & Issues</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6 text-red-600">Technical Challenges</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Complex Authentication Flow</h4>
                  <p className="text-sm text-gray-600">Multi-step validation required for subdomain + credentials without confusing users</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Session Security</h4>
                  <p className="text-sm text-gray-600">Preventing cross-tenant data leaks while maintaining seamless user experience</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Platform Consistency</h4>
                  <p className="text-sm text-gray-600">Ensuring identical functionality across iOS and Android with native performance</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Error Handling</h4>
                  <p className="text-sm text-gray-600">Complex error states needed clear, actionable messaging for different failure points</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6 text-green-600">User Insights</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Simplified Access</h4>
                  <p className="text-sm text-gray-600">"I shouldn't need to remember complex URLs or company codes to log in"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Trust & Security</h4>
                  <p className="text-sm text-gray-600">"I need confidence that my company data is secure and separate"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Seamless Recovery</h4>
                  <p className="text-sm text-gray-600">"Password reset should be quick but secure for business accounts"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Consistent Experience</h4>
                  <p className="text-sm text-gray-600">"The app should work exactly the same on my phone and tablet"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">03. Exploration</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-6">Solution Strategy</h3>
              <p className="text-gray-600 mb-6">
                We developed a multi-layered approach combining technical architecture with user-centered design 
                to solve complex authentication challenges while maintaining simplicity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Technical architecture workshops</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Authentication flow mapping</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Security requirement analysis</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Cross-platform design system</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-medium mb-6">Design Principles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="w-8 h-8 text-[#4b4bc3] mb-4" />
                  <h4 className="font-medium mb-2">Security First</h4>
                  <p className="text-sm text-gray-600">Robust authentication without compromising usability</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Globe className="w-8 h-8 text-[#707ff5] mb-4" />
                  <h4 className="font-medium mb-2">Platform Agnostic</h4>
                  <p className="text-sm text-gray-600">Consistent experience across all devices and platforms</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Zap className="w-8 h-8 text-[#a195f9] mb-4" />
                  <h4 className="font-medium mb-2">Performance Optimized</h4>
                  <p className="text-sm text-gray-600">Fast loading and responsive interactions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-[#f2a1f2] mb-4" />
                  <h4 className="font-medium mb-2">Multi-tenant Ready</h4>
                  <p className="text-sm text-gray-600">Scalable architecture for multiple organizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">04. Information Architecture</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Authentication Flow</h3>
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="font-medium text-[#4b4bc3]">• Subdomain Detection</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Automatic subdomain recognition</div>
                    <div>- Company branding injection</div>
                    <div>- Tenant-specific configuration</div>
                  </div>
                  
                  <div className="font-medium text-[#4b4bc3]">• Credential Validation</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Email format verification</div>
                    <div>- Password strength checking</div>
                    <div>- Multi-factor authentication</div>
                  </div>
                  
                  <div className="font-medium text-[#4b4bc3]">• Session Management</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Tenant-scoped sessions</div>
                    <div>- Secure token storage</div>
                    <div>- Auto-logout policies</div>
                  </div>
                  
                  <div className="font-medium text-[#4b4bc3]">• Recovery Process</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Subdomain validation</div>
                    <div>- Secure reset links</div>
                    <div>- Time-limited tokens</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Technical Architecture</h3>
              <p className="text-gray-600 mb-6">
                The app architecture emphasizes security isolation while maintaining performance. Each tenant 
                operates in a secure, isolated environment with shared core functionality.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#4b4bc3] mb-2">Frontend Layer</h4>
                  <p className="text-sm">Cross-platform React Native with native modules</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#4b4bc3] mb-2">Authentication Layer</h4>
                  <p className="text-sm">JWT tokens with tenant-specific scoping</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#4b4bc3] mb-2">Data Layer</h4>
                  <p className="text-sm">Isolated databases with shared schema</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow & Interaction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">05. User Flow & Interaction</h2>
          <div>
            <h3 className="text-xl font-medium mb-8">Authentication & Booking Journey</h3>
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">1</span>
                </div>
                <h4 className="font-medium mb-2">Subdomain Entry</h4>
                <p className="text-xs text-gray-600">Company URL detection</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#707ff5] to-[#a195f9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">2</span>
                </div>
                <h4 className="font-medium mb-2">Credential Input</h4>
                <p className="text-xs text-gray-600">Secure login form</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">3</span>
                </div>
                <h4 className="font-medium mb-2">Validation</h4>
                <p className="text-xs text-gray-600">Multi-factor verification</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f2a1f2] to-[#1e1e76] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">4</span>
                </div>
                <h4 className="font-medium mb-2">Session Start</h4>
                <p className="text-xs text-gray-600">Tenant-scoped access</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e1e76] to-[#4b4bc3] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">5</span>
                </div>
                <h4 className="font-medium mb-2">Booking Access</h4>
                <p className="text-xs text-gray-600">Tourism platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sketches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">06. Sketches & Early Concepts</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Authentication Flow Wireframes</h3>
              <p className="text-gray-600 mb-6">
                Early sketches focused on simplifying the complex multi-step authentication process while 
                maintaining security requirements. We explored various approaches to subdomain input and 
                error state handling.
              </p>
              <img 
                src={turitopSketchImage}
                alt="Turitop Authentication Flow Sketches - Early wireframes showing validation states"
                className="w-full rounded-lg shadow-lg mb-6"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Iteration Process</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">V1: Separate Steps</h4>
                  <p className="text-sm text-gray-600">Individual screens for subdomain, email, password</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">V2: Progressive Disclosure</h4>
                  <p className="text-sm text-gray-600">Single screen with dynamic field revelation</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Final: Smart Detection</h4>
                  <p className="text-sm text-gray-600">Auto-detection with manual override option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Iterate */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">07. Design & Iterate</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Design System</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium mb-2">Cross-Platform Components</div>
                  <div className="text-sm text-gray-600">Consistent UI elements across iOS and Android</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium mb-2">Security Indicators</div>
                  <div className="text-sm text-gray-600">Visual cues for authentication states</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium mb-2">Error Messaging</div>
                  <div className="text-sm text-gray-600">Clear, actionable error communication</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-medium mb-6">Testing & Validation</h3>
              <img 
                src={turitopDesignImage}
                alt="Turitop Final Mobile Designs - Complete authentication and booking flows"
                className="w-full rounded-lg shadow-lg mb-8"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">Security Testing</h4>
              <p className="text-sm text-gray-600 mb-4">Validated authentication flows with security experts</p>
              <div className="text-xs text-green-600">→ Zero security vulnerabilities found</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">Performance Testing</h4>
              <p className="text-sm text-gray-600 mb-4">Optimized loading times and responsiveness</p>
              <div className="text-xs text-green-600">→ Sub-2 second authentication</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">User Testing</h4>
              <p className="text-sm text-gray-600 mb-4">Validated with business users across tenants</p>
              <div className="text-xs text-green-600">→ 98% successful first-time login</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900 text-center">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-[#4b4bc3] mb-2">98%</div>
              <div className="text-gray-600">First-time login success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4b4bc3] mb-2">100%</div>
              <div className="text-gray-600">Session isolation security</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4b4bc3] mb-2">&lt;2s</div>
              <div className="text-gray-600">Authentication time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4b4bc3] mb-2">50+</div>
              <div className="text-gray-600">Active company tenants</div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-medium mb-6 text-center">Technical Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-medium mb-3">Scalable Architecture</h4>
                <p className="text-sm text-gray-600">
                  Successfully deployed multi-tenant system supporting 50+ companies with complete 
                  data isolation and consistent performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-medium mb-3">User Experience Excellence</h4>
                <p className="text-sm text-gray-600">
                  Achieved 98% first-time login success rate while maintaining enterprise-grade 
                  security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-gradient-to-br from-[#4b4bc3] to-[#707ff5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium mb-8 text-white">Next Project</h2>
          <Button 
            onClick={() => window.location.hash = '#/case-study/traviu'}
            className="bg-white text-[#4b4bc3] hover:bg-gray-100"
          >
            View Traviu Case Study
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}