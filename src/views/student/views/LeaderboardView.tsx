import React from 'react';
import { Trophy, Star, Medal, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card } from '../../../components/UI';

export const LeaderboardView = () => {
  const topStudents = [
    { id: 1, name: 'Moussa B.', xp: 2450, rank: 1, avatar: '1', change: 'up' },
    { id: 2, name: 'Sarah L.', xp: 2100, rank: 2, avatar: '2', change: 'down' },
    { id: 3, name: 'Jean-Pierre M.', xp: 1950, rank: 3, avatar: '3', change: 'none' },
    { id: 4, name: 'Marie-Claire O.', xp: 1800, rank: 4, avatar: '4', change: 'up' },
    { id: 5, name: 'Alioune S.', xp: 1650, rank: 5, avatar: '5', change: 'none' },
  ];

  return (
    <div className="space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-ink mb-4">Classement des Élèves</h1>
        <p className="text-muted font-medium">Relevez le défi et devenez le meilleur élève du Gabon ! Gagnez des points XP en terminant vos cours et quiz.</p>
      </div>

      {/* Top 3 Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-8 pt-10">
        <div className="flex flex-col items-center gap-4 order-2 md:order-1">
          <div className="relative">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-24 h-24 rounded-full border-4 border-white shadow-xl" alt="Rank 2" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-white font-black shadow-lg">2</div>
          </div>
          <div className="bg-white p-6 rounded-t-[2rem] w-48 h-40 shadow-xl border border-ink/5 flex flex-col items-center justify-center">
            <p className="font-bold text-ink mb-1">Sarah L.</p>
            <p className="text-xs font-black text-primary uppercase tracking-widest">2100 XP</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 order-1 md:order-2">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-secondary animate-bounce">
              <Trophy className="w-12 h-12 fill-secondary" />
            </div>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" className="w-32 h-32 rounded-full border-4 border-white shadow-2xl" alt="Rank 1" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-black shadow-lg text-xl">1</div>
          </div>
          <div className="bg-white p-8 rounded-t-[2.5rem] w-56 h-56 shadow-2xl border border-ink/5 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
            <p className="font-black text-xl text-ink mb-1">Moussa B.</p>
            <p className="text-sm font-black text-primary uppercase tracking-widest">2450 XP</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 order-3">
          <div className="relative">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" className="w-24 h-24 rounded-full border-4 border-white shadow-xl" alt="Rank 3" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-black shadow-lg">3</div>
          </div>
          <div className="bg-white p-6 rounded-t-[2rem] w-48 h-32 shadow-xl border border-ink/5 flex flex-col items-center justify-center">
            <p className="font-bold text-ink mb-1">Jean-Pierre M.</p>
            <p className="text-xs font-black text-primary uppercase tracking-widest">1950 XP</p>
          </div>
        </div>
      </div>

      {/* Full List */}
      <Card className="p-8 border-ink/5 shadow-sm overflow-hidden">
        <div className="space-y-4">
          {topStudents.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-4 bg-white hover:bg-ink/5 rounded-2xl transition-all group">
              <div className="flex items-center gap-6">
                <div className="w-8 flex items-center justify-center">
                  {student.change === 'up' ? <ArrowUp className="w-4 h-4 text-emerald-500" /> : student.change === 'down' ? <ArrowDown className="w-4 h-4 text-red-500" /> : <Minus className="w-4 h-4 text-muted" />}
                </div>
                <span className="text-lg font-black text-muted w-6">{student.rank}</span>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.avatar}`} className="w-12 h-12 rounded-xl border border-ink/10" alt={student.name} />
                <div>
                  <h4 className="font-bold text-ink group-hover:text-primary transition-colors">{student.name}</h4>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Élève en 3ème</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-lg font-black text-ink">{student.xp}</p>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Points XP</p>
                </div>
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Medal className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
