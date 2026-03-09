import React from 'react';
import { 
  Library, 
  FileText, 
  Video, 
  Download, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink,
  BookOpen,
  HelpCircle
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface ResourcesProps {
  theme: 'light' | 'dark';
}

export const TeacherResourcesView = ({ theme }: ResourcesProps) => {
  const MOCK_RESOURCES = [
    { id: '1', title: 'Guide de l\'Enseignant CosFop', type: 'PDF', size: '2.4 MB', date: '15 Jan 2026', icon: FileText, color: 'text-red-500' },
    { id: '2', title: 'Modèle de Quiz Interactif', type: 'XLSX', size: '1.1 MB', date: '02 Fév 2026', icon: FileText, color: 'text-emerald-500' },
    { id: '3', title: 'Comment réussir son Live ?', type: 'Video', size: '15 min', date: '20 Fév 2026', icon: Video, color: 'text-blue-500' },
    { id: '4', title: 'Pack d\'images pédagogiques', type: 'ZIP', size: '45 MB', date: '05 Mar 2026', icon: Library, color: 'text-indigo-500' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Ressources Pédagogiques</h1>
          <p className="text-muted font-medium">Accédez à des outils et guides pour améliorer vos cours.</p>
        </div>
        <Button icon={Plus} className="font-bold uppercase tracking-widest text-xs">Ajouter une ressource</Button>
      </div>

      {/* Featured Resource */}
      <Card className="p-8 bg-primary text-white border-none shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Nouveau</div>
            <h3 className="text-2xl font-black mb-2">Guide complet du Live Streaming 🎥</h3>
            <p className="text-primary-100 font-medium">Apprenez à utiliser le tableau blanc, le partage d'écran et à gérer le chat pour des sessions lives inoubliables.</p>
          </div>
          <Button variant="secondary" className="bg-white text-primary hover:bg-primary-50 font-black uppercase tracking-widest px-8 py-4">
            Télécharger le guide
          </Button>
        </div>
      </Card>

      {/* Resources Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-ink">Bibliothèque de ressources</h3>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Rechercher..." 
                  className="pl-11 pr-4 py-2 bg-surface border border-ink/5 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {MOCK_RESOURCES.map((res) => (
              <Card key={res.id} className="p-6 border-ink/5 shadow-sm group hover:border-primary/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-ink/5 rounded-2xl flex items-center justify-center ${res.color}`}>
                    <res.icon className="w-6 h-6" />
                  </div>
                  <button className="p-2 text-muted hover:text-primary transition-colors"><Download className="w-5 h-5" /></button>
                </div>
                <h4 className="font-bold text-ink mb-1 group-hover:text-primary transition-colors">{res.title}</h4>
                <div className="flex items-center gap-3 text-[10px] font-bold text-muted uppercase tracking-widest">
                  <span>{res.type}</span>
                  <span className="w-1 h-1 bg-muted rounded-full"></span>
                  <span>{res.size}</span>
                </div>
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mt-4">Mis à jour le {res.date}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Community & Support */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-ink">Aide & Communauté</h3>
          <div className="space-y-4">
            <Card className="p-6 border-ink/5 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-ink">Centre d'aide Enseignant</h4>
              <p className="text-xs text-muted font-medium">Retrouvez toutes les réponses à vos questions techniques.</p>
              <button className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                Consulter la FAQ <ExternalLink className="w-3 h-3" />
              </button>
            </Card>

            <Card className="p-6 border-ink/5 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-600 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-ink">Webinaires de formation</h4>
              <p className="text-xs text-muted font-medium">Inscrivez-vous aux prochaines sessions de formation pour les profs.</p>
              <button className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                Voir le calendrier <ExternalLink className="w-3 h-3" />
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
