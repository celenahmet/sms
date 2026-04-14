
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', category: 'Genel İletişim' });
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      // Get browser/device info
      const userAgent = window.navigator.userAgent;
      
      // Get IPv4 address
      let ipAddress = 'unknown';
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        ipAddress = data.ip;
      } catch (ipError) {
        console.warn('Could not fetch IP address', ipError);
      }

      await addDoc(collection(db, 'SMS_Web'), {
        type: 'contact_form_submission',
        category: formData.category,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        userAgent: userAgent,
        ipAddress: ipAddress,
        createdAt: serverTimestamp(),
      });
      setShowToast(true);
      setFormData({ name: '', email: '', phone: '', message: '', category: 'Genel İletişim' });
      setTimeout(() => setShowToast(false), 3000);
    } catch (error: any) {
      console.error("Firebase Error details: ", error);
      alert(`Bir hata oluştu: ${error.message}\n(Not: Firestore veritabanı kuralları "yazma" erişimine kapalı olabilir, projenin Rules sekmesinden erişim iznini "allow read, write: if true;" yapmayı unutmayın.)`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-base overflow-hidden relative border-t border-white/5 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="flex flex-col justify-between py-6">
            <div>
              <h2 className="text-brand-accent font-black uppercase tracking-[0.2em] text-4xl md:text-6xl mb-6">{t('contact.title')}</h2>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white/60 mb-10">{t('contact.subtitle')}</h3>
              <p className="text-xl text-brand-soft/80 mb-12 max-w-lg leading-relaxed">{t('contact.desc')}</p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="p-6 rounded-3xl glass text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-base transition-all duration-500 shadow-xl">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-brand-soft text-sm font-bold uppercase tracking-[0.3em] mb-2">{t('contact.email_label')}</h4>
                  <a href="mailto:iletisim@acmhacettepe.com" className="text-2xl md:text-3xl font-black hover:text-brand-accent transition-colors">iletisim@acmhacettepe.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-14 rounded-[3.5rem] border-white/10 shadow-2xl relative flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brand-soft text-xs font-black uppercase mb-3 tracking-widest">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-neon transition-all text-white placeholder:text-white/20 hover:bg-white/10" 
                    placeholder={t('contact.form.name_ph')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-brand-soft text-xs font-black uppercase mb-3 tracking-widest">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-neon transition-all text-white placeholder:text-white/20 hover:bg-white/10" 
                    placeholder={t('contact.form.email_ph')}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brand-soft text-xs font-black uppercase mb-3 tracking-widest">{t('contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-neon transition-all text-white placeholder:text-white/20 hover:bg-white/10" 
                    placeholder={t('contact.form.phone_ph')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-brand-soft text-xs font-black uppercase mb-3 tracking-widest">{t('contact.form.category')}</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-neon transition-all text-white hover:bg-white/10 appearance-none cursor-pointer"
                  >
                    <option value="Genel İletişim" className="bg-[#1A0B2E] text-white">{t('contact.category.general')}</option>
                    <option value="Konuk Ol" className="bg-[#1A0B2E] text-white">{t('contact.category.guest')}</option>
                    <option value="Sponsor Ol" className="bg-[#1A0B2E] text-white">{t('contact.category.sponsor')}</option>
                    <option value="Geri Bildirim" className="bg-[#1A0B2E] text-white">{t('contact.category.feedback')}</option>
                    <option value="İstek / Görüş" className="bg-[#1A0B2E] text-white">{t('contact.category.request')}</option>
                    <option value="Diğer" className="bg-[#1A0B2E] text-white">{t('contact.category.other')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-brand-soft text-xs font-black uppercase mb-3 tracking-widest">{t('contact.form.message')}</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-neon transition-all text-white placeholder:text-white/20 resize-none hover:bg-white/10" 
                  placeholder={t('contact.form.message_ph')}
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-6 rounded-2xl transition-all font-black text-xl shadow-[0_15px_35px_rgba(124,58,237,0.4)]  ${isSubmitting ? 'bg-brand-neon/50 cursor-not-allowed' : 'bg-brand-neon hover:bg-brand-accent hover:text-brand-base hover:-translate-y-1'}`}
              >
                {isSubmitting ? 'Gönderiliyor...' : t('contact.form.btn')}
              </button>
            </form>

            {showToast && (
              <div className="absolute inset-0 flex items-center justify-center glass rounded-[3.5rem] bg-brand-base/90 z-20 animate-fadeIn">
                <div className="text-center p-12">
                  <h4 className="text-2xl font-bold text-white mb-2">{t('contact.success')}</h4>
                  <p className="text-brand-soft/60">{t('contact.success_desc')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
