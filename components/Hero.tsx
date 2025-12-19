import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, CONTACT } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden bg-[#1c090b]">
      {/* Background Slider */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out will-change-[opacity] ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding={index === 0 ? "sync" : "async"}
            className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/15" />
          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <div key={currentSlide} className="max-w-5xl space-y-4 md:space-y-8 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 md:gap-4 text-[#fcfdff] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-sm font-bold bg-[#1c090b]/40 backdrop-blur-sm px-4 py-1.5 md:px-6 md:py-2 border border-white/20 mt-12 md:mt-0">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#fce4be] rounded-full animate-pulse"></span>
            {CONTACT.yearsExperience} anos de Tradição em Brasília
          </div>

          <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl text-[#fce4be] leading-[1.0] md:leading-[1.1] font-bold tracking-tighter drop-shadow-2xl text-shadow-premium">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          <p className="text-lg md:text-2xl text-[#fcfdff] font-light max-w-3xl mx-auto leading-relaxed text-shadow-premium opacity-95">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#fce4be] text-[#1c090b] px-6 py-3 md:px-10 md:py-5 text-xs md:text-base font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center shadow-2xl hover:bg-[#fcfdff]"
            >
              Solicitar Orçamento
              <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#servicos"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-[#fcfdff] px-6 py-3 md:px-10 md:py-5 text-xs md:text-base font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/20 text-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
