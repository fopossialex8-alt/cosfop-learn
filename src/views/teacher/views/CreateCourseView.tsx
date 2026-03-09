import React, { useState } from 'react';
import { 
  Plus, 
  Video, 
  FileText, 
  HelpCircle, 
  Image as ImageIcon, 
  ChevronRight, 
  ChevronLeft,
  Save,
  Send,
  Trash2,
  GripVertical
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';
import { TeacherSubView } from '../../../types';

interface CreateCourseProps {
  onNavigate: (view: TeacherSubView) => void;
  theme: 'light' | 'dark';
}

export const CreateCourseView = ({ onNavigate, theme }: CreateCourseProps) => {
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    level: 'Débutant',
    language: 'Français',
    price: '',
    thumbnail: null as string | null,
    introVideo: null as string | null,
    modules: [
      { id: '1', title: 'Introduction', lessons: [{ id: '1', title: 'Bienvenue', type: 'video' }] }
    ]
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handlePublish = () => {
    alert('Cours publié avec succès !');
    onNavigate('my_courses');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Créer un nouveau cours</h1>
          <p className="text-muted font-medium">Étape {step} sur 4 : {
            step === 1 ? 'Informations générales' : 
            step === 2 ? 'Médias du cours' : 
            step === 3 ? 'Structure & Contenu' : 'Prix & Publication'
          }</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => onNavigate('my_courses')} className="font-bold uppercase tracking-widest text-xs">Annuler</Button>
          <Button variant="outline" icon={Save} className="border-ink/10 font-bold uppercase tracking-widest text-xs">Sauvegarder</Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-ink/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500" 
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      {/* Step Content */}
      <div className="min-h-[500px]">
        {step === 1 && (
          <Card className="p-10 space-y-8 border-ink/5 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Input 
                  label="Titre du cours" 
                  placeholder="ex: Maîtriser le calcul intégral" 
                  value={courseData.title}
                  onChange={(e) => setCourseData({...courseData, title: e.target.value})}
                />
                <div className="space-y-2">
                  <label className="text-xs font-black text-muted uppercase tracking-widest">Description</label>
                  <textarea 
                    className="w-full h-40 px-4 py-3 rounded-2xl bg-surface border border-ink/5 outline-none focus:border-primary transition-all text-sm font-medium resize-none"
                    placeholder="Décrivez ce que vos élèves vont apprendre..."
                    value={courseData.description}
                    onChange={(e) => setCourseData({...courseData, description: e.target.value})}
                  ></textarea>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-muted uppercase tracking-widest">Catégorie</label>
                  <select 
                    className="w-full px-4 py-3 rounded-2xl bg-surface border border-ink/5 outline-none focus:border-primary transition-all text-sm font-bold"
                    value={courseData.category}
                    onChange={(e) => setCourseData({...courseData, category: e.target.value})}
                  >
                    <option value="">Sélectionner une catégorie</option>
                    <option value="math">Mathématiques</option>
                    <option value="physics">Physique-Chimie</option>
                    <option value="svt">SVT</option>
                    <option value="french">Français</option>
                    <option value="it">Informatique</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-muted uppercase tracking-widest">Niveau</label>
                    <select 
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-ink/5 outline-none focus:border-primary transition-all text-sm font-bold"
                      value={courseData.level}
                      onChange={(e) => setCourseData({...courseData, level: e.target.value})}
                    >
                      <option>Débutant</option>
                      <option>Intermédiaire</option>
                      <option>Avancé</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-muted uppercase tracking-widest">Langue</label>
                    <select 
                      className="w-full px-4 py-3 rounded-2xl bg-surface border border-ink/5 outline-none focus:border-primary transition-all text-sm font-bold"
                      value={courseData.language}
                      onChange={(e) => setCourseData({...courseData, language: e.target.value})}
                    >
                      <option>Français</option>
                      <option>Anglais</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {step === 2 && (
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-10 border-ink/5 shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-ink">Image de couverture</h3>
              </div>
              <p className="text-sm text-muted">Cette image apparaîtra dans le catalogue. Format recommandé : 1280x720px.</p>
              <div className="aspect-video bg-ink/5 rounded-[2rem] border-2 border-dashed border-ink/10 flex flex-col items-center justify-center space-y-4 hover:bg-ink/10 transition-all cursor-pointer group">
                <Plus className="w-10 h-10 text-muted group-hover:scale-110 transition-transform" />
                <p className="text-xs font-bold text-muted uppercase tracking-widest">Cliquez pour importer</p>
              </div>
            </Card>

            <Card className="p-10 border-ink/5 shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-ink">Vidéo d'introduction</h3>
              </div>
              <p className="text-sm text-muted">Une courte vidéo pour présenter votre cours et donner envie aux élèves.</p>
              <div className="aspect-video bg-ink/5 rounded-[2rem] border-2 border-dashed border-ink/10 flex flex-col items-center justify-center space-y-4 hover:bg-ink/10 transition-all cursor-pointer group">
                <Plus className="w-10 h-10 text-muted group-hover:scale-110 transition-transform" />
                <p className="text-xs font-bold text-muted uppercase tracking-widest">Cliquez pour importer</p>
              </div>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            {courseData.modules.map((module, mIdx) => (
              <Card key={module.id} className="p-8 border-ink/5 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <GripVertical className="w-5 h-5 text-muted cursor-grab" />
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-ink/5 rounded-lg flex items-center justify-center text-xs font-black text-ink">0{mIdx + 1}</span>
                      <input 
                        type="text" 
                        className="text-xl font-bold text-ink bg-transparent border-none outline-none focus:ring-2 focus:ring-primary/20 rounded-lg px-2"
                        value={module.title}
                        onChange={(e) => {
                          const newModules = [...courseData.modules];
                          newModules[mIdx].title = e.target.value;
                          setCourseData({...courseData, modules: newModules});
                        }}
                      />
                    </div>
                  </div>
                  <button className="p-2 text-muted hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 pl-12">
                  {module.lessons.map((lesson, lIdx) => (
                    <div key={lesson.id} className="bg-surface p-4 rounded-2xl border border-ink/5 flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        {lesson.type === 'video' ? <Video className="w-4 h-4 text-primary" /> : <FileText className="w-4 h-4 text-secondary" />}
                        <input 
                          type="text" 
                          className="text-sm font-bold text-ink bg-transparent border-none outline-none"
                          value={lesson.title}
                          onChange={(e) => {
                            const newModules = [...courseData.modules];
                            newModules[mIdx].lessons[lIdx].title = e.target.value;
                            setCourseData({...courseData, modules: newModules});
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-muted hover:text-primary"><Plus className="w-4 h-4" /></button>
                        <button className="p-2 text-muted hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-3 border-2 border-dashed border-ink/10 rounded-2xl text-xs font-bold text-muted hover:border-primary/40 hover:text-primary transition-all flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Ajouter une leçon
                  </button>
                </div>
              </Card>
            ))}
            <Button variant="outline" icon={Plus} className="w-full py-6 border-ink/10 font-black uppercase tracking-widest">
              Ajouter un nouveau module
            </Button>
          </div>
        )}

        {step === 4 && (
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-10 border-ink/5 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-ink">Paramètres de prix</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <button className="flex-1 p-6 rounded-[2rem] border-2 border-primary bg-primary/5 text-primary text-center">
                    <p className="text-xs font-black uppercase tracking-widest mb-1">Payant</p>
                    <p className="text-sm font-medium">Vendre votre cours</p>
                  </button>
                  <button className="flex-1 p-6 rounded-[2rem] border-2 border-ink/5 bg-surface text-muted text-center hover:border-ink/20 transition-all">
                    <p className="text-xs font-black uppercase tracking-widest mb-1">Gratuit</p>
                    <p className="text-sm font-medium">Cours en libre accès</p>
                  </button>
                </div>
                <Input 
                  label="Prix (FCFA)" 
                  placeholder="ex: 15000" 
                  type="number"
                  value={courseData.price}
                  onChange={(e) => setCourseData({...courseData, price: e.target.value})}
                />
                <div className="p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex gap-4">
                  <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  <p className="text-xs text-amber-700 font-medium">CosFop prélève une commission de 15% sur chaque vente pour couvrir les frais de plateforme et de paiement mobile.</p>
                </div>
              </div>
            </Card>

            <Card className="p-10 border-ink/5 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-ink">Options de certification</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-surface rounded-[2rem] border border-ink/5">
                  <div>
                    <p className="font-bold text-ink">Activer le certificat</p>
                    <p className="text-xs text-muted">Délivrer un certificat à la fin du cours</p>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-black text-muted uppercase tracking-widest">Aperçu du certificat</p>
                  <div className="aspect-[1.4/1] bg-ink/5 rounded-2xl border border-ink/10 flex items-center justify-center">
                    <Award className="w-16 h-16 text-muted/20" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-10 border-t border-ink/5">
        <Button 
          variant="ghost" 
          onClick={prevStep} 
          disabled={step === 1}
          icon={ChevronLeft}
          className="font-bold uppercase tracking-widest text-xs"
        >
          Précédent
        </Button>
        {step < 4 ? (
          <Button 
            onClick={nextStep} 
            className="font-black uppercase tracking-widest px-10 py-4"
          >
            Continuer <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={handlePublish}
            icon={Send}
            className="bg-emerald-600 hover:bg-emerald-700 font-black uppercase tracking-widest px-10 py-4"
          >
            Publier le cours
          </Button>
        )}
      </div>
    </div>
  );
};

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);
