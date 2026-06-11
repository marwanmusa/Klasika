import { Outlet, useLocation } from 'react-router-dom';
import type { User } from '@/types';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

// Map routes to page titles
const pageTitles: Record<string, string> = {
  '/teacher/dashboard': 'Dashboard',
  '/teacher/students': 'Students',
  '/teacher/grades': 'Grades',
  '/teacher/attendance': 'Attendance',
  '/teacher/assignments': 'Assignments',
  '/teacher/reports': 'Progress Reports',
  '/teacher/announcements': 'Announcements',
  '/teacher/chat': 'Messages',
  '/teacher/blog': 'Blog',
  '/student/dashboard': 'Dashboard',
  '/student/grades': 'My Grades',
  '/student/progress': 'Progress Report',
  '/student/attendance': 'Attendance',
  '/student/assignments': 'Assignments',
  '/student/schedule': 'Schedule',
  '/student/announcements': 'Announcements & Blog',
  '/student/chat': 'Messages',
  '/parent/dashboard': 'Dashboard',
  '/parent/progress': 'Child\'s Progress',
  '/parent/attendance': 'Child\'s Attendance',
  '/parent/grades': 'Child\'s Grades',
  '/parent/fees': 'Fees & Payments',
  '/parent/announcements': 'Announcements & Events',
  '/parent/chat': 'Messages',
};

interface AppShellProps {
  user: User;
  onLogout: () => void;
}

export default function AppShell({ user, onLogout }: AppShellProps) {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Klasika';

  return (
    <div className="flex min-h-screen" style={{ background: '#ffffff' }}>
      <Sidebar role={user.role} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar title={title} user={user} onLogout={onLogout} />
        <main
          className="flex-1 p-6 lg:p-8 overflow-y-auto"
          style={{ background: '#ffffff' }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
