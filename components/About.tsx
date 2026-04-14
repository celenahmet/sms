
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-base relative scroll-mt-32">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-neon/5 blur-[120px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center border-brand-soft/20">
          <h2 className="text-brand-soft font-bold uppercase tracking-[0.2em] text-sm mb-6">Misyonumuz</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-extrabold mb-10 text-white">Gerçek Hikayelerin Buluşma Noktası</h3>
          <p className="text-xl md:text-2xl text-brand-soft/90 leading-relaxed mb-12">
            SMS, yaratıcıları ve öğrencileri sıcak, yüksek etkileşimli bir atmosferde bir araya getiren uzun soluklu bir kampüs geleneğidir. 
            Burada sadece başarı hikayeleri değil; denemeler, hatalar ve gerçek topluluk bağları konuşulur.
          </p>
          <div className="flex justify-center gap-6">
             <div className="w-16 h-1 bg-brand-accent rounded-full"></div>
             <div className="w-8 h-1 bg-brand-neon rounded-full"></div>
             <div className="w-4 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
