
import React from 'react';
import { CONTACT } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Final CTA Section */}
      <div className="bg-[#1c090b] text-[#fcfdff] py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-12">
            <span className="text-xs font-bold tracking-[0.6em] uppercase opacity-40">Agenda {new Date().getFullYear()}</span>
            <h2 className="text-5xl md:text-[7rem] font-display leading-[0.9] tracking-tighter">
              Dê vida ao seu próximo grande evento.
            </h2>
            <p className="text-xl md:text-3xl font-light opacity-60 max-w-3xl leading-relaxed">
              Consulte nossa disponibilidade para {CONTACT.location} e receba uma proposta exclusiva desenhada por {CONTACT.owner}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 pt-8 w-full sm:w-auto">
              <a 
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fcfdff] text-[#1c090b] px-16 py-8 text-lg font-bold uppercase tracking-[0.3em] transition-all hover:bg-[#fce4be] hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
              >
                Falar no WhatsApp
              </a>
              <a 
                href={`tel:${CONTACT.phone.replace(/\D/g,'')}`}
                className="border border-[#fcfdff]/30 text-[#fcfdff] px-16 py-8 text-lg font-bold uppercase tracking-[0.3em] transition-all hover:bg-white/10 flex items-center justify-center"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Footer */}
      <div className="bg-[#fcfdff] text-[#1c090b] pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 border-b border-[#1c090b]/10 pb-20">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-col">
                <span className="font-display text-5xl font-bold leading-none">Excelência</span>
                <span className="text-xs uppercase tracking-[0.5em] font-bold text-[#575048]">Buffet & Eventos</span>
              </div>
              <p className="text-xl text-[#575048] font-light max-w-md leading-relaxed">
                Há 15 anos elevando o padrão de buffet em Brasília com gastronomia de autor e serviço impecável.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#575048]/50">Navegação</h4>
              <ul className="space-y-4 font-bold text-sm uppercase tracking-widest">
                <li><a href="#home" className="hover:text-[#575048]/60 transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-[#575048]/60 transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-[#575048]/60 transition-colors">A Empresa</a></li>
                <li><a href="#galeria" className="hover:text-[#575048]/60 transition-colors">Portfólio</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#575048]/50">Brasília – DF</h4>
              <p className="text-lg font-light leading-relaxed">
                Atendimento em todo o Distrito Federal e Entorno.<br/>
                <strong className="font-bold">{CONTACT.phone}</strong>
              </p>
              <div className="flex gap-6 pt-4">
                <a href="#" className="w-12 h-12 border border-[#1c090b]/10 rounded-full flex items-center justify-center hover:bg-[#1c090b] hover:text-white transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 border border-[#1c090b]/10 rounded-full flex items-center justify-center hover:bg-[#1c090b] hover:text-white transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.778h-2.954v-3.424h2.954v-2.527c0-2.924 1.786-4.516 4.394-4.516 1.25 0 2.324.093 2.637.135v3.057l-1.808.001c-1.419 0-1.694.675-1.694 1.664v2.186h3.384l-.44 3.424h-2.944v8.778h6.108c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-[#575048]/40">
            <div>© {new Date().getFullYear()} Excelência Buffet e Eventos</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#1c090b]">Privacidade</a>
              <a href="#" className="hover:text-[#1c090b]">Termos</a>
              <span>Desenvolvido com Excelência</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
