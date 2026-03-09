import React, { useState } from 'react';
import { Sidebar } from '../../components/student/Sidebar';
import { StudentSubView, User } from '../../types';
import { 
  Bell, 
  Search, 
  MessageCircle, 
  HelpCircle,
  ChevronDown,
  Zap,
  Trophy
} from 'lucide-react';
import { Button, Card } from '../../components/UI';
import { MOCK_NOTIFICATIONS } from '../../data/mockData';

// Sub-views
import { DashboardView } from './views/DashboardView';
import { CatalogView } from './views/CatalogView';
import { MyCoursesView } from './views/MyCoursesView';
import { ProfileView } from './views/ProfileView';
import { SettingsView } from './views/SettingsView';
import { LeaderboardView } from './views/LeaderboardView';
import { 
  ForumView, 
  CertificationsView, 
  PaymentsView, 
  RecommendationsView, 
  EventsView, 
  FavoritesView, 
  SupportView 
} from './views/OtherViews';

interface StudentAppProps {
  user: User;
  onLogout: () => void;
}

export const StudentApp = ({ user: initialUser, onLogout }: StudentAppProps) => {
  const [activeSubView, setActiveSubView] = useState<StudentSubView>('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState(initialUser);

  const unreadCount = MOCK_NOTIFICATIONS.filter(n => !n.read).length;

  const handleUpdateAvatar = (newAvatar: string) => {
    setUser(prev => ({ ...prev, avatar: newAvatar }));
  };

  const renderContent = () => {
    switch (activeSubView) {
      case 'dashboard': return <DashboardView user={user} onNavigate={setActiveSubView} />;
      case 'catalog': return <CatalogView onNavigate={setActiveSubView} />;
      case 'my_courses': return <MyCoursesView onNavigate={setActiveSubView} />;
      case 'profile': return <ProfileView user={user} onUpdateAvatar={handleUpdateAvatar} onNavigate={setActiveSubView} theme={theme} />;
      case 'settings': return <SettingsView theme={theme} setTheme={setTheme} />;
      case 'leaderboard': return <LeaderboardView />;
      case 'forum': return <ForumView />;
      case 'certifications': return <CertificationsView />;
      case 'payments': return <PaymentsView />;
      case 'recommendations': return <RecommendationsView onNavigate={setActiveSubView} />;
      case 'events': return <EventsView />;
      case 'favorites': return <FavoritesView onNavigate={setActiveSubView} />;
      case 'support': return <SupportView />;
      default: return <DashboardView user={user} onNavigate={setActiveSubView} />;
    }
  };

  return (
    <div className={`flex min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'dark bg-slate-950 text-white' : 'bg-[#F8F9FC] text-ink'}`}>
      <Sidebar 
        activeView={activeSubView} 
        setActiveView={setActiveSubView} 
        onLogout={onLogout} 
        theme={theme}
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TopBar */}
        <header className={`h-20 border-b px-8 flex items-center justify-between sticky top-0 z-30 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-white border-ink/5'}`}>
          <div className="flex-1 max-w-xl relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Rechercher un cours, un prof, un sujet..." 
              className={`w-full pl-12 pr-4 py-3 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all ${theme === 'dark' ? 'bg-white/5 text-white placeholder:text-white/30' : 'bg-ink/5 text-ink'}`}
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-3 rounded-xl transition-all relative ${showNotifications ? 'bg-primary text-white' : 'text-muted hover:bg-primary/5 hover:text-primary'}`}
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                )}
              </button>

              {showNotifications && (
                <div className={`absolute top-full right-0 mt-4 w-80 rounded-3xl shadow-2xl border z-50 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-white border-ink/5'}`}>
                  <div className={`p-6 border-b flex items-center justify-between ${theme === 'dark' ? 'border-white/5' : 'border-ink/5'}`}>
                    <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-ink'}`}>Notifications</h4>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg">{unreadCount} nouvelles</span>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    {MOCK_NOTIFICATIONS.map((notif) => (
                      <div key={notif.id} className={`p-4 transition-colors flex gap-4 border-b last:border-none cursor-pointer ${theme === 'dark' ? 'hover:bg-white/5 border-white/5' : 'hover:bg-ink/5 border-ink/5'}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${notif.type === 'live' ? 'bg-red-500/10 text-red-500' : 'bg-secondary/10 text-secondary'}`}>
                          {notif.type === 'live' ? <Zap className="w-5 h-5" /> : <Trophy className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className={`text-sm font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-ink'}`}>{notif.title}</p>
                          <p className="text-xs text-muted mt-1 line-clamp-2">{notif.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full p-4 text-center text-xs font-bold text-primary hover:bg-primary/5 transition-colors">
                    Tout marquer comme lu
                  </button>
                </div>
              )}

              <button 
                onClick={() => setActiveSubView('forum')}
                className="p-3 text-muted hover:bg-primary/5 hover:text-primary rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveSubView('support')}
                className="p-3 text-muted hover:bg-primary/5 hover:text-primary rounded-xl transition-all"
              >
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>

            <div className={`h-8 w-px ${theme === 'dark' ? 'bg-white/10' : 'bg-ink/10'}`}></div>

            <button 
              onClick={() => setActiveSubView('profile')}
              className={`flex items-center gap-3 pl-2 pr-4 py-2 rounded-2xl transition-all group ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-ink/5'}`}
            >
              <img 
                src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                className="w-10 h-10 rounded-xl border-2 border-white shadow-md" 
                alt={user.name} 
              />
              <div className="text-left hidden sm:block">
                <p className={`text-sm font-black leading-none ${theme === 'dark' ? 'text-white' : 'text-ink'}`}>{user.name}</p>
                <p className="text-[10px] font-bold text-muted uppercase tracking-wider mt-1">Élève Premium</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
