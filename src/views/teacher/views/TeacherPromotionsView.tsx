import React, { useState } from 'react';
import { 
  Tag, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Percent,
  Copy,
  Trash2
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface PromotionsProps {
  theme: 'light' | 'dark';
}

export const TeacherPromotionsView = ({ theme }: PromotionsProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const MOCK_COUPONS = [
    { id: '1', code: 'REUSSITE2026', discount: '20%', duration: 'Jusqu\'au 31 Mars', uses: 45, impact: '+150k', status: 'active' },
    { id: '2', code: 'BIENVENUE', discount: '10%', duration: 'Illimité', uses: 124, impact: '+320k', status: 'active' },
    { id: '3', code: 'FLASH_SALE', discount: '50%', duration: 'Expiré', uses: 85, impact: '+450k', status: 'expired' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Promotions & Coupons</h1>
          <p className="text-muted font-medium">Créez des offres spéciales pour booster vos ventes.</p>
        </div>
        <Button 
          onClick={() => setShowCreateModal(true)}
          icon={Plus}
          className="font-black uppercase tracking-widest py-4 px-8"
        >
          Créer un coupon
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Utilisations totales', value: '254', icon: Tag, color: 'bg-blue-500' },
          { label: 'Revenus générés', value: '920,000 FCFA', icon: TrendingUp, color: 'bg-emerald-500' },
          { label: 'Coupons actifs', value: '2', icon: CheckCircle2, color: 'bg-indigo-500' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-ink/5 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-ink">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      {/* Coupons List */}
      <Card className="border-ink/5 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-ink/5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-ink">Mes coupons de réduction</h3>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher un code..." 
                className="pl-11 pr-4 py-2 bg-surface border border-ink/5 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-ink/5">
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Code Promo</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Réduction</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Durée</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest text-center">Utilisations</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest text-center">Impact</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Statut</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {MOCK_COUPONS.map((coupon) => (
                <tr key={coupon.id} className="hover:bg-ink/5 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-black border border-primary/20">
                        {coupon.code}
                      </div>
                      <button className="p-1 text-muted hover:text-primary transition-colors"><Copy className="w-3 h-3" /></button>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-sm font-black text-ink">
                      <Percent className="w-4 h-4 text-emerald-500" /> {coupon.discount}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-xs text-muted font-medium">
                      <Calendar className="w-3 h-3" /> {coupon.duration}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="text-sm font-bold text-ink">{coupon.uses}</span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="text-sm font-black text-emerald-600">{coupon.impact}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      coupon.status === 'active' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'
                    }`}>
                      {coupon.status === 'active' ? 'Actif' : 'Expiré'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-muted hover:text-primary transition-colors"><TrendingUp className="w-5 h-5" /></button>
                      <button className="p-2 text-muted hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                      <button className="p-2 text-muted hover:text-ink transition-colors"><MoreVertical className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Create Coupon Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setShowCreateModal(false)}></div>
          <Card className="relative w-full max-w-xl bg-surface rounded-[2.5rem] shadow-2xl p-10">
            <button onClick={() => setShowCreateModal(false)} className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-xl"><XCircle className="w-6 h-6" /></button>
            <h2 className="text-2xl font-black text-ink mb-8">Créer un coupon</h2>
            <div className="space-y-6">
              <Input label="Code Promo" placeholder="ex: REUSSITE2026" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Réduction (%)" type="number" placeholder="20" />
                <Input label="Date d'expiration" type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-muted uppercase tracking-widest">Cours applicables</label>
                <select className="w-full px-4 py-3 rounded-2xl bg-background border border-ink/5 outline-none focus:border-primary transition-all text-sm font-bold">
                  <option>Tous les cours</option>
                  <option>Mathématiques 3ème</option>
                  <option>Physique-Chimie 4ème</option>
                </select>
              </div>
              <Button onClick={() => setShowCreateModal(false)} className="w-full font-black uppercase tracking-widest py-4">Générer le coupon</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
