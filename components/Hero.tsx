import React from 'react';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative pt-28 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Unofficial Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold mb-6 border border-orange-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          {t.disclaimer_banner}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-morocco-dark mb-4 tracking-tight">
          AFCON Morocco <span className="text-morocco-red">2025</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light">
          {t.tagline}
        </p>

        {/* Hero Image / Visualization */}
        <div className="mt-10 relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative group">
             {/* Using a soccer stadium image for AFCON vibe */}
             <img 
               src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
               alt="AFCON Stadium Atmosphere" 
               className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
               <p className="text-white text-sm sm:text-base font-medium opacity-90 px-4">
                 {t.download_subtitle}
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;