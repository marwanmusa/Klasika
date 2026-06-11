import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { students } from '@/data/users';
import { getAttendanceStats } from '@/data/attendance';
import { grades, assignments, getGradeLetter } from '@/data/grades';
import { getScheduleByClass } from '@/data/classes';
import { CalendarCheck, ClipboardList, GraduationCap, TrendingUp } from 'lucide-react';

export default function StudentDashboard() {
  const student = students[0]; // Default Aisha Putri
  const stats = getAttendanceStats(student.id);
  const schedule = getScheduleByClass(student.classId);
  const todaySchedule = schedule.filter((s) => s.day === 'Monday');

  // Recent grades
  const studentGrades = grades
    .filter((g) => g.studentId === student.id)
    .sort((a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime())
    .slice(0, 5);

  // Count pending assignments
  const pendingCount = 3; // Simulated

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <Card style={{ background: '#fbe1d1' }}>
        <CardContent className="p-6">
          <h1 className="font-display" style={{ fontSize: 32, color: '#17191c', fontWeight: 400, margin: '0 0 4px 0', letterSpacing: '-0.025em' }}>
            Welcome back, {student.name.split(' ')[0]}
          </h1>
          <p style={{ fontSize: 16, color: '#5d2a1a', margin: '0 0 12px 0' }}>{student.className}</p>
          <Badge style={{ background: '#5d2a1a', color: '#ffffff', border: 'none', fontSize: 14, padding: '4px 14px' }}>
            GPA: {student.gpa.toFixed(2)}
          </Badge>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: 13, color: '#777b86' }}>Attendance Rate</span>
              <CalendarCheck size={18} style={{ color: '#777b86' }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 480, color: '#17191c' }}>{stats.presentRate}%</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: 13, color: '#777b86' }}>Assignments Due</span>
              <ClipboardList size={18} style={{ color: '#777b86' }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 480, color: '#17191c' }}>{pendingCount}</span>
          </CardContent>
        </Card>
        <Card style={{ background: '#d3e3fc' }}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: 13, color: '#777b86' }}>Average Grade</span>
              <TrendingUp size={18} style={{ color: '#4a90e2' }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 480, color: '#17191c' }}>84%</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardContent className="p-6">
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: '0 0 16px 0' }}>Today's Schedule</h3>
            <div className="space-y-3">
              {todaySchedule.map((slot, i) => (
                <div key={i} className="flex items-center gap-4 p-3" style={{ borderRadius: 12, background: '#f7f7f8' }}>
                  <div className="w-1 h-10 rounded-full" style={{ background: slot.color }} />
                  <div className="flex-1">
                    <div style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{slot.subjectName}</div>
                    <div style={{ fontSize: 13, color: '#777b86' }}>{slot.timeStart} – {slot.timeEnd} · {slot.room}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardContent className="p-6">
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: '0 0 16px 0' }}>Recent Grades</h3>
            <div className="space-y-3">
              {studentGrades.map((g) => {
                const assignment = assignments.find((a) => a.id === g.assignmentId);
                const pct = (g.score / g.maxScore) * 100;
                return (
                  <div key={g.id} className="flex items-center justify-between p-3" style={{ borderRadius: 12, background: '#f7f7f8' }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{assignment?.title}</div>
                      <div style={{ fontSize: 12, color: '#a3a6af' }}>{new Date(g.gradedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 14, fontWeight: 480, color: pct >= 80 ? '#3d6b4f' : pct >= 60 ? '#7a6230' : '#8b4a2a' }}>
                        {g.score}/{g.maxScore}
                      </span>
                      <Badge style={{
                        background: pct >= 90 ? '#fbe1d1' : '#f7f7f8',
                        color: pct >= 90 ? '#5d2a1a' : '#777b86',
                        border: 'none',
                      }}>
                        {getGradeLetter(pct)}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
