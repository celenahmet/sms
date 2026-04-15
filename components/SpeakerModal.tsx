
import React, { useEffect } from 'react';
import { Speaker } from '../types';
import { useLanguage } from '../LanguageContext';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!speaker) return null;

  const content = speaker[language];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-base/90 backdrop-blur-xl animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative w-full max-w-3xl glass rounded-[3rem] overflow-hidden shadow-2xl animate-scaleIn border border-white/10 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-3 rounded-full bg-brand-base/50 hover:bg-brand-neon transition-all text-white backdrop-blur-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative w-full h-56 sm:h-72 overflow-hidden flex-shrink-0 bg-black/60">
          <img src={speaker.image} alt={speaker.name} className="relative z-10 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-brand-base via-brand-base/60 to-transparent opacity-100"></div>
          
          <div className="absolute z-30 bottom-6 left-8 right-8 flex items-end justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-neon text-[10px] font-black uppercase tracking-widest mb-3">
                SMS’{speaker.id.startsWith('26') ? '26' : '24'} • {t('modal.day')} {speaker.day}
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter drop-shadow-lg">
                {speaker.name}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-10 custom-scrollbar">
          <div className="grid md:grid-cols-2 gap-4">
             {content.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors group">
                   <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-base transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                   </div>
                   <span className="text-sm font-black uppercase tracking-wider text-white">{h}</span>
                </div>
             ))}
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-neon to-transparent rounded-full opacity-50"></div>
            <h3 className="text-[10px] font-black text-brand-soft uppercase tracking-[0.4em] mb-4">{t('modal.about')}</h3>
            <p className="text-lg md:text-xl text-brand-soft/80 leading-relaxed font-medium">{content.bio}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-white/30 uppercase tracking-widest">{t('modal.links')}</span>
              <div className="flex gap-2">
                {speaker.socials.instagram && (
                   <a href={speaker.socials.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-xl glass hover:bg-brand-neon transition-all">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.254-.149-4.77-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                     </svg>
                   </a>
                )}
              </div>
            </div>
            <p className="text-brand-accent font-black tracking-tighter text-xl">{content.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
