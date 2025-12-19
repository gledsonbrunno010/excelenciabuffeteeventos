
import React from 'react';
import { SERVICES, CONTACT } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-[#fcfdff]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-xs font-bold tracking-[0.5em] uppercase text-[#575048]/50 block mb-6">Expertise Gastronômica</span>
          <h2 className="text-5xl md:text-8xl text-[#1c090b] leading-tight mb-8">Nossas Soluções em Buffet</h2>
          <p className="text-xl md:text-2xl text-[#575048] font-light leading-relaxed">
            Combinamos tradição e inovação para criar cardápios que elevam o nível de qualquer celebração em Brasília.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1c090b]/5 border border-[#1c090b]/5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-8 md:p-16 flex flex-col justify-between transition-all duration-700 hover:bg-[#fce4be]/10"
            >
              <div className="space-y-8">
                <div className="overflow-hidden aspect-[16/9] mb-10">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl text-[#1c090b] font-display">{service.title}</h3>
                <p className="text-lg text-[#575048] leading-relaxed opacity-80">
                  {service.description}
                </p>
              </div>

              <div className="mt-12">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase text-[#1c090b] border-b-2 border-[#1c090b] pb-2 group/link hover:text-[#575048] hover:border-[#575048] transition-all"
                >
                  Falar sobre seu {service.title.toLowerCase()}
                  <svg className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
