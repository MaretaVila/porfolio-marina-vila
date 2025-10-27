import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Briefcase, GraduationCap, Languages } from "lucide-react";

export function Resume() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    window.location.hash = '';
    setTimeout(scrollToTop, 100);
  };

  const experience = [
    {
      role: "Product Designer UX/UI",
      company: "Turitop - Booking System",
      period: "2023 - Present",
      location: "Spain",
      description: "Led redesign of booking system, aligning user needs with business goals and WCAG 2.1 accessibility standards. Collaborated across development, success, sales and marketing teams.",
      highlights: [
        "Designed user flows, wireframes, and high-fidelity prototypes in Figma",
        "Created epics and user stories for agile workflows",
        "Utilized BI tools (Looker Studio) to support data-driven design decisions",
        "Supported front-end implementation with HTML, CSS, React, WordPress and WooCommerce"
      ]
    },
    {
      role: "UX/UI Designer",
      company: "Software Agency",
      period: "2021 - 2023",
      location: "Spain",
      description: "Designed low and high-fidelity prototypes with responsive design, accessibility, and microinteractions. Led WordPress and WooCommerce optimization applying user-centered design practices.",
      highlights: [
        "Defined UX and interaction design strategies for multidisciplinary projects",
        "Improved website performance and conversion through UX optimization",
        "Provided design leadership strengthening brand visual identity",
        "Ensured consistency across digital communication"
      ]
    },
    {
      role: "Creative Manager",
      company: "Universidad Nacional de Tres de Febrero",
      period: "2012 - 2021",
      location: "Argentina",
      description: "Team lead and communication manager. Coordinated symposiums, congresses, and academic meetings. Led web design (WordPress, CMS) and institutional communication.",
      highlights: [
        "Managed artistic activities production and research",
        "Produced and organized Fulldome Visual Music Concerts",
        "Created and directed \"Texografías\" - immersive art piece exploring drawing, digital projection and immersive art"
      ]
    },
    {
      role: "Web Designer & Graphic Designer",
      company: "Institutional Communication Unit - Presidency of the Argentine Nation",
      period: "2008 - 2021",
      location: "Argentina",
      description: "Led visual design for national communication campaigns. Designed web and application interfaces for government programs applying principles of clarity, readability and visual accessibility.",
      highlights: [
        "Created visual assets for congresses, events, and institutional branding",
        "Produced editorial materials including book layouts and printed publications",
        "Specialized in illustration, retouching, and visual storytelling for digital and print"
      ]
    }
  ];

  const education = [
    {
      degree: "User Experience Design",
      institution: "Coursera by Google",
      location: "Online"
    },
    {
      degree: "International Postgraduate in Politic and Management in Culture and Communication",
      institution: "Latin American Faculty of Management and Policy in Culture and Communication (FLACSO)",
      location: "Argentina"
    },
    {
      degree: "Master in Educational Processes Mediated by Technology",
      institution: "National University of Córdoba (UNC)",
      location: "Córdoba, Argentina"
    },
    {
      degree: "Degree in Electronic Arts",
      institution: "National University of Tres de Febrero (UNTREF)",
      location: "Buenos Aires, Argentina"
    }
  ];

  const skills = {
    ux: ["User Research", "Information Architecture", "Interaction Design", "Visual Design", "Prototyping", "Usability Testing", "Design Systems"],
    tools: ["Figma", "Sketch", "Adobe Creative Suite", "Miro", "Optimal Workshop"],
    development: ["HTML/CSS", "JavaScript", "React"],
    other: ["Graphic Design", "Web Development", "Agile Methodologies"]
  };

  const languages = [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "C1 (Advanced)" },
    { language: "German", level: "A2 (Elementary)" },
    { language: "Portuguese", level: "A2 (Elementary)" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={goBack}
            className="text-[#4b4bc3] hover:bg-[#4b4bc3]/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#4b4bc3] to-[#a195f9] bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Product & UX/UI Designer with 10+ years of experience creating intuitive digital solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        
        {/* Experience Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-900">Experience</h2>
          </div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200 space-y-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4b4bc3]"></div>
                
                <div>
                  <h3 className="text-xl text-gray-900">{job.role}</h3>
                  <div className="text-[#4b4bc3]">{job.company}</div>
                  <div className="text-sm text-gray-500">{job.period} • {job.location}</div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#4b4bc3] mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#707ff5] to-[#a195f9] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-900">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200 space-y-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#707ff5]"></div>
                
                <div>
                  <h3 className="text-lg text-gray-900">{edu.degree}</h3>
                  <div className="text-[#4b4bc3]">{edu.institution}</div>
                  <div className="text-sm text-gray-500">{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl text-gray-900">Skills & Tools</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-gray-500">UX Design</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ux.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs border-[#4b4bc3]/30 text-[#4b4bc3] hover:bg-[#4b4bc3] hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-gray-500">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs border-[#707ff5]/30 text-[#707ff5] hover:bg-[#707ff5] hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-gray-500">Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.development.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs border-[#a195f9]/30 text-[#a195f9] hover:bg-[#a195f9] hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-gray-500">Other</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs border-[#f2a1f2]/30 text-[#f2a1f2] hover:bg-[#f2a1f2] hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] flex items-center justify-center">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-900">Languages</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#4b4bc3]/30 transition-colors">
                <span className="text-gray-900">{lang.language}</span>
                <Badge variant="outline" className="border-[#4b4bc3]/30 text-[#4b4bc3]">
                  {lang.level}
                </Badge>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl text-gray-900">
            Let's work together
          </h2>
          <p className="text-gray-600">
            Available for new projects and opportunities
          </p>
          <Button
            onClick={goBack}
            className="bg-[#4b4bc3] hover:bg-[#1e1e76] text-white"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
}
