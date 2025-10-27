import { useEffect } from "react";
import { BouncelessCase } from "./case-studies/BouncelessCase";
import { TicketeraCase } from "./case-studies/TicketeraCase";
import { TuritopCase } from "./case-studies/TuritopCase";
import { LifestyleCase } from "./case-studies/LifestyleCase";
import { EduFinanceCase } from "./case-studies/EduFinanceCase";
import { EmprenderPlusCase } from "./case-studies/EmprenderPlusCase";
import { FinanzasNomadasCase } from "./case-studies/FinanzasNomadasCase";
import { FulldomeFestivalCase } from "./case-studies/FulldomeFestivalCase";

interface CaseStudyRouterProps {
  slug: string;
}

export function CaseStudyRouter({ slug }: CaseStudyRouterProps) {
  // Ensure we scroll to top when the slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  switch (slug) {
    case 'finanzas-nomadas':
      return <FinanzasNomadasCase />;
    case 'bounceless':
      return <BouncelessCase />;
    case 'ticketera':
      return <TicketeraCase />;
    case 'turitop':
      return <TuritopCase />;
    case 'lifestyle':
      return <LifestyleCase />;
    case 'edufinance':
      return <EduFinanceCase />;
    case 'emprender-plus':
      return <EmprenderPlusCase />;
    case 'fulldome-festival':
      return <FulldomeFestivalCase />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
            <button 
              onClick={() => window.history.back()}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      );
  }
}