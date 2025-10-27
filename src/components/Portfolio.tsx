import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import lifestyleCover from 'figma:asset/7405d950e4adceb8b4252a9cd92ed1fa5aa23bd0.png';
import turitopCover from 'figma:asset/808a74455cdbc546a36a3d4265574393092af402.png';
import ticketeraCover from 'figma:asset/04cd7d58326e509664ad5df01a62abd60307e8d7.png';
import bouncelessCover from 'figma:asset/bd5c259d4d2da508ee4c43d70001beadf72c56f5.png';
import fulldomeCover from 'figma:asset/cc115c4ef878449dba52a3c54b62534cf2c99945.png';

export function Portfolio() {
  const projects = [
    {
      title: "Turitop", 
      description: "Online booking system for tourism and leisure businesses looking to grow without the hassle. The challenge was to create a cross-platform mobile application with complex authentication flows and seamless user experience across different company subdomains.",
      category: "UX/UI • Web Platform • Information Architecture",
      image: turitopCover,
      gradient: "from-[#4b4bc3] to-[#707ff5]",
      slug: "turitop"
    },
    {
      title: "Ticketera",
      description: "Event discovery and ticket booking app with seamless user experience and intuitive navigation",
      category: "UX/UI • Mobile App Design • User Research",
      image: ticketeraCover,
      gradient: "from-[#1e1e76] to-[#4b4bc3]",
      slug: "ticketera"
    },
    {
      title: "Lifestyle",
      description: "Routine monitor & activity planner for healthy living habits with minimal effort",
      category: "UX/UI • Mobile App • Health & Wellness",
      image: lifestyleCover,
      gradient: "from-[#707ff5] to-[#a195f9]",
      slug: "lifestyle"
    },
    {
      title: "Fulldome Festival",
      description: "International festival for immersive fulldome experiences showcasing art, science and culture in planetarium environments",
      category: "UX/UI • Web Design • Event Platform",
      image: fulldomeCover,
      gradient: "from-[#4b4bc3] to-[#707ff5]",
      slug: "fulldome-festival"
    },
    {
      title: "Bounceless",
      description: "Email validation platform that ensures messages reach the inbox while boosting productivity and sender reputation",
      category: "Product Design • SaaS Platform • Data Visualization",
      image: bouncelessCover,
      gradient: "from-[#4b4bc3] to-[#707ff5]",
      slug: "bounceless"
    }
  ];

  const handleProjectClick = (slug: string) => {
    window.location.hash = `#/case-study/${slug}`;
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-tight text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my approach to solving complex user experience challenges
          </p>
        </div>

        {/* Projects Grid - Two Column Layout */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project.slug)}
              className="group cursor-pointer"
            >
              {/* Two Column Card */}
              <div className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative h-[500px] overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>
                
                {/* Content Section */}
                <div className={`p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <h3 className="text-4xl text-gray-900 mb-6 group-hover:text-[#4b4bc3] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-6 tracking-widest uppercase">
                    {project.category}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-xl">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
