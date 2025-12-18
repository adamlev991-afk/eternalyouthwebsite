import React from 'react';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Hero } from './components/Hero';
import { EmotionalHook } from './components/EmotionalHook';
import { ProblemSection } from './components/ProblemSection';
import { ProductDisplay } from './components/ProductDisplay';
import { HowItWorks } from './components/HowItWorks';
import { FDAClearedSection } from './components/FDAClearedSection';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { ClinicalStudies } from './components/ClinicalStudies';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyNav } from './components/StickyNav';
import { ExitIntentPopup } from './components/ExitIntentPopup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-editorial-white text-editorial-black font-sans selection:bg-editorial-red selection:text-white">
      <AnnouncementBanner />
      <StickyNav />
      <Hero />
      <EmotionalHook />
      <ProblemSection />
      <Testimonials />
      <ProductDisplay />
      <HowItWorks />
      <FDAClearedSection />
      <Guarantee />
      <ClinicalStudies />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default App;