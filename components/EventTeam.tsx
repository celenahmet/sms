import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useEvent } from '../EventContext';

const EventTeam: React.FC = () => {
  const { t } = useLanguage();
  const { year } = useEvent();

  return (
    <section id="team" className="py-24 bg-brand-base relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-neon/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter">
            {t('team.title')} <span className="text-brand-accent">{t('team.title_accent')}</span>
          </h3>
          <div className="w-20 h-1 bg-brand-neon/30 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {year === '2026' ? (
            <>
              {/* Director - Top Row */}
              <div className="flex justify-center">
                <div className="relative group w-full max-w-md">
                  {/* Standardized Subtle Glow */}
                  <div className="absolute -inset-0.5 bg-brand-neon/10 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative glass p-8 rounded-3xl border border-white/10 text-center transition-all duration-500 group-hover:bg-white/[0.07] group-hover:border-white/20">
                    <span className="text-brand-neon font-heading font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">{t('team.director')}</span>
                    <h4 className="text-xl md:text-2xl font-heading font-medium text-white tracking-tight">
                      Arda Samed <span className="font-black text-white uppercase">ÖZKILIÇ</span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Coordinators - Bottom Row */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Coordinator 1 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-brand-neon/10 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative glass p-8 rounded-3xl border border-white/10 text-center transition-all duration-500 hover:bg-white/[0.07] group-hover:border-white/20">
                    <span className="text-brand-soft/40 font-heading font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">{t('team.coordinator')}</span>
                    <h4 className="text-xl md:text-2xl font-heading font-medium text-white tracking-tight">
                      Asude <span className="font-black text-white uppercase">SİVRİTEPE</span>
                    </h4>
                  </div>
                </div>

                {/* Coordinator 2 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-brand-neon/10 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative glass p-8 rounded-3xl border border-white/10 text-center transition-all duration-500 hover:bg-white/[0.07] group-hover:border-white/20">
                    <span className="text-brand-soft/40 font-heading font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">{t('team.coordinator')}</span>
                    <h4 className="text-xl md:text-2xl font-heading font-medium text-white tracking-tight">
                      Taner <span className="font-black text-white uppercase">KARAKAŞ</span>
                    </h4>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Coordinator 1 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-brand-neon/10 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative glass p-8 rounded-3xl border border-white/10 text-center transition-all duration-500 hover:bg-white/[0.07] group-hover:border-white/20">
                  <span className="text-brand-soft/40 font-heading font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">{t('team.coordinator')}</span>
                  <h4 className="text-xl md:text-2xl font-heading font-medium text-white tracking-tight">
                    Adal <span className="font-black text-white uppercase">ERKAYA</span>
                  </h4>
                </div>
              </div>

              {/* Coordinator 2 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-brand-neon/10 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative glass p-8 rounded-3xl border border-white/10 text-center transition-all duration-500 hover:bg-white/[0.07] group-hover:border-white/20">
                  <span className="text-brand-soft/40 font-heading font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">{t('team.coordinator')}</span>
                  <h4 className="text-xl md:text-2xl font-heading font-medium text-white tracking-tight">
                    Hüseyin <span className="font-black text-white uppercase">SEZGİN</span>
                  </h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventTeam;
