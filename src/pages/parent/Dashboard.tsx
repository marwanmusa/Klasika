import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { parents, students } from '@/data/users';
import { getAttendanceStats } from '@/data/attendance';
import { grades, assignments, getGradeLetter } from '@/data/grades';
import { announcements } from '@/data/announcements';
import { getThreadsForUser } from '@/data/messages';
import { CalendarCheck, GraduationCap, Megaphone, MessageCircle } from 'lucide-react';

export default function ParentDashboard() {
  const parent = parents[0]; // Ibu Kartini (children: Aisha s001, Dewi s003)
  const children = students.filter(s => parent.childrenIds.includes(s.id));
  const [selectedChildId, setSelectedChildId] = useState(children[0].id);
  const child = children.find(c => c.id === selectedChildId)!;
  const stats = getAttendanceStats(child.id);
  const threads = getThreadsForUser(parent.id);
  const unreadTotal = threads.reduce((sum, t) => sum + t.unreadCount, 0);

  const recentGrades = grades
    .filter(g => g.studentId === child.id)
    .sort((a, b) => new Date(b.gradedAt).getTime() - new Date(a.gradedAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Child Switcher */}
      {children.length > 1 && (
        <div className="flex gap-2">
          {children.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChildId(c.id)}
              className="px-4 py-2 cursor-pointer transition-all"
              style={{
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 450,
                border: selectedChildId === c.id ? 'none' : '1px solid #a3a6af',
                background: selectedChildId === c.id ? '#17191c' : 'transparent',
                color: selectedChildId === c.id ? '#ffffff' : '#17191c',
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {/* Welcome */}
      <div>
        <h1 className="font-display" style={{ fontSize: 32, color: '#17191c', fontWeight: 400, margin: '0 0 4px 0', letterSpacing: '-0.025em' }}>
          Good evening, {parent.name.split(' ').slice(0, 2).join(' ')}
        </h1>
        <p style={{ fontSize: 16, color: '#4c4c4c', margin: 0 }}>
          Viewing: <strong>{child.name}</strong> — {child.className}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card style={{ background: '#fbe1d1' }}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: 13, color: '#5d2a1a' }}>GPA</span>
              <GraduationCap size={18} style={{ color: '#5d2a1a' }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 480, color: '#5d2a1a' }}>{child.gpa.toFixed(2)}</span>
          </CardContent>
        </Card>
        <Card style={{ background: '#d3e3fc' }}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: 13, color: '#17191c' }}>Attendance</span>
              <CalendarCheck size={18} style={{ color: '#4a90e2' }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 480, color: '#17191c' }}>{stats.presentRate}%</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: 13, color: '#777b86' }}>Announcements</span>
              <Megaphone size={18} style={{ color: '#777b86' }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 480, color: '#17191c' }}>{announcements.length}</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: 13, color: '#777b86' }}>Unread Messages</span>
              <MessageCircle size={18} style={{ color: '#777b86' }} />
            </div>
            <span style={{ fontSize: 28, fontWeight: 480, color: '#17191c' }}>{unreadTotal}</span>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-6">
          <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: '0 0 16px 0' }}>Recent Grades</h3>
          <div className="space-y-3">
            {recentGrades.map((g) => {
              const a = assignments.find(a => a.id === g.assignmentId);
              const pct = (g.score / g.maxScore) * 100;
              return (
                <div key={g.id} className="flex items-center justify-between p-3" style={{ borderRadius: 12, background: '#f7f7f8' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{a?.title}</div>
                    <div style={{ fontSize: 12, color: '#a3a6af' }}>
                      {new Date(g.gradedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: 14, fontWeight: 480, color: pct >= 80 ? '#3d6b4f' : pct >= 60 ? '#7a6230' : '#8b4a2a' }}>
                      {g.score}/{g.maxScore}
                    </span>
                    <Badge style={{ background: pct >= 90 ? '#fbe1d1' : '#f7f7f8', color: pct >= 90 ? '#5d2a1a' : '#777b86', border: 'none' }}>
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
  );
}
