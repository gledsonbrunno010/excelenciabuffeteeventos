
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Videos from './components/Videos';
import WhatsAppFloating from './components/WhatsAppFloating';

const App: React.FC = () => {
  // Smooth scroll managed by CSS scroll-smooth in html tag

  return (
    <div className="min-h-screen selection:bg-[#1c090b] selection:text-[#fcfdff]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Videos />
      </main>
      <Contact />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
