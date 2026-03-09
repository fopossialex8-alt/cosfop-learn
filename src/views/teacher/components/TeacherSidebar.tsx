import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  PlusCircle, 
  Video, 
  Users, 
  MessageSquare, 
  Star, 
  BarChart3, 
  Award, 
  Wallet, 
  Tag, 
  Library, 
  LifeBuoy, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';
import { TeacherSubView } from '../../../types';

interface SidebarProps {
  activeView: TeacherSubView;
  setActiveView: (view: TeacherSubView) => void;
  onLogout: () => void;
  theme: 'light' | 'dark';
}

export const TeacherSidebar = ({ activeView, setActiveView, onLogout, theme }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'my_courses', label: 'Mes Cours', icon: BookOpen },
    { id: 'create_course', label: 'Créer un Cours', icon: PlusCircle },
    { id: 'plan_live', label: 'Planifier Live', icon: Video },
    { id: 'my_students', label: 'Mes Élèves', icon: Users },
    { id: 'messages', label: 'Messages / Chat', icon: MessageSquare },
    { id: 'reviews', label: 'Avis & Notes', icon: Star },
    { id: 'statistics', label: 'Statistiques', icon: BarChart3 },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'payments', label: 'Paiement & Revenus', icon: Wallet },
    { id: 'promotions', label: 'Promotions & Coupons', icon: Tag },
    { id: 'resources', label: 'Ressources', icon: Library },
  ];

  const bottomItems = [
    { id: 'support', label: 'Support Enseignant', icon: LifeBuoy },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <aside className={`w-72 flex flex-col border-r sticky top-0 h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-white border-ink/5'}`}>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-black text-xl">C</span>
          </div>
          <div>
            <h1 className={`font-display font-black text-xl tracking-tight leading-none ${theme === 'dark' ? 'text-white' : 'text-ink'}`}>CosFop</h1>
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">Teacher Pro</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as TeacherSubView)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group ${
                activeView === item.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : `text-muted hover:bg-primary/5 hover:text-primary`
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeView === item.id ? 'text-white' : ''}`} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 space-y-1">
        <div className={`h-px w-full mb-6 ${theme === 'dark' ? 'bg-white/5' : 'bg-ink/5'}`}></div>
        
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as TeacherSubView)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group ${
              activeView === item.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : `text-muted hover:bg-primary/5 hover:text-primary`
            }`}
          >
            <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeView === item.id ? 'text-white' : ''}`} />
            {item.label}
          </button>
        ))}

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-500/5 transition-all group"
        >
          <LogOut className="w-5 h-5 transition-transform group-hover:scale-110" />
          Déconnexion
        </button>
      </div>
    </aside>
  );
};
