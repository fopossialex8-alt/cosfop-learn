import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Search, 
  Plus, 
  TrendingUp, 
  Download, 
  Calendar, 
  Star, 
  ArrowRight, 
  Heart,
  X,
  Send,
  MessageCircle
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';
import { GABON_COURSES } from '../../../data/mockData';
import { StudentSubView } from '../../../types';

export const ForumView = () => {
  const [selectedDiscussion, setSelectedDiscussion] = useState<any>(null);
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [discussions, setDiscussions] = useState([
    { id: 1, title: 'Comment résoudre les équations du second degré ?', author: 'Jean M.', date: 'Il y a 2h', category: 'Mathématiques', replies: 12, views: 45, content: 'Bonjour à tous, j\'ai un peu de mal avec la méthode du discriminant. Quelqu\'un pourrait m\'expliquer simplement ?', responses: [{ author: 'Prof. Obiang', content: "C'est une excellente question ! Le discriminant delta est égal à b² - 4ac. Si delta > 0, alors...", avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pro' }] },
    { id: 2, title: 'Les meilleurs supports pour le Brevet', author: 'Sarah L.', date: 'Il y a 5h', category: 'Général', replies: 8, views: 120, content: 'Quels sont les livres ou sites que vous recommandez pour réviser le brevet cette année ?', responses: [] },
    { id: 3, title: 'Problème avec le TP de Physique', author: 'Moussa B.', date: 'Hier', category: 'Physique', replies: 3, views: 32, content: 'Je ne comprends pas les résultats de l\'expérience sur la chute libre. À l\'aide !', responses: [] },
  ]);

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    
    const updatedDiscussions = discussions.map(d => {
      if (d.id === selectedDiscussion.id) {
        return {
          ...d,
          replies: d.replies + 1,
          responses: [...d.responses, { author: 'Moi', content: replyText, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me' }]
        };
      }
      return d;
    });

    setDiscussions(updatedDiscussions);
    setSelectedDiscussion(updatedDiscussions.find(d => d.id === selectedDiscussion.id));
    setReplyText('');
    alert('Réponse publiée !');
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-ink mb-2">Forum Étudiant</h1>
          <p className="text-muted font-medium">Échangez avec vos camarades et mentors du Gabon.</p>
        </div>
        <Button 
          onClick={() => setShowNewDiscussion(true)}
          icon={Plus} 
          className="font-bold uppercase tracking-widest"
        >
          Nouvelle Discussion
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {discussions.map(discussion => (
            <Card 
              key={discussion.id} 
              onClick={() => setSelectedDiscussion(discussion)}
              className="p-6 border-ink/5 shadow-sm hover:border-primary/20 transition-all cursor-pointer group"
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2">
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors"><TrendingUp className="w-5 h-5 text-muted group-hover:text-primary" /></button>
                  <span className="font-black text-ink">{discussion.views}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${discussion.author}`} className="w-6 h-6 rounded-full" alt="User" />
                    <span className="text-xs font-bold text-muted">Posté par {discussion.author} • {discussion.date}</span>
                    <span className="px-2 py-0.5 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-widest rounded">{discussion.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-primary transition-colors">{discussion.title}</h3>
                  <p className="text-sm text-muted line-clamp-2 mb-4">{discussion.content}</p>
                  <div className="flex items-center gap-6 text-muted">
                    <div className="flex items-center gap-2 text-xs font-bold"><MessageSquare className="w-4 h-4" /> {discussion.replies} réponses</div>
                    <div className="flex items-center gap-2 text-xs font-bold"><Users className="w-4 h-4" /> {discussion.views} vues</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="space-y-8">
          <Card className="p-6 border-ink/5 shadow-sm">
            <h4 className="font-bold text-ink mb-6 uppercase tracking-widest text-xs">Catégories Populaires</h4>
            <div className="space-y-3">
              {['Mathématiques', 'Physique-Chimie', 'Français', 'SVT', 'HG'].map(cat => (
                <button key={cat} className="w-full flex items-center justify-between p-3 hover:bg-primary/5 rounded-xl transition-all group">
                  <span className="text-sm font-bold text-muted group-hover:text-primary">{cat}</span>
                  <span className="text-[10px] font-black text-ink bg-ink/5 px-2 py-1 rounded-lg">120</span>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Discussion Detail Modal */}
      {selectedDiscussion && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setSelectedDiscussion(null)}></div>
          <Card className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl p-10">
            <button onClick={() => setSelectedDiscussion(null)} className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-xl"><X className="w-6 h-6" /></button>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">{selectedDiscussion.category}</span>
              <span className="text-xs font-bold text-muted">Posté par {selectedDiscussion.author} • {selectedDiscussion.date}</span>
            </div>
            <h2 className="text-2xl font-black text-ink mb-6">{selectedDiscussion.title}</h2>
            <p className="text-ink font-medium leading-relaxed mb-10">{selectedDiscussion.content}</p>
            
            <div className="border-t border-ink/5 pt-8">
              <h4 className="font-bold text-ink mb-6">Réponses ({selectedDiscussion.replies})</h4>
              <div className="space-y-6 mb-8">
                {selectedDiscussion.responses.map((resp: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <img src={resp.avatar} className="w-10 h-10 rounded-xl" alt={resp.author} />
                    <div className="flex-1 bg-ink/5 p-4 rounded-2xl">
                      <p className="text-xs font-black text-ink mb-1">{resp.author}</p>
                      <p className="text-sm text-ink font-medium">{resp.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <textarea 
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full p-4 bg-ink/5 border-none rounded-2xl text-sm font-medium h-24 focus:ring-2 focus:ring-primary/20 outline-none" 
                  placeholder="Votre réponse..."
                ></textarea>
                <button 
                  onClick={handleSendReply}
                  className="absolute bottom-4 right-4 p-2 bg-primary text-white rounded-xl shadow-lg hover:scale-110 transition-transform"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* New Discussion Modal */}
      {showNewDiscussion && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setShowNewDiscussion(false)}></div>
          <Card className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl p-10">
            <button onClick={() => setShowNewDiscussion(false)} className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-xl"><X className="w-6 h-6" /></button>
            <h2 className="text-2xl font-black text-ink mb-8">Nouvelle Discussion</h2>
            <div className="space-y-6">
              <Input label="Titre de la discussion" placeholder="Ex: Aide pour le DM de Maths" />
              <div className="space-y-2">
                <label className="text-xs font-black text-muted uppercase tracking-widest">Catégorie</label>
                <select className="w-full px-4 py-3 bg-ink/5 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none">
                  <option>Mathématiques</option>
                  <option>Physique-Chimie</option>
                  <option>Français</option>
                  <option>Général</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-muted uppercase tracking-widest">Message</label>
                <textarea className="w-full p-4 bg-ink/5 border-none rounded-2xl text-sm font-medium h-32 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Détaillez votre question..."></textarea>
              </div>
              <Button className="w-full font-black uppercase tracking-widest py-4">Publier la discussion</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export const CertificationsView = () => {
  const handleDownload = (title: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJ...'; // Dummy PDF content
    link.download = `Certificat_${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert(`Téléchargement du certificat PDF : ${title}`);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-display font-bold text-ink">Mes Certifications</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Mathématiques 3ème', session: 'Session 2026', icon: 'Award' },
          { title: 'Physique-Chimie 4ème', session: 'Session 2025', icon: 'Award' }
        ].map((cert, i) => (
          <Card key={i} className="p-8 border-ink/5 shadow-sm flex items-center gap-8 group hover:border-primary/20 transition-all">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Star className="w-10 h-10 fill-current" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-1">{cert.title}</h3>
              <p className="text-sm text-muted mb-4">{cert.session}</p>
              <Button 
                onClick={() => handleDownload(cert.title)}
                variant="outline" 
                size="sm" 
                icon={Download}
                className="text-xs font-bold uppercase tracking-widest border-ink/10"
              >
                Télécharger PDF
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const PaymentsView = () => (
  <div className="space-y-8">
    <h1 className="text-3xl font-display font-bold text-ink">Historique des Paiements</h1>
    <Card className="border-ink/5 shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-ink/5 text-[10px] font-black text-muted uppercase tracking-widest">
          <tr>
            <th className="px-6 py-4">Cours</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Montant</th>
            <th className="px-6 py-4">Méthode</th>
            <th className="px-6 py-4">Statut</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/5">
          {[
            { course: 'Mathématiques 3ème', date: '12/02/2026', amount: '5,000 FCFA', method: 'Airtel Money' },
            { course: 'Physique-Chimie 4ème', date: '05/01/2026', amount: '5,000 FCFA', method: 'Moov Money' },
            { course: 'Français 6ème', date: '20/12/2025', amount: '3,500 FCFA', method: 'Carte Bancaire' },
          ].map((payment, i) => (
            <tr key={i} className="hover:bg-ink/5 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-ink">{payment.course}</td>
              <td className="px-6 py-4 text-sm font-medium text-muted">{payment.date}</td>
              <td className="px-6 py-4 text-sm font-black text-ink">{payment.amount}</td>
              <td className="px-6 py-4 text-sm font-bold text-muted">{payment.method}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Réussi</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);

export const RecommendationsView = ({ onNavigate }: { onNavigate: (view: StudentSubView) => void }) => (
  <div className="space-y-8">
    <h1 className="text-3xl font-display font-bold text-ink">Recommandations Personnalisées</h1>
    <p className="text-muted font-medium">Basé sur vos intérêts et votre parcours d'apprentissage.</p>
    <div className="grid md:grid-cols-3 gap-8">
      {GABON_COURSES.slice(0, 3).map(course => (
        <Card 
          key={course.id} 
          onClick={() => onNavigate('catalog')}
          className="group overflow-hidden border-ink/5 shadow-sm hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="relative h-40 overflow-hidden">
            <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="px-2 py-0.5 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded">
                {course.category}
              </span>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-ink mb-1 truncate">{course.title}</h4>
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-primary">{course.price.toLocaleString()} FCFA</span>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export const EventsView = () => {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const handleRegister = (id: number) => {
    if (registeredEvents.includes(id)) return;
    setRegisteredEvents(prev => [...prev, id]);
    alert("Inscription réussie ! Vous recevrez un rappel 15 minutes avant l'événement.");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-display font-bold text-ink">Événements & Webinars</h1>
      <div className="grid gap-6">
        {[
          { id: 1, title: 'Préparation intensive au Brevet', date: '15 Mars', time: '15:00 - 17:00', host: 'M. Obiang' },
          { id: 2, title: 'Atelier Orientation Post-Bac', date: '22 Mars', time: '10:00 - 12:00', host: 'Mme. Essono' }
        ].map(event => (
          <Card key={event.id} className="p-6 border-ink/5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex flex-col items-center justify-center text-secondary shrink-0">
                <span className="text-xl font-black">{event.date.split(' ')[0]}</span>
                <span className="text-[10px] font-bold uppercase">{event.date.split(' ')[1]}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">{event.title}</h3>
                <p className="text-sm text-muted font-medium">Avec {event.host} • {event.time}</p>
              </div>
            </div>
            <Button 
              onClick={() => handleRegister(event.id)}
              disabled={registeredEvents.includes(event.id)}
              className={`font-bold uppercase tracking-widest text-xs px-8 py-4 ${registeredEvents.includes(event.id) ? 'bg-emerald-500 hover:bg-emerald-600' : ''}`}
            >
              {registeredEvents.includes(event.id) ? 'Inscrit ✓' : 'S\'inscrire'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const FavoritesView = ({ onNavigate }: { onNavigate: (view: StudentSubView) => void }) => (
  <div className="space-y-8">
    <h1 className="text-3xl font-display font-bold text-ink">Mes Favoris</h1>
    <div className="grid md:grid-cols-3 gap-8">
      {GABON_COURSES.slice(3, 6).map(course => (
        <Card 
          key={course.id} 
          onClick={() => onNavigate('catalog')}
          className="group overflow-hidden border-ink/5 shadow-sm hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="relative h-40 overflow-hidden">
            <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
            <div className="absolute top-4 right-4">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-ink mb-1 truncate">{course.title}</h4>
            <p className="text-xs text-muted mb-4 line-clamp-1">{course.description}</p>
            <Button size="sm" className="w-full font-bold uppercase tracking-widest text-[10px]">Voir le cours</Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export const SupportView = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-display font-bold text-ink">Support & Aide</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <Card className="p-8 border-ink/5 shadow-sm">
          <h3 className="text-xl font-bold text-ink mb-6">Contactez-nous</h3>
          <div className="space-y-4">
            <Input label="Sujet" placeholder="Problème de paiement, accès au cours..." />
            <div className="space-y-2">
              <label className="text-xs font-black text-muted uppercase tracking-widest">Message</label>
              <textarea className="w-full px-4 py-3 bg-ink/5 border-none rounded-xl text-sm font-medium h-32 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Décrivez votre problème..."></textarea>
            </div>
            <Button 
              onClick={handleSendMessage}
              className={`w-full font-bold uppercase tracking-widest py-4 ${messageSent ? 'bg-emerald-500' : ''}`}
            >
              {messageSent ? 'Message envoyé ✓' : 'Envoyer le message'}
            </Button>
          </div>
        </Card>
        <div className="space-y-6">
          <Card className="p-6 border-ink/5 shadow-sm">
            <h4 className="font-bold text-ink mb-4">Questions Fréquentes</h4>
            <div className="space-y-4">
              {['Comment payer avec Airtel Money ?', 'Comment obtenir mon certificat ?', 'Puis-je suivre les cours hors-ligne ?'].map(q => (
                <button key={q} className="w-full text-left p-4 hover:bg-primary/5 rounded-xl transition-all text-sm font-bold text-muted hover:text-primary border border-ink/5">
                  {q}
                </button>
              ))}
            </div>
          </Card>
          <Card className="p-6 bg-primary text-white border-none shadow-xl shadow-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="font-bold">Chat en direct</h4>
            </div>
            <p className="text-sm text-white/80 mb-6 font-medium">Besoin d'une réponse immédiate ? Discutez avec un conseiller en ligne.</p>
            <Button className="w-full bg-white text-primary hover:bg-white/90 font-black uppercase tracking-widest text-xs py-4 border-none">Démarrer le chat</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
