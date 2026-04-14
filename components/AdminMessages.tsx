
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  category: string;
  userAgent?: string;
  ipAddress?: string;
  createdAt: Timestamp;
}

const AdminMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Simple security check (Note: For real production, use Firebase Auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'sms2026admin') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Hatalı şifre!');
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(collection(db, 'SMS_Web'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-base flex items-center justify-center p-6">
        <div className="glass p-12 rounded-[3.5rem] border-white/10 w-full max-w-md text-center shadow-2xl">
          <h1 className="text-3xl font-heading font-black text-brand-accent mb-8 uppercase tracking-widest">Admin Girişi</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifreyi girin..."
              className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-neon transition-all text-white text-center text-xl"
            />
            {error && <p className="text-red-400 font-bold">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-brand-accent text-brand-base font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F041D] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-accent uppercase tracking-tighter">Mesaj <span className="text-white">Merkezi</span></h1>
            <p className="text-brand-soft/60 mt-2 font-bold uppercase tracking-widest text-xs">SMS'26 İletişim Formu Başvuruları</p>
          </div>
          <div className="glass px-8 py-4 rounded-3xl border-white/5 bg-white/5">
            <span className="text-brand-neon font-black text-2xl">{messages.length}</span>
            <span className="ml-3 text-white/40 font-bold uppercase tracking-widest text-xs">Toplam Mesaj</span>
          </div>
        </div>

        <div className="grid gap-6">
          {messages.length === 0 ? (
            <div className="glass p-20 rounded-[3rem] border-white/5 text-center">
              <p className="text-white/20 font-heading font-black text-2xl uppercase italic">Henüz mesaj gelmedi...</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-brand-accent/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 flex flex-col items-end gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10">{msg.ipAddress || 'Unknown IP'}</span>
                   <span className="text-[10px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10" title={msg.userAgent}>{msg.userAgent?.split(')')[0] + ')'}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${
                      msg.category === 'Sponsor Ol' ? 'bg-brand-accent text-brand-base' : 
                      msg.category === 'Konuk Ol' ? 'bg-brand-neon text-white' : 'bg-white/10 text-white'
                    }`}>
                      {msg.category}
                    </span>
                    <h3 className="text-2xl font-heading font-black text-white leading-tight">{msg.name}</h3>
                    <p className="text-brand-soft font-bold mt-1 mb-4 truncate" title={msg.email}>{msg.email}</p>
                    <time className="text-xs text-brand-neon bg-brand-neon/10 px-3 py-1 rounded-lg font-black tracking-widest">
                      {msg.createdAt?.toDate().toLocaleString('tr-TR')}
                    </time>
                  </div>
                  <div className="md:w-3/4 bg-white/5 p-8 rounded-3xl border border-white/5 relative">
                    <svg className="absolute top-4 left-4 w-8 h-8 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.899 15.191 16 16.5 16C17.808 16 19 16.899 19 18V21H14.017ZM14.017 21C12.709 21 11.5 19.899 11.5 18V15C11.5 13.899 12.709 13 14.017 13H19C20.308 13 21.5 13.899 21.5 15V21H14.017ZM5.017 21L5.017 18C5.017 16.899 6.191 16 7.5 16C8.808 16 10 16.899 10 18V21H5.017ZM5.017 21C3.709 21 2.5 19.899 2.5 18V15C2.5 13.899 3.709 13 5.017 13H10C11.308 13 12.5 13.899 12.5 15V21H5.017Z" />
                    </svg>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed italic whitespace-pre-wrap pl-4">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
