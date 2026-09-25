import { Nav } from '@/components/Nav';
import { StickyNav } from '@/components/StickyNav';
import { Hero } from '@/components/Hero';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { WhoItsFor } from '@/components/WhoItsFor';
import { HowItWorks } from '@/components/HowItWorks';
import { Credibility } from '@/components/Credibility';
import { CaseStudies } from '@/components/CaseStudies';
import { AuditOffer } from '@/components/AuditOffer';
import { WhatHappensNext } from '@/components/WhatHappensNext';
import { AutomationIndex } from '@/components/AutomationIndex';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { ExitIntentModal } from '@/components/ExitIntentModal';

function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Nav />
      <StickyNav />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <BeforeAfterSlider />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <WhoItsFor />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <HowItWorks />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Credibility />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <CaseStudies />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <AuditOffer />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <WhatHappensNext />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <AutomationIndex />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <FinalCTA />
      <Footer />
      <ExitIntentModal />
    </div>
  );
}

export default App;
