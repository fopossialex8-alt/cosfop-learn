import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle2, 
  BookOpen,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter
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
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const ENGAGEMENT_DATA = [
  { name: 'Lun', value: 65 },
  { name: 'Mar', value: 72 },
  { name: 'Mer', value: 85 },
  { name: 'Jeu', value: 78 },
  { name: 'Ven', value: 92 },
  { name: 'Sam', value: 45 },
  { name: 'Dim', value: 38 },
];

const COMPLETION_DATA = [
  { name: 'Maths 3ème', value: 85 },
  { name: 'Physique 4ème', value: 62 },
  { name: 'Français 6ème', value: 94 },
  { name: 'SVT 5ème', value: 71 },
];

const DEVICE_DATA = [
  { name: 'Mobile', value: 65, color: '#2563eb' },
  { name: 'Desktop', value: 25, color: '#f59e0b' },
  { name: 'Tablet', value: 10, color: '#10b981' },
];

interface StatisticsProps {
  theme: 'light' | 'dark';
}

export const TeacherStatisticsView = ({ theme }: StatisticsProps) => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Statistiques Avancées</h1>
          <p className="text-muted font-medium">Analysez les performances de vos cours et l'engagement de vos élèves.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" icon={Filter} className="border-ink/10 font-bold uppercase tracking-widest text-xs">Filtrer par cours</Button>
          <Button icon={Download} className="font-bold uppercase tracking-widest text-xs">Exporter Rapport</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Taux de complétion', value: '74.2%', trend: '+5.4%', up: true, icon: CheckCircle2, color: 'bg-emerald-500' },
          { label: 'Engagement moyen', value: '82%', trend: '+12%', up: true, icon: TrendingUp, color: 'bg-blue-500' },
          { label: 'Heures visionnées', value: '1,450h', trend: '-2.1%', up: false, icon: Clock, color: 'bg-indigo-500' },
          { label: 'Nouveaux élèves', value: '156', trend: '+18%', up: true, icon: Users, color: 'bg-amber-500' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-ink/5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg ${stat.up ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </div>
            </div>
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-ink">{stat.value}</h3>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Engagement Chart */}
        <Card className="p-8 border-ink/5 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-ink">Engagement Hebdomadaire (%)</h3>
            <select className="bg-ink/5 border-none rounded-xl px-4 py-2 text-xs font-bold outline-none">
              <option>Cette semaine</option>
              <option>Semaine dernière</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ENGAGEMENT_DATA}>
                <defs>
                  <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#ffffff10' : '#00000005'} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff'
                  }} 
                />
                <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorEngagement)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Completion by Course */}
        <Card className="p-8 border-ink/5 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-ink">Taux de complétion par cours</h3>
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMPLETION_DATA} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={theme === 'dark' ? '#ffffff10' : '#00000005'} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} 
                  width={100}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff'
                  }} 
                />
                <Bar dataKey="value" fill="#10b981" radius={[0, 6, 6, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Device Distribution */}
        <Card className="p-8 border-ink/5 shadow-sm">
          <h3 className="text-xl font-bold text-ink mb-8">Appareils utilisés</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DEVICE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {DEVICE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-3">
            {DEVICE_DATA.map((device) => (
              <div key={device.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.color }}></div>
                  <span className="text-xs font-bold text-ink">{device.name}</span>
                </div>
                <span className="text-xs font-black text-muted">{device.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Popular Courses Table */}
        <Card className="lg:col-span-2 p-8 border-ink/5 shadow-sm overflow-hidden">
          <h3 className="text-xl font-bold text-ink mb-8">Performances par cours</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-ink/5">
                  <th className="pb-4 text-[10px] font-black text-muted uppercase tracking-widest">Cours</th>
                  <th className="pb-4 text-[10px] font-black text-muted uppercase tracking-widest text-center">Inscriptions</th>
                  <th className="pb-4 text-[10px] font-black text-muted uppercase tracking-widest text-center">Revenus</th>
                  <th className="pb-4 text-[10px] font-black text-muted uppercase tracking-widest text-center">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {[
                  { title: 'Mathématiques 3ème', students: 450, revenue: '2.5M', rating: 4.8 },
                  { title: 'Physique 4ème', students: 320, revenue: '1.8M', rating: 4.9 },
                  { title: 'Français 6ème', students: 280, revenue: '1.2M', rating: 4.7 },
                  { title: 'SVT 5ème', students: 150, revenue: '800k', rating: 4.5 },
                ].map((course, i) => (
                  <tr key={i} className="group hover:bg-ink/5 transition-colors">
                    <td className="py-4">
                      <p className="text-sm font-bold text-ink">{course.title}</p>
                    </td>
                    <td className="py-4 text-center">
                      <span className="text-sm font-bold text-ink">{course.students}</span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="text-sm font-black text-primary">{course.revenue}</span>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-sm font-bold text-ink">{course.rating}</span>
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
