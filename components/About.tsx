
import React from 'react';
import { CONTACT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-32 bg-[#fce4be]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200"
                alt="Dione Genesis - Excelência Buffet"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1c090b] hidden xl:flex items-center justify-center p-8 z-[-1]"></div>
            <div className="absolute -bottom-10 -right-10 bg-[#1c090b] text-[#fcfdff] p-12 shadow-2xl">
              <div className="text-7xl font-display font-bold mb-2">{CONTACT.yearsExperience}</div>
              <div className="text-xs uppercase tracking-[0.4em] font-bold opacity-80 leading-relaxed">
                Anos Realizando<br />Grandes Sonhos
              </div>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <span className="text-xs font-bold tracking-[0.5em] uppercase text-[#575048]/50 block mb-6">Nossa História</span>
              <h2 className="text-5xl md:text-8xl text-[#1c090b] leading-none mb-4">A Arte de Receber Bem.</h2>
            </div>

            <div className="space-y-8 text-xl text-[#575048] leading-relaxed font-light">
              <p>
                Sob o comando visionário de <strong className="font-bold text-[#1c090b]">{CONTACT.owner}</strong>, a Excelência Buffet e Eventos tornou-se referência absoluta em catering de luxo no Distrito Federal.
              </p>
              <p className="bg-white/50 p-8 border-l-4 border-[#1c090b] italic font-display text-2xl text-[#1c090b]">
                "Nossa missão não é apenas servir pratos impecáveis, mas criar experiências sensoriais que fiquem gravadas na memória de cada convidado."
              </p>
              <p>
                Com mais de {CONTACT.yearsExperience} anos de atuação e milhares de eventos realizados com sucesso, dominamos a logística e o requinte necessários para casamentos, recepções diplomáticas e eventos corporativos de alto escalão em <strong>Brasília</strong>.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-[#1c090b]/10">
              <div>
                <span className="text-3xl font-display text-[#1c090b] block">Milhares</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#575048]">Eventos Realizados</span>
              </div>
              <div>
                <span className="text-3xl font-display text-[#1c090b] block">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#575048]">Foco na Perfeição</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
