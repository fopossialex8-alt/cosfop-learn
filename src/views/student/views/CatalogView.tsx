import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  ArrowRight,
  Heart,
  SlidersHorizontal,
  X,
  Play,
  CheckCircle2,
  BookOpen,
  FileText,
  CreditCard
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';
import { GABON_COURSES } from '../../../data/mockData';

export const CatalogView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [likedCourses, setLikedCourses] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'airtel' | 'moov' | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const categories = ['Tous', 'Mathématiques', 'Physique-Chimie', 'Français', 'SVT', 'Histoire-Géographie', 'Informatique'];

  const handlePayment = () => {
    if (!paymentMethod || !phoneNumber) {
      alert('Veuillez sélectionner un opérateur et entrer votre numéro.');
      return;
    }
    setIsProcessing(true);
    // Simulate payment process
    setTimeout(() => {
      setIsProcessing(false);
      setShowPayment(false);
      setSelectedCourse(null);
      alert(`Paiement de ${selectedCourse.price} FCFA réussi via ${paymentMethod === 'airtel' ? 'Airtel Money' : 'Moov Money'} ! Vous avez maintenant accès à la formation.`);
    }, 3000);
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedCourses(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const filteredCourses = GABON_COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-ink mb-2">Catalogue des Cours</h1>
          <p className="text-muted font-medium">Explorez les meilleures formations adaptées au programme gabonais.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" icon={SlidersHorizontal} className="border-ink/10">Filtres</Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input 
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-ink/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none w-64"
            />
          </div>
        </div>
      </div>

      {/* Categories Scroll */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-white text-muted border border-ink/5 hover:border-primary/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <Card 
            key={course.id} 
            onClick={() => setSelectedCourse(course)}
            className="group overflow-hidden border-ink/5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
              <div className="absolute top-4 right-4">
                <button 
                  onClick={(e) => toggleLike(course.id, e)}
                  className={`w-10 h-10 backdrop-blur-md rounded-xl flex items-center justify-center transition-all shadow-lg ${likedCourses.includes(course.id) ? 'bg-red-500 text-white' : 'bg-white/90 text-muted hover:text-red-500'}`}
                >
                  <Heart className={`w-5 h-5 ${likedCourses.includes(course.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              {course.isLive && (
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  Live
                </div>
              )}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
                  {course.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(course.rating) ? 'fill-secondary' : 'text-ink/10'}`} />
                  ))}
                </div>
                <span className="text-xs font-bold text-ink">{course.rating}</span>
                <span className="text-xs font-medium text-muted">({course.studentsCount})</span>
              </div>

              <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
              <p className="text-sm text-muted mb-6 line-clamp-2 font-medium">{course.description}</p>

              <div className="flex items-center justify-between py-4 border-t border-ink/5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-muted">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-bold">{course.level}</span>
                  </div>
                </div>
                <div className="text-xl font-black text-primary">{course.price.toLocaleString()} FCFA</div>
              </div>

              <Button 
                onClick={() => setSelectedCourse(course)}
                className="w-full mt-2 font-bold uppercase tracking-widest py-4 group/btn" 
                icon={ArrowRight}
              >
                Voir les détails
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setSelectedCourse(null)}></div>
          <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl border-none">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-ink/5 hover:bg-red-500 hover:text-white rounded-2xl flex items-center justify-center transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto relative">
                <img src={selectedCourse.thumbnail} className="w-full h-full object-cover" alt={selectedCourse.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-2 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl mb-4 inline-block">
                    {selectedCourse.category}
                  </span>
                  <h2 className="text-3xl font-display font-black text-white">{selectedCourse.title}</h2>
                </div>
              </div>

              <div className="p-10 space-y-8">
                <div>
                  <h4 className="text-xs font-black text-muted uppercase tracking-widest mb-4">À propos de ce cours</h4>
                  <p className="text-ink font-medium leading-relaxed">{selectedCourse.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-ink/5 rounded-2xl">
                    <div className="flex items-center gap-3 text-primary mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest">Durée</span>
                    </div>
                    <p className="font-bold text-ink">{selectedCourse.duration}</p>
                  </div>
                  <div className="p-4 bg-ink/5 rounded-2xl">
                    <div className="flex items-center gap-3 text-secondary mb-1">
                      <Star className="w-4 h-4 fill-secondary" />
                      <span className="text-xs font-black uppercase tracking-widest">Note</span>
                    </div>
                    <p className="font-bold text-ink">{selectedCourse.rating} / 5</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black text-muted uppercase tracking-widest">Ce que vous allez apprendre</h4>
                  <div className="space-y-3">
                    {['Maîtrise complète du programme', 'Exercices pratiques corrigés', 'Supports de cours PDF inclus', 'Accès illimité à vie'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-ink">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-ink/5 flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Prix total</p>
                    <p className="text-3xl font-black text-primary">{selectedCourse.price.toLocaleString()} FCFA</p>
                  </div>
                  <Button 
                    onClick={() => setShowPayment(true)}
                    size="lg" 
                    className="flex-1 font-black uppercase tracking-widest py-6 shadow-xl shadow-primary/20"
                  >
                    S'inscrire maintenant
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && selectedCourse && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={() => !isProcessing && setShowPayment(false)}></div>
          <Card className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-10">
            <button 
              disabled={isProcessing}
              onClick={() => setShowPayment(false)} 
              className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-xl disabled:opacity-50"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-ink">Paiement Sécurisé</h2>
              <p className="text-sm text-muted font-medium mt-1">Finalisez votre inscription à {selectedCourse.title}</p>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-ink/5 rounded-2xl flex items-center justify-between">
                <span className="text-sm font-bold text-muted">Montant à payer</span>
                <span className="text-xl font-black text-primary">{selectedCourse.price.toLocaleString()} FCFA</span>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-muted uppercase tracking-widest">Choisir un opérateur</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    disabled={isProcessing}
                    onClick={() => setPaymentMethod('airtel')}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${paymentMethod === 'airtel' ? 'border-red-500 bg-red-50' : 'border-ink/5 hover:border-red-200'}`}
                  >
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-xs">Airtel</div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Airtel Money</span>
                  </button>
                  <button 
                    disabled={isProcessing}
                    onClick={() => setPaymentMethod('moov')}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${paymentMethod === 'moov' ? 'border-blue-500 bg-blue-50' : 'border-ink/5 hover:border-blue-200'}`}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">Moov</div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Moov Money</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-muted uppercase tracking-widest">Numéro de téléphone</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-ink">+241</span>
                  <input 
                    type="tel"
                    disabled={isProcessing}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="07x xx xx xx"
                    className="w-full pl-14 pr-4 py-4 bg-ink/5 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
              </div>

              <Button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full font-black uppercase tracking-widest py-5 shadow-xl shadow-primary/20"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Traitement...
                  </div>
                ) : (
                  `Payer ${selectedCourse.price.toLocaleString()} FCFA`
                )}
              </Button>

              <p className="text-[10px] text-center text-muted font-medium">
                En cliquant sur payer, vous recevrez une demande de confirmation sur votre téléphone.
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
