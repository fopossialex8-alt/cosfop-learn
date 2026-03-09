import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Clock, 
  Trophy, 
  Star, 
  ArrowRight, 
  Zap, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Card, Button } from '../../../components/UI';
import { User, StudentSubView } from '../../../types';
import { GABON_COURSES, MOCK_BADGES, MOCK_NOTIFICATIONS } from '../../../data/mockData';

interface DashboardViewProps {
  user: User;
  onNavigate: (view: StudentSubView) => void;
}

export const DashboardView = ({ user, onNavigate }: DashboardViewProps) => {
  return (
    <div className="space-y-10">
      {/* Welcome Header & Banner */}
      <section id="welcome-banner" className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12 text-white shadow-2xl shadow-primary/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-display font-black mb-4"
            >
              Bonjour, {user.name.split(' ')[0]} ! 👋
            </motion.h1>
            <p className="text-white/90 text-lg font-medium max-w-xl mb-8">
              Ravi de te revoir ! Tu as déjà complété <span className="text-secondary font-black">65%</span> de tes objectifs cette semaine. Continue comme ça !
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => onNavigate('catalog')}
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-2xl shadow-lg border-none"
              >
                Explorer le catalogue
              </Button>
              <Button 
                onClick={() => onNavigate('my_courses')}
                variant="ghost" 
                className="text-white border-white/20 hover:bg-white/10 font-bold px-8 py-4 rounded-2xl"
              >
                Mes cours
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 shrink-0">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center min-w-[120px] shadow-inner">
              <Zap className="w-8 h-8 text-secondary fill-secondary mb-2" />
              <p className="text-3xl font-black">12</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Jours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center min-w-[120px] shadow-inner">
              <Trophy className="w-8 h-8 text-secondary fill-secondary mb-2" />
              <p className="text-3xl font-black">450</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">XP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white border-ink/5 shadow-sm group hover:border-indigo-500/20 transition-all">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-indigo-600" />
          </div>
          <p className="text-4xl font-black text-ink mb-1">4</p>
          <p className="text-sm font-bold text-muted uppercase tracking-widest mb-6">Cours en cours</p>
          <div className="w-full h-2 bg-ink/5 rounded-full overflow-hidden">
            <div className="w-[65%] h-full bg-indigo-600 rounded-full"></div>
          </div>
          <p className="text-[10px] font-bold mt-2 text-muted">65% de progression totale</p>
        </Card>

        <Card className="p-6 bg-white border-ink/5 shadow-sm group hover:border-secondary/20 transition-all">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
            <Calendar className="w-6 h-6" />
          </div>
          <p className="text-4xl font-black text-ink mb-1">2</p>
          <p className="text-sm font-bold text-muted uppercase tracking-widest mb-6">Lives aujourd'hui</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 bg-secondary/5 rounded-lg border border-secondary/10">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-bold text-ink">Maths 3ème - 15:00</p>
            </div>
            <div className="flex items-center gap-3 p-2 bg-ink/5 rounded-lg border border-transparent">
              <div className="w-2 h-2 bg-muted rounded-full"></div>
              <p className="text-xs font-bold text-muted">Physique 4ème - 17:30</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-ink/5 shadow-sm group hover:border-emerald-500/20 transition-all">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-4xl font-black text-ink mb-1">15</p>
          <p className="text-sm font-bold text-muted uppercase tracking-widest mb-6">Quiz réussis</p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {MOCK_BADGES.slice(0, 3).map(badge => (
                <div key={badge.id} className="w-8 h-8 bg-white border-2 border-ink/5 rounded-full flex items-center justify-center shadow-sm" title={badge.name}>
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('profile')}
              className="text-[10px] font-bold text-primary hover:underline uppercase tracking-wider ml-2"
            >
              Voir tous les badges
            </button>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Column: Recent Activity & Recommendations */}
        <div className="lg:col-span-2 space-y-10">
          {/* Continue Learning */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-ink">Continuer l'apprentissage</h3>
              <button 
                onClick={() => onNavigate('my_courses')}
                className="text-sm font-bold text-primary hover:underline"
              >
                Voir tout
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {GABON_COURSES.slice(0, 2).map(course => (
                <Card key={course.id} className="group overflow-hidden border-ink/5 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1">
                        <Clock className="w-3 h-3" /> {course.duration}
                      </div>
                      <h4 className="text-white font-bold text-sm line-clamp-1">{course.title}</h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Progression</div>
                      <div className="text-[10px] font-bold text-primary uppercase tracking-widest">45%</div>
                    </div>
                    <div className="w-full h-1.5 bg-ink/5 rounded-full overflow-hidden mb-6">
                      <div className="w-[45%] h-full bg-primary rounded-full"></div>
                    </div>
                    <Button 
                      onClick={() => onNavigate('my_courses')}
                      size="sm" 
                      className="w-full font-bold uppercase tracking-wider py-3"
                    >
                      Reprendre le cours
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Recommended for you */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-ink">Recommandé pour vous</h3>
              <button 
                onClick={() => onNavigate('catalog')}
                className="text-sm font-bold text-primary hover:underline"
              >
                Découvrir le catalogue
              </button>
            </div>
            <div className="space-y-4">
              {GABON_COURSES.slice(2, 4).map(course => (
                <div 
                  key={course.id} 
                  onClick={() => onNavigate('catalog')}
                  className="bg-white p-4 rounded-2xl border border-ink/5 shadow-sm flex items-center gap-6 group hover:border-primary/20 transition-all cursor-pointer"
                >
                  <img src={course.thumbnail} className="w-24 h-24 rounded-xl object-cover" alt={course.title} referrerPolicy="no-referrer" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-widest rounded-md">{course.category}</span>
                      <div className="flex items-center gap-1 text-secondary">
                        <Star className="w-3 h-3 fill-secondary" />
                        <span className="text-[10px] font-bold">{course.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-ink mb-1 truncate">{course.title}</h4>
                    <p className="text-xs text-muted line-clamp-1">{course.description}</p>
                  </div>
                  <button className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Leaderboard & Recent Notifications */}
        <div className="space-y-10">
          {/* Mini Leaderboard */}
          <section>
            <h3 className="text-xl font-bold text-ink mb-6">Classement (3ème)</h3>
            <Card className="p-6 border-ink/5 shadow-sm">
              <div className="space-y-6">
                {[
                  { name: 'Moussa B.', xp: 1250, rank: 1, avatar: '1' },
                  { name: 'Sarah L.', xp: 1100, rank: 2, avatar: '2' },
                  { name: 'Toi', xp: 450, rank: 12, avatar: 'me', isMe: true },
                ].map((student, i) => (
                  <div key={i} className={`flex items-center justify-between ${student.isMe ? 'bg-primary/5 -mx-6 px-6 py-3 border-y border-primary/10' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-black w-4 ${student.rank === 1 ? 'text-secondary' : 'text-muted'}`}>{student.rank}</span>
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.avatar}`} className="w-8 h-8 rounded-full border border-ink/10" alt={student.name} />
                      <span className={`text-sm font-bold ${student.isMe ? 'text-primary' : 'text-ink'}`}>{student.name}</span>
                    </div>
                    <span className="text-xs font-black text-ink">{student.xp} XP</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => onNavigate('leaderboard')}
                variant="ghost" 
                className="w-full mt-6 text-xs font-bold uppercase tracking-widest"
              >
                Voir le classement complet
              </Button>
            </Card>
          </section>

          {/* Recent Notifications */}
          <section>
            <h3 className="text-xl font-bold text-ink mb-6">Notifications récentes</h3>
            <div className="space-y-4">
              {MOCK_NOTIFICATIONS.map((notif) => (
                <div key={notif.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-ink/5 shadow-sm hover:border-primary/10 transition-all cursor-pointer">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${notif.type === 'live' ? 'bg-red-500/10 text-red-500' : 'bg-secondary/10 text-secondary'}`}>
                    {notif.type === 'live' ? <Zap className="w-5 h-5" /> : <Trophy className="w-5 h-5" />}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-ink">{notif.title}</h5>
                    <p className="text-[10px] text-muted font-medium line-clamp-2 mt-0.5">{notif.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

