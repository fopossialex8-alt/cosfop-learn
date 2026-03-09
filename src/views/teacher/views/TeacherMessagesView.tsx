import React, { useState } from 'react';
import { 
  Search, 
  MessageSquare, 
  Users, 
  Send, 
  Paperclip, 
  MoreVertical, 
  Phone, 
  Video, 
  Info,
  CheckCheck
} from 'lucide-react';
import { Card, Button, Input } from '../../../components/UI';

interface MessagesProps {
  theme: 'light' | 'dark';
}

export const TeacherMessagesView = ({ theme }: MessagesProps) => {
  const [activeChat, setActiveChat] = useState('1');
  const [message, setMessage] = useState('');

  const MOCK_CHATS = [
    { id: '1', name: 'Marcelle Nguema', lastMsg: 'Bonjour Monsieur, j\'ai une question...', time: '12:45', unread: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcelle', type: 'individual' },
    { id: '2', name: 'Groupe Mathématiques 3ème', lastMsg: 'Samuel: Merci pour le live !', time: 'Hier', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MathGroup', type: 'group' },
    { id: '3', name: 'Jean-Paul Mba', lastMsg: 'Le PDF ne s\'ouvre pas.', time: 'Hier', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean', type: 'individual' },
    { id: '4', name: 'Groupe Physique-Chimie 4ème', lastMsg: 'Aïcha: Quand est le prochain TP ?', time: 'Lun', unread: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhysicsGroup', type: 'group' },
  ];

  const MOCK_MESSAGES = [
    { id: '1', sender: 'Marcelle Nguema', content: 'Bonjour Monsieur, j\'ai une question sur le module 3 concernant les intégrales.', time: '12:40', isMe: false },
    { id: '2', sender: 'Me', content: 'Bonjour Marcelle, bien sûr ! Quelle est ta question précisément ?', time: '12:42', isMe: true },
    { id: '3', sender: 'Marcelle Nguema', content: 'Je ne comprends pas comment on passe de la ligne 4 à la ligne 5 dans l\'exemple 2.', time: '12:45', isMe: false },
  ];

  return (
    <div className="h-[calc(100vh-160px)] flex gap-8">
      {/* Sidebar: Chats List */}
      <div className="w-80 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-ink">Messages</h1>
          <button className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors">
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Rechercher une discussion..." 
            className="w-full pl-11 pr-4 py-3 bg-surface border border-ink/5 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-hide">
          {MOCK_CHATS.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`w-full p-4 rounded-3xl flex items-center gap-4 transition-all ${
                activeChat === chat.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border border-ink/5 hover:border-primary/20'
              }`}
            >
              <div className="relative">
                <img src={chat.avatar} className="w-12 h-12 rounded-2xl border-2 border-white shadow-sm" alt={chat.name} />
                {chat.type === 'group' && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary text-white rounded-lg flex items-center justify-center border-2 border-white">
                    <Users className="w-3 h-3" />
                  </div>
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className={`text-sm font-black truncate ${activeChat === chat.id ? 'text-white' : 'text-ink'}`}>{chat.name}</p>
                  <span className={`text-[10px] font-bold ${activeChat === chat.id ? 'text-white/70' : 'text-muted'}`}>{chat.time}</span>
                </div>
                <p className={`text-xs truncate ${activeChat === chat.id ? 'text-white/80' : 'text-muted'}`}>{chat.lastMsg}</p>
              </div>
              {chat.unread > 0 && activeChat !== chat.id && (
                <span className="w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                  {chat.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main: Chat Window */}
      <Card className="flex-1 flex flex-col border-ink/5 shadow-sm overflow-hidden">
        {/* Chat Header */}
        <div className="p-6 border-b border-ink/5 flex items-center justify-between bg-surface/50">
          <div className="flex items-center gap-4">
            <img src={MOCK_CHATS.find(c => c.id === activeChat)?.avatar} className="w-12 h-12 rounded-2xl border border-ink/5" alt="Active Chat" />
            <div>
              <h3 className="text-lg font-bold text-ink">{MOCK_CHATS.find(c => c.id === activeChat)?.name}</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-xs text-muted font-medium">En ligne</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-3 text-muted hover:bg-primary/5 hover:text-primary rounded-xl transition-all"><Phone className="w-5 h-5" /></button>
            <button className="p-3 text-muted hover:bg-primary/5 hover:text-primary rounded-xl transition-all"><Video className="w-5 h-5" /></button>
            <button className="p-3 text-muted hover:bg-primary/5 hover:text-primary rounded-xl transition-all"><Info className="w-5 h-5" /></button>
            <button className="p-3 text-muted hover:bg-primary/5 hover:text-primary rounded-xl transition-all"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide bg-ink/[0.02]">
          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] space-y-1 ${msg.isMe ? 'items-end' : 'items-start'}`}>
                <div className={`p-4 rounded-[2rem] text-sm font-medium shadow-sm ${
                  msg.isMe ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-ink rounded-tl-none border border-ink/5'
                }`}>
                  {msg.content}
                </div>
                <div className="flex items-center gap-2 px-2">
                  <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{msg.time}</span>
                  {msg.isMe && <CheckCheck className="w-3 h-3 text-primary" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-ink/5 bg-surface/50">
          <div className="flex items-center gap-4">
            <button className="p-3 text-muted hover:bg-primary/5 hover:text-primary rounded-xl transition-all"><Paperclip className="w-5 h-5" /></button>
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Tapez votre message ici..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && setMessage('')}
                className="w-full pl-6 pr-12 py-4 bg-white border border-ink/5 rounded-[2rem] text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <button 
                onClick={() => setMessage('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const PlusCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
