import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useEvent } from '../EventContext';

const Schedule: React.FC = () => {
  const { t } = useLanguage();
  const { year } = useEvent();

  const day1_24 = [
    { time: '10:00', title: 'FUAYE ALANI AÇILIŞI' },
    { time: '11:30', title: 'MERVE BOLUĞUR' },
    { time: '13:00', title: 'İNANÇ KONUKÇU' },
    { time: '14:30', title: 'MERVAN & FIRAT YAYLA' },
  ];

  const day2_24 = [
    { time: '11:00', title: 'FUAYE ALANI AÇILIŞI' },
    { time: '12:30', title: 'AHSEN BÜCEK' },
    { time: '14:00', title: 'SELİN GEÇİT' },
    { time: '15:30', title: 'BATURAY ÖZDEMİR' },
  ];

  const day1_26 = [
    { time: '13:30', title: 'LAÇİN' },
  ];

  const day2_26 = [
    { time: '12:00', title: 'ÖZÜM YILDIZELİ & EMRE UZUNBOY' },
    { time: '13:30', title: 'MEHTAP ALGÜL & MUSTAFA EMRE YILDIZ' },
    { time: '15:00', title: 'LATENIGHTER' },
  ];

  const day1 = year === '2024' ? day1_24 : day1_26;
  const day2 = year === '2024' ? day2_24 : day2_26;

  return (
    <section id="schedule" className="py-24 bg-brand-base relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h3 className="text-3xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter">
            {t('schedule.title')} <span className="text-brand-accent">{t('schedule.title_accent')}</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Day 1 Section */}
          <div className="relative group h-full">
            <div className="relative glass h-full p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:border-brand-neon/20">
              <div className="flex flex-col items-center mb-8 md:mb-12">
                <span className="text-brand-neon font-heading font-bold tracking-[0.4em] uppercase text-[10px] mb-3">{t('schedule.wed')} • 15 Nisan</span>
                <h4 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight">{t('schedule.day1')}</h4>
              </div>
              <div className="space-y-4 md:space-y-6">
                {year === '2026' ? (
                  <div className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl glass border-brand-neon/20 bg-white/5 transition-all duration-300 min-h-[200px] md:min-h-[250px]">
                    <span className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-2">LAÇİN</span>
                    <span className="text-brand-neon font-heading font-bold text-base md:text-lg uppercase tracking-widest">{t('speakers.special_guest')}</span>
                    <span className="mt-4 text-brand-soft/40 font-heading font-bold text-lg md:text-xl uppercase tracking-widest">13:30</span>
                  </div>
                ) : (
                  day1.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 md:p-5 rounded-2xl glass border-transparent hover:border-brand-neon/30 transition-all duration-300">
                      <span className="text-lg md:text-2xl font-heading font-bold text-white uppercase tracking-tight">{item.title}</span>
                      <span className="text-brand-soft/60 font-heading font-bold text-base md:text-lg">{item.time}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="relative group h-full">
            <div className="relative glass h-full p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:border-brand-accent/20">
              <div className="flex flex-col items-center mb-8 md:mb-12">
                <span className="text-brand-accent font-heading font-bold tracking-[0.4em] uppercase text-[10px] mb-3">{t('schedule.thu')} • 16 Nisan</span>
                <h4 className="text-4xl md:text-6xl font-heading font-bold text-brand-accent uppercase tracking-tight">{t('schedule.day2')}</h4>
              </div>
              <div className="space-y-4 md:space-y-6">
                {day2.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 md:p-5 rounded-2xl glass border-transparent hover:border-brand-accent/30 transition-all duration-300">
                    <span className="text-lg md:text-2xl font-heading font-bold text-white uppercase tracking-tight">{item.title}</span>
                    <span className="text-brand-soft/60 font-heading font-bold text-base md:text-lg">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
