import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { WhoItsFor } from '@/components/WhoItsFor';
import { HowItWorks } from '@/components/HowItWorks';
import { Credibility } from '@/components/Credibility';
import { AuditOffer } from '@/components/AuditOffer';
import { WhatHappensNext } from '@/components/WhatHappensNext';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Nav />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <WhoItsFor />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <HowItWorks />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Credibility />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <AuditOffer />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <WhatHappensNext />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
