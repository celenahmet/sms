
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useEvent } from '../EventContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const { year } = useEvent();

  const title2 = language === 'tr' ? `SÖYLEŞİLERİ '${year.substring(2)}` : `TALKS '${year.substring(2)}`;
  const displayDate = year === '2024' ? (language === 'tr' ? '18-19 Nisan 2024' : 'April 18-19, 2024') : (language === 'tr' ? '15-16 Nisan 2026' : 'April 15-16, 2026');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-gradient">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-neon/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-8xl font-heading font-bold mb-10 uppercase tracking-tighter leading-[0.9]">
          {t('hero.title1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">
            {title2}
          </span>
        </h1>

        <div className="inline-flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-10 mb-16 text-brand-soft/90 mx-auto">
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-2xl glass border-brand-accent/20 group-hover:bg-brand-accent/10 transition-all flex-shrink-0">
              <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-heading uppercase tracking-[0.2em] text-sm md:text-xl font-black text-white leading-none">{displayDate}</span>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-2xl glass border-brand-accent/20 group-hover:bg-brand-accent/10 transition-all flex-shrink-0">
              <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-heading uppercase tracking-[0.2em] text-sm md:text-xl font-black text-white leading-none">{t('hero.location')}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#schedule" 
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-brand-neon hover:bg-brand-accent hover:text-brand-base transition-all font-heading font-bold uppercase text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            {t('hero.btn_schedule')}
          </a>
          <a 
            href="#speakers" 
            className="w-full sm:w-auto px-10 py-5 rounded-full glass border-brand-soft/30 hover:bg-white/10 transition-all font-heading font-bold uppercase text-lg"
          >
            {t('hero.btn_speakers')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
