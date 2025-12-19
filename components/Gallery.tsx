
import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="galeria" className="py-24 bg-[#fcfdff] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-xs font-bold tracking-[0.5em] uppercase text-[#575048]/50 block mb-4">Portfólio em Foco</span>
        <h2 className="text-4xl md:text-6xl text-[#1c090b] mb-6">Momentos de Excelência</h2>
        <p className="text-lg text-[#575048] max-w-2xl mx-auto">
          Um vislumbre da dedicação e arte gastronômica que levamos a cada celebração em Brasília.
        </p>
      </div>

      <div className="relative w-full">
        {/* Simple CSS-only infinite slider */}
        <div className="flex w-max animate-marquee hover:pause">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              className="relative w-[300px] md:w-[400px] aspect-[4/3] mx-1 group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(img.url)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 uppercase tracking-widest text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Ampliar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[1000] bg-[#1c090b]/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-10 right-10 text-white p-4 hover:rotate-90 transition-transform"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img
            src={selectedImage}
            alt="Excelência Buffet Galeria"
            className="max-w-full max-h-[85vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-zoomIn cursor-zoom-out"
          />

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest">
            Excelência Buffet & Eventos • Clique fora para fechar
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
