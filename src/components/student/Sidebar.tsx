import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  BookOpen, 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Heart, 
  CreditCard, 
  Award, 
  MessageSquare, 
  Users, 
  Sparkles, 
  Calendar, 
  Trophy,
  ChevronRight
} from 'lucide-react';
import { StudentSubView } from '../../types';

interface SidebarProps {
  activeView: StudentSubView;
  setActiveView: (view: StudentSubView) => void;
  onLogout: () => void;
  theme?: 'light' | 'dark';
}

export const Sidebar = ({ activeView, setActiveView, onLogout, theme = 'light' }: SidebarProps) => {
  const menuGroups = [
    {
      label: 'Principal',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'catalog', label: 'Catalogue', icon: Search },
        { id: 'my_courses', label: 'Mes Cours', icon: BookOpen },
        { id: 'recommendations', label: 'Recommandations', icon: Sparkles },
      ]
    },
    {
      label: 'Apprentissage',
      items: [
        { id: 'events', label: 'Événements', icon: Calendar },
        { id: 'forum', label: 'Forum Étudiant', icon: Users },
        { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
        { id: 'certifications', label: 'Certifications', icon: Award },
      ]
    },
    {
      label: 'Personnel',
      items: [
        { id: 'favorites', label: 'Favoris', icon: Heart },
        { id: 'payments', label: 'Paiements', icon: CreditCard },
        { id: 'profile', label: 'Profil', icon: User },
        { id: 'settings', label: 'Paramètres', icon: Settings },
      ]
    }
  ];

  return (
    <div className={`w-72 h-screen border-r flex flex-col sticky top-0 overflow-y-auto scrollbar-hide transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-white border-ink/5'}`}>
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold italic text-xl shadow-lg shadow-primary/20">C</div>
        <div className="flex flex-col">
          <span className={`font-display font-bold text-xl tracking-tight leading-none ${theme === 'dark' ? 'text-white' : 'text-ink'}`}>CosFop<span className="text-primary">Learn</span></span>
          <span className="text-[8px] font-bold text-muted uppercase tracking-[0.2em] mt-0.5">Élève Connecté</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-8 pb-8">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="space-y-2">
            <h4 className="px-4 text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-4">{group.label}</h4>
            <div className="space-y-1">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id as StudentSubView)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                    activeView === item.id 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : `text-muted hover:bg-primary/5 hover:text-primary ${theme === 'dark' ? 'hover:bg-white/5' : ''}`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${activeView === item.id ? 'text-white' : 'text-muted group-hover:text-primary'}`} />
                    <span className={`text-sm font-bold tracking-wide ${activeView === item.id ? 'text-white' : ''}`}>{item.label}</span>
                  </div>
                  {activeView === item.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className={`p-4 border-t ${theme === 'dark' ? 'border-white/5' : 'border-ink/5'}`}>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-bold text-sm"
        >
          <LogOut className="w-5 h-5" />
          Déconnexion
        </button>
      </div>
    </div>
  );
};
