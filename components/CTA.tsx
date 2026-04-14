import React from 'react';
import { useEvent } from '../EventContext';

const CTA: React.FC = () => {
  const { year } = useEvent();

  return (
    <section className="py-24 bg-gradient-to-b from-brand-base to-[#2A0E4A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold text-white animate-pulse">
            Şovun bir parçası olun.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Sponsor Card */}
          <a 
            href="#contact"
            className="group relative glass p-10 md:p-14 rounded-[3rem] border-brand-soft/20 overflow-hidden transition-all hover:border-brand-accent/50 hover:-translate-y-2 flex flex-col items-center justify-end min-h-[400px] text-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg className="w-64 h-64 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.97 0-1.92 1.41-3.32 3.27-3.7V3.25h2.67v1.83c1.37.22 2.72 1.05 3.01 2.94h-1.95c-.17-1.12-.9-1.67-2.34-1.67-1.71 0-2.22.84-2.22 1.45 0 .76.47 1.34 2.67 1.91 2.6 0.61 4.17 1.88 4.17 4.11 0 2.11-1.46 3.61-3.27 4.07z"/>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between items-center gap-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-brand-accent mb-6">Sponsor Ol</h3>
                <p className="text-lg md:text-xl text-brand-soft/80 leading-relaxed">
                  Markanızı Ankara'nın en dinamik kampüs kitlesiyle buluşturun. SMS'{year.substring(2)}'nın enerjisini paylaşarak görünürlüğünüzü zirveye taşıyın.
                </p>
              </div>
              <div className="px-10 py-5 rounded-full bg-brand-accent text-brand-base font-black text-xl shadow-[0_10px_30px_rgba(255,183,3,0.3)] group-hover:scale-105 transition-transform w-full">
                Hemen Başvur
              </div>
            </div>
          </a>

          {/* Speaker Card */}
          <a 
            href="#contact"
            className="group relative glass p-10 md:p-14 rounded-[3rem] border-brand-soft/20 overflow-hidden transition-all hover:border-brand-neon/50 hover:-translate-y-2 flex flex-col items-center justify-end min-h-[400px] text-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg className="w-64 h-64 text-brand-neon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between items-center gap-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-brand-neon mb-6">Konuğumuz Ol</h3>
                <p className="text-lg md:text-xl text-brand-soft/80 leading-relaxed">
                  Dijital dünyadaki deneyimlerinizi binlerce öğrenciyle paylaşın. Sahne enerjimize ortak olun, hikayenizi birlikte anlatalım.
                </p>
              </div>
              <div className="px-10 py-5 rounded-full bg-brand-neon text-white font-black text-xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform w-full">
                Sahnede Yer Al
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
