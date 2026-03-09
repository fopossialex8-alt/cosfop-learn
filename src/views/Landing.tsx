import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Zap, 
  Smartphone, 
  ShieldCheck,
  Video,
  Globe
} from 'lucide-react';
import { Button, Card } from '../components/UI';
import { View } from '../types';

export const Landing = ({ setView }: { setView: (view: View) => void }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-lg z-50 border-b border-ink/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold italic text-xl shadow-lg shadow-primary/20">C</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tight leading-none">CosFop<span className="text-primary">Learn</span></span>
            <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-0.5">Gabon Education Excellence</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm font-bold text-muted hover:text-primary transition-colors uppercase tracking-wider">Avantages</a>
            <a href="#courses" className="text-sm font-bold text-muted hover:text-primary transition-colors uppercase tracking-wider">Cours</a>
            <a href="#pricing" className="text-sm font-bold text-muted hover:text-primary transition-colors uppercase tracking-wider">Tarifs</a>
          </div>
          <div className="h-6 w-px bg-ink/10"></div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setView('login')} className="font-bold uppercase tracking-wider">Connexion</Button>
            <Button size="sm" onClick={() => setView('signup')} className="font-bold uppercase tracking-wider px-6">S'inscrire</Button>
          </div>
        </div>
        <button className="lg:hidden p-2 text-ink">
          <div className="w-6 h-0.5 bg-ink mb-1.5"></div>
          <div className="w-6 h-0.5 bg-ink mb-1.5"></div>
          <div className="w-4 h-0.5 bg-ink"></div>
        </button>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-black mb-8 border border-primary/10 uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-primary" />
              La plateforme N°1 au Gabon
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tighter">
              Propulsez votre <span className="text-primary">Avenir</span> dès aujourd'hui.
            </h1>
            <p className="text-xl text-muted mb-12 max-w-lg leading-relaxed font-medium">
              Rejoignez l'élite de l'apprentissage au Gabon. Accédez à des formations certifiantes, des lives interactifs et une communauté d'experts passionnés.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" onClick={() => setView('signup')} icon={ArrowRight} className="py-5 px-10 text-xl shadow-2xl shadow-primary/30">
                Commencer l'aventure
              </Button>
              <Button size="lg" variant="outline" icon={Play} className="py-5 px-10 text-xl border-ink/10 hover:border-primary/30">
                Voir la démo
              </Button>
            </div>
            
            <div className="mt-16 pt-8 border-t border-ink/5 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} className="w-12 h-12 rounded-full border-4 border-white shadow-xl" alt="User" />
                  ))}
                </div>
                <div>
                  <p className="font-black text-xl leading-none">+10,000</p>
                  <p className="text-xs text-muted font-bold uppercase tracking-wider mt-1">Élèves actifs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-secondary" />)}
                </div>
                <p className="text-xs text-muted font-bold uppercase tracking-wider">Note 4.9/5</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl -z-10 opacity-50"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[12px] border-white">
              <img 
                src="https://picsum.photos/seed/gabon-learn/1200/1500" 
                alt="Gabon Learning Experience" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -right-6 glass p-5 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-sm">Certifié</p>
                  <p className="text-[10px] text-muted font-bold uppercase">Par CosFop Gabon Academy</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-6 glass p-6 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                  <Video className="w-7 h-7 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="font-black text-sm">LIVE : Prépa Bac Gabon</p>
                  </div>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-widest">150 élèves en ligne</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Avantages (Features) Section */}
      <section id="features" className="py-32 px-6 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Une expérience d'apprentissage <span className="text-primary">réinventée</span>.</h2>
            <p className="text-lg text-muted font-medium">Nous avons supprimé toutes les barrières entre vous et la connaissance au Gabon. Apprenez n'importe où, n'importe quand.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Zap, 
                title: 'Cours en Direct', 
                desc: 'Interagissez en temps réel avec les meilleurs formateurs gabonais. Posez vos questions et obtenez des réponses immédiates.',
                color: 'bg-primary/10 text-primary'
              },
              { 
                icon: BookOpen, 
                title: 'VOD Haute Définition', 
                desc: 'Accédez à une bibliothèque exhaustive de cours vidéo adaptés au programme national gabonais.',
                color: 'bg-secondary/10 text-secondary'
              },
              { 
                icon: Smartphone, 
                title: 'Paiement Mobile Local', 
                desc: 'Payez vos formations instantanément via Airtel Money, Moov Money ou MTN MoMo Gabon.',
                color: 'bg-emerald-500/10 text-emerald-600'
              }
            ].map((feat, i) => (
              <Card key={i} className="p-10 group border-none shadow-none hover:bg-primary/5 transition-colors">
                <div className={`w-20 h-20 ${feat.color} rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <feat.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
                <p className="text-muted leading-relaxed font-medium">{feat.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Statistiques (Impact) Section */}
      <section className="py-24 bg-ink text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: 'Cours disponibles', value: '500+' },
            { label: 'Experts certifiés', value: '120+' },
            { label: 'Taux de réussite', value: '94%' },
            { label: 'Heures de contenu', value: '10k+' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl md:text-6xl font-display font-bold mb-2">{stat.value}</p>
              <p className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Preuves (Trust) Section */}
      <section className="py-24 border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
            <p className="text-xs font-black text-muted uppercase tracking-[0.3em] whitespace-nowrap">Partenaires Institutionnels au Gabon</p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {['ANBG', 'UOB', 'USTM', 'Airtel', 'Moov'].map((brand) => (
                <span key={brand} className="text-2xl font-display font-black tracking-tighter">{brand}</span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-8 bg-primary/5 border-primary/10" hover={false}>
              <div className="flex gap-4 mb-6">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gabon1" className="w-12 h-12 rounded-full" alt="User" />
                <div>
                  <p className="font-bold">Jean-Pierre M.</p>
                  <p className="text-xs text-muted">Étudiant à l'UOB, Libreville</p>
                </div>
              </div>
              <p className="text-muted italic leading-relaxed">
                "CosFop-Learn a changé ma façon de réviser. Les lives sont interactifs et les profs sont vraiment à l'écoute. Le paiement par Airtel Money est super pratique."
              </p>
            </Card>
            <Card className="p-8 bg-secondary/5 border-secondary/10" hover={false}>
              <div className="flex gap-4 mb-6">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gabon2" className="w-12 h-12 rounded-full" alt="User" />
                <div>
                  <p className="font-bold">Marie-Claire O.</p>
                  <p className="text-xs text-muted">Professionnelle, Port-Gentil</p>
                </div>
              </div>
              <p className="text-muted italic leading-relaxed">
                "Grâce aux formations certifiantes, j'ai pu monter en compétence en marketing digital sans quitter mon poste. Une vraie révolution pour le Gabon !"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="cta-gradient rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-white rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight">
              Rejoignez la révolution éducative au Gabon.
            </h2>
            <p className="text-xl text-white/90 mb-12 font-medium leading-relaxed">
              Ne laissez pas passer votre chance. Créez votre compte aujourd'hui et accédez à votre premier cours gratuitement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="secondary" onClick={() => setView('signup')} className="py-6 px-12 text-xl font-black shadow-2xl">
                Créer mon compte gratuit
              </Button>
              <Button size="lg" variant="outline" className="py-6 px-12 text-xl font-black border-white/30 text-white hover:bg-white/10">
                Parler à un conseiller
              </Button>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-8 text-white/60 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Sans engagement</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Support 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-20 border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold italic text-xl shadow-lg shadow-primary/20">C</div>
              <span className="font-display font-bold text-2xl tracking-tight">CosFop<span className="text-primary">Learn</span></span>
            </div>
            <p className="text-muted max-w-sm font-medium leading-relaxed">
              La première plateforme d'apprentissage en ligne au Gabon, dédiée à l'excellence académique et professionnelle.
            </p>
            <div className="flex items-center gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-ink">Plateforme</h4>
            <ul className="space-y-4 text-sm font-medium text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Tous les cours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sessions Live</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Devenir Enseignant</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-ink">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CGU</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-ink/5 text-center">
          <p className="text-xs font-bold text-muted uppercase tracking-widest">© 2026 CosFop-Learn. Tous droits réservés. Made in Gabon 🇬🇦</p>
        </div>
      </footer>
    </div>
  );
};
