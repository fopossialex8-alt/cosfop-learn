import { Course, Badge, Notification } from '../types';

export const GABON_COURSES: Course[] = [
  {
    id: 'math-3eme-1',
    title: 'Mathématiques 3ème : Calcul Littéral',
    instructor: 'M. Obiang',
    description: 'Maîtrisez les développements, factorisations et identités remarquables selon le programme officiel du Gabon.',
    price: 5000,
    duration: '12h',
    level: 'Débutant',
    category: 'Mathématiques',
    thumbnail: 'https://picsum.photos/seed/math3/800/600',
    rating: 4.8,
    studentsCount: 1250,
    isLive: true,
    nextLive: '2026-03-10T15:00:00Z',
    modules: [
      {
        id: 'm1',
        title: 'Développement et Factorisation',
        lessons: [
          { id: 'l1', title: 'Rappels sur la distributivité', duration: '15:00', type: 'video' },
          { id: 'l2', title: 'Les identités remarquables', duration: '20:00', type: 'video' },
          { id: 'l3', title: 'Exercices d\'application', duration: '30:00', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'pc-4eme-1',
    title: 'Physique-Chimie 4ème : L\'Air et ses propriétés',
    instructor: 'Mme. Ndong',
    description: 'Tout savoir sur la composition de l\'air et les combustions. Préparation intensive pour les évaluations.',
    price: 3500,
    duration: '8h',
    level: 'Débutant',
    category: 'Physique-Chimie',
    thumbnail: 'https://picsum.photos/seed/pc4/800/600',
    rating: 4.6,
    studentsCount: 850,
    modules: []
  },
  {
    id: 'fr-6eme-1',
    title: 'Français 6ème : Grammaire et Orthographe',
    instructor: 'M. Mba',
    description: 'Renforcez vos bases en français. Conjugaison, accords et analyse grammaticale.',
    price: 3000,
    duration: '15h',
    level: 'Débutant',
    category: 'Français',
    thumbnail: 'https://picsum.photos/seed/fr6/800/600',
    rating: 4.9,
    studentsCount: 2100,
    modules: []
  },
  {
    id: 'svt-3eme-1',
    title: 'SVT 3ème : Immunologie Humaine',
    instructor: 'Dr. Essono',
    description: 'Comprendre le système immunitaire, les vaccins et les défenses de l\'organisme.',
    price: 4500,
    duration: '10h',
    level: 'Intermédiaire',
    category: 'SVT',
    thumbnail: 'https://picsum.photos/seed/svt3/800/600',
    rating: 4.7,
    studentsCount: 1100,
    isLive: false,
    modules: []
  },
  {
    id: 'hg-terminale-1',
    title: 'Histoire-Géo : Le Gabon de 1960 à nos jours',
    instructor: 'M. Zue',
    description: 'Un cours complet sur l\'histoire politique et économique du Gabon contemporain.',
    price: 6000,
    duration: '20h',
    level: 'Avancé',
    category: 'Histoire-Géographie',
    thumbnail: 'https://picsum.photos/seed/hg-gabon/800/600',
    rating: 4.9,
    studentsCount: 500,
    modules: []
  }
];

export const MOCK_BADGES: Badge[] = [
  { id: 'b1', name: 'Premier Pas', description: 'A terminé son premier cours', icon: 'Award', unlockedAt: '2026-03-01' },
  { id: 'b2', name: 'Assidu', description: 'S\'est connecté 7 jours de suite', icon: 'Zap', unlockedAt: '2026-03-07' },
  { id: 'b3', name: 'Génie Maths', description: 'A obtenu 100% au quiz de calcul littéral', icon: 'Star' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'Cours en direct', message: 'Le cours de Maths 3ème commence dans 15 minutes !', type: 'live', date: '2026-03-09T14:45:00Z', read: false },
  { id: 'n2', title: 'Nouveau cours', message: 'Découvrez le nouveau cours de SVT sur la génétique.', type: 'info', date: '2026-03-08T10:00:00Z', read: true },
  { id: 'n3', title: 'Paiement réussi', message: 'Votre achat du cours de Physique-Chimie a été confirmé.', type: 'success', date: '2026-03-07T16:30:00Z', read: true },
];
