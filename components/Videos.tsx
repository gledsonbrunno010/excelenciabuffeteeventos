import React, { useState } from 'react';

const Videos: React.FC = () => {
    const [currentVideo, setCurrentVideo] = useState(0);

    // Placeholder for 9:16 videos. Using vertical images or color placeholders for now as no video files were provided.
    // In a real scenario, use <video> tags.
    const VIDEOS = [
        { id: 1, title: 'Casamento Real', color: 'bg-red-900', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=90&w=600&h=1067' },
        { id: 2, title: 'Buffet Corporativo', color: 'bg-blue-900', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=90&w=600&h=1067' },
        { id: 3, title: 'Aniversário 15 anos', color: 'bg-purple-900', src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=90&w=600&h=1067' },
        { id: 4, title: 'Bastidores', color: 'bg-green-900', src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=90&w=600&h=1067' },
    ];

    const handleNext = () => {
        setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
    };

    const handlePrev = () => {
        setCurrentVideo((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    };

    return (
        <section className="py-24 bg-[#1c090b] text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.5em] uppercase text-[#fce4be] block mb-4">Experiência Imersiva</span>
                    <h2 className="text-4xl md:text-5xl font-display">Nossos Bastidores</h2>
                </div>

                <div className="relative max-w-sm mx-auto md:max-w-4xl">
                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all hidden md:block"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all hidden md:block"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Videos Grid - Desktop: Show 3 or 4? User asked "Initial space for 4 videos". 
              Mobile: probably 1 at a time.
              Let's show a grid of 4 on desktop, and slider on mobile? 
              User said "user can choose which video to watch by arrows". 
              This implies a slider where focus changes or they slide in.
              "Abra espaço para 4 vídeos... escolher qual assistir por meio de seta".
              If they can choose with arrows, maybe it's a carousel where only 1 or some are visible?
              "espaço para 4 vídeos" might mean 4 slots visible?
              I'll implement a 4-column grid that works as a slider on mobile, or a slider showcasing 4 items if they fit?
              Let's try a responsive grid where arrows cycle the 'active' one or just slide.
              The simplest interpretation: A carousel of 4 items visible on desktop? Or 1 visible?
              "escolher qual vídeo assistir" -> implies playing one.
              I will show 4 thumbnails/posters (vertical 9:16). When clicked, maybe it plays?
              Or just the carousel of vertical videos.
          */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {VIDEOS.map((video, idx) => (
                            <div
                                key={video.id}
                                className={`aspect-[9/16] relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ${
                                    // Highlight logic or just grid
                                    'opacity-100'
                                    }`}
                            >
                                <img
                                    src={video.src}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-sm font-bold tracking-widest uppercase">{video.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-center gap-4 md:hidden">
                        {/* Mobile Controls */}
                        <button onClick={handlePrev} className="p-3 bg-white/10 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
                        <button onClick={handleNext} className="p-3 bg-white/10 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Videos;
