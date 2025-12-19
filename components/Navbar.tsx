
import React, { useState, useEffect } from 'react';
import { CONTACT } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#fcfdff] shadow-xl py-3'
        : 'bg-transparent py-4 md:py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Dominant Logo */}
        {/* Dominant Logo */}
        <a href="#home" className="flex flex-col group cursor-pointer z-50">
          <span className={`font-display text-3xl md:text-5xl font-bold leading-none tracking-tight transition-colors duration-500 ${isScrolled ? 'text-[#1c090b]' : 'text-white'
            }`}>
            Excelência
          </span>
          <span className={`text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold transition-colors duration-500 ${isScrolled ? 'text-[#575048]' : 'text-white/80'
            }`}>
            Buffet & Eventos
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold tracking-widest uppercase hover:text-[#1c090b] transition-colors ${isScrolled ? 'text-[#575048]' : 'text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fce4be] text-[#1c090b] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1c090b] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Orçamento WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-[#1c090b] bg-[#fce4be]/30' : 'text-[#fcfdff] bg-black/20'
            }`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#fcfdff] z-[100] transition-transform duration-700 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <div className="flex flex-col">
              <span className="font-display text-4xl font-bold text-[#1c090b]">Excelência</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#575048]">Buffet</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-[#1c090b] p-2 border border-[#1c090b]/10 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl md:text-4xl font-display font-medium text-[#1c090b] hover:text-[#575048] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }} // More minimalist font
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#1c090b] text-[#fcfdff] text-center py-6 text-xl font-bold uppercase tracking-widest shadow-2xl"
            >
              Falar pelo WhatsApp
            </a>
            <p className="text-center mt-6 text-[#575048] text-sm opacity-60">
              Brasília – DF • {CONTACT.phone}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
