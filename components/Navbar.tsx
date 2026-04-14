
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { useEvent } from '../EventContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { year, setYear } = useEvent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventMenuOpen, setIsEventMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.speakers'), href: '#speakers' },
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.sponsorship'), href: '#sponsorship' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsMobileMenuOpen(false);
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img 
            src="/assets/smslogo.png" 
            alt="SMS Logo" 
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-black uppercase tracking-[0.2em] text-white/80 hover:text-brand-accent transition-all hover:-translate-y-0.5"
            >
              {link.name}
            </a>
          ))}

          {/* SMS Dropdown Desktop */}
          <div className="relative group" onMouseEnter={() => setIsEventMenuOpen(true)} onMouseLeave={() => setIsEventMenuOpen(false)}>
            <button className="flex items-center gap-1 text-xs font-black uppercase tracking-[0.2em] text-white/80 hover:text-brand-accent transition-all hover:-translate-y-0.5 py-4">
              SMS
              <svg className="w-3 h-3 transition-transform duration-200" style={{ transform: isEventMenuOpen ? 'rotate(180deg)' : 'none' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-32 transition-all duration-200 ${isEventMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <div className="glass rounded-xl border border-white/10 py-2 overflow-hidden shadow-2xl">
                <button 
                  onClick={() => setYear('2026')}
                  className={`block w-full text-center px-4 py-3 text-[10px] font-black tracking-widest transition-colors ${year === '2026' ? 'text-brand-accent bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                >
                  SMS'26
                </button>
                <button 
                  onClick={() => setYear('2024')}
                  className={`block w-full text-center px-4 py-3 text-[10px] font-black tracking-widest transition-colors ${year === '2024' ? 'text-brand-accent bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                >
                  SMS'24
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 ml-4 pl-8 border-l border-white/10">
            <button 
              onClick={() => setLanguage('tr')}
              className={`text-[10px] font-black uppercase tracking-widest transition-all ${language === 'tr' ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}
            >
              TR
            </button>
            <span className="text-white/10 text-[10px]">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-black uppercase tracking-widest transition-all ${language === 'en' ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>

        <button 
          className="md:hidden text-white focus:outline-none p-2 rounded-xl glass"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <div className={`fixed inset-0 bg-brand-base/98 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-2xl font-black uppercase tracking-widest text-white hover:text-brand-accent transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          
          {/* SMS Selector Mobile */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <span className="text-sm font-black uppercase tracking-widest text-white/40">Etkinlik Seçimi</span>
            <div className="flex gap-4">
              <button 
                onClick={() => { setYear('2026'); setIsMobileMenuOpen(false); }}
                className={`text-xl font-black tracking-widest ${year === '2026' ? 'text-brand-accent' : 'text-white'}`}
              >
                SMS'26
              </button>
              <button 
                onClick={() => { setYear('2024'); setIsMobileMenuOpen(false); }}
                className={`text-xl font-black tracking-widest ${year === '2024' ? 'text-brand-accent' : 'text-white'}`}
              >
                SMS'24
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <button onClick={() => { setLanguage('tr'); setIsMobileMenuOpen(false); }} className={`text-xl font-black ${language === 'tr' ? 'text-brand-accent' : 'text-white/40'}`}>TR</button>
            <button onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }} className={`text-xl font-black ${language === 'en' ? 'text-brand-accent' : 'text-white/40'}`}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
