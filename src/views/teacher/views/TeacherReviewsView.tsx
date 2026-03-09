import React, { useState } from 'react';
import { 
  Star, 
  Search, 
  Filter, 
  MessageSquare, 
  MoreVertical, 
  AlertCircle, 
  CheckCircle2,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface ReviewsProps {
  theme: 'light' | 'dark';
}

export const TeacherReviewsView = ({ theme }: ReviewsProps) => {
  const [filter, setFilter] = useState('all');

  const MOCK_REVIEWS = [
    { id: '1', student: 'Marcelle Nguema', course: 'Mathématiques 3ème', rating: 5, comment: 'Excellent cours ! Les explications sont très claires et les exercices sont progressifs. Je recommande vivement.', date: 'Il y a 2h', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcelle' },
    { id: '2', student: 'Jean-Paul Mba', course: 'Physique-Chimie 4ème', rating: 4, comment: 'Très bon cours dans l\'ensemble. J\'aurais aimé un peu plus d\'exemples sur la partie électricité.', date: 'Il y a 5h', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean' },
    { id: '3', student: 'Aïcha Koné', course: 'Français 6ème', rating: 5, comment: 'Merci Monsieur pour ce cours passionnant. J\'ai enfin compris comment structurer mes rédactions.', date: 'Hier', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aicha' },
    { id: '4', student: 'Samuel Eto\'o', course: 'Mathématiques 3ème', rating: 3, comment: 'Le son de la vidéo 4 est un peu faible, mais le contenu est top.', date: 'Il y a 2 jours', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Avis & Notes</h1>
          <p className="text-muted font-medium">Gérez votre réputation et interagissez avec les retours de vos élèves.</p>
        </div>
        <div className="flex items-center gap-4 bg-surface p-2 rounded-2xl border border-ink/5">
          <div className="flex items-center gap-2 px-4 border-r border-ink/10">
            <Star className="w-5 h-5 text-amber-500 fill-current" />
            <span className="text-xl font-black text-ink">4.8</span>
          </div>
          <div className="px-4">
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Note moyenne</p>
            <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +0.2 ce mois
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Summary */}
      <div className="grid lg:grid-cols-4 gap-8">
        <Card className="p-8 border-ink/5 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-ink">Répartition des notes</h3>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3">
                <span className="text-xs font-bold text-muted w-4">{star}</span>
                <Star className="w-3 h-3 text-amber-500 fill-current" />
                <div className="flex-1 h-2 bg-ink/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500" 
                    style={{ width: `${star === 5 ? 75 : star === 4 ? 15 : 5}%` }}
                  ></div>
                </div>
                <span className="text-[10px] font-bold text-muted w-8">{star === 5 ? '75%' : star === 4 ? '15%' : '5%'}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-ink/5">
            <p className="text-xs text-muted font-medium">Basé sur 1,245 avis vérifiés.</p>
          </div>
        </Card>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex bg-surface p-1 rounded-2xl border border-ink/5 w-full md:w-auto">
              {['Tous', '5 étoiles', '4 étoiles', 'Critiques'].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                    filter === t ? 'bg-white shadow-sm text-primary' : 'text-muted hover:text-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher un avis..." 
                className="w-full pl-11 pr-4 py-3 bg-surface border border-ink/5 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            {MOCK_REVIEWS.map((review) => (
              <Card key={review.id} className="p-8 border-ink/5 shadow-sm group hover:border-primary/20 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={review.avatar} className="w-12 h-12 rounded-2xl border border-ink/5" alt={review.student} />
                    <div>
                      <h4 className="font-bold text-ink">{review.student}</h4>
                      <p className="text-xs text-muted font-medium">{review.course}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-500 fill-current' : 'text-ink/10'}`} />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{review.date}</span>
                  </div>
                </div>
                <p className="text-sm text-ink font-medium leading-relaxed mb-6">"{review.comment}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-ink/5">
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" /> Répondre
                    </button>
                    <button className="text-xs font-bold text-muted hover:text-red-500 flex items-center gap-2 transition-colors">
                      <AlertCircle className="w-4 h-4" /> Signaler
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Achat vérifié</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full py-4 border-ink/10 font-black uppercase tracking-widest">Charger plus d'avis</Button>
        </div>
      </div>
    </div>
  );
};
