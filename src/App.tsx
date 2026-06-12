/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import MicroInfluencer from './components/MicroInfluencer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preFilledService, setPreFilledService] = useState('');

  // Dual purpose hook: Pre-fills and scrolls smoothly
  const handleBookService = (serviceName: string) => {
    setPreFilledService(serviceName);
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClearPreFill = () => {
    setPreFilledService('');
  };

  // Scroll active-section intersection observer
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'influencer', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // viewport offset trigger
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once at cold start to set original trigger
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans selection:bg-[#FF5A1F]/30 selection:text-white antialiased">
      
      {/* Header and navigation controller */}
      <Header activeSection={activeSection} />

      {/* Main Structural Areas */}
      <main id="main-content-layout">
        
        {/* Home / Hero and client trust banner */}
        <Hero />

        {/* Professional Story timeline */}
        <About />

        {/* Structured Consultancy Services */}
        <Services onBookService={handleBookService} />

        {/* Filterable Metric projects */}
        <Portfolio onQuoteRequested={handleBookService} />

        {/* Micro-Influencer campaigns and speaking */}
        <MicroInfluencer />

        {/* Skills matrix & printable Resume sheet */}
        <Resume />

        {/* Intake configuration & appointment booking */}
        <Contact preFilledService={preFilledService} clearPreFill={handleClearPreFill} />

      </main>

      {/* Persistent global widgets & footers */}
      <WhatsAppButton />
      
      <Footer />
    </div>
  );
}
