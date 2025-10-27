import { Button } from "../ui/button";
import { ArrowLeft, ExternalLink, Users, Target, TrendingUp, Clock, Check, Search, Smartphone, CreditCard, Star, Camera, PieChart, Receipt, Wallet } from "lucide-react";
import traviuScreens from 'figma:asset/d7dcc222e8d14facf02e1356ba4e2d1d3a4df5e3.png';

export function TraviuCase() {
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6">
              Traviu
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl">
              UI/UX Design for a comprehensive travel expense control application with budget management and receipt tracking
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div>
                <div className="text-sm opacity-80">ROLE</div>
                <div className="text-lg">Lead Product Designer</div>
              </div>
              <div>
                <div className="text-sm opacity-80">DURATION</div>
                <div className="text-lg">4 months</div>
              </div>
              <div>
                <div className="text-sm opacity-80">PLATFORM</div>
                <div className="text-lg">Mobile & Web Dashboard</div>
              </div>
              <div>
                <div className="text-sm opacity-80">TEAM</div>
                <div className="text-lg">6 members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-8 text-gray-900">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Traviu is a comprehensive travel expense management application designed to help business travelers 
              and organizations track, manage, and control travel-related expenses. The project challenged us to 
              create an intuitive dashboard experience that simplifies complex expense tracking while providing 
              powerful budgeting and reporting capabilities.
            </p>
            <p>
              Through user-centered design, we developed a solution that streamlines expense entry, budget creation, 
              and receipt management, transforming a traditionally tedious process into an efficient and 
              user-friendly experience.
            </p>
          </div>
        </div>
      </section>

      {/* Discovery Phase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">01. Discovery</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Research Objectives</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Understand current expense tracking pain points</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Analyze travel budgeting behaviors and needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Study receipt management workflows</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#6366F1] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Define user personas for business travelers</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Research Activities</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-medium text-[#6366F1] mb-2">20</div>
                  <div className="text-sm">Business Traveler Interviews</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-medium text-[#6366F1] mb-2">8</div>
                  <div className="text-sm">Finance Manager Sessions</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-medium text-[#6366F1] mb-2">150+</div>
                  <div className="text-sm">Survey Responses</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-medium text-[#6366F1] mb-2">6</div>
                  <div className="text-sm">Competitor Apps Analyzed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Issues */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">02. Insights & Issues</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6 text-red-600">Critical Pain Points</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Manual Data Entry</h4>
                  <p className="text-sm text-gray-600">75% of users spent 15+ minutes manually entering expense details from receipts</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Lost Receipt Anxiety</h4>
                  <p className="text-sm text-gray-600">60% worried about losing paper receipts leading to reimbursement issues</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Budget Tracking Gaps</h4>
                  <p className="text-sm text-gray-600">Users struggled to track spending against allocated travel budgets in real-time</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Complex Categorization</h4>
                  <p className="text-sm text-gray-600">Confusion over expense categories and trip associations</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6 text-green-600">User Insights</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Quick Capture</h4>
                  <p className="text-sm text-gray-600">"I need to snap a photo and have everything filled out automatically"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Budget Visibility</h4>
                  <p className="text-sm text-gray-600">"Show me how much I have left to spend before I go over budget"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Trip Association</h4>
                  <p className="text-sm text-gray-600">"All my expenses should automatically link to the right business trip"</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Visual Dashboard</h4>
                  <p className="text-sm text-gray-600">"I want to see my spending patterns and trends at a glance"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">03. Exploration</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-6">Design Strategy</h3>
              <p className="text-gray-600 mb-6">
                We focused on creating a solution that automates tedious tasks while providing clear 
                budget visibility. Multiple ideation sessions helped us explore innovative approaches 
                to expense capture and budget management.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">User journey mapping workshops</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Receipt capture exploration sessions</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Dashboard visualization studies</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Mobile-first design sprints</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-medium mb-6">Core Design Principles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <Camera className="w-8 h-8 text-[#6366F1] mb-4" />
                  <h4 className="font-medium mb-2">Effortless Capture</h4>
                  <p className="text-sm text-gray-600">One-tap receipt photography with auto-data extraction</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <PieChart className="w-8 h-8 text-[#8B5CF6] mb-4" />
                  <h4 className="font-medium mb-2">Visual Budget Control</h4>
                  <p className="text-sm text-gray-600">Clear spending insights with real-time budget tracking</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <Receipt className="w-8 h-8 text-[#06B6D4] mb-4" />
                  <h4 className="font-medium mb-2">Smart Organization</h4>
                  <p className="text-sm text-gray-600">Automatic trip association and expense categorization</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <Wallet className="w-8 h-8 text-[#F59E0B] mb-4" />
                  <h4 className="font-medium mb-2">Comprehensive Tracking</h4>
                  <p className="text-sm text-gray-600">Complete expense lifecycle from capture to reimbursement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">04. Information Architecture</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">App Structure</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="font-medium text-[#6366F1]">• Dashboard Overview</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Total spending visualization</div>
                    <div>- Budget vs. actual comparison</div>
                    <div>- Category breakdown charts</div>
                    <div>- Recent expense summary</div>
                  </div>
                  
                  <div className="font-medium text-[#6366F1]">• Budget Management</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Create new trip budgets</div>
                    <div>- Set spending limits by category</div>
                    <div>- Currency and date selection</div>
                    <div>- Budget notifications setup</div>
                  </div>
                  
                  <div className="font-medium text-[#6366F1]">• Expense Entry</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Receipt photo capture</div>
                    <div>- Manual expense entry</div>
                    <div>- Trip and category association</div>
                    <div>- Receipt image storage</div>
                  </div>
                  
                  <div className="font-medium text-[#6366F1]">• Trip & Category Management</div>
                  <div className="ml-4 space-y-2 text-sm text-gray-600">
                    <div>- Active trip selection</div>
                    <div>- Expense categorization</div>
                    <div>- Custom category creation</div>
                    <div>- Trip expense summaries</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">User Flow Priorities</h3>
              <p className="text-gray-600 mb-6">
                We structured the app to prioritize quick expense capture while providing comprehensive 
                budget management tools. The dashboard provides immediate spending visibility with 
                easy access to detailed management features.
              </p>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#6366F1] mb-2">Primary: Quick Capture</h4>
                  <p className="text-sm">Photo → Auto-fill → Save (under 30 seconds)</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#6366F1] mb-2">Secondary: Budget Monitoring</h4>
                  <p className="text-sm">Real-time spending vs. budget visualization</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#6366F1] mb-2">Tertiary: Trip Management</h4>
                  <p className="text-sm">Detailed expense organization and reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow & Interaction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">05. User Flow & Interaction</h2>
          <div>
            <h3 className="text-xl font-medium mb-8">Primary User Journey: From Receipt to Budget Tracking</h3>
            <div className="grid md:grid-cols-5 gap-3 mb-12">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">1</span>
                </div>
                <h4 className="font-medium mb-2">Open App</h4>
                <p className="text-xs text-gray-600">Dashboard overview</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">2</span>
                </div>
                <h4 className="font-medium mb-2">Capture Receipt</h4>
                <p className="text-xs text-gray-600">Photo with auto-data</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#06B6D4] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">3</span>
                </div>
                <h4 className="font-medium mb-2">Verify Details</h4>
                <p className="text-xs text-gray-600">Auto-filled expense</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#EF4444] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">4</span>
                </div>
                <h4 className="font-medium mb-2">Associate Trip</h4>
                <p className="text-xs text-gray-600">Select business trip</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444] to-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-medium">5</span>
                </div>
                <h4 className="font-medium mb-2">View Budget</h4>
                <p className="text-xs text-gray-600">Updated spending</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sketches */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">06. Sketches & Early Concepts</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Dashboard Wireframes</h3>
              <p className="text-gray-600 mb-6">
                Early sketches focused on creating an intuitive dashboard that provides immediate 
                spending insights while making expense entry effortless. We explored various 
                approaches to data visualization and mobile-first interactions.
              </p>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-500">Dashboard wireframe concepts</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Design Evolution</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">V1: Complex Dashboard</h4>
                  <p className="text-sm text-gray-600">Multiple charts and detailed expense lists</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">V2: Simplified Overview</h4>
                  <p className="text-sm text-gray-600">Focus on key metrics with progressive disclosure</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Final: Visual Budget Control</h4>
                  <p className="text-sm text-gray-600">Circular progress indicators with quick actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Iterate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900">07. Design & Iterate</h2>
          
          {/* Final Design Implementation */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6">Final Design Implementation</h3>
            <img 
              src={traviuScreens}
              alt="Traviu app screens showing dashboard, budget creation, and expense entry interfaces"
              className="w-full rounded-lg shadow-lg mb-8"
            />
          </div>
          
          {/* Key Features */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-8">Key Features Delivered</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium mb-2">Visual Dashboard</h4>
                <p className="text-sm text-gray-600">Real-time spending overview with circular progress</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium mb-2">Smart Budgeting</h4>
                <p className="text-sm text-gray-600">Create trip budgets with currency and limit setting</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium mb-2">Quick Capture</h4>
                <p className="text-sm text-gray-600">Photo receipts with auto-data extraction</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium mb-2">Trip Association</h4>
                <p className="text-sm text-gray-600">Automatic expense linking to business trips</p>
              </div>
            </div>
          </div>

          {/* Testing Iterations */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-medium mb-4">Usability Test 1</h4>
              <p className="text-sm text-gray-600 mb-4">Users struggled with complex dashboard layout</p>
              <div className="text-xs text-red-600">→ Simplified to key metrics only</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-medium mb-4">Usability Test 2</h4>
              <p className="text-sm text-gray-600 mb-4">Receipt capture flow needed improvement</p>
              <div className="text-xs text-red-600">→ Added auto-fill confirmation step</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-medium mb-4">Usability Test 3</h4>
              <p className="text-sm text-gray-600 mb-4">96% task completion rate achieved</p>
              <div className="text-xs text-green-600">→ Ready for launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-gray-900 text-center">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-[#6366F1] mb-2">80%</div>
              <div className="text-gray-600">Faster expense entry</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#6366F1] mb-2">96%</div>
              <div className="text-gray-600">User task completion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#6366F1] mb-2">60%</div>
              <div className="text-gray-600">Reduction in manual data entry</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#6366F1] mb-2">4.7/5</div>
              <div className="text-gray-600">User satisfaction score</div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-medium mb-6 text-center">Business Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-medium mb-3">Efficiency Gains</h4>
                <p className="text-sm text-gray-600">
                  Reduced average expense entry time from 15 minutes to 3 minutes through 
                  automated receipt processing and smart defaults.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-medium mb-3">Budget Compliance</h4>
                <p className="text-sm text-gray-600">
                  Real-time budget tracking led to 25% improvement in travel budget adherence 
                  and reduced overspending incidents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium mb-8 text-white">Next Project</h2>
          <Button 
            onClick={() => window.location.hash = '#/case-study/edufinance'}
            className="bg-white text-[#6366F1] hover:bg-gray-100"
          >
            View EduFinance Case Study
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}