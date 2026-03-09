import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  Filter,
  Search,
  X,
  BookOpen,
  ChevronRight,
  Download
} from 'lucide-react';
import { Card, Button } from '../../../components/UI';
import { GABON_COURSES } from '../../../data/mockData';
import { StudentSubView } from '../../../types';

interface MyCoursesViewProps {
  onNavigate: (view: StudentSubView) => void;
}

export const MyCoursesView = ({ onNavigate }: MyCoursesViewProps) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [resumingCourse, setResumingCourse] = useState<any>(null);

  const myCourses = [
    { ...GABON_COURSES[0], progress: 65, status: 'ongoing' },
    { ...GABON_COURSES[1], progress: 100, status: 'completed' },
    { ...GABON_COURSES[2], progress: 10, status: 'ongoing' },
  ];

  const filteredCourses = myCourses.filter(course => {
    if (activeTab === 'all') return true;
    return course.status === activeTab;
  });

  const handleDownloadCertificate = (courseTitle: string) => {
    alert(`Téléchargement du certificat pour : ${courseTitle}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-ink mb-2">Mes Cours</h1>
          <p className="text-muted font-medium">Continuez votre progression et atteignez vos objectifs.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-white p-1 rounded-2xl border border-ink/5 shadow-sm">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'ongoing', label: 'En cours' },
              { id: 'completed', label: 'Terminés' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-muted hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredCourses.map(course => (
          <Card key={course.id} className="p-6 border-ink/5 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div 
                className="relative w-full md:w-64 h-40 shrink-0 overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setResumingCourse(course)}
              >
                <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                    <Play className="w-6 h-6 fill-primary" />
                  </div>
                </div>
                {course.status === 'completed' && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white p-2 rounded-xl shadow-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted text-xs font-bold">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-ink group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-sm text-muted font-medium line-clamp-2">{course.description}</p>

                <div className="flex items-center gap-4 pt-4 border-t border-ink/5">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-muted uppercase tracking-widest">Progression</span>
                      <span className="text-xs font-black text-primary uppercase tracking-widest">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-ink/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${course.status === 'completed' ? 'bg-emerald-500' : 'bg-primary'}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {course.status === 'completed' ? (
                      <Button 
                        onClick={() => handleDownloadCertificate(course.title)}
                        variant="outline" 
                        icon={Award} 
                        className="border-ink/10 font-bold uppercase tracking-widest text-xs"
                      >
                        Certificat
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => setResumingCourse(course)}
                        icon={ArrowRight} 
                        className="font-bold uppercase tracking-widest text-xs px-8"
                      >
                        Reprendre
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Course Player Modal (Demo) */}
      {resumingCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6">
          <div className="absolute inset-0 bg-ink/95 backdrop-blur-md" onClick={() => setResumingCourse(null)}></div>
          <Card className="relative w-full max-w-6xl h-full sm:h-[90vh] overflow-hidden bg-white sm:rounded-[3rem] shadow-2xl border-none flex flex-col">
            <div className="p-6 border-b border-ink/5 flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <button onClick={() => setResumingCourse(null)} className="p-2 hover:bg-ink/5 rounded-xl transition-all">
                  <X className="w-6 h-6" />
                </button>
                <div>
                  <h2 className="text-lg font-bold text-ink">{resumingCourse.title}</h2>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Module 3 : Les bases de l'algèbre</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" icon={Download} className="border-ink/10 text-[10px] font-black uppercase tracking-widest">Supports PDF</Button>
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-black text-xs">65%</div>
              </div>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              <div className="flex-1 bg-black relative flex items-center justify-center">
                <img src={resumingCourse.thumbnail} className="w-full h-full object-cover opacity-40 blur-sm" alt="Video Placeholder" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 fill-current ml-2" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between text-white text-xs font-bold mb-4">
                    <span>12:45 / 45:00</span>
                    <span>HD 1080p</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[30%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-96 bg-white border-l border-ink/5 overflow-y-auto">
                <div className="p-6">
                  <h3 className="font-bold text-ink mb-6 uppercase tracking-widest text-xs">Contenu du cours</h3>
                  <div className="space-y-2">
                    {[
                      { title: 'Introduction', duration: '05:00', completed: true },
                      { title: 'Les concepts fondamentaux', duration: '15:00', completed: true },
                      { title: 'Exercices d\'application', duration: '25:00', active: true },
                      { title: 'Quiz de fin de module', duration: '10:00' },
                      { title: 'Conclusion et ressources', duration: '05:00' }
                    ].map((lesson, i) => (
                      <button 
                        key={i} 
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${lesson.active ? 'bg-primary/5 border border-primary/20' : 'hover:bg-ink/5'}`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${lesson.completed ? 'bg-emerald-500 text-white' : lesson.active ? 'bg-primary text-white' : 'bg-ink/5 text-muted'}`}>
                          {lesson.completed ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs font-black">{i + 1}</span>}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-bold ${lesson.active ? 'text-primary' : 'text-ink'}`}>{lesson.title}</p>
                          <p className="text-[10px] font-bold text-muted uppercase tracking-widest">{lesson.duration}</p>
                        </div>
                        {lesson.active && <ChevronRight className="w-4 h-4 text-primary" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {filteredCourses.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-ink/5 shadow-sm">
          <div className="w-24 h-24 bg-ink/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-12 h-12 text-muted" />
          </div>
          <h3 className="text-2xl font-bold text-ink mb-4">Aucun cours trouvé</h3>
          <p className="text-muted font-medium max-w-sm mx-auto mb-10">Vous n'avez pas encore de cours dans cette catégorie. Explorez le catalogue pour commencer !</p>
          <Button 
            onClick={() => onNavigate('catalog')}
            size="lg" 
            icon={ArrowRight} 
            className="px-10 py-6 text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/20"
          >
            Explorer le catalogue
          </Button>
        </div>
      )}
    </div>
  );
};
