
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, CONTACT } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden bg-[#1c090b]">
      {/* Background Slider */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-linear ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Subtle Overlay - 15% as per UI request for brightness */}
          <div className="absolute inset-0 bg-black/15" />
          {/* Bottom Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-start lg:items-center text-left lg:text-center">
        <div className="max-w-5xl space-y-8 animate-fade-in-down">
          <div className="inline-flex items-center gap-4 text-[#fcfdff] uppercase tracking-[0.6em] text-xs md:text-sm font-bold bg-[#1c090b]/40 backdrop-blur-sm px-6 py-2 border border-white/20">
            <span className="w-2 h-2 bg-[#fce4be] rounded-full animate-pulse"></span>
            {CONTACT.yearsExperience} anos de Tradição em Brasília
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-[#fcfdff] leading-[0.9] font-bold tracking-tighter drop-shadow-2xl text-shadow-premium">
            {HERO_SLIDES[currentSlide].title}
          </h1>
          
          <p className="text-xl md:text-3xl text-[#fcfdff] font-light max-w-3xl lg:mx-auto leading-relaxed text-shadow-premium opacity-95">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          <div className="pt-10 flex flex-col sm:flex-row gap-6 lg:justify-center">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#fcfdff] text-[#1c090b] px-12 py-6 text-sm md:text-lg font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center shadow-2xl hover:bg-[#fce4be]"
            >
              Solicitar Orçamento
              <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#servicos"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-[#fcfdff] px-12 py-6 text-sm md:text-lg font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/20 text-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group py-4 focus:outline-none"
          >
            <div className={`h-1 transition-all duration-500 rounded-full ${
              index === currentSlide ? 'w-20 bg-[#fce4be]' : 'w-8 bg-white/30 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
