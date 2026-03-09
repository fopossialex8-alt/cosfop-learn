import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  PlayCircle, 
  User, 
  Bell, 
  Search, 
  LogOut, 
  Menu, 
  X,
  PlusCircle,
  BarChart3,
  Wallet,
  Settings,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { View, UserRole } from '../types';
import { Button } from './UI';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
  role: UserRole;
  user: any;
}

export const Layout = ({ children, currentView, setView, role, user }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const studentNav = [
    { id: 'student_dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'catalog', label: 'Catalogue', icon: BookOpen },
    { id: 'player', label: 'Mes cours', icon: PlayCircle },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  const teacherNav = [
    { id: 'teacher_dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'teacher_courses', label: 'Mes cours', icon: BookOpen },
    { id: 'teacher_live_setup', label: 'Planifier Live', icon: PlusCircle },
    { id: 'profile', label: 'Paiements', icon: Wallet },
  ];

  const navItems = role === 'student' ? studentNav : teacherNav;

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden glass sticky top-0 z-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold italic">C</div>
          <span className="font-display font-bold text-lg tracking-tight">CosFop<span className="text-primary">Learn</span></span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-ink">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex w-64 bg-surface border-r border-ink/5 flex-col sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold italic text-xl shadow-lg shadow-primary/20">C</div>
          <span className="font-display font-bold text-xl tracking-tight">CosFop<span className="text-primary">Learn</span></span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as View)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-muted hover:bg-primary/5 hover:text-primary'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-primary'}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-ink/5 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted hover:bg-primary/5 hover:text-primary transition-all">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Paramètres</span>
          </button>
          <button onClick={() => setView('landing')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-40 bg-surface md:hidden pt-16"
          >
            <nav className="p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setView(item.id as View);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-lg font-medium ${
                    currentView === item.id ? 'bg-primary text-white' : 'text-muted'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="hidden md:flex h-20 items-center justify-between px-8 bg-surface/50 backdrop-blur-sm border-b border-ink/5 sticky top-0 z-30">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input 
              type="text" 
              placeholder="Rechercher un cours, un sujet..." 
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-background border border-ink/5 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-muted hover:text-primary transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
            </button>
            <div className="h-8 w-px bg-ink/5 mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right">
                <p className="text-sm font-bold leading-none">{user.name}</p>
                <p className="text-xs text-muted mt-1 uppercase tracking-wider font-semibold">{role === 'student' ? 'Élève' : 'Enseignant'}</p>
              </div>
              <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-xl border-2 border-primary/10" />
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};
