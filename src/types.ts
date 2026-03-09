/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: string;
  thumbnail: string;
  rating: number;
  studentsCount: number;
  isLive?: boolean;
  nextLive?: string;
  modules?: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'live' | 'quiz' | 'document';
  completed?: boolean;
  videoUrl?: string;
}

export interface Transaction {
  id: string;
  courseId: string;
  amount: number;
  date: string;
  status: 'success' | 'pending' | 'failed';
  method: 'MTN' | 'Orange' | 'Card';
}

export interface CourseProgress {
  courseId: string;
  completedLessons: string[];
  lastAccessed: string;
  progress: number; // 0 to 100
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'live';
  date: string;
  read: boolean;
}

export type StudentSubView = 
  | 'dashboard'
  | 'catalog'
  | 'my_courses'
  | 'favorites'
  | 'payments'
  | 'certifications'
  | 'support'
  | 'forum'
  | 'recommendations'
  | 'events'
  | 'leaderboard'
  | 'profile'
  | 'settings';

export type TeacherSubView = 
  | 'dashboard'
  | 'my_courses'
  | 'create_course'
  | 'plan_live'
  | 'my_students'
  | 'messages'
  | 'reviews'
  | 'statistics'
  | 'certifications'
  | 'payments'
  | 'promotions'
  | 'resources'
  | 'support'
  | 'settings'
  | 'profile';

export type View = 
  | 'landing'
  | 'login'
  | 'signup'
  | 'student_app'
  | 'teacher_app';
