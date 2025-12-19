
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
    <section id="galeria" className="py-32 bg-[#fcfdff] overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.5em] uppercase text-[#575048]/50 block mb-4">Portfólio em Foco</span>
            <h2 className="text-5xl md:text-7xl text-[#1c090b]">Momentos de Excelência</h2>
          </div>
          <p className="text-lg text-[#575048] max-w-sm">
            Um vislumbre da dedicação e arte gastronômica que levamos a cada celebração em Brasília.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="animate-marquee py-10">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => (
            <div 
              key={`${img.id}-${idx}`} 
              className="inline-block w-[300px] md:w-[600px] mx-4 md:mx-8 group cursor-pointer"
              onClick={() => setSelectedImage(img.url)}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 shadow-2xl">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1c090b]/0 group-hover:bg-[#1c090b]/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-[#fcfdff] opacity-0 group-hover:opacity-100 uppercase tracking-[0.3em] font-bold text-xs transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Ver Detalhes
                  </span>
                </div>
              </div>
              <p className="mt-6 text-xs uppercase tracking-widest font-bold text-[#1c090b]/40">
                {img.title}
              </p>
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
