import { Navigate, Route, Routes } from 'react-router-dom';
import type { UserRole } from '@/types';
import { useAuth } from '@/hooks/useAuth';
import { teachers, students, parents } from '@/data/users';
import AppShell from '@/components/layout/AppShell';
import ChatPage from '@/components/shared/ChatPage';
import LoginPage from '@/pages/auth/LoginPage';

// Teacher pages
import TeacherDashboard from '@/pages/teacher/Dashboard';
import TeacherStudents from '@/pages/teacher/Students';
import TeacherGrades from '@/pages/teacher/Grades';
import TeacherAttendance from '@/pages/teacher/Attendance';
import TeacherAssignments from '@/pages/teacher/Assignments';
import TeacherReports from '@/pages/teacher/Reports';
import TeacherAnnouncements from '@/pages/teacher/Announcements';
import TeacherBlog from '@/pages/teacher/Blog';

// Student pages
import StudentDashboard from '@/pages/student/Dashboard';
import StudentGrades from '@/pages/student/Grades';
import StudentProgress from '@/pages/student/Progress';
import StudentAttendance from '@/pages/student/Attendance';
import StudentAssignments from '@/pages/student/Assignments';
import StudentSchedule from '@/pages/student/Schedule';
import StudentAnnouncements from '@/pages/student/Announcements';

// Parent pages
import ParentDashboard from '@/pages/parent/Dashboard';
import ParentProgress from '@/pages/parent/Progress';
import ParentAttendance from '@/pages/parent/Attendance';
import ParentGrades from '@/pages/parent/Grades';
import ParentFees from '@/pages/parent/Fees';
import ParentAnnouncements from '@/pages/parent/Announcements';

function App() {
  const { user, isAuthenticated, login, logout } = useAuth();

  // Returns either a redirect or the role's AppShell (which renders nested routes via <Outlet />)
  const guard = (role: UserRole) => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (user!.role !== role) return <Navigate to={`/${user!.role}/dashboard`} replace />;
    return <AppShell user={user!} onLogout={logout} />;
  };

  const home = isAuthenticated ? `/${user!.role}/dashboard` : '/login';

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to={home} replace /> : <LoginPage onLogin={login} />}
      />

      {/* Teacher */}
      <Route path="/teacher" element={guard('teacher')}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<TeacherDashboard />} />
        <Route path="students" element={<TeacherStudents />} />
        <Route path="grades" element={<TeacherGrades />} />
        <Route path="attendance" element={<TeacherAttendance />} />
        <Route path="assignments" element={<TeacherAssignments />} />
        <Route path="reports" element={<TeacherReports />} />
        <Route path="announcements" element={<TeacherAnnouncements />} />
        <Route path="chat" element={<ChatPage userId={teachers[0].id} />} />
        <Route path="blog" element={<TeacherBlog />} />
      </Route>

      {/* Student */}
      <Route path="/student" element={guard('student')}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="grades" element={<StudentGrades />} />
        <Route path="progress" element={<StudentProgress />} />
        <Route path="attendance" element={<StudentAttendance />} />
        <Route path="assignments" element={<StudentAssignments />} />
        <Route path="schedule" element={<StudentSchedule />} />
        <Route path="announcements" element={<StudentAnnouncements />} />
        <Route path="chat" element={<ChatPage userId={students[0].id} />} />
      </Route>

      {/* Parent */}
      <Route path="/parent" element={guard('parent')}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<ParentDashboard />} />
        <Route path="progress" element={<ParentProgress />} />
        <Route path="attendance" element={<ParentAttendance />} />
        <Route path="grades" element={<ParentGrades />} />
        <Route path="fees" element={<ParentFees />} />
        <Route path="announcements" element={<ParentAnnouncements />} />
        <Route path="chat" element={<ChatPage userId={parents[0].id} />} />
      </Route>

      <Route path="*" element={<Navigate to={home} replace />} />
    </Routes>
  );
}

export default App;
