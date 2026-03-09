/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { View, UserRole } from './types';
import { MOCK_USER, MOCK_TEACHER } from './mockData';
import { Layout } from './components/Layout';
import { Landing } from './views/Landing';
import { Auth } from './views/Auth';
import { StudentApp } from './views/student/StudentApp';
import { TeacherApp } from './views/teacher/TeacherApp';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [role, setRole] = useState<UserRole>('student');
  const [user, setUser] = useState(MOCK_USER);

  // Sync user object when role changes in this prototype
  useEffect(() => {
    setUser(role === 'student' ? MOCK_USER : MOCK_TEACHER);
  }, [role]);

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <Landing setView={setCurrentView} />;
      case 'login':
        return <Auth mode="login" setView={setCurrentView} setRole={setRole} />;
      case 'signup':
        return <Auth mode="signup" setView={setCurrentView} setRole={setRole} />;
      
      // Student App (Container for all student views)
      case 'student_app':
        return (
          <StudentApp 
            user={user} 
            onLogout={() => setCurrentView('landing')} 
          />
        );

      // Teacher App
      case 'teacher_app':
        return (
          <TeacherApp 
            user={user} 
            onLogout={() => setCurrentView('landing')} 
          />
        );

      default:
        return <Landing setView={setCurrentView} />;
    }
  };

  return (
    <div className="antialiased selection:bg-primary/20 selection:text-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
