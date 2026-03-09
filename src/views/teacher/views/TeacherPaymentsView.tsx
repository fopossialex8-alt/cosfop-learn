import React from 'react';
import { 
  Wallet, 
  TrendingUp, 
  Download, 
  ArrowUpRight, 
  ArrowDownRight, 
  CreditCard, 
  Smartphone, 
  History,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Card, Button } from '../../../components/UI';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const REVENUE_DATA = [
  { name: 'Jan', value: 450000 },
  { name: 'Fév', value: 520000 },
  { name: 'Mar', value: 480000 },
  { name: 'Avr', value: 610000 },
  { name: 'Mai', value: 750000 },
  { name: 'Juin', value: 890000 },
];

interface PaymentsProps {
  theme: 'light' | 'dark';
}

export const TeacherPaymentsView = ({ theme }: PaymentsProps) => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Paiement & Revenus</h1>
          <p className="text-muted font-medium">Suivez vos gains et gérez vos méthodes de retrait.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" icon={History} className="border-ink/10 font-bold uppercase tracking-widest text-xs">Historique Retraits</Button>
          <Button icon={Wallet} className="font-bold uppercase tracking-widest text-xs">Demander un retrait</Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="p-8 bg-primary text-white border-none shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Solde disponible</p>
              <h3 className="text-3xl font-black">890,000 FCFA</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-white/80">
              <TrendingUp className="w-4 h-4" /> +24% ce mois
            </div>
          </div>
        </Card>

        <Card className="p-8 border-ink/5 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Revenus totaux</p>
            <h3 className="text-3xl font-black text-ink">4,250,000 FCFA</h3>
          </div>
          <p className="text-xs text-muted font-medium">Depuis le début de votre activité.</p>
        </Card>

        <Card className="p-8 border-ink/5 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 rounded-2xl flex items-center justify-center">
            <History className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Dernier retrait</p>
            <h3 className="text-3xl font-black text-ink">350,000 FCFA</h3>
          </div>
          <p className="text-xs text-muted font-medium">Effectué le 02 Mars 2026.</p>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="p-8 border-ink/5 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-ink">Évolution des Revenus</h3>
          <Button variant="ghost" size="sm" icon={Download} className="text-xs font-bold uppercase tracking-widest">Télécharger CSV</Button>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE_DATA}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#ffffff10' : '#00000005'} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} tickFormatter={(v) => `${v/1000}k`} />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff'
                }} 
              />
              <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Payment Methods */}
        <Card className="p-10 border-ink/5 shadow-sm space-y-8">
          <h3 className="text-xl font-bold text-ink">Méthodes de retrait</h3>
          <div className="space-y-4">
            {[
              { label: 'MTN Mobile Money', info: '+241 07 00 00 00', icon: Smartphone, color: 'text-amber-500', active: true },
              { label: 'Orange Money', info: '+241 06 00 00 00', icon: Smartphone, color: 'text-orange-500', active: false },
              { label: 'Virement Bancaire', info: 'BGFI Bank **** 4589', icon: CreditCard, color: 'text-blue-500', active: false },
            ].map((method, i) => (
              <div key={i} className={`p-6 rounded-[2rem] border transition-all flex items-center justify-between group cursor-pointer ${
                method.active ? 'bg-primary/5 border-primary' : 'bg-surface border-ink/5 hover:border-ink/20'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-ink">{method.label}</p>
                    <p className="text-xs text-muted font-medium">{method.info}</p>
                  </div>
                </div>
                {method.active && <CheckCircle2 className="w-6 h-6 text-primary" />}
              </div>
            ))}
            <Button variant="outline" className="w-full py-4 border-ink/10 font-black uppercase tracking-widest">Ajouter une méthode</Button>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card className="p-10 border-ink/5 shadow-sm space-y-8 overflow-hidden">
          <h3 className="text-xl font-bold text-ink">Transactions récentes</h3>
          <div className="space-y-4">
            {[
              { title: 'Vente : Mathématiques 3ème', amount: '+15,000', date: 'Aujourd\'hui, 12:45', status: 'success' },
              { title: 'Vente : Physique 4ème', amount: '+12,000', date: 'Aujourd\'hui, 10:30', status: 'success' },
              { title: 'Retrait : Mobile Money', amount: '-350,000', date: '02 Mars 2026', status: 'success' },
              { title: 'Vente : SVT 5ème', amount: '+8,000', date: '01 Mars 2026', status: 'pending' },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-surface rounded-2xl border border-ink/5 group hover:border-primary/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.amount.startsWith('+') ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'
                  }`}>
                    {tx.amount.startsWith('+') ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{tx.title}</p>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-black ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>{tx.amount} FCFA</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    {tx.status === 'success' ? <CheckCircle2 className="w-3 h-3 text-emerald-500" /> : <Clock className="w-3 h-3 text-amber-500" />}
                    <span className={`text-[9px] font-black uppercase tracking-widest ${tx.status === 'success' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {tx.status === 'success' ? 'Réussi' : 'En attente'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full py-2 text-xs font-bold text-primary hover:underline">Voir tout l'historique</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
