import { Button } from "../ui/button";
import { ArrowLeft, Users, Target, Lightbulb, TestTube, CheckCircle, AlertCircle, TrendingUp, Award, BookOpen, Sparkles } from "lucide-react";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import dashboardImage from 'figma:asset/3561087b4c3c2dd7078db6b9483a6986b6df2ee8.png';
import goalsImage from 'figma:asset/a14834cdcd4adc0400b5762c761abdc683db69cd.png';
import achievementsImage from 'figma:asset/4600a0806657df731e35f578583ca08d0dbc4b60.png';

export function FinanzasNomadasCase() {
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
              Finanzas Nómadas
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Educational platform for personal finance management with gamification elements to motivate young adults to achieve their financial goals
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-sm opacity-80">ROLE</div>
                <div className="text-lg">UX Researcher & Designer</div>
              </div>
              <div>
                <div className="text-sm opacity-80">DURATION</div>
                <div className="text-lg">4 months</div>
              </div>
              <div>
                <div className="text-sm opacity-80">PLATFORM</div>
                <div className="text-lg">Web & Mobile</div>
              </div>
              <div>
                <div className="text-sm opacity-80">TEAM</div>
                <div className="text-lg">Solo project</div>
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
                  Finanzas Nómadas is an educational platform designed to help young adults (25-35 years old) 
                  learn financial literacy through interactive courses and practical tools. The platform combines 
                  budgeting, savings goals, and educational content with gamification elements to make financial 
                  management engaging and motivating.
                </p>
                <p>
                  The challenge was to create a solution that not only tracks expenses but actively teaches users 
                  financial concepts while keeping them motivated through achievements, progress tracking, and 
                  personalized learning paths.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={dashboardImage}
                alt="Finanzas Nómadas Dashboard"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Phase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-medium text-gray-900">User Research</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">Research Methods</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#4b4bc3] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">User Interviews</div>
                      <div className="text-sm text-gray-600">15 in-depth interviews with young professionals struggling with personal finances</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#4b4bc3] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Online Surveys</div>
                      <div className="text-sm text-gray-600">120+ responses from target demographic about financial habits and pain points</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#4b4bc3] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Competitive Analysis</div>
                      <div className="text-sm text-gray-600">Analysis of 8 financial apps and educational platforms to identify gaps in the market</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#4b4bc3] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Behavioral Research</div>
                      <div className="text-sm text-gray-600">Study of gamification in education and financial behavior change models</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">Key Research Insights</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#4b4bc3]">
                  <div className="font-medium mb-2 text-gray-900">78% feel overwhelmed by financial jargon</div>
                  <div className="text-sm text-gray-600">Users want simple, clear explanations without technical terminology</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#707ff5]">
                  <div className="font-medium mb-2 text-gray-900">65% abandon finance apps within 2 weeks</div>
                  <div className="text-sm text-gray-600">Lack of motivation and visible progress leads to disengagement</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#a195f9]">
                  <div className="font-medium mb-2 text-gray-900">Users prefer learning through doing</div>
                  <div className="text-sm text-gray-600">Interactive courses with real application are more effective than passive content</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#f2a1f2]">
                  <div className="font-medium mb-2 text-gray-900">Visual progress tracking is crucial</div>
                  <div className="text-sm text-gray-600">Users are motivated by seeing their achievements and advancement</div>
                </div>
              </div>
            </div>
          </div>

          {/* User Persona & Pain Points */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] p-8 rounded-2xl text-white">
              <h3 className="text-xl font-medium mb-6">User Persona: Laura, 28</h3>
              <div className="space-y-4 text-sm">
                <p><strong>Background:</strong> Marketing professional, recently moved to a new city, wants to save for travel and emergencies</p>
                <p><strong>Goals:</strong> Learn to budget effectively, save for short and long-term goals, understand investment basics</p>
                <p><strong>Frustrations:</strong> "I know I should save, but I don't know where to start. Every finance app just shows me numbers without teaching me anything."</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-6 text-gray-900">Main Pain Points</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#4b4bc3] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>Lack of financial education</strong> - Feel unprepared to manage money effectively
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#4b4bc3] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>Difficulty staying motivated</strong> - Goals feel too distant and abstract
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#4b4bc3] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>Overwhelming complexity</strong> - Existing tools are too complicated or too simple
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#4b4bc3] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>No sense of progress</strong> - Can't visualize advancement towards financial literacy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototyping Phase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#707ff5] to-[#a195f9] flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-medium text-gray-900">Prototyping & Design</h2>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-medium mb-6 text-gray-900">Design Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] mx-auto mb-4 flex items-center justify-center text-white text-xl font-medium">1</div>
                <h4 className="font-medium mb-2">Sketching & Ideation</h4>
                <p className="text-sm text-gray-600">Explored 20+ different layouts and interaction patterns for key features</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#707ff5] to-[#a195f9] mx-auto mb-4 flex items-center justify-center text-white text-xl font-medium">2</div>
                <h4 className="font-medium mb-2">Low-Fidelity Wireframes</h4>
                <p className="text-sm text-gray-600">Created wireframes focusing on information architecture and user flows</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] mx-auto mb-4 flex items-center justify-center text-white text-xl font-medium">3</div>
                <h4 className="font-medium mb-2">High-Fidelity Prototypes</h4>
                <p className="text-sm text-gray-600">Built interactive prototypes with full visual design and microinteractions</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-xl font-medium mb-6 text-gray-900">Key Design Decisions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#4b4bc3]"></div>
                    <strong className="text-sm">Gamification System</strong>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">Implemented achievement badges, XP points, and level progression to maintain engagement</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#707ff5]"></div>
                    <strong className="text-sm">Visual Progress Tracking</strong>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">Created progress bars and visual indicators for all goals and learning modules</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#a195f9]"></div>
                    <strong className="text-sm">Bite-Sized Learning</strong>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">Designed courses in 5-15 minute modules to reduce overwhelm and increase completion rates</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#f2a1f2]"></div>
                    <strong className="text-sm">Simplified Language</strong>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">Removed financial jargon and used conversational, friendly tone throughout</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Iterations */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">Iteration: Dashboard Design</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-2">BEFORE</div>
                    <p className="text-sm text-gray-600 mb-4">Initial design showed all financial data at once, overwhelming users with information</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Too many graphs and numbers</li>
                      <li>• No clear hierarchy</li>
                      <li>• Confusing navigation</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#4b4bc3] mb-2">AFTER</div>
                    <p className="text-sm text-gray-600 mb-4">Redesigned with card-based layout focusing on actionable insights and next steps</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Clear visual hierarchy</li>
                      <li>• Contextual alerts and tips</li>
                      <li>• Easy access to learning content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Phase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] flex items-center justify-center">
              <TestTube className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-medium text-gray-900">Usability Testing</h2>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 text-gray-900">Testing Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-medium text-[#4b4bc3] mb-2">3 rounds</div>
                <div className="text-sm text-gray-600">of iterative testing throughout design process</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-medium text-[#707ff5] mb-2">25 participants</div>
                <div className="text-sm text-gray-600">from target demographic tested prototypes</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-medium text-[#a195f9] mb-2">8 key tasks</div>
                <div className="text-sm text-gray-600">tested for usability and completion rate</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-6 text-gray-900">Testing Tasks</h3>
              <div className="space-y-3">
                {[
                  "Create a new savings goal for vacation",
                  "Complete first lesson on budgeting basics",
                  "Log daily expenses and categorize them",
                  "View progress on all active goals",
                  "Unlock an achievement and understand XP system",
                  "Find and start a recommended course",
                  "Adjust budget categories based on spending",
                  "Share progress with a friend"
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-[#4b4bc3]/10 flex items-center justify-center flex-shrink-0 text-xs font-medium text-[#4b4bc3]">
                      {index + 1}
                    </div>
                    <div className="text-sm text-gray-700">{task}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 text-gray-900">Testing Results</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-medium">Task Completion Rate</div>
                    <div className="text-2xl font-medium text-[#4b4bc3]">92%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#4b4bc3] to-[#707ff5] h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Users successfully completed tasks without assistance</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-medium">User Satisfaction Score</div>
                    <div className="text-2xl font-medium text-[#707ff5]">4.6/5</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#707ff5] to-[#a195f9] h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">High satisfaction with visual design and gamification</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-medium">Learning Comprehension</div>
                    <div className="text-2xl font-medium text-[#a195f9]">88%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#a195f9] to-[#f2a1f2] h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Users could explain financial concepts after lessons</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-medium mb-6">Key Findings & Iterations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="font-medium mb-3">What Worked Well ✓</div>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Gamification elements highly motivating</li>
                  <li>• Visual progress tracking clear and encouraging</li>
                  <li>• Course content easy to understand</li>
                  <li>• Achievement system engaging users</li>
                </ul>
              </div>
              <div>
                <div className="font-medium mb-3">Improvements Made ↻</div>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Added quick tips on dashboard for context</li>
                  <li>• Simplified goal creation flow (3 steps → 2 steps)</li>
                  <li>• Made badge notifications more prominent</li>
                  <li>• Added progress reminders for inactive goals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Designs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900 text-center">Final Designs</h2>
          
          <div className="space-y-16">
            {/* Dashboard */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Dashboard Overview</h3>
                <p className="text-gray-600">Card-based layout showing financial summary, spending insights, and learning progress at a glance</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={dashboardImage}
                  alt="Finanzas Nómadas Dashboard - Final Design"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Savings Goals */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Savings Goals Management</h3>
                <p className="text-gray-600">Visual goal tracking with progress indicators, image-based categories, and contribution planning</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={goalsImage}
                  alt="Finanzas Nómadas Savings Goals - Final Design"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Achievements & Gamification</h3>
                <p className="text-gray-600">Level progression, XP tracking, and achievement badges organized by category to maintain user motivation</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={achievementsImage}
                  alt="Finanzas Nómadas Achievements - Final Design"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900 text-center">Impact & Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-medium text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">User retention after 30 days</div>
              <div className="text-sm text-gray-500 mt-2">vs. 35% industry average</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#707ff5] to-[#a195f9] mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-medium text-gray-900 mb-2">72%</div>
              <div className="text-gray-600">Course completion rate</div>
              <div className="text-sm text-gray-500 mt-2">Users finish learning modules</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-medium text-gray-900 mb-2">4.7/5</div>
              <div className="text-gray-600">App Store rating</div>
              <div className="text-sm text-gray-500 mt-2">Based on 500+ reviews</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-medium mb-6 text-gray-900">Key Learnings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#4b4bc3] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Gamification drives engagement</div>
                  <div className="text-sm text-gray-600">Users are 3x more likely to return when progress is visualized through achievements and levels</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#707ff5] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Education must be actionable</div>
                  <div className="text-sm text-gray-600">Combining learning with practical tools increases knowledge retention by 60%</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#a195f9] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Simplicity reduces anxiety</div>
                  <div className="text-sm text-gray-600">Removing jargon and using conversational language improved user confidence scores by 45%</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#f2a1f2] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Iterative testing is essential</div>
                  <div className="text-sm text-gray-600">Each testing round revealed critical insights that improved usability by 20-30%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium mb-6 text-gray-900">Next Steps</h2>
          <p className="text-lg text-gray-600 mb-8">
            The platform continues to evolve based on user feedback. Planned features include AI-powered financial coaching, 
            social features for accountability, and expanded course library covering investing and retirement planning.
          </p>
          <Button 
            onClick={goBack}
            size="lg"
            className="bg-[#4b4bc3] hover:bg-[#1e1e76] text-white"
          >
            View More Projects
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Button>
        </div>
      </section>
    </div>
  );
}
