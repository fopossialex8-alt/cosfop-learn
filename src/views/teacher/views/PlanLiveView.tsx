import React, { useState } from 'react';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Plus, 
  MoreVertical, 
  Play, 
  Edit, 
  XCircle,
  Monitor,
  MessageSquare,
  Layout
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface PlanLiveProps {
  theme: 'light' | 'dark';
}

export const PlanLiveView = ({ theme }: PlanLiveProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const MOCK_LIVES = [
    { id: '1', title: 'Révisions BEPC - Mathématiques', date: '2026-03-15', time: '16:00', duration: '90 min', students: 124, status: 'scheduled' },
    { id: '2', title: 'TP Physique : Électricité', date: '2026-03-18', time: '10:30', duration: '60 min', students: 85, status: 'scheduled' },
    { id: '3', title: 'Q&A Orientation Scolaire', date: '2026-03-20', time: '14:00', duration: '45 min', students: 210, status: 'scheduled' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Planifier Live</h1>
          <p className="text-muted font-medium">Créez des sessions en direct interactives avec vos élèves.</p>
        </div>
        <Button 
          onClick={() => setShowCreateModal(true)}
          icon={Plus}
          className="font-black uppercase tracking-widest py-4 px-8"
        >
          Programmer un Live
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Salle Live Intégrée', icon: Video, color: 'bg-blue-500' },
          { label: 'Chat en Direct', icon: MessageSquare, color: 'bg-emerald-500' },
          { label: 'Partage d\'Écran', icon: Monitor, color: 'bg-indigo-500' },
          { label: 'Tableau Blanc', icon: Layout, color: 'bg-amber-500' },
        ].map((feature, i) => (
          <Card key={i} className="p-6 border-ink/5 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-ink">{feature.label}</p>
          </Card>
        ))}
      </div>

      {/* Upcoming Lives Table */}
      <Card className="border-ink/5 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-ink/5">
          <h3 className="text-xl font-bold text-ink">Sessions programmées</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-ink/5">
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Titre du Live</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Date & Heure</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Durée</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Inscrits</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {MOCK_LIVES.map((live) => (
                <tr key={live.id} className="hover:bg-ink/5 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="font-bold text-ink">{live.title}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-sm font-bold text-ink">
                        <Calendar className="w-4 h-4 text-primary" /> {live.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted font-medium mt-1">
                        <Clock className="w-3 h-3" /> {live.time}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-ink/5 rounded-lg text-xs font-bold text-muted">{live.duration}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted" />
                      <span className="text-sm font-bold text-ink">{live.students}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <Button size="sm" icon={Play} className="h-9 px-4 text-[10px] font-black uppercase tracking-widest">Démarrer</Button>
                      <button className="p-2 text-muted hover:text-primary transition-colors"><Edit className="w-5 h-5" /></button>
                      <button className="p-2 text-muted hover:text-red-500 transition-colors"><XCircle className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Create Live Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setShowCreateModal(false)}></div>
          <Card className="relative w-full max-w-xl bg-surface rounded-[2.5rem] shadow-2xl p-10">
            <button onClick={() => setShowCreateModal(false)} className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-xl"><XCircle className="w-6 h-6" /></button>
            <h2 className="text-2xl font-black text-ink mb-8">Programmer un Live</h2>
            <div className="space-y-6">
              <Input label="Titre de la session" placeholder="ex: Révisions de Mathématiques" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Date" type="date" />
                <Input label="Heure" type="time" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Durée (minutes)" type="number" placeholder="60" />
                <div className="space-y-2">
                  <label className="text-xs font-black text-muted uppercase tracking-widest">Cours associé</label>
                  <select className="w-full px-4 py-3 rounded-2xl bg-background border border-ink/5 outline-none focus:border-primary transition-all text-sm font-bold">
                    <option>Mathématiques 3ème</option>
                    <option>Physique-Chimie 4ème</option>
                  </select>
                </div>
              </div>
              <Button onClick={() => setShowCreateModal(false)} className="w-full font-black uppercase tracking-widest py-4">Confirmer la planification</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
