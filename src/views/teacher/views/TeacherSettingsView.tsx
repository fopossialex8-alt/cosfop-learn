import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Smartphone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ChevronRight,
  Save,
  LogOut,
  Trash2
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface SettingsProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const TeacherSettingsView = ({ theme, setTheme }: SettingsProps) => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profil Public', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'payout', label: 'Paiements', icon: CreditCard },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-black text-ink mb-2">Paramètres</h1>
          <p className="text-muted font-medium">Gérez votre compte, vos préférences et votre sécurité.</p>
        </div>
        <Button icon={Save} className="font-black uppercase tracking-widest py-4 px-8 shadow-lg shadow-primary/20">Enregistrer les modifications</Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-10">
        {/* Sidebar Tabs */}
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all ${
                activeTab === tab.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border border-ink/5 text-muted hover:border-primary/20 hover:text-ink'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-sm font-bold">{tab.label}</span>
              <ChevronRight className={`w-4 h-4 ml-auto ${activeTab === tab.id ? 'text-white' : 'text-muted'}`} />
            </button>
          ))}
          <div className="pt-6">
            <button className="w-full p-4 rounded-2xl flex items-center gap-4 text-red-500 hover:bg-red-500/5 transition-all">
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-bold">Déconnexion</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {activeTab === 'profile' && (
            <Card className="p-10 border-ink/5 shadow-sm space-y-10">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative group">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher" 
                    className="w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-xl" 
                    alt="Profile" 
                  />
                  <button className="absolute inset-0 bg-ink/40 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-black uppercase tracking-widest">
                    Changer
                  </button>
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-xl font-bold text-ink">Photo de profil</h3>
                  <p className="text-sm text-muted font-medium">Cette photo sera visible par vos élèves et sur votre profil public. Format recommandé : JPG ou PNG, max 2MB.</p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Button variant="outline" size="sm" className="border-ink/10 text-xs font-bold uppercase tracking-widest">Importer</Button>
                    <Button variant="ghost" size="sm" className="text-red-500 text-xs font-bold uppercase tracking-widest">Supprimer</Button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Prénom" defaultValue="Alex" />
                <Input label="Nom" defaultValue="Fopossi" />
                <Input label="Email" defaultValue="alex.fopossi@example.com" />
                <Input label="Téléphone" defaultValue="+241 07 00 00 00" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-muted uppercase tracking-widest">Biographie professionnelle</label>
                <textarea 
                  className="w-full h-32 px-4 py-3 rounded-2xl bg-surface border border-ink/5 outline-none focus:border-primary transition-all text-sm font-medium resize-none"
                  defaultValue="Enseignant passionné de mathématiques avec plus de 10 ans d'expérience dans l'éducation secondaire au Cameroun."
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-muted uppercase tracking-widest">Spécialité principale</label>
                  <select className="w-full px-4 py-3 rounded-2xl bg-surface border border-ink/5 outline-none focus:border-primary transition-all text-sm font-bold">
                    <option>Mathématiques</option>
                    <option>Physique-Chimie</option>
                    <option>Informatique</option>
                  </select>
                </div>
                <Input label="Site web / Portfolio" placeholder="https://..." />
              </div>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card className="p-10 border-ink/5 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-ink">Préférences de notifications</h3>
              <div className="space-y-6">
                {[
                  { label: 'Nouvelles inscriptions', desc: 'Recevoir un email quand un élève s\'inscrit à un cours.', icon: User },
                  { label: 'Nouveaux messages', desc: 'Être notifié des nouveaux messages dans le chat.', icon: Mail },
                  { label: 'Avis & Notes', desc: 'Recevoir une alerte quand un élève laisse un avis.', icon: Bell },
                  { label: 'Rapports de revenus', desc: 'Recevoir un résumé mensuel de vos gains.', icon: CreditCard },
                ].map((pref, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-surface rounded-[2rem] border border-ink/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                        <pref.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-ink">{pref.label}</p>
                        <p className="text-xs text-muted font-medium">{pref.desc}</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                ))}

                <div className="pt-10 border-t border-ink/5">
                  <h3 className="text-xl font-bold text-ink mb-6">Apparence</h3>
                  <div className="flex items-center justify-between p-6 bg-surface rounded-[2rem] border border-ink/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-500/10 text-indigo-600 rounded-xl flex items-center justify-center">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-ink">Mode Sombre</p>
                        <p className="text-xs text-muted font-medium">Activer ou désactiver le thème sombre de la plateforme.</p>
                      </div>
                    </div>
                    <div 
                      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${theme === 'dark' ? 'bg-primary' : 'bg-ink/10'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${theme === 'dark' ? 'right-1' : 'left-1'}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card className="p-10 border-ink/5 shadow-sm space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-ink">Changer le mot de passe</h3>
                <div className="grid md:grid-cols-1 gap-6 max-w-md">
                  <Input label="Mot de passe actuel" type="password" />
                  <Input label="Nouveau mot de passe" type="password" />
                  <Input label="Confirmer le nouveau mot de passe" type="password" />
                </div>
                <Button size="sm" className="font-bold uppercase tracking-widest text-xs">Mettre à jour le mot de passe</Button>
              </div>

              <div className="pt-10 border-t border-ink/5 space-y-6">
                <h3 className="text-xl font-bold text-ink">Double Authentification (2FA)</h3>
                <div className="flex items-center justify-between p-6 bg-surface rounded-[2rem] border border-ink/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-500/10 text-indigo-600 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-ink">Authentification par SMS</p>
                      <p className="text-xs text-muted font-medium">Sécurisez votre compte avec un code envoyé par SMS.</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-ink/10 text-xs font-bold uppercase tracking-widest">Activer</Button>
                </div>
              </div>

              <div className="pt-10 border-t border-ink/5 space-y-6">
                <h3 className="text-xl font-bold text-red-500">Zone de danger</h3>
                <div className="p-6 bg-red-500/5 rounded-[2rem] border border-red-500/10 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-ink">Supprimer mon compte</p>
                    <p className="text-xs text-muted font-medium">Cette action est irréversible. Toutes vos données seront perdues.</p>
                  </div>
                  <Button variant="ghost" className="text-red-500 hover:bg-red-500/10 font-bold uppercase tracking-widest text-xs">Supprimer</Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
