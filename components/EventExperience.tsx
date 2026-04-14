
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { useEvent } from '../EventContext';

const memories24 = [
  { url: 'https://sms.acmhacettepe.com/static/media/merve.39062b0b09baa042f02f.png', caption: 'Merve Boluğur' },
  { url: 'https://sms.acmhacettepe.com/static/media/inan%C3%A7.983d51ad55893c3fe4e2.png', caption: 'İnanç Konukçu' },
  { url: 'https://sms.acmhacettepe.com/static/media/mervancharm.ac2c8dab9cbfa4c480c0.png', caption: 'Mervan & Fırat' },
  { url: 'https://sms.acmhacettepe.com/static/media/ahsen.f3b192b2b29991252d1e.png', caption: 'Ahsen Bücek' },
  { url: 'https://sms.acmhacettepe.com/static/media/selin.59f656adaa4aa9e82ef6.png', caption: 'Selin Geçit' },
  { url: 'https://sms.acmhacettepe.com/static/media/baturay.6a9f74984a01b863b5bd.png', caption: 'Baturay Özdemir' }
];

const memories26 = [
  { url: '/assets/speakers/lacin.jpg', caption: 'Laçin' },
  { url: '/assets/speakers/ozumEmre.jpg', caption: 'Özüm & Emre' },
  { url: '/assets/speakers/mehtapEmre.jpg', caption: 'Mehtap & Mustafa Emre' },
  { url: '/assets/speakers/latenighter.jpg', caption: 'Latenighter' }
];

const EventExperience: React.FC = () => {
  const { t } = useLanguage();
  const { year } = useEvent();
  const [currentIndex, setCurrentIndex] = useState(0);

  const memories = year === '2024' ? memories24 : memories26;

  useEffect(() => {
    setCurrentIndex(0); // Reset index on year change
    if (memories.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % memories.length);
      }, 4500);
      return () => clearInterval(timer);
    }
  }, [memories.length]);

  return (
    <section id="event" className="py-24 bg-brand-base relative overflow-hidden scroll-mt-32">
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-brand-neon/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-brand-accent font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4">{t('exp.tag')}</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-bold text-white mb-8 leading-[0.9] uppercase">{t('exp.title')}</h3>
            <div className="space-y-6 text-brand-soft/80 text-lg md:text-xl leading-relaxed">
              <p>{t('exp.p1')}</p>
              <p>{t('exp.p2')}</p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md group">
              <div className="glass p-4 pb-12 rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-500 hover:-rotate-2 border-white/10">
                <div className="relative aspect-square overflow-hidden rounded-[1.8rem] mb-6 bg-black/60">
                  {memories.map((memory, index) => (
                    <React.Fragment key={index}>
                      <img
                        src={memory.url}
                        alt=""
                        className={`absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 brightness-50 scale-110 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-40' : 'opacity-0'}`}
                      />
                      <img
                        src={memory.url}
                        alt={memory.caption}
                        className={`absolute inset-0 z-10 w-full h-full object-contain object-top transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                      />
                    </React.Fragment>
                  ))}
                  <div className="absolute z-20 inset-0 bg-gradient-to-t from-brand-base/40 to-transparent"></div>
                </div>
                
                <div className="px-4">
                  <h4 className="text-brand-accent font-heading font-bold uppercase tracking-widest text-xs mb-2">{t('exp.portraits')}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-heading font-bold text-white transition-all duration-500 min-h-[1.2em] uppercase">{memories[currentIndex].caption}</p>
                    <div className="flex gap-1">
                      {memories.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-brand-neon' : 'w-2 bg-white/20'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass px-6 py-2 rounded-full border-brand-accent/30 text-brand-accent font-heading font-bold text-sm shadow-xl animate-float uppercase">
                {year === '2024' ? 'Hacettepe • SMS Memories' : `Hacettepe • SMS'${year.substring(2)}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventExperience;
