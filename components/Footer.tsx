import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 bg-brand-base border-t border-white/5 relative overflow-hidden">
      {/* Subtle corner light */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-neon/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-20 mb-20">
          {/* Column 1: Brand Logo */}
          <div className="flex flex-col gap-8">
            <a href="#" className="inline-block group">
              <img 
                src="/assets/acmhacettep.png" 
                alt="ACM Hacettepe Logo" 
                className="h-20 w-auto transition-transform group-hover:scale-105"
              />
            </a>
            <p className="text-brand-soft/50 text-base leading-relaxed max-w-sm font-medium">
              ACM Hacettepe tarafından düzenlenen SMS, dijital dünyayı kampüs enerjisiyle buluşturan prestijli bir vizyon etkinliğidir.
            </p>
          </div>

          {/* Column 2: Quick Menu */}
          <div>
            <h4 className="text-white font-black text-lg mb-10 uppercase tracking-widest">Hızlı Menü</h4>
            <div className="grid grid-cols-1 gap-5">
              <a href="#speakers" className="text-brand-soft/70 hover:text-brand-accent transition-all hover:translate-x-2 font-bold uppercase tracking-wider text-sm">Konuklar</a>
              <a href="#schedule" className="text-brand-soft/70 hover:text-brand-accent transition-all hover:translate-x-2 font-bold uppercase tracking-wider text-sm">Program</a>
              <a href="#sponsorship" className="text-brand-soft/70 hover:text-brand-accent transition-all hover:translate-x-2 font-bold uppercase tracking-wider text-sm">Sponsorluk</a>
              <a href="#contact" className="text-brand-soft/70 hover:text-brand-accent transition-all hover:translate-x-2 font-bold uppercase tracking-wider text-sm">İletişim</a>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h4 className="text-white font-black text-lg mb-10 uppercase tracking-widest">Bizi Takip Edin</h4>
            <div className="flex flex-wrap gap-4 mb-10">
              {/* Instagram */}
              <a href="https://instagram.com/acmhacettepe" target="_blank" rel="noreferrer" className="p-4 rounded-2xl glass hover:bg-brand-neon hover:text-white transition-all shadow-xl" title="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                </svg>
              </a>
              <a href="https://x.com/acmhacettepe" target="_blank" rel="noreferrer" className="p-4 rounded-2xl glass hover:bg-brand-neon hover:text-white transition-all shadow-xl" title="X">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/acmhacettepe" target="_blank" rel="noreferrer" className="p-4 rounded-2xl glass hover:bg-brand-neon hover:text-white transition-all shadow-xl" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://youtube.com/@acmhacettepe" target="_blank" rel="noreferrer" className="p-4 rounded-2xl glass hover:bg-brand-neon hover:text-white transition-all shadow-xl" title="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <p className="text-brand-soft/40 text-xs font-bold">
              Resmi kanallar: <a href="https://acmhacettepe.com" target="_blank" rel="noreferrer" className="underline hover:text-brand-accent">acmhacettepe.com</a>
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="font-black text-white/40 tracking-widest text-sm uppercase">
            © {currentYear} ACM HACETTEPE • SOSYAL MEDYA SÖYLEŞİLERİ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;