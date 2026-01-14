
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import PersonalizationProcess from './components/PersonalizationProcess';
import Philosophy from './components/Philosophy';
import StatsSection from './components/StatsSection';
import TailoredProgram from './components/TailoredProgram';
import OfferCTA from './components/OfferCTA';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Methods from './components/Methods';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'methods'>('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (currentPage === 'methods') {
    return (
      <>
        <Header onNavigate={setCurrentPage} />
        <Methods />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-700 selection:text-white overflow-x-hidden">
      <Header onNavigate={setCurrentPage} />
      <main>
        <Hero />
        <BrandIntro />
        <PersonalizationProcess />
        <Philosophy />
        <StatsSection />
        <TailoredProgram />
        <OfferCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
