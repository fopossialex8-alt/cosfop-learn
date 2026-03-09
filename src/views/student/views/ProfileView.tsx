import React, { useState, useRef } from 'react';
import { 
  User as UserIcon, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Star, 
  Edit2, 
  Camera,
  ShieldCheck,
  Zap,
  Trophy,
  History,
  X,
  CheckCircle2,
  Upload,
  RefreshCw
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';
import { User } from '../../../types';
import { MOCK_BADGES } from '../../../data/mockData';

export const ProfileView = ({ 
  user, 
  onUpdateAvatar, 
  onNavigate,
  theme 
}: { 
  user: User, 
  onUpdateAvatar: (avatar: string) => void,
  onNavigate: (view: any) => void,
  theme: 'light' | 'dark'
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPhotoOptions, setShowPhotoOptions] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    phone: '+241 07 00 00 00',
    location: 'Libreville, Gabon',
    avatar: user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSave = () => {
    setIsEditing(false);
    alert('Profil mis à jour avec succès !');
  };

  const handleDownloadCertificate = (title: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJ...'; // Dummy PDF content
    link.download = `Certificat_${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert(`Téléchargement du certificat PDF : ${title}`);
  };

  const handleImageClick = () => {
    setShowPhotoOptions(true);
  };

  const handleOpenFilePicker = () => {
    setShowPhotoOptions(false);
    fileInputRef.current?.click();
  };

  const startCamera = async () => {
    setShowPhotoOptions(false);
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Impossible d'accéder à la caméra. Vérifiez les permissions.");
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach(track => track.stop());
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        setProfileData(prev => ({ ...prev, avatar: imageData }));
        onUpdateAvatar(imageData);
        stopCamera();
        alert('Photo de profil mise à jour !');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileData(prev => ({ ...prev, avatar: result }));
        onUpdateAvatar(result);
        alert('Photo de profil mise à jour !');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-10">
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleFileChange}
      />
      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-primary to-secondary rounded-[3rem] shadow-2xl shadow-primary/20"></div>
        <div className="max-w-5xl mx-auto px-10 -mt-24">
          <div className="bg-surface rounded-[3rem] p-8 shadow-xl border border-ink/5 flex flex-col md:flex-row items-end gap-8">
            <div className="relative group">
              <img 
                src={profileData.avatar} 
                className={`w-40 h-40 rounded-[2.5rem] border-8 ${theme === 'dark' ? 'border-slate-800' : 'border-white'} shadow-2xl object-cover`} 
                alt={user.name} 
              />
              <button 
                onClick={handleImageClick}
                className="absolute bottom-2 right-2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-display font-bold text-ink">{profileData.name}</h1>
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Compte Vérifié
                </div>
              </div>
              <p className="text-muted font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {profileData.location}
              </p>
            </div>
            <div className="pb-4">
              <Button 
                onClick={() => setIsEditing(true)}
                icon={Edit2} 
                variant="outline" 
                className="border-ink/10 font-bold uppercase tracking-widest text-xs"
              >
                Modifier le profil
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Column: Info & Stats */}
        <div className="space-y-10">
          <Card className="p-8 shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-8">Informations Personnelles</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center text-muted">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-bold text-ink">{profileData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center text-muted">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="text-sm font-bold text-ink">{profileData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center text-muted">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Rôle</p>
                  <p className="text-sm font-bold text-ink">Élève (3ème)</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className={`p-8 ${theme === 'dark' ? 'bg-indigo-600' : 'bg-ink'} text-white border-none shadow-xl shadow-ink/20 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-xl font-bold mb-8 relative z-10">Statistiques Globales</h3>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-1">
                <p className="text-3xl font-black">12</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Série de jours</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black">450</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Points XP</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black">85%</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Score moyen</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black">15</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Quiz réussis</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Achievements & Certifications */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-ink">Badges & Succès</h3>
              <button className="text-sm font-bold text-primary hover:underline">Voir tout</button>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {MOCK_BADGES.map(badge => (
                <Card key={badge.id} className={`p-6 border-ink/5 shadow-sm text-center group transition-all ${badge.unlockedAt ? 'bg-surface' : 'bg-ink/5 grayscale opacity-50'}`}>
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${badge.unlockedAt ? 'bg-secondary/10 text-secondary' : 'bg-ink/10 text-muted'}`}>
                    {badge.icon === 'Zap' ? <Zap className="w-8 h-8 fill-current" /> : badge.icon === 'Award' ? <Award className="w-8 h-8" /> : <Star className="w-8 h-8 fill-current" />}
                  </div>
                  <h4 className="font-bold text-ink mb-1">{badge.name}</h4>
                  <p className="text-[10px] text-muted font-medium mb-4">{badge.description}</p>
                  {badge.unlockedAt ? (
                    <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Débloqué le {badge.unlockedAt}</p>
                  ) : (
                    <p className="text-[9px] font-black text-muted uppercase tracking-widest">En cours...</p>
                  )}
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-ink">Certifications obtenues</h3>
              <button 
                onClick={() => onNavigate('certifications')}
                className="text-sm font-bold text-primary hover:underline"
              >
                Accéder à mes diplômes
              </button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Physique-Chimie 4ème', date: '15 Fév 2026', score: '92%' },
                { title: 'Français 6ème', date: '02 Jan 2026', score: '88%' }
              ].map((cert, i) => (
                <div key={i} className="bg-surface p-6 rounded-[2rem] border border-ink/5 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink mb-1">{cert.title}</h4>
                      <div className="flex items-center gap-4 text-[10px] font-bold text-muted uppercase tracking-widest">
                        <span>Obtenu le {cert.date}</span>
                        <span className="text-emerald-600">Score: {cert.score}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleDownloadCertificate(cert.title)}
                    variant="ghost" 
                    icon={History} 
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    Télécharger PDF
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setIsEditing(false)}></div>
          <Card className="relative w-full max-w-xl bg-surface rounded-[2.5rem] shadow-2xl p-10">
            <button onClick={() => setIsEditing(false)} className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-xl"><X className="w-6 h-6" /></button>
            <h2 className="text-2xl font-black text-ink mb-8">Modifier le Profil</h2>
            <div className="space-y-6">
              <Input 
                label="Nom complet" 
                value={profileData.name} 
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
              />
              <Input 
                label="Email" 
                value={profileData.email} 
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              />
              <Input 
                label="Téléphone" 
                value={profileData.phone} 
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              />
              <Input 
                label="Localisation" 
                value={profileData.location} 
                onChange={(e) => setProfileData({...profileData, location: e.target.value})}
              />
              <Button onClick={handleSave} className="w-full font-black uppercase tracking-widest py-4">Enregistrer les modifications</Button>
            </div>
          </Card>
        </div>
      )}

      {/* Photo Options Modal */}
      {showPhotoOptions && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setShowPhotoOptions(false)}></div>
          <Card className="relative w-full max-w-sm bg-surface rounded-[2.5rem] shadow-2xl p-8">
            <button onClick={() => setShowPhotoOptions(false)} className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-xl"><X className="w-6 h-6" /></button>
            <h3 className="text-xl font-black text-ink mb-6 text-center">Photo de Profil</h3>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={startCamera}
                className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-primary/5 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-ink">Prendre</span>
              </button>
              <button 
                onClick={handleOpenFilePicker}
                className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-secondary/5 hover:bg-secondary/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-ink">Importer</span>
              </button>
            </div>
          </Card>
        </div>
      )}

      {/* Camera Capture Modal */}
      {showCamera && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/90 backdrop-blur-md"></div>
          <Card className="relative w-full max-w-2xl bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="relative aspect-video bg-black">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={stopCamera} 
                className="absolute top-6 right-6 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-2xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 flex items-center justify-center gap-6 bg-surface">
              <button 
                onClick={stopCamera}
                className="w-14 h-14 rounded-2xl bg-ink/5 text-muted flex items-center justify-center hover:bg-ink/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <button 
                onClick={capturePhoto}
                className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-105 transition-transform border-8 border-primary/20"
              >
                <div className="w-8 h-8 rounded-full border-4 border-white"></div>
              </button>
              <button 
                className="w-14 h-14 rounded-2xl bg-ink/5 text-muted flex items-center justify-center hover:bg-ink/10 transition-colors"
              >
                <RefreshCw className="w-6 h-6" />
              </button>
            </div>
            <canvas ref={canvasRef} className="hidden" />
          </Card>
        </div>
      )}
    </div>
  );
};
