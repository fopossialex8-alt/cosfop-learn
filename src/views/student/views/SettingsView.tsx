import React, { useState } from 'react';
import { 
  Bell, 
  Moon, 
  Sun, 
  Shield, 
  Smartphone, 
  Globe, 
  Trash2, 
  Lock,
  Eye,
  EyeOff,
  CheckCircle2
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

export const SettingsView = ({ theme, setTheme }: { theme: 'light' | 'dark', setTheme: (t: 'light' | 'dark') => void }) => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    lives: true
  });

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-display font-bold text-ink mb-2">Paramètres</h1>
        <p className="text-muted font-medium">Gérez vos préférences et la sécurité de votre compte.</p>
      </div>

      <div className="grid gap-8">
        {/* Appearance */}
        <Card className="p-8 border-ink/5 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">Apparence</h3>
              <p className="text-xs text-muted font-medium">Personnalisez votre interface de travail.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <button 
              onClick={() => setTheme('light')}
              className={`p-6 rounded-[2rem] border-2 transition-all text-left group ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-ink/5 hover:border-primary/20'}`}
            >
              <div className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 text-primary">
                <Sun className="w-5 h-5" />
              </div>
              <p className="font-bold text-ink mb-1">Thème Clair</p>
              <p className="text-[10px] text-muted font-medium uppercase tracking-widest">Par défaut</p>
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`p-6 rounded-[2rem] border-2 transition-all text-left group ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-ink/5 hover:border-primary/20'}`}
            >
              <div className="w-10 h-10 bg-ink rounded-xl shadow-md flex items-center justify-center mb-4 text-white">
                <Moon className="w-5 h-5" />
              </div>
              <p className="font-bold text-ink mb-1">Thème Sombre</p>
              <p className="text-[10px] text-muted font-medium uppercase tracking-widest">Bientôt disponible</p>
            </button>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-8 border-ink/5 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">Notifications</h3>
              <p className="text-xs text-muted font-medium">Choisissez comment vous souhaitez être informé.</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { id: 'email', label: 'Emails de formation', desc: 'Nouveaux cours, promotions et newsletters.' },
              { id: 'push', label: 'Notifications Push', desc: 'Alertes directes sur votre navigateur ou mobile.' },
              { id: 'lives', label: 'Rappels de Lives', desc: 'Soyez prévenu 15 min avant chaque session en direct.' },
              { id: 'sms', label: 'Alertes SMS', desc: 'Notifications critiques par message texte (Gabon uniquement).' }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b border-ink/5 last:border-0">
                <div>
                  <p className="font-bold text-ink mb-1">{item.label}</p>
                  <p className="text-xs text-muted font-medium">{item.desc}</p>
                </div>
                <button 
                  onClick={() => setNotifications(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof prev] }))}
                  className={`w-14 h-8 rounded-full transition-all relative ${notifications[item.id as keyof typeof notifications] ? 'bg-primary' : 'bg-ink/10'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${notifications[item.id as keyof typeof notifications] ? 'left-7' : 'left-1'}`}></div>
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Security */}
        <Card className="p-8 border-ink/5 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">Sécurité</h3>
              <p className="text-xs text-muted font-medium">Protégez votre compte et vos données.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-muted uppercase tracking-widest">Mot de passe actuel</label>
                <div className="relative">
                  <input type="password" value="••••••••" disabled className="w-full px-4 py-3 bg-ink/5 border-none rounded-xl text-sm font-bold" />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                </div>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={() => alert('Fonctionnalité de changement de mot de passe à venir.')}
                  variant="outline" 
                  className="w-full border-ink/10 font-bold uppercase tracking-widest text-xs py-3.5"
                >
                  Changer le mot de passe
                </Button>
              </div>
            </div>

            <div className="p-6 bg-emerald-500/5 rounded-[2rem] border border-emerald-500/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-ink text-sm">Authentification à deux facteurs (2FA)</p>
                  <p className="text-[10px] text-muted font-medium">Ajoutez une couche de sécurité supplémentaire.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> Activé
              </div>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-8 border-red-500/10 bg-red-500/5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-1">Zone de Danger</h3>
              <p className="text-xs text-red-600/60 font-medium">Suppression définitive de votre compte et de vos données.</p>
            </div>
            <Button 
              onClick={() => {
                if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
                  alert('Demande de suppression envoyée.');
                }
              }}
              variant="ghost" 
              icon={Trash2} 
              className="text-red-600 hover:bg-red-500 hover:text-white font-bold uppercase tracking-widest text-xs"
            >
              Supprimer mon compte
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
