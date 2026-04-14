import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useEvent } from '../EventContext';

const Sponsorship: React.FC = () => {
  const { t } = useLanguage();
  const { year } = useEvent();

  return (
    <section id="sponsorship" className="py-24 bg-brand-base relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4">{t('spon.tag')}</h2>
          <h3 className="text-4xl md:text-7xl font-heading font-bold text-white mb-12 uppercase">{t('spon.title')}</h3>
        </div>

        {year === '2026' ? (
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Ana Sponsorlar */}
            <div>
              <div className="flex justify-center flex-wrap gap-8">
                {/* Sponsor 1: TaleWorlds */}
                <a 
                  href="https://www.taleworlds.com?ref_acmhacettepe_for_sms_event" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-sm bg-white p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(255,183,3,0.3)] min-h-[420px]"
                >
                  <span className="px-5 py-1.5 rounded-full bg-brand-accent text-brand-base font-heading font-black text-[10px] uppercase tracking-widest mb-12 shadow-lg">Ana Sponsor</span>
                  <div className="relative w-full flex items-center justify-center">
                    <img 
                      src="/assets/sponsorships/taleworlds.png" 
                      alt="TaleWorlds" 
                      className="h-48 w-auto object-contain transition-all duration-500 group-hover:scale-105 mix-blend-multiply" 
                      onError={(e) => { e.currentTarget.classList.add('hidden'); e.currentTarget.nextElementSibling?.classList.remove('hidden') }} 
                    />
                    <span className="hidden text-brand-base font-heading font-black text-3xl uppercase tracking-widest">TaleWorlds</span>
                  </div>
                </a>

                {/* Sponsor 2: Altınyıldız */}
                <a 
                  href="https://www.altinyildizclassics.com?ref_acmhacettepe_for_sms_event" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-sm bg-white p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(168,85,247,0.3)] min-h-[420px]"
                >
                  <span className="px-5 py-1.5 rounded-full bg-brand-neon text-white font-heading font-black text-[10px] uppercase tracking-widest mb-12 shadow-lg">Giyim Sponsoru</span>
                  <div className="relative w-full flex items-center justify-center">
                    <img 
                      src="/assets/sponsorships/altinyildiz.png" 
                      alt="Altınyıldız Classics" 
                      className="h-48 w-auto object-contain transition-all duration-500 group-hover:scale-105 mix-blend-multiply" 
                      onError={(e) => { e.currentTarget.classList.add('hidden'); e.currentTarget.nextElementSibling?.classList.remove('hidden') }} 
                    />
                    <span className="hidden text-brand-base font-heading font-black text-2xl uppercase tracking-tighter">Altınyıldız</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Fuaye Sponsorları */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block px-8 py-3 rounded-full border border-white/20 text-white/50 font-heading font-black text-sm uppercase tracking-[0.2em]">Fuaye Sponsorları</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: "Kotex", url: "https://www.kotex.com.tr?ref_acmhacettepe_for_sms_event", img: "/assets/sponsorships/kotex.png" },
                  { name: "Kupa Coffee Co.", url: "https://kupacoffeeco.com/?ref_acmhacettepe_for_sms_event", img: "/assets/sponsorships/kupa.png" },
                  { name: "Maruderm", url: "https://www.maruderm.com?ref_acmhacettepe_for_sms_event", img: "/assets/sponsorships/maruderm.png" },
                  { name: "Lalezza", url: "https://www.lalezza.com/?ref_acmhacettepe_for_sms_event", img: "/assets/sponsorships/lalezza.png" },
                  { name: "Bahçeli Dabıl Meze", url: null, img: "/assets/sponsorships/dabilyemeze.png" }
                ].map((sponsor, idx) => {
                  const Content = (
                    <div className={`bg-white p-8 rounded-[2rem] flex flex-col items-center justify-center min-h-[160px] text-center group transition-all duration-300 shadow-xl ${sponsor.url ? 'hover:bg-white/95 hover:-translate-y-1 hover:shadow-2xl' : sponsor.img ? 'hover:-translate-y-1' : ''}`}>
                      {sponsor.img ? (
                        <>
                          <img 
                            src={sponsor.img} 
                            alt={sponsor.name} 
                            className="max-w-full max-h-[80px] object-contain transition-all duration-500 group-hover:scale-110 mix-blend-multiply" 
                            onError={(e) => { e.currentTarget.classList.add('hidden'); e.currentTarget.nextElementSibling?.classList.remove('hidden') }} 
                          />
                          <span className="hidden text-brand-base/40 font-heading font-black text-xs uppercase tracking-widest">{sponsor.name}</span>
                        </>
                      ) : (
                        <span className="text-brand-base/40 font-heading font-black text-xs uppercase tracking-widest">{sponsor.name}</span>
                      )}
                    </div>
                  );

                  return sponsor.url ? (
                    <a key={idx} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block text-inherit no-underline">
                      {Content}
                    </a>
                  ) : (
                    <div key={idx}>{Content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Main Sponsor */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl glass p-12 rounded-[3rem] border-brand-accent/40 bg-gradient-to-br from-brand-accent/10 to-transparent flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
              <span className="px-6 py-2 rounded-full bg-brand-accent text-brand-base font-heading font-bold text-xs uppercase tracking-widest mb-8 animate-pulse">{t('spon.main')}</span>
              <div className="w-48 h-24 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand-accent/50 transition-colors">
                <span className="text-white/20 font-heading font-bold italic uppercase tracking-widest">{t('spon.logo')}</span>
              </div>
              <h4 className="mt-8 text-2xl font-heading font-bold text-white group-hover:text-brand-accent transition-colors uppercase tracking-widest">{t('spon.partner_name')}</h4>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Platinum */}
            <div className="glass p-10 rounded-[2.5rem] border-brand-soft/30 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500">
              <span className="text-brand-soft font-heading font-bold text-[10px] uppercase tracking-widest mb-6">{t('spon.platinum')}</span>
              <div className="w-32 h-20 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                 <span className="text-white/10 font-heading font-bold text-[8px] uppercase tracking-widest">{t('spon.logo_small')}</span>
              </div>
              <p className="mt-6 text-white/40 font-heading font-bold uppercase tracking-widest text-[10px]">{t('spon.waiting')}</p>
            </div>

            {/* Gold */}
            <div className="glass p-10 rounded-[2.5rem] border-brand-accent/30 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500">
              <span className="text-brand-accent font-heading font-bold text-[10px] uppercase tracking-widest mb-6">{t('spon.gold')}</span>
              <div className="w-32 h-20 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                 <span className="text-white/10 font-heading font-bold text-[8px] uppercase tracking-widest">{t('spon.logo_small')}</span>
              </div>
              <p className="mt-6 text-white/40 font-heading font-bold uppercase tracking-widest text-[10px]">{t('spon.waiting')}</p>
            </div>

            {/* Silver */}
            <div className="glass p-10 rounded-[2.5rem] border-brand-accentSoft/30 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500">
              <span className="text-brand-accentSoft font-heading font-bold text-[10px] uppercase tracking-widest mb-6">{t('spon.silver')}</span>
              <div className="w-32 h-20 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                 <span className="text-white/10 font-heading font-bold text-[8px] uppercase tracking-widest">{t('spon.logo_small')}</span>
              </div>
              <p className="mt-6 text-white/40 font-heading font-bold uppercase tracking-widest text-[10px]">{t('spon.waiting')}</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Sponsorship;