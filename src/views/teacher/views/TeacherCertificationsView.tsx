import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  CheckCircle2, 
  Clock, 
  MoreVertical,
  Users,
  FileText,
  Settings
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface CertificationsProps {
  theme: 'light' | 'dark';
}

export const TeacherCertificationsView = ({ theme }: CertificationsProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const MOCK_CERTIFICATES = [
    { id: '1', student: 'Marcelle Nguema', course: 'Mathématiques 3ème', date: '2026-02-15', score: '92%', status: 'generated' },
    { id: '2', student: 'Aïcha Koné', course: 'Français 6ème', date: '2026-01-10', score: '98%', status: 'generated' },
    { id: '3', student: 'Jean-Paul Mba', course: 'Physique-Chimie 4ème', date: 'En attente', score: '75%', status: 'pending' },
    { id: '4', student: 'Samuel Eto\'o', course: 'Mathématiques 3ème', date: 'En attente', score: '15%', status: 'failed' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Certifications</h1>
          <p className="text-muted font-medium">Gérez la délivrance des certificats de réussite à vos élèves.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" icon={Settings} className="border-ink/10 font-bold uppercase tracking-widest text-xs">Configurer Modèle</Button>
          <Button icon={Plus} className="font-bold uppercase tracking-widest text-xs">Attribuer Manuellement</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Certificats délivrés', value: '845', icon: Award, color: 'bg-emerald-500' },
          { label: 'En attente', value: '12', icon: Clock, color: 'bg-amber-500' },
          { label: 'Éligibles', value: '45', icon: Users, color: 'bg-blue-500' },
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
          <button className="px-6 py-2 rounded-xl text-xs font-bold bg-white shadow-sm text-primary">Tous les certificats</button>
          <button className="px-6 py-2 rounded-xl text-xs font-bold text-muted hover:text-ink transition-all">Générés</button>
          <button className="px-6 py-2 rounded-xl text-xs font-bold text-muted hover:text-ink transition-all">En attente</button>
        </div>

        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Rechercher un élève ou un cours..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-surface border border-ink/5 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Certificates List */}
      <Card className="border-ink/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-ink/5">
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Élève</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Cours</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Date de délivrance</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Score</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Statut</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {MOCK_CERTIFICATES.map((cert) => (
                <tr key={cert.id} className="hover:bg-ink/5 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="font-bold text-ink">{cert.student}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-ink">{cert.course}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs text-muted font-medium">{cert.date}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-sm font-black ${parseInt(cert.score) >= 50 ? 'text-emerald-600' : 'text-red-500'}`}>{cert.score}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      cert.status === 'generated' ? 'bg-emerald-500/10 text-emerald-600' : 
                      cert.status === 'pending' ? 'bg-amber-500/10 text-amber-600' : 'bg-red-500/10 text-red-600'
                    }`}>
                      {cert.status === 'generated' ? 'Généré' : cert.status === 'pending' ? 'En attente' : 'Échoué'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      {cert.status === 'generated' ? (
                        <button className="p-2 text-muted hover:text-primary transition-colors"><Download className="w-5 h-5" /></button>
                      ) : (
                        <button className="p-2 text-muted hover:text-primary transition-colors"><CheckCircle2 className="w-5 h-5" /></button>
                      )}
                      <button className="p-2 text-muted hover:text-primary transition-colors"><FileText className="w-5 h-5" /></button>
                      <button className="p-2 text-muted hover:text-ink transition-colors"><MoreVertical className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Certificate Template Preview */}
      <div className="grid lg:grid-cols-2 gap-10">
        <Card className="p-10 border-ink/5 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-ink">Modèle de certificat</h3>
          <p className="text-sm text-muted">Personnalisez l'apparence des certificats délivrés à vos élèves.</p>
          <div className="aspect-[1.4/1] bg-surface rounded-[2rem] border-2 border-dashed border-ink/10 flex flex-col items-center justify-center p-12 relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
            <Award className="w-16 h-16 text-primary mb-4" />
            <p className="text-xs font-black text-primary uppercase tracking-widest">Modifier le design</p>
          </div>
        </Card>

        <Card className="p-10 border-ink/5 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-ink">Conditions d'obtention</h3>
          <div className="space-y-4">
            {[
              { label: 'Score minimum au quiz final', value: '80%' },
              { label: 'Taux de complétion des vidéos', value: '100%' },
              { label: 'Exercices pratiques validés', value: 'Tous' },
            ].map((condition, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-surface rounded-2xl border border-ink/5">
                <span className="text-sm font-medium text-ink">{condition.label}</span>
                <span className="text-sm font-black text-primary">{condition.value}</span>
              </div>
            ))}
            <Button variant="outline" className="w-full py-4 border-ink/10 font-black uppercase tracking-widest">Modifier les conditions</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
