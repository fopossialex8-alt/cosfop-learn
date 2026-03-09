import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MessageSquare, 
  Award, 
  TrendingUp, 
  ChevronRight, 
  MoreVertical,
  Mail,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface MyStudentsProps {
  theme: 'light' | 'dark';
}

export const MyStudentsView = ({ theme }: MyStudentsProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const MOCK_STUDENTS = [
    { id: '1', name: 'Marcelle Nguema', course: 'Mathématiques 3ème', progress: 85, joinedAt: '2026-02-15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcelle' },
    { id: '2', name: 'Jean-Paul Mba', course: 'Physique-Chimie 4ème', progress: 42, joinedAt: '2026-03-01', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean' },
    { id: '3', name: 'Aïcha Koné', course: 'Français 6ème', progress: 100, joinedAt: '2026-01-10', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aicha' },
    { id: '4', name: 'Samuel Eto\'o', course: 'Mathématiques 3ème', progress: 15, joinedAt: '2026-03-05', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel' },
    { id: '5', name: 'Marie-Claire Ondo', course: 'SVT 5ème', progress: 68, joinedAt: '2026-02-20', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie' },
  ];

  const filteredStudents = MOCK_STUDENTS.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Mes Élèves</h1>
          <p className="text-muted font-medium">Suivez la progression de vos élèves et interagissez avec eux.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" icon={Mail} className="border-ink/10 font-bold uppercase tracking-widest text-xs">Message de groupe</Button>
          <Button icon={Award} className="font-bold uppercase tracking-widest text-xs">Attribuer Certificat</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Élèves actifs', value: '1,284', icon: Users, color: 'bg-blue-500' },
          { label: 'Taux de complétion', value: '68%', icon: CheckCircle2, color: 'bg-emerald-500' },
          { label: 'Nouveaux ce mois', value: '+156', icon: TrendingUp, color: 'bg-indigo-500' },
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

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex bg-surface p-1 rounded-2xl border border-ink/5 w-full md:w-auto">
          <button className="px-6 py-2 rounded-xl text-xs font-bold bg-white shadow-sm text-primary">Tous les élèves</button>
          <button className="px-6 py-2 rounded-xl text-xs font-bold text-muted hover:text-ink transition-all">Par cours</button>
          <button className="px-6 py-2 rounded-xl text-xs font-bold text-muted hover:text-ink transition-all">Par progression</button>
        </div>

        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Rechercher un élève..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-surface border border-ink/5 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Students List */}
      <Card className="border-ink/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-ink/5">
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Élève</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Cours inscrit</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Progression</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Date inscription</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-ink/5 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={student.avatar} className="w-10 h-10 rounded-xl border border-ink/5" alt={student.name} />
                      <p className="font-bold text-ink">{student.name}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-ink">{student.course}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-ink/5 rounded-full overflow-hidden min-w-[100px]">
                        <div className={`h-full ${student.progress === 100 ? 'bg-emerald-500' : 'bg-primary'} transition-all`} style={{ width: `${student.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-ink">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-xs text-muted font-medium">
                      <Calendar className="w-3 h-3" /> {student.joinedAt}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-muted hover:text-primary transition-colors"><MessageSquare className="w-5 h-5" /></button>
                      <button className="p-2 text-muted hover:text-primary transition-colors"><TrendingUp className="w-5 h-5" /></button>
                      <button className="p-2 text-muted hover:text-primary transition-colors"><Award className="w-5 h-5" /></button>
                      <button className="p-2 text-muted hover:text-ink transition-colors"><MoreVertical className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
