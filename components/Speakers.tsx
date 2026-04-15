import React, { useState } from 'react';
import { speakers24, speakers26 } from '../data/speakers';
import { Speaker } from '../types';
import SpeakerModal from './SpeakerModal';
import { useLanguage } from '../LanguageContext';
import { useEvent } from '../EventContext';

const Speakers: React.FC = () => {
  const { language, t } = useLanguage();
  const { year } = useEvent();
  const [activeTab, setActiveTab] = useState<1 | 2>(1);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers = year === '2024' ? speakers24 : speakers26;
  const filteredSpeakers = speakers.filter(s => s.day === activeTab);

  return (
    <section id="speakers" className="py-24 bg-brand-base relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-soft font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4">{t('speakers.lineup')}</h2>
          <h3 className="text-4xl md:text-7xl font-heading font-bold text-white mb-12 uppercase">{t('speakers.title')}</h3>
          
          <div className="inline-flex glass p-1.5 rounded-2xl max-w-full overflow-x-auto">
            <button 
              onClick={() => setActiveTab(1)}
              className={`whitespace-nowrap px-8 py-3 rounded-xl font-heading font-bold transition-all text-sm uppercase tracking-widest ${activeTab === 1 ? 'bg-brand-neon text-white' : 'text-brand-soft hover:bg-white/5'}`}
            >
              {t('speakers.day1')}
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`whitespace-nowrap px-8 py-3 rounded-xl font-heading font-bold transition-all text-sm uppercase tracking-widest ${activeTab === 2 ? 'bg-brand-neon text-white' : 'text-brand-soft hover:bg-white/5'}`}
            >
              {t('speakers.day2')}
            </button>
          </div>
        </div>

        <div className={filteredSpeakers.length === 1 ? "flex justify-center flex-wrap gap-10" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"}>
          {filteredSpeakers.map((speaker) => (
            <div 
              key={speaker.id} 
              className={`group cursor-pointer mx-auto w-full ${filteredSpeakers.length === 1 ? 'max-w-md' : ''}`}
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-6 shadow-2xl transition-all group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-white/5 group-hover:border-brand-neon/30 bg-black/60">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-brand-base via-brand-base/60 to-transparent opacity-100 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute z-30 bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-3xl md:text-4xl font-heading font-bold text-white mb-1 leading-none uppercase drop-shadow-lg">{speaker.name}</h4>
                  <p className="text-brand-accent/90 text-sm font-heading font-bold uppercase tracking-widest drop-shadow-md">{speaker[language].role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSpeaker && (
        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
      )}
    </section>
  );
};

export default Speakers;
