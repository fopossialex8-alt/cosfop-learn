import { Course, User } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Jean-Pierre Moudounga',
  email: 'jeanpierre@example.com',
  role: 'student',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JeanPierre',
};

export const MOCK_TEACHER: User = {
  id: 't1',
  name: 'Prof. Marie-Claire Obiang',
  email: 'marieclaire@cosfop.com',
  role: 'teacher',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarieClaire',
};

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Développement Web avec React & Node.js',
    instructor: 'Prof. Marie-Claire Obiang',
    description: 'Apprenez à créer des applications web modernes de A à Z avec les technologies les plus demandées au Gabon.',
    price: 25000,
    duration: '24h',
    level: 'Intermédiaire',
    category: 'Développement',
    thumbnail: 'https://picsum.photos/seed/web/800/450',
    rating: 4.8,
    studentsCount: 1250,
    isLive: true,
    nextLive: 'Aujourd\'hui à 18:00',
    modules: [
      {
        id: 'm1',
        title: 'Introduction à React',
        lessons: [
          { id: 'l1', title: 'Pourquoi React ?', duration: '10:00', type: 'video', completed: true },
          { id: 'l2', title: 'Installation et setup', duration: '15:00', type: 'video', completed: true },
          { id: 'l3', title: 'Les composants', duration: '25:00', type: 'video', completed: false },
        ]
      },
      {
        id: 'm2',
        title: 'Hooks et State Management',
        lessons: [
          { id: 'l4', title: 'useState et useEffect', duration: '30:00', type: 'video', completed: false },
          { id: 'l5', title: 'Session Live : Q&A', duration: '60:00', type: 'live', completed: false },
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: 'Marketing Digital pour Entrepreneurs',
    instructor: 'Sarah Bongo',
    description: 'Maîtrisez les réseaux sociaux et la publicité en ligne pour booster votre business au Gabon.',
    price: 15000,
    duration: '12h',
    level: 'Débutant',
    category: 'Business',
    thumbnail: 'https://picsum.photos/seed/marketing/800/450',
    rating: 4.5,
    studentsCount: 850,
  },
  {
    id: 'c3',
    title: 'Design UI/UX avec Figma',
    instructor: 'Marc Nguema',
    description: 'Créez des interfaces magnifiques et centrées utilisateur pour vos projets mobiles et web.',
    price: 20000,
    duration: '18h',
    level: 'Débutant',
    category: 'Design',
    thumbnail: 'https://picsum.photos/seed/design/800/450',
    rating: 4.9,
    studentsCount: 540,
    isLive: false,
  },
  {
    id: 'c4',
    title: 'Data Science avec Python',
    instructor: 'Prof. Alain Mba',
    description: 'Analysez des données complexes et créez des modèles prédictifs performants.',
    price: 35000,
    duration: '30h',
    level: 'Avancé',
    category: 'Data Science',
    thumbnail: 'https://picsum.photos/seed/data/800/450',
    rating: 4.7,
    studentsCount: 320,
  }
];
