import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Phone, 
  Search, 
  ChevronRight, 
  ExternalLink, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface SupportProps {
  theme: 'light' | 'dark';
}

export const TeacherSupportView = ({ theme }: SupportProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const MOCK_TICKETS = [
    { id: '1', subject: 'Problème d\'upload vidéo', category: 'Technique', date: 'Hier', status: 'resolved' },
    { id: '2', subject: 'Question sur les commissions', category: 'Paiement', date: '02 Mars', status: 'pending' },
    { id: '3', subject: 'Validation de mon diplôme', category: 'Profil', date: '28 Fév', status: 'resolved' },
  ];

  const FAQ_ITEMS = [
    { q: 'Comment retirer mes gains ?', a: 'Vous pouvez demander un retrait via Mobile Money ou virement bancaire dès que votre solde atteint 5,000 FCFA.' },
    { q: 'Quelle est la durée maximale d\'un Live ?', a: 'Les sessions lives peuvent durer jusqu\'à 3 heures par session.' },
    { q: 'Comment protéger mes vidéos ?', a: 'Toutes les vidéos sur CosFop sont cryptées et protégées contre le téléchargement non autorisé.' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Support Enseignant</h1>
          <p className="text-muted font-medium">Besoin d'aide ? Notre équipe est là pour vous accompagner.</p>
        </div>
        <Button icon={Plus} className="font-black uppercase tracking-widest py-4 px-8">Nouveau Ticket</Button>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Chat en Direct', info: 'Réponse en < 5 min', icon: MessageSquare, color: 'bg-emerald-500' },
          { label: 'Email Support', info: 'support@cosfop.com', icon: Mail, color: 'bg-blue-500' },
          { label: 'Assistance Téléphonique', info: '+241 07 00 00 00', icon: Phone, color: 'bg-indigo-500' },
        ].map((option, i) => (
          <Card key={i} className="p-8 border-ink/5 shadow-sm flex flex-col items-center text-center space-y-4 group hover:border-primary/20 transition-all cursor-pointer">
            <div className={`w-14 h-14 ${option.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
              <option.icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink">{option.label}</h3>
              <p className="text-xs text-muted font-medium">{option.info}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-ink">Foire Aux Questions</h3>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher une réponse..." 
                className="pl-11 pr-4 py-2 bg-surface border border-ink/5 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <Card key={i} className="p-6 border-ink/5 shadow-sm space-y-3 group cursor-pointer hover:bg-primary/5 transition-all">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink group-hover:text-primary transition-colors">{item.q}</h4>
                  <ChevronRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted font-medium leading-relaxed">{item.a}</p>
              </Card>
            ))}
            <Button variant="ghost" className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
              Voir toutes les questions <ExternalLink className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Recent Tickets */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-ink">Mes Tickets récents</h3>
          <div className="space-y-4">
            {MOCK_TICKETS.map((ticket) => (
              <Card key={ticket.id} className="p-6 border-ink/5 shadow-sm space-y-4 group hover:border-primary/20 transition-all">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-ink group-hover:text-primary transition-colors">{ticket.subject}</h4>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">{ticket.category} • {ticket.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                    ticket.status === 'resolved' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    {ticket.status === 'resolved' ? 'Résolu' : 'En cours'}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-ink/5">
                  <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Voir discussion</button>
                  {ticket.status === 'resolved' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Clock className="w-4 h-4 text-amber-500" />}
                </div>
              </Card>
            ))}
            <Button variant="outline" className="w-full py-4 border-ink/10 font-black uppercase tracking-widest">Voir tous mes tickets</Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <Card className="p-10 bg-surface border-ink/5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-ink">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-sm text-muted font-medium">Nos conseillers sont disponibles du Lundi au Vendredi de 8h à 18h.</p>
          </div>
        </div>
        <Button className="font-black uppercase tracking-widest px-10 py-4">Ouvrir une discussion</Button>
      </Card>
    </div>
  );
};
