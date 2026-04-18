
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import * as XLSX from 'xlsx';

interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
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
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Fetch password from Firebase instead of hardcoding
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const { doc, getDoc } = await import('firebase/firestore');
      const adminDoc = await getDoc(doc(db, 'users', 'admin_config'));
      
      if (adminDoc.exists()) {
        const data = adminDoc.data();
        if (password === data.password) {
          setIsAuthenticated(true);
        } else {
          setError('Hatalı şifre!');
        }
      } else {
        setError('Admin yapılandırması bulunamadı! (Firestore "users/admin_config" dokümanı eksik)');
      }
    } catch (err: any) {
      setError(`Giriş hatası: ${err.message}`);
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
      setError('');
    }, (err) => {
      console.error("Firestore Admin Error:", err);
      setError(`Veri çekilemedi: ${err.message}`);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  const handleExport = () => {
    const exportData = filteredMessages.map(msg => ({
      'Tarih': msg.createdAt?.toDate().toLocaleString('tr-TR'),
      'Ad Soyad': msg.name,
      'E-Mail': msg.email,
      'Telefon': msg.phone || '-',
      'Kategori': msg.category,
      'Mesaj': msg.message,
      'IP Adresi': msg.ipAddress || '-',
      'Platform': msg.userAgent?.includes('Mac') ? 'macOS' : msg.userAgent?.includes('Win') ? 'Windows' : msg.userAgent?.includes('Android') ? 'Android' : msg.userAgent?.includes('iPhone') ? 'iPhone' : 'Cihaz'
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Mesajlar");
    XLSX.writeFile(wb, `SMS_Web_Mesajlari_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const filteredMessages = messages.filter(msg => {
    const matchesFilter = filter === 'all' || msg.category === filter;
    const matchesSearch = msg.name.toLowerCase().includes(search.toLowerCase()) || 
                         msg.email.toLowerCase().includes(search.toLowerCase()) ||
                         msg.message.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0F041D] flex items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent)]">
        <div className="glass p-12 rounded-[3.5rem] border-white/10 w-full max-w-md text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h1 className="text-3xl font-heading font-black text-brand-accent mb-8 uppercase tracking-widest relative z-10">Admin Panel</h1>
          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Giriş anahtarı..."
              className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-all text-white text-center text-xl placeholder:text-white/20"
            />
            {error && <p className="text-red-400 font-bold bg-red-400/10 py-3 rounded-2xl border border-red-400/20">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-brand-accent text-brand-base font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,183,3,0.3)]"
            >
              GİRİŞ YAP
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F041D] text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent font-black text-[10px] uppercase tracking-widest border border-brand-accent/20">Dashboard v2.0</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter">MESAJ <span className="text-brand-accent">MERKEZİ</span></h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
               <input 
                type="text"
                placeholder="Mesajlarda ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-2xl px-12 py-4 focus:outline-none focus:border-brand-accent transition-all w-full md:w-80 text-sm placeholder:text-white/20"
               />
               <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
            
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-all text-sm cursor-pointer hover:bg-white/10"
            >
              <option value="all" className="bg-[#0F041D]">Tüm Kategoriler</option>
              <option value="Genel İletişim" className="bg-[#0F041D]">Genel İletişim</option>
              <option value="Sponsor Ol" className="bg-[#0F041D]">Sponsor Ol</option>
              <option value="Konuk Ol" className="bg-[#0F041D]">Konuk Ol</option>
              <option value="Geri Bildirim" className="bg-[#0F041D]">Geri Bildirim</option>
              <option value="Diğer" className="bg-[#0F041D]">Diğer</option>
            </select>

            <button 
              onClick={handleExport}
              className="bg-green-600/20 text-green-400 border border-green-600/30 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              XLSX İNDİR
            </button>

            <div className="glass px-8 py-4 rounded-2xl border-white/5 bg-white/5 flex items-center gap-4 group hover:border-brand-neon/20 transition-all">
              <div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></div>
              <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Canlı</span>
              <span className="text-2xl font-black text-white">{filteredMessages.length}</span>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="glass rounded-[2rem] border-white/5 overflow-hidden shadow-2xl relative">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/5">
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest">Tarih</th>
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest">Gönderen</th>
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest">Mail Adresi</th>
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest">Telefon</th>
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest">Kategori</th>
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest w-1/4">Mesaj</th>
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest">IPv4 ADRESİ</th>
                  <th className="px-6 py-6 text-brand-soft/40 font-black uppercase text-[10px] tracking-widest">Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-brand-neon">{msg.createdAt?.toDate().toLocaleDateString('tr-TR')}</span>
                          <span className="text-[10px] font-bold text-white/30">{msg.createdAt?.toDate().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm font-heading font-black text-white group-hover:text-brand-accent transition-colors">{msg.name}</span>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-xs text-brand-soft/60 font-medium">{msg.email}</span>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-xs text-white/50 font-mono tracking-tighter">{msg.phone || '-'}</span>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`inline-block px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] ${
                          msg.category === 'Sponsor Ol' ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20' : 
                          msg.category === 'Konuk Ol' ? 'bg-brand-neon/10 text-brand-neon border border-brand-neon/20' : 
                          'bg-white/5 text-white/60 border border-white/10'
                        }`}>
                          {msg.category}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="max-h-24 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10">
                          <p className="text-sm text-white/80 leading-relaxed italic line-clamp-3 hover:line-clamp-none transition-all">
                            "{msg.message}"
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-[11px] font-black bg-white/10 px-2.5 py-1.5 rounded-md border border-white/10 text-white/70 tracking-tight">{msg.ipAddress || '0.0.0.0'}</span>
                      </td>
                      <td className="px-6 py-6 border-l border-white/5">
                        <span className="text-[11px] font-black text-white/70 tracking-widest" title={msg.userAgent}>
                          {msg.userAgent?.includes('Mac') ? 'macOS' : msg.userAgent?.includes('Win') ? 'Windows' : msg.userAgent?.includes('Android') ? 'Android' : msg.userAgent?.includes('iPhone') ? 'iPhone' : 'Cihaz'}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-8 py-32 text-center">
                      <div className="flex flex-col items-center">
                        <p className="text-white/10 font-heading font-black text-3xl uppercase tracking-tighter italic mb-4">Veri Bulunamadı</p>
                        <p className="text-brand-soft/40 text-xs font-bold uppercase tracking-widest">Arama kriterlerinizi değiştirin veya yeni mesaj bekleyin.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] -z-10 rounded-full animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-brand-neon/5 blur-[150px] -z-10 rounded-full"></div>
    </div>
  );
};

export default AdminMessages;
