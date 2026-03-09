import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Lock, User, Github, Chrome } from 'lucide-react';
import { Button, Input, Card } from '../components/UI';
import { View, UserRole } from '../types';

export const Auth = ({ mode, setView, setRole }: { mode: 'login' | 'signup', setView: (view: View) => void, setRole: (role: UserRole) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setRole(selectedRole);
      setView(selectedRole === 'student' ? 'student_app' : 'teacher_app');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <button 
          onClick={() => setView('landing')}
          className="flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </button>

        <Card className="p-8 md:p-10" hover={false}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold italic text-3xl shadow-xl shadow-primary/20 mx-auto mb-6">C</div>
            <h1 className="text-3xl font-display font-bold mb-2">
              {mode === 'login' ? 'Bon retour !' : 'Créer un compte'}
            </h1>
            <p className="text-muted">
              {mode === 'login' ? 'Connectez-vous pour continuer à apprendre.' : 'Rejoignez la plus grande communauté éducative.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <>
                <div className="flex p-1 bg-background rounded-xl border border-ink/5 mb-6">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('student')}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${selectedRole === 'student' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-primary'}`}
                  >
                    Élève
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole('teacher')}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${selectedRole === 'teacher' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-primary'}`}
                  >
                    Enseignant
                  </button>
                </div>
                <Input label="Nom complet" placeholder="Jean Dupont" icon={User} required />
              </>
            )}
            
            <Input label="Email" type="email" placeholder="jean@example.com" icon={Mail} required />
            <Input label="Mot de passe" type="password" placeholder="••••••••" icon={Lock} required />

            {mode === 'login' && (
              <div className="flex justify-end">
                <button type="button" className="text-sm font-bold text-primary hover:underline">Mot de passe oublié ?</button>
              </div>
            )}

            <Button type="submit" className="w-full py-4 text-lg" isLoading={isLoading}>
              {mode === 'login' ? 'Se connecter' : "S'inscrire"}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-ink/5"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-surface px-4 text-muted font-bold tracking-widest">Ou continuer avec</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-ink/10 rounded-xl hover:bg-background transition-colors">
              <Chrome className="w-5 h-5 text-red-500" />
              <span className="font-bold text-sm">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-ink/10 rounded-xl hover:bg-background transition-colors">
              <Github className="w-5 h-5" />
              <span className="font-bold text-sm">GitHub</span>
            </button>
          </div>

          <p className="text-center mt-8 text-sm text-muted">
            {mode === 'login' ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
            <button 
              onClick={() => setView(mode === 'login' ? 'signup' : 'login')}
              className="ml-2 font-bold text-primary hover:underline"
            >
              {mode === 'login' ? "S'inscrire" : "Se connecter"}
            </button>
          </p>
        </Card>
      </motion.div>
    </div>
  );
};
