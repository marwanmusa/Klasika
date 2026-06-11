import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { students } from '@/data/users';
import { classes } from '@/data/classes';
import { announcements } from '@/data/announcements';
import { scheduleGrade10A } from '@/data/classes';
import { Users, BookOpen, ClipboardList, Megaphone, CalendarCheck, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const summaryCards = [
  { label: 'Total Students', value: students.length, icon: Users, bg: '#ffffff' },
  { label: 'Classes Today', value: 3, icon: BookOpen, bg: '#fbe1d1' },
  { label: 'Pending to Grade', value: 12, icon: ClipboardList, bg: '#d3e3fc' },
  { label: 'Announcements', value: announcements.length, icon: Megaphone, bg: '#ffffff' },
];

const recentActivity = [
  { text: 'Graded Aisha Putri — Algebra Quiz 1', time: '2 hours ago', type: 'grade' },
  { text: 'Marked attendance for Grade 10A', time: '3 hours ago', type: 'attendance' },
  { text: 'Graded Dewi Sari — Linear Equations', time: '5 hours ago', type: 'grade' },
  { text: 'Posted new announcement: Final Exam Schedule', time: '1 day ago', type: 'announcement' },
  { text: 'Graded Rizki Pratama — Midterm Exam', time: '2 days ago', type: 'grade' },
];

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const todaySchedule = scheduleGrade10A.filter((s) => s.day === 'Monday');

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1
          className="font-display"
          style={{ fontSize: 32, color: '#17191c', fontWeight: 400, margin: '0 0 4px 0', letterSpacing: '-0.025em' }}
        >
          Good evening, Sarah
        </h1>
        <p style={{ fontSize: 16, color: '#4c4c4c', fontWeight: 400, margin: 0 }}>
          Here's what's happening with your classes today.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.label} style={{ background: card.bg }}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontSize: 13, color: '#777b86', fontWeight: 400 }}>{card.label}</span>
                  <Icon size={18} style={{ color: card.bg === '#fbe1d1' ? '#5d2a1a' : '#777b86' }} />
                </div>
                <span style={{ fontSize: 28, fontWeight: 480, color: '#17191c', letterSpacing: '-0.009em' }}>
                  {card.value}
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardContent className="p-6">
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: '0 0 16px 0' }}>
              Today's Schedule
            </h3>
            <div className="space-y-3">
              {todaySchedule.map((slot, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3"
                  style={{ borderRadius: 12, background: '#f7f7f8' }}
                >
                  <div
                    className="w-1 h-10 rounded-full"
                    style={{ background: slot.color }}
                  />
                  <div className="flex-1">
                    <div style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>
                      {slot.subjectName}
                    </div>
                    <div style={{ fontSize: 13, color: '#777b86' }}>
                      {slot.timeStart} – {slot.timeEnd} · {slot.room}
                    </div>
                  </div>
                  <Badge
                    style={{
                      background: slot.color,
                      color: '#17191c',
                      fontSize: 12,
                      fontWeight: 450,
                      borderRadius: 9999,
                      border: 'none',
                    }}
                  >
                    {classes.find((c) => c.subjectIds.includes(slot.subjectId))?.name || 'Grade 10A'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardContent className="p-6">
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: '0 0 16px 0' }}>
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                    style={{
                      background: item.type === 'grade' ? '#fbe1d1' :
                                  item.type === 'attendance' ? '#d3e3fc' : '#f7f7f8',
                    }}
                  >
                    {item.type === 'grade' ? <GraduationCap size={14} style={{ color: '#5d2a1a' }} /> :
                     item.type === 'attendance' ? <CalendarCheck size={14} style={{ color: '#4a90e2' }} /> :
                     <Megaphone size={14} style={{ color: '#777b86' }} />}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, color: '#17191c' }}>{item.text}</div>
                    <div style={{ fontSize: 12, color: '#a3a6af' }}>{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => navigate('/teacher/attendance')}
          className="px-5 py-2.5 cursor-pointer transition-opacity hover:opacity-80"
          style={{ borderRadius: 9999, background: '#17191c', color: '#ffffff', fontSize: 14, fontWeight: 450, border: 'none' }}
        >
          Mark Attendance
        </button>
        <button
          onClick={() => navigate('/teacher/grades')}
          className="px-5 py-2.5 cursor-pointer transition-opacity hover:opacity-80"
          style={{ borderRadius: 9999, background: 'transparent', color: '#17191c', fontSize: 14, fontWeight: 450, border: '1px solid #a3a6af' }}
        >
          Add Grade
        </button>
        <button
          onClick={() => navigate('/teacher/announcements')}
          className="px-5 py-2.5 cursor-pointer transition-opacity hover:opacity-80"
          style={{ borderRadius: 9999, background: 'transparent', color: '#17191c', fontSize: 14, fontWeight: 450, border: '1px solid #a3a6af' }}
        >
          Post Announcement
        </button>
      </div>
    </div>
  );
}
