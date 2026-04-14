
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { EventProvider } from './EventContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventExperience from './components/EventExperience';
import Speakers from './components/Speakers';
import Sponsorship from './components/Sponsorship';
import Schedule from './components/Schedule';
import ImpactStats from './components/ImpactStats';
import CTA from './components/CTA';
import EventTeam from './components/EventTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminMessages from './components/AdminMessages';
import { useState, useEffect } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/admin' || window.location.pathname === '/admin/') {
      setIsAdmin(true);
    }
  }, []);

  if (isAdmin) {
    return (
      <LanguageProvider>
        <EventProvider>
          <AdminMessages />
        </EventProvider>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <EventProvider>
        <div className="min-h-screen bg-brand-base text-white">
          <Navbar />
        <main>
          <Hero />
          <EventExperience />
          <Speakers />
          <Schedule />
          <Sponsorship />
          <ImpactStats />
          <EventTeam />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
      </EventProvider>
    </LanguageProvider>
  );
}

export default App;
