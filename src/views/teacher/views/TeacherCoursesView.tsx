import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Users, 
  Star, 
  BarChart2, 
  Edit, 
  Trash2,
  Eye,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';
import { TeacherSubView } from '../../../types';

const MOCK_COURSES = [
  { 
    id: '1', 
    title: 'Mathématiques - Préparation BEPC', 
    students: 450, 
    rating: 4.8, 
    price: 15000, 
    status: 'published',
    thumbnail: 'https://picsum.photos/seed/math/400/250',
    category: 'Mathématiques'
  },
  { 
    id: '2', 
    title: 'Physique-Chimie 3ème', 
    students: 320, 
    rating: 4.9, 
    price: 12000, 
    status: 'published',
    thumbnail: 'https://picsum.photos/seed/physics/400/250',
    category: 'Sciences'
  },
  { 
    id: '3', 
    title: 'Français - Expression Écrite', 
    students: 0, 
    rating: 0, 
    price: 10000, 
    status: 'draft',
    thumbnail: 'https://picsum.photos/seed/french/400/250',
    category: 'Lettres'
  },
  { 
    id: '4', 
    title: 'SVT - Le corps humain', 
    students: 180, 
    rating: 4.5, 
    price: 8000, 
    status: 'published',
    thumbnail: 'https://picsum.photos/seed/bio/400/250',
    category: 'Sciences'
  },
];

interface CoursesProps {
  onNavigate: (view: TeacherSubView) => void;
  theme: 'light' | 'dark';
}

export const TeacherCoursesView = ({ onNavigate, theme }: CoursesProps) => {
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = MOCK_COURSES.filter(course => {
    const matchesFilter = filter === 'all' || course.status === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Mes Cours</h1>
          <p className="text-muted font-medium">Gérez votre catalogue de formations et suivez leurs performances.</p>
        </div>
        <Button 
          onClick={() => onNavigate('create_course')}
          icon={Plus}
          className="font-black uppercase tracking-widest py-4 px-8"
        >
          Créer un nouveau cours
        </Button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex bg-surface p-1 rounded-2xl border border-ink/5 w-full md:w-auto">
          {[
            { id: 'all', label: 'Tous' },
            { id: 'published', label: 'Publiés' },
            { id: 'draft', label: 'Brouillons' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`flex-1 md:flex-none px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === tab.id ? 'bg-white shadow-sm text-primary' : 'text-muted hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Rechercher un cours..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-surface border border-ink/5 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="group overflow-hidden border-ink/5 shadow-sm hover:shadow-xl transition-all flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg ${
                  course.status === 'published' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                }`}>
                  {course.status === 'published' ? 'Publié' : 'Brouillon'}
                </span>
              </div>
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button className="w-10 h-10 bg-white text-ink rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white text-ink rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                  <BarChart2 className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest rounded-md">
                  {course.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-ink/5 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted" />
                  <span className="text-xs font-bold text-ink">{course.students} élèves</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-xs font-bold text-ink">{course.rating || 'N/A'}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-black text-primary">{course.price.toLocaleString()} FCFA</p>
                <button className="text-xs font-bold text-muted hover:text-primary flex items-center gap-1 transition-colors">
                  <Eye className="w-4 h-4" />
                  Aperçu
                </button>
              </div>
            </div>
          </Card>
        ))}

        {/* Empty State / Add New */}
        <button 
          onClick={() => onNavigate('create_course')}
          className="aspect-video md:aspect-auto border-2 border-dashed border-ink/10 rounded-[2.5rem] flex flex-col items-center justify-center p-8 space-y-4 hover:border-primary/40 hover:bg-primary/5 transition-all group"
        >
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8" />
          </div>
          <div>
            <p className="font-bold text-lg text-ink">Créer un nouveau cours</p>
            <p className="text-sm text-muted">Partagez votre savoir avec des milliers d'élèves</p>
          </div>
        </button>
      </div>
    </div>
  );
};
