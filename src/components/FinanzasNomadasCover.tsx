import dashboardImage from 'figma:asset/3561087b4c3c2dd7078db6b9483a6986b6df2ee8.png';
import goalsImage from 'figma:asset/a14834cdcd4adc0400b5762c761abdc683db69cd.png';
import achievementsImage from 'figma:asset/4600a0806657df731e35f578583ca08d0dbc4b60.png';
import { Monitor } from 'lucide-react';

export function FinanzasNomadasCover() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#4b4bc3] via-[#707ff5] to-[#a195f9] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#f2a1f2] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#a195f9] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 py-4">
        <div className="w-full max-w-7xl">
          {/* Browser Window Mockup */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Browser Header - Más compacto */}
            <div className="bg-white/20 backdrop-blur-sm px-3 py-2 border-b border-white/20">
              <div className="flex items-center gap-2">
                {/* Browser Dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>
              </div>
            </div>

            {/* Browser Content - Screens Display con más espacio y altura */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 md:p-12 md:py-16">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Dashboard Mockup - Elevated y más grande */}
                <div className="transform md:-translate-y-12 transition-all duration-300 hover:scale-110 hover:-translate-y-16">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden ring-2 ring-white/30">
                    <img 
                      src={dashboardImage}
                      alt="Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Goals Mockup - Center, protagonista principal */}
                <div className="transition-all duration-300 hover:scale-110 md:scale-105">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden ring-4 ring-white/40">
                    <img 
                      src={goalsImage}
                      alt="Savings Goals"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Achievements Mockup - Elevated Down y más grande */}
                <div className="transform md:translate-y-12 transition-all duration-300 hover:scale-110 hover:translate-y-16">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden ring-2 ring-white/30">
                    <img 
                      src={achievementsImage}
                      alt="Achievements"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
