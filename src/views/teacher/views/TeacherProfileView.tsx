import React from 'react';
import { TeacherSubView, User } from '../../../types';
import { 
  Star, 
  Users, 
  BookOpen, 
  Award, 
  Globe, 
  Mail, 
  Linkedin, 
  Twitter, 
  CheckCircle2,
  Play,
  Calendar,
  MapPin
} from 'lucide-react';
import { Card, Button } from '../../../components/UI';

interface ProfileProps {
  user: User;
  onUpdateAvatar: (avatar: string) => void;
  onNavigate: (view: TeacherSubView) => void;
  theme: 'light' | 'dark';
}

export const TeacherProfileView = ({ user, onUpdateAvatar, onNavigate, theme }: ProfileProps) => {
  const MOCK_COURSES = [
    { id: '1', title: 'Mathématiques 3ème : Algèbre & Géométrie', students: 450, rating: 4.8, price: '15,000 FCFA', image: 'https://picsum.photos/seed/math/400/250' },
    { id: '2', title: 'Physique-Chimie 4ème : Le programme complet', students: 320, rating: 4.9, price: '12,000 FCFA', image: 'https://picsum.photos/seed/physics/400/250' },
  ];

  return (
    <div className="space-y-10">
      {/* Profile Header Banner */}
      <div className="relative h-64 rounded-[3rem] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/education/1200/400" 
          className="w-full h-full object-cover" 
          alt="Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"></div>
        <div className="absolute bottom-10 left-10 flex items-end gap-8">
          <div className="relative">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher" 
              className="w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-2xl" 
              alt="Avatar" 
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center border-4 border-white text-white shadow-lg">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="pb-2">
            <h1 className="text-4xl font-display font-black text-white mb-2">Alex Fopossi</h1>
            <p className="text-white/80 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Douala, Cameroun • Expert en Mathématiques
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Column: Info & Stats */}
        <div className="space-y-8">
          <Card className="p-8 border-ink/5 shadow-sm space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-2xl border border-ink/5 text-center">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Élèves</p>
                <p className="text-xl font-black text-ink">1,284</p>
              </div>
              <div className="p-4 bg-surface rounded-2xl border border-ink/5 text-center">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Avis</p>
                <div className="flex items-center justify-center gap-1">
                  <p className="text-xl font-black text-ink">4.8</p>
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                </div>
              </div>
              <div className="p-4 bg-surface rounded-2xl border border-ink/5 text-center">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Cours</p>
                <p className="text-xl font-black text-ink">12</p>
              </div>
              <div className="p-4 bg-surface rounded-2xl border border-ink/5 text-center">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Expérience</p>
                <p className="text-xl font-black text-ink">10 ans</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-ink">À propos</h3>
              <p className="text-sm text-muted font-medium leading-relaxed">
                Passionné par la transmission du savoir, j'aide les élèves du secondaire à surmonter leurs difficultés en mathématiques et physique depuis plus d'une décennie. Ma méthode repose sur la simplification des concepts complexes par des exemples concrets du quotidien.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-ink/5">
              <h3 className="text-lg font-bold text-ink">Réseaux Sociaux</h3>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 bg-surface border border-ink/5 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all"><Linkedin className="w-5 h-5" /></button>
                <button className="w-10 h-10 bg-surface border border-ink/5 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all"><Twitter className="w-5 h-5" /></button>
                <button className="w-10 h-10 bg-surface border border-ink/5 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all"><Globe className="w-5 h-5" /></button>
                <button className="w-10 h-10 bg-surface border border-ink/5 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all"><Mail className="w-5 h-5" /></button>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-ink/5 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-ink">Diplômes & Certifications</h3>
            <div className="space-y-4">
              {[
                { title: 'Master en Mathématiques Appliquées', school: 'Université de Yaoundé I', year: '2015' },
                { title: 'Certification Pédagogique Avancée', school: 'ENS Libreville', year: '2018' },
              ].map((edu, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{edu.title}</p>
                    <p className="text-xs text-muted font-medium">{edu.school} • {edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Courses & Reviews */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-ink">Mes Cours</h3>
              <button className="text-sm font-bold text-primary hover:underline">Voir tout</button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {MOCK_COURSES.map((course) => (
                <Card key={course.id} className="overflow-hidden border-ink/5 shadow-sm group hover:border-primary/20 transition-all">
                  <div className="relative aspect-video">
                    <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={course.title} />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-black text-primary shadow-sm">
                      {course.price}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="font-bold text-ink group-hover:text-primary transition-colors line-clamp-2">{course.title}</h4>
                    <div className="flex items-center justify-between pt-4 border-t border-ink/5">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-muted" />
                          <span className="text-xs font-bold text-ink">{course.students}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span className="text-xs font-bold text-ink">{course.rating}</span>
                        </div>
                      </div>
                      <button className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-ink">Derniers avis</h3>
              <button className="text-sm font-bold text-primary hover:underline">Voir tout</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Marcelle Nguema', rating: 5, comment: 'Excellent professeur, très pédagogue. Les cours sont clairs et bien structurés.', date: 'Il y a 2 jours' },
                { name: 'Jean-Paul Mba', rating: 4, comment: 'Très bon contenu, les exercices m\'ont beaucoup aidé pour mon examen.', date: 'Il y a 1 semaine' },
              ].map((review, i) => (
                <Card key={i} className="p-6 border-ink/5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center text-xs font-black text-muted">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ink">{review.name}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-amber-500 fill-current' : 'text-ink/10'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{review.date}</span>
                  </div>
                  <p className="text-sm text-muted font-medium italic">"{review.comment}"</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
