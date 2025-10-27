import { Badge } from "./ui/badge";
import aboutImage from 'figma:asset/46b71f9dacd4b5012f8707ef060624ded2bf5dbe.png';

export function About() {
  const skills = [
    "User Research",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Prototyping",
    "Usability Testing",
    "Design Systems",
    "Figma",
    "Sketch",
    "Adobe Creative Suite",
    "HTML/CSS",
    "React",
    "Graphic Design",
    "Web Development",
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Marina Vila"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#a195f9] to-[#f2a1f2] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#4b4bc3] to-[#707ff5] rounded-full opacity-25"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
                About me
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a Product & UX/UI Designer with a degree in Electronic Arts—specialized in electronic imaging—which trained my eye for visual clarity, rhythm, and storytelling. I've complemented that foundation with postgraduate studies and UX courses, plus front-end fundamentals (HTML, CSS, JavaScript, and React).
                </p>

                <p>
                  I've delivered end-to-end work across research, prototyping in Figma, design systems, accessibility, and handoff. Before product design, I spent nine years designing for government agencies and public universities, and also shipped digital projects with marketing agencies—experiences that sharpened my stakeholder alignment and constraint-driven thinking.
                </p>

                <p>
                  I design from research, validate with metrics, and focus on what matters—speed, support, and adoption.
                </p>

                <p className="flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  <span>
                    Based in Spain, open to opportunities in EU
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">
                Skills & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}