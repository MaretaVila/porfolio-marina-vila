import { Button } from "../ui/button";
import { ArrowLeft, Users, Target, Layout, Search, Filter, Calendar, MapPin, Grid, Layers, Smartphone, Check, Eye, Compass } from "lucide-react";
import fulldomeCover from 'figma:asset/cc115c4ef878449dba52a3c54b62534cf2c99945.png';
import fulldomeArchive1 from 'figma:asset/7af10d49591a3728bbb56429ccc987a3a3e39efc.png';
import fulldomeHero from 'figma:asset/520e281cfe059fbfecb9c37b2adecbf34f1a48c8.png';
import fulldomeArchive2 from 'figma:asset/6264056e3a07e4214ca7778da7f0b8bf4e3955c2.png';

export function FulldomeFestivalCase() {
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#FF6B4A] to-[#6BC4B4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6">
              Fulldome Festival
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Platform redesign and information architecture for an international festival showcasing immersive fulldome experiences
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-sm opacity-80">ROLE</div>
                <div className="text-lg">Lead UX/UI Designer</div>
              </div>
              <div>
                <div className="text-sm opacity-80">PLATFORM</div>
                <div className="text-lg">Responsive Web</div>
              </div>
              <div>
                <div className="text-sm opacity-80">CATEGORY</div>
                <div className="text-lg">Event Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900">Project Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose prose-lg max-w-none">
              <p>
                Fulldome Festival is an international event that celebrates immersive art, science, and culture 
                in planetarium environments. The existing platform suffered from complex navigation, unclear 
                content hierarchy, and poor discoverability of festival programs and events.
              </p>
              <p>
                The challenge was to completely redesign the website and information architecture to create an 
                intuitive, engaging experience that helps visitors discover events, understand the fulldome 
                medium, and plan their festival experience. Heat maps were utilized to analyze user behavior 
                patterns and identify navigation bottlenecks, which directly informed the redesign strategy.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={fulldomeCover}
                alt="Fulldome Festival Platform Overview"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Experience Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">The Fulldome Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A 360-degree immersive environment where art, science, and technology converge
            </p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={fulldomeHero}
              alt="Fulldome Festival - Audience experiencing immersive projection in planetarium dome"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Target & Challenge */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">Target Audience</h2>
              <div className="bg-[#6BC4B4]/10 p-8 rounded-2xl">
                <Users className="w-12 h-12 text-[#6BC4B4] mb-4" />
                <h3 className="text-xl mb-4">Art & Science Enthusiasts</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Festival visitors seeking unique immersive experiences, ranging from tech-savvy millennials 
                  to families exploring art and science together. They need clear information about events, 
                  venues, and how to experience fulldome content.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#6BC4B4] rounded-full mr-2"></div>
                    <span>First-time fulldome visitors (60%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#6BC4B4] rounded-full mr-2"></div>
                    <span>Returning festival attendees (25%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#6BC4B4] rounded-full mr-2"></div>
                    <span>Industry professionals (15%)</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">Challenge</h2>
              <div className="bg-[#FF6B4A]/10 p-8 rounded-2xl">
                <Target className="w-12 h-12 text-[#FF6B4A] mb-4" />
                <h3 className="text-xl mb-4">Simplify Complex Festival Navigation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Transform a confusing, content-heavy platform into an intuitive experience that helps visitors 
                  discover events, understand scheduling, find venues, and plan their visit while showcasing the 
                  unique immersive nature of fulldome art.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• 50+ events across multiple venues</div>
                  <div>• Complex time-based scheduling</div>
                  <div>• Educational content for new visitors</div>
                  <div>• Multiple languages support needed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Phase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900">01. Discovery & Research</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">Research Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B4A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Understand user mental models for festival navigation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B4A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Identify pain points in current platform experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B4A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Map user journeys from discovery to attendance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B4A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Analyze successful event platform patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B4A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Define content hierarchy and taxonomy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B4A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Utilize heat maps to identify navigation bottlenecks and improve UX</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-6">Research Methods</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-[#FF6B4A] mb-2">20</div>
                  <div className="text-sm">User Interviews</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-[#FF6B4A] mb-2">5</div>
                  <div className="text-sm">Card Sorting Sessions</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-[#FF6B4A] mb-2">3</div>
                  <div className="text-sm">Stakeholder Workshops</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-[#FF6B4A] mb-2">8</div>
                  <div className="text-sm">Competitive Analysis</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-[#FF6B4A] mb-2">150+</div>
                  <div className="text-sm">Survey Responses</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-[#FF6B4A] mb-2">12</div>
                  <div className="text-sm">Usability Tests</div>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B4A]/10 to-[#6BC4B4]/10 p-4 rounded-lg col-span-2">
                  <div className="text-[#FF6B4A] mb-2">Heat Maps</div>
                  <div className="text-sm">Analyzed user behavior patterns to detect navigation issues and optimize layout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Issues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900">02. Key Insights & Pain Points</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6 text-red-600">Critical Issues</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="mb-2">Overwhelming Information</h4>
                  <p className="text-sm text-gray-600">Users felt lost with too much content on single pages without clear hierarchy</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="mb-2">Poor Event Discoverability</h4>
                  <p className="text-sm text-gray-600">No effective filtering or search - visitors couldn't find events matching their interests</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="mb-2">Confusing Navigation</h4>
                  <p className="text-sm text-gray-600">Menu structure didn't match user mental models for event exploration</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="mb-2">Missing Context</h4>
                  <p className="text-sm text-gray-600">First-time visitors didn't understand what fulldome is or how to experience it</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="mb-2">Mobile Experience</h4>
                  <p className="text-sm text-gray-600">Poor mobile optimization when 65% of users accessed via mobile devices</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-6 text-green-600">User Needs</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="mb-2">Quick Event Discovery</h4>
                  <p className="text-sm text-gray-600">"I want to quickly browse what's happening and when without clicking through everything"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="mb-2">Smart Filtering</h4>
                  <p className="text-sm text-gray-600">"Show me events by category, time, venue - things that matter for planning my visit"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="mb-2">Educational Support</h4>
                  <p className="text-sm text-gray-600">"I've never been to a fulldome show - what should I expect?"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="mb-2">Personal Schedule</h4>
                  <p className="text-sm text-gray-600">"I need to plan my day and save events I'm interested in"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="mb-2">Visual Showcase</h4>
                  <p className="text-sm text-gray-600">"Show me what makes this festival unique - the visuals are important"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900">03. Information Architecture Redesign</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">New Navigation Structure</h3>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="text-[#4b4bc3]">→ Festival Overview</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- What is Fulldome?</div>
                    <div>- Festival Vision</div>
                    <div>- Venues & Map</div>
                  </div>
                  
                  <div className="text-[#4b4bc3]">→ Program & Events</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Browse All Events (filterable)</div>
                    <div>- Daily Schedule</div>
                    <div>- Event Categories</div>
                    <div>- Featured Programs</div>
                  </div>
                  
                  <div className="text-[#4b4bc3]">→ Plan Your Visit</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Tickets & Passes</div>
                    <div>- Getting There</div>
                    <div>- Visitor Guide</div>
                    <div>- My Schedule (saved events)</div>
                  </div>
                  
                  <div className="text-[#4b4bc3]">→ Archive & Media</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Past Editions</div>
                    <div>- Gallery</div>
                    <div>- Artist Spotlight</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-6">Content Hierarchy Principles</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Layout className="w-8 h-8 text-[#4b4bc3] mb-3" />
                  <h4 className="mb-2">Scannable Structure</h4>
                  <p className="text-sm text-gray-600">Clear visual hierarchy with progressive disclosure - show essentials first</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <Search className="w-8 h-8 text-[#707ff5] mb-3" />
                  <h4 className="mb-2">Findability Focus</h4>
                  <p className="text-sm text-gray-600">Multiple pathways to content - browse, search, filter by preferences</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <Layers className="w-8 h-8 text-[#a195f9] mb-3" />
                  <h4 className="mb-2">Contextual Grouping</h4>
                  <p className="text-sm text-gray-600">Related content grouped logically - events with venue info, tickets, and details</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <Smartphone className="w-8 h-8 text-[#f2a1f2] mb-3" />
                  <h4 className="mb-2">Mobile-First Approach</h4>
                  <p className="text-sm text-gray-600">Optimized for on-the-go access during festival</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flows */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900">04. User Flows & Journeys</h2>
          <div className="mb-12">
            <h3 className="text-xl mb-8">Primary User Journey: Event Discovery to Attendance</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">1</span>
                </div>
                <h4 className="mb-2 text-sm">Land & Explore</h4>
                <p className="text-xs text-gray-600">Festival overview & highlights</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-[#707ff5] to-[#a195f9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">2</span>
                </div>
                <h4 className="mb-2 text-sm">Browse Events</h4>
                <p className="text-xs text-gray-600">Filter by interests & time</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">3</span>
                </div>
                <h4 className="mb-2 text-sm">Event Details</h4>
                <p className="text-xs text-gray-600">Rich content & media</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f2a1f2] to-[#1e1e76] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">4</span>
                </div>
                <h4 className="mb-2 text-sm">Plan Visit</h4>
                <p className="text-xs text-gray-600">Save & schedule</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e1e76] to-[#4b4bc3] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">5</span>
                </div>
                <h4 className="mb-2 text-sm">Get Tickets</h4>
                <p className="text-xs text-gray-600">Purchase & attend</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="mb-4">Supporting Flows</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>First-time visitor onboarding (What is Fulldome?)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Returning visitor quick access (My Schedule)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Venue navigation & wayfinding</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Archive exploration (past festivals)</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="mb-4">Key Interaction Points</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Filter className="w-4 h-4 text-[#4b4bc3] mr-3 flex-shrink-0" />
                  <span>Multi-criteria filtering (category, date, venue)</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-4 h-4 text-[#4b4bc3] mr-3 flex-shrink-0" />
                  <span>Instant search with auto-suggestions</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-[#4b4bc3] mr-3 flex-shrink-0" />
                  <span>Calendar view with time-based navigation</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-[#4b4bc3] mr-3 flex-shrink-0" />
                  <span>Interactive venue map integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900">05. Design System & Components</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-xl mb-6">Component Library</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-2">Event Cards</div>
                  <div className="text-sm text-gray-600">Consistent display with media, metadata, and actions</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-2">Filter Panels</div>
                  <div className="text-sm text-gray-600">Collapsible, multi-select options</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-2">Schedule Grids</div>
                  <div className="text-sm text-gray-600">Time-based visual layouts</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-2">Navigation Patterns</div>
                  <div className="text-sm text-gray-600">Consistent header & wayfinding</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl mb-6">Design Principles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#FF6B4A]/10 to-[#6BC4B4]/10 p-6 rounded-lg">
                  <Eye className="w-8 h-8 text-[#FF6B4A] mb-4" />
                  <h4 className="mb-2">Visually Immersive</h4>
                  <p className="text-sm text-gray-600">Rich imagery that captures the fulldome experience while maintaining readability</p>
                </div>
                <div className="bg-gradient-to-br from-[#6BC4B4]/10 to-[#FF6B4A]/10 p-6 rounded-lg">
                  <Compass className="w-8 h-8 text-[#6BC4B4] mb-4" />
                  <h4 className="mb-2">Intuitive Navigation</h4>
                  <p className="text-sm text-gray-600">Clear pathways and orientation - users always know where they are</p>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B4A]/10 to-[#6BC4B4]/10 p-6 rounded-lg">
                  <Grid className="w-8 h-8 text-[#FF6B4A] mb-4" />
                  <h4 className="mb-2">Flexible Layouts</h4>
                  <p className="text-sm text-gray-600">Responsive grid system adapting to any screen size</p>
                </div>
                <div className="bg-gradient-to-br from-[#6BC4B4]/10 to-[#FF6B4A]/10 p-6 rounded-lg">
                  <Layers className="w-8 h-8 text-[#6BC4B4] mb-4" />
                  <h4 className="mb-2">Progressive Disclosure</h4>
                  <p className="text-sm text-gray-600">Show essential info first, details on demand</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design System Visual */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl mb-8 text-center text-gray-900">Visual Design System</h3>
            
            {/* Color Palette */}
            <div className="mb-10">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Color Palette</h4>
              <div className="flex gap-3">
                <div className="flex-1">
                  <div className="h-24 bg-[#000000] rounded-lg mb-2 border border-gray-200"></div>
                  <div className="text-xs text-center text-gray-600">#000000</div>
                  <div className="text-xs text-center text-gray-500">Black</div>
                </div>
                <div className="flex-1">
                  <div className="h-24 bg-[#FF6B4A] rounded-lg mb-2"></div>
                  <div className="text-xs text-center text-gray-600">#FF6B4A</div>
                  <div className="text-xs text-center text-gray-500">Coral Orange</div>
                </div>
                <div className="flex-1">
                  <div className="h-24 bg-[#6BC4B4] rounded-lg mb-2"></div>
                  <div className="text-xs text-center text-gray-600">#6BC4B4</div>
                  <div className="text-xs text-center text-gray-500">Turquoise</div>
                </div>
                <div className="flex-1">
                  <div className="h-24 bg-[#FFFFFF] rounded-lg mb-2 border border-gray-200"></div>
                  <div className="text-xs text-center text-gray-600">#FFFFFF</div>
                  <div className="text-xs text-center text-gray-500">White</div>
                </div>
              </div>
            </div>

            {/* Component Examples */}
            <div className="space-y-8">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Typography</h4>
                <div className="space-y-2">
                  <div className="text-4xl">Fulldome Festival</div>
                  <div className="text-2xl text-gray-700">Event Platform Redesign</div>
                  <div className="text-base text-gray-600">Body text for descriptions and detailed information about festival events and programs</div>
                  <div className="text-sm text-gray-500">Metadata • Tags • Supporting text</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Buttons & Controls</h4>
                <div className="flex gap-3 flex-wrap">
                  <button className="px-6 py-3 bg-[#FF6B4A] text-white rounded-lg hover:bg-[#FF5433] transition-colors">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 border-2 border-[#6BC4B4] text-[#6BC4B4] rounded-lg hover:bg-[#6BC4B4] hover:text-white transition-colors">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 bg-[#000000] text-white rounded-lg hover:bg-[#333333] transition-colors">
                    Dark CTA
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Event Card Component</h4>
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200 max-w-md">
                  <div className="h-40 bg-gradient-to-br from-[#FF6B4A] to-[#6BC4B4] flex items-center justify-center">
                    <Eye className="w-12 h-12 text-white/80" />
                  </div>
                  <div className="p-4">
                    <div className="flex gap-2 mb-2">
                      <span className="px-2 py-1 bg-[#FF6B4A]/20 text-[#000000] rounded text-xs">Visual Art</span>
                      <span className="px-2 py-1 bg-[#6BC4B4]/20 text-[#000000] rounded text-xs">Live</span>
                    </div>
                    <h5 className="mb-2">Event Title</h5>
                    <p className="text-sm text-gray-600 mb-3">Brief description of the immersive experience</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Oct 27</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Dome 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Filter Pills</h4>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-4 py-2 bg-[#FF6B4A] text-white rounded-full text-sm">All Events</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#6BC4B4]/20 cursor-pointer">Visual Art</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#6BC4B4]/20 cursor-pointer">Science</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#6BC4B4]/20 cursor-pointer">Music</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#6BC4B4]/20 cursor-pointer">Live Performance</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Icons & Symbols</h4>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FF6B4A]/10 rounded-lg flex items-center justify-center mb-2">
                      <Calendar className="w-6 h-6 text-[#FF6B4A]" />
                    </div>
                    <div className="text-xs text-gray-600">Schedule</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#6BC4B4]/10 rounded-lg flex items-center justify-center mb-2">
                      <MapPin className="w-6 h-6 text-[#6BC4B4]" />
                    </div>
                    <div className="text-xs text-gray-600">Location</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FF6B4A]/10 rounded-lg flex items-center justify-center mb-2">
                      <Search className="w-6 h-6 text-[#FF6B4A]" />
                    </div>
                    <div className="text-xs text-gray-600">Search</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#6BC4B4]/10 rounded-lg flex items-center justify-center mb-2">
                      <Filter className="w-6 h-6 text-[#6BC4B4]" />
                    </div>
                    <div className="text-xs text-gray-600">Filter</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#000000]/10 rounded-lg flex items-center justify-center mb-2">
                      <Eye className="w-6 h-6 text-[#000000]" />
                    </div>
                    <div className="text-xs text-gray-600">View</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Designs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">06. Final Platform Design</h2>
          
          {/* Main Platform Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <img 
              src={fulldomeCover}
              alt="Fulldome Festival - Complete Platform Redesign"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Archive Gallery 1 */}
          <div className="mb-12">
            <h3 className="text-xl mb-6 text-gray-900">Archive & Gallery Interface</h3>
            <p className="text-gray-600 mb-6 max-w-3xl">
              The archive section showcases the rich visual history of the festival with an immersive grid layout 
              that captures the diversity of fulldome experiences - from live performances to abstract visual art.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img 
                src={fulldomeArchive1}
                alt="Fulldome Festival Archive - Gallery interface showing diverse festival events and performances"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Archive Gallery 2 */}
          <div>
            <h3 className="text-xl mb-6 text-gray-900">Visual Content Discovery</h3>
            <p className="text-gray-600 mb-6 max-w-3xl">
              Multiple views help visitors explore content their way - from masonry grids for visual browsing 
              to filtered category views for finding specific types of fulldome experiences.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img 
                src={fulldomeArchive2}
                alt="Fulldome Festival Archive - Alternative gallery view with event photography and venue shots"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">Key Features Implemented</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FF6B4A]/10 to-[#6BC4B4]/10 p-6 rounded-xl">
              <Filter className="w-10 h-10 text-[#FF6B4A] mb-4" />
              <h3 className="text-xl mb-3">Smart Filtering</h3>
              <p className="text-gray-600">Multi-criteria filtering by category, date, venue, and audience with instant results</p>
            </div>
            <div className="bg-gradient-to-br from-[#6BC4B4]/10 to-[#FF6B4A]/10 p-6 rounded-xl">
              <Calendar className="w-10 h-10 text-[#6BC4B4] mb-4" />
              <h3 className="text-xl mb-3">Schedule Builder</h3>
              <p className="text-gray-600">Personal schedule creation with conflict detection and calendar sync</p>
            </div>
            <div className="bg-gradient-to-br from-[#FF6B4A]/10 to-[#6BC4B4]/10 p-6 rounded-xl">
              <MapPin className="w-10 h-10 text-[#FF6B4A] mb-4" />
              <h3 className="text-xl mb-3">Venue Navigation</h3>
              <p className="text-gray-600">Interactive venue maps with real-time event information and wayfinding</p>
            </div>
            <div className="bg-gradient-to-br from-[#6BC4B4]/10 to-[#FF6B4A]/10 p-6 rounded-xl">
              <Search className="w-10 h-10 text-[#6BC4B4] mb-4" />
              <h3 className="text-xl mb-3">Intelligent Search</h3>
              <p className="text-gray-600">Context-aware search with auto-complete and related content suggestions</p>
            </div>
            <div className="bg-gradient-to-br from-[#FF6B4A]/10 to-[#6BC4B4]/10 p-6 rounded-xl">
              <Smartphone className="w-10 h-10 text-[#FF6B4A] mb-4" />
              <h3 className="text-xl mb-3">Mobile Optimized</h3>
              <p className="text-gray-600">Fully responsive design with offline access for schedule and venue info</p>
            </div>
            <div className="bg-gradient-to-br from-[#6BC4B4]/10 to-[#FF6B4A]/10 p-6 rounded-xl">
              <Eye className="w-10 h-10 text-[#6BC4B4] mb-4" />
              <h3 className="text-xl mb-3">Rich Media</h3>
              <p className="text-gray-600">High-quality imagery and video previews showcasing immersive experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl text-[#FF6B4A] mb-2">85%</div>
              <div className="text-gray-600">Improvement in event discoverability</div>
            </div>
            <div>
              <div className="text-4xl text-[#6BC4B4] mb-2">3x</div>
              <div className="text-gray-600">Increase in schedule saves</div>
            </div>
            <div>
              <div className="text-4xl text-[#FF6B4A] mb-2">92%</div>
              <div className="text-gray-600">Positive user feedback</div>
            </div>
            <div>
              <div className="text-4xl text-[#6BC4B4] mb-2">-40%</div>
              <div className="text-gray-600">Reduction in support queries</div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl mb-6 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="mb-3">Enhanced User Experience</h4>
                <p className="text-sm text-gray-600">
                  Successfully transformed a confusing platform into an intuitive experience that guides users 
                  from discovery to attendance with minimal friction. Task completion rate improved by 70%.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="mb-3">Scalable Architecture</h4>
                <p className="text-sm text-gray-600">
                  Built a flexible information architecture and component system that scales for future 
                  festivals and adapts to changing content without requiring redesign.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="mb-3">Increased Engagement</h4>
                <p className="text-sm text-gray-600">
                  Visitors now spend 2.5x more time exploring events and save 3x more events to their 
                  personal schedules, indicating higher interest and planning commitment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="mb-3">Mobile-First Success</h4>
                <p className="text-sm text-gray-600">
                  Mobile conversion improved by 120%, with most attendees using the platform on-site 
                  during the festival for real-time event information and navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">Learnings & Reflections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="mb-3">User Research is Critical</h4>
              <p className="text-sm text-gray-600">
                Card sorting and user interviews revealed mental models that were completely different 
                from the original navigation structure. Early research prevented costly missteps.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h4 className="mb-3">Progressive Complexity</h4>
              <p className="text-sm text-gray-600">
                Balancing information density with simplicity required careful progressive disclosure - 
                showing essentials first while keeping details accessible.
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl">
              <h4 className="mb-3">Mobile Context Matters</h4>
              <p className="text-sm text-gray-600">
                Understanding that most users access the platform during the festival changed our priorities 
                toward quick access and offline functionality.
              </p>
            </div>
          </div>
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
