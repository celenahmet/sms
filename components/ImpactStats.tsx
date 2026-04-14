import React from 'react';
import { useLanguage } from '../LanguageContext';

const ImpactStats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { 
      label: t('stats.1.label'), 
      value: '5000+', 
      description: t('stats.1.desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      label: t('stats.2.label'), 
      value: '55K+', 
      description: t('stats.2.desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      label: t('stats.3.label'), 
      value: '%99', 
      description: t('stats.3.desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-32 bg-brand-base relative overflow-hidden">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>
      
      {/* Animated Light Streaks */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon to-transparent animate-pulse opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent animate-pulse opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full glass border-white/10 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent">{t('stats.dashboard')}</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight">{t('stats.title')}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group relative h-full"
            >
              {/* Premium Glow Aura */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-neon/40 to-brand-accent/40 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              <div className="relative h-full glass p-10 lg:p-14 rounded-[3rem] border border-white/10 flex flex-col items-center text-center transition-all duration-500 group-hover:-translate-y-3 group-hover:bg-white/[0.08]">
                
                {/* Floating Meta Icon */}
                <div className="mb-10 relative">
                  <div className="absolute -inset-4 bg-brand-accent/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative p-5 rounded-[1.5rem] bg-brand-base border border-white/20 text-brand-accent group-hover:bg-brand-neon group-hover:text-white group-hover:border-brand-neon transition-all duration-500 shadow-2xl">
                    {stat.icon}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-6xl lg:text-8xl font-heading font-black tracking-tighter text-white">
                    {stat.value}
                  </h4>
                  <div className="flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-brand-neon to-brand-accent rounded-full group-hover:w-32 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xl font-black text-white uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-brand-soft/50 text-sm font-medium leading-relaxed px-4">
                    {stat.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-6 right-8 w-2 h-2 rounded-full bg-brand-accent/30 animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Bottom Callout */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="relative glass p-12 rounded-[4rem] border-white/5 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 via-transparent to-brand-accent/5 opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl text-white font-medium leading-tight">
                  {t('stats.callout')}
                </p>
              </div>
              <a href="#contact" className="shrink-0 px-10 py-5 rounded-full bg-brand-neon hover:bg-brand-accent hover:text-brand-base transition-all font-black text-lg shadow-2xl">
                {t('stats.btn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;