import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CaseStudyRouter } from "./components/CaseStudyRouter";
import { Resume } from "./components/Resume";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'case-study' | 'resume'>('home');
  const [caseStudySlug, setCaseStudySlug] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/case-study/')) {
        const slug = hash.replace('#/case-study/', '');
        setCaseStudySlug(slug);
        setCurrentView('case-study');
        // Scroll to top when opening a case study
        window.scrollTo(0, 0);
      } else if (hash === '#/resume') {
        setCurrentView('resume');
        // Scroll to top when opening resume
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentView === 'case-study') {
    return <CaseStudyRouter slug={caseStudySlug} />;
  }

  if (currentView === 'resume') {
    return <Resume />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}