import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mareta.ova@gmail.com",
      href: "mailto:mareta.ova@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/marina-vila",
      href: "https://linkedin.com/in/marina-vila"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MaretaVila",
      href: "https://github.com/MaretaVila"
    }
    {
      icon: Behance,
      label: "Behance",
      value: "behance.net/marina-vila",
      href: "https://www.behance.net/marina-vila",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-medium text-gray-900">
            Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-600 hover:text-[#4b4bc3] transition-colors"
            >
              <method.icon className="h-5 w-5" />
              <span className="text-sm">{method.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
