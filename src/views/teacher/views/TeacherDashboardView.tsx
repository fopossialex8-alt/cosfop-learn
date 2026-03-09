import React from 'react';
import { 
  Users, 
  Wallet, 
  BookOpen, 
  Video, 
  TrendingUp, 
  Star, 
  MessageSquare, 
  ArrowUpRight,
  ChevronRight,
  Play
} from 'lucide-react';
import { Card, Button } from '../../../components/UI';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { TeacherSubView, User } from '../../../types';

const REVENUE_DATA = [
  { name: 'Jan', value: 450000 },
  { name: 'Fév', value: 520000 },
  { name: 'Mar', value: 480000 },
  { name: 'Avr', value: 610000 },
  { name: 'Mai', value: 750000 },
  { name: 'Juin', value: 890000 },
];

const ENROLLMENT_DATA = [
  { name: 'Lun', value: 12 },
  { name: 'Mar', value: 18 },
  { name: 'Mer', value: 15 },
  { name: 'Jeu', value: 25 },
  { name: 'Ven', value: 20 },
  { name: 'Sam', value: 35 },
  { name: 'Dim', value: 42 },
];

interface DashboardProps {
  user: User;
  onNavigate: (view: TeacherSubView) => void;
  theme: 'light' | 'dark';
}

export const TeacherDashboardView = ({ user, onNavigate, theme }: DashboardProps) => {
  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-black text-ink mb-2">Bonjour, {user.name.split(' ')[0]} 👋</h1>
          <p className="text-muted font-medium">Voici ce qui se passe sur votre plateforme aujourd'hui.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={() => onNavigate('plan_live')}
            variant="outline" 
            icon={Video}
            className="border-ink/10 font-bold uppercase tracking-widest text-xs"
          >
            Planifier Live
          </Button>
          <Button 
            onClick={() => onNavigate('create_course')}
            icon={PlusCircle}
            className="font-bold uppercase tracking-widest text-xs"
          >
            Nouveau Cours
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Élèves totaux', value: '1,284', icon: Users, color: 'bg-blue-500', trend: '+12%' },
          { label: 'Revenus (FCFA)', value: '890,000', icon: Wallet, color: 'bg-emerald-500', trend: '+24%' },
          { label: 'Cours actifs', value: '8', icon: BookOpen, color: 'bg-indigo-500', trend: '0%' },
          { label: 'Lives prévus', value: '3', icon: Video, color: 'bg-red-500', trend: '+2' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-ink/5 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-600' : 'bg-ink/5 text-muted'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-ink">{stat.value}</h3>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8 border-ink/5 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-ink">Évolution des Revenus</h3>
              <p className="text-xs text-muted font-medium">Performance financière des 6 derniers mois</p>
            </div>
            <select className="bg-ink/5 border-none rounded-xl px-4 py-2 text-xs font-bold outline-none">
              <option>6 derniers mois</option>
              <option>Année complète</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#ffffff10' : '#00000005'} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }}
                  tickFormatter={(value) => `${value/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2563eb" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-8 border-ink/5 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-ink">Inscriptions</h3>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ENROLLMENT_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#ffffff10' : '#00000005'} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} 
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff'
                  }} 
                />
                <Bar 
                  dataKey="value" 
                  fill="#f59e0b" 
                  radius={[6, 6, 0, 0]} 
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Record battu !</p>
            <p className="text-sm text-ink font-medium">+35% d'inscriptions cette semaine par rapport à la précédente.</p>
          </div>
        </Card>
      </div>

      {/* Bottom Grid: Activity & Lives */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-ink">Activité Récente</h3>
            <button className="text-sm font-bold text-primary hover:underline">Voir tout</button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'enroll', user: 'Marcelle Nguema', content: 's\'est inscrite à "Mathématiques 3ème"', time: 'Il y a 12 min', icon: Users, color: 'text-blue-500' },
              { type: 'review', user: 'Jean-Paul Mba', content: 'a laissé une note de 5/5 sur "Physique-Chimie"', time: 'Il y a 45 min', icon: Star, color: 'text-amber-500' },
              { type: 'question', user: 'Aïcha Koné', content: 'a posé une question dans le module 3', time: 'Il y a 2h', icon: MessageSquare, color: 'text-indigo-500' },
            ].map((activity, i) => (
              <div key={i} className="bg-surface p-5 rounded-[2rem] border border-ink/5 flex items-center justify-between group hover:border-primary/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-ink/5 rounded-2xl flex items-center justify-center ${activity.color}`}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{activity.user} <span className="font-medium text-muted">{activity.content}</span></p>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">{activity.time}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Lives */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-ink">Prochains Lives</h3>
            <Video className="w-5 h-5 text-red-500" />
          </div>
          <div className="space-y-4">
            {[
              { title: 'Révisions BEPC - Maths', date: 'Aujourd\'hui', time: '16:00', students: 45 },
              { title: 'TP Chimie Organique', date: 'Demain', time: '10:30', students: 28 },
            ].map((live, i) => (
              <Card key={i} className="p-6 border-ink/5 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">{live.date} à {live.time}</p>
                </div>
                <h4 className="font-bold text-ink mb-2">{live.title}</h4>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted font-medium">{live.students} inscrits</p>
                  <Button size="sm" icon={Play} className="h-8 px-3 text-[10px] font-black uppercase tracking-widest">Rejoindre</Button>
                </div>
              </Card>
            ))}
            <Card className="p-6 border-dashed border-ink/10 bg-transparent flex flex-col items-center justify-center text-center space-y-3 hover:border-primary/40 transition-colors cursor-pointer group">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <PlusCircle className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-muted uppercase tracking-widest">Programmer un autre live</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Recommendations Banner */}
      <Card className="p-8 bg-indigo-600 text-white border-none shadow-xl shadow-indigo-600/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-black mb-2">Boostez vos revenus ce mois-ci ! 🚀</h3>
            <p className="text-indigo-100 font-medium">Nos données montrent que les cours avec des quiz hebdomadaires ont un taux de complétion 40% plus élevé. Ajoutez-en à votre cours de "Physique-Chimie".</p>
          </div>
          <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-50 font-black uppercase tracking-widest px-8 py-4">
            Appliquer le conseil
          </Button>
        </div>
      </Card>
    </div>
  );
};

const PlusCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
