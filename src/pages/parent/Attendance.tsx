import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { parents, students } from '@/data/users';
import { getAttendanceByStudent, getAttendanceStats } from '@/data/attendance';
import type { AttendanceStatus } from '@/types';
import { AlertCircle } from 'lucide-react';
import ChildSwitcher from '@/components/shared/ChildSwitcher';

const statusColors: Record<AttendanceStatus, { bg: string; dot: string }> = {
  present: { bg: '#d1e8d5', dot: '#3d6b4f' },
  absent: { bg: '#f0ddd5', dot: '#8b4a2a' },
  late: { bg: '#f0e9d0', dot: '#7a6230' },
};

export default function ParentAttendance() {
  const parent = parents[0];
  const children = students.filter((s) => parent.childrenIds.includes(s.id));
  const [selectedChildId, setSelectedChildId] = useState(children[0].id);
  const child = children.find((c) => c.id === selectedChildId)!;

  const records = getAttendanceByStudent(child.id);
  const stats = getAttendanceStats(child.id);

  const calendarDays: { date: number; status?: AttendanceStatus; isWeekend: boolean }[] = [];
  const firstDay = new Date('2024-11-01').getDay();
  for (let i = 0; i < firstDay; i++) calendarDays.push({ date: 0, isWeekend: false });
  for (let d = 1; d <= 30; d++) {
    const date = new Date(2024, 10, d);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const dateStr = `2024-11-${d.toString().padStart(2, '0')}`;
    const record = records.find((r) => r.date === dateStr);
    calendarDays.push({ date: d, status: record?.status, isWeekend });
  }

  return (
    <div className="space-y-6">
      <ChildSwitcher children={children} selectedId={selectedChildId} onSelect={setSelectedChildId} />

      <p style={{ fontSize: 14, color: '#777b86', margin: 0 }}>
        Viewing: <strong style={{ color: '#17191c', fontWeight: 500 }}>{child.name}</strong>'s attendance
      </p>

      {/* Absence callout */}
      {stats.absent > 0 && (
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl" style={{ background: '#f0ddd5' }}>
          <AlertCircle size={20} style={{ color: '#8b4a2a' }} />
          <span style={{ fontSize: 14, fontWeight: 450, color: '#8b4a2a' }}>
            {child.name} has {stats.absent} recorded {stats.absent === 1 ? 'absence' : 'absences'} this term.
          </span>
        </div>
      )}

      {/* Stats */}
      <div className="flex flex-wrap gap-4">
        <div className="px-5 py-3 rounded-2xl" style={{ background: '#d1e8d5' }}>
          <div style={{ fontSize: 12, color: '#3d6b4f', fontWeight: 500 }}>Present Rate</div>
          <div style={{ fontSize: 24, fontWeight: 480, color: '#3d6b4f' }}>{stats.presentRate}%</div>
        </div>
        <div className="px-5 py-3 rounded-2xl" style={{ background: '#f0ddd5' }}>
          <div style={{ fontSize: 12, color: '#8b4a2a', fontWeight: 500 }}>Total Absences</div>
          <div style={{ fontSize: 24, fontWeight: 480, color: '#8b4a2a' }}>{stats.absent}</div>
        </div>
        <div className="px-5 py-3 rounded-2xl" style={{ background: '#f0e9d0' }}>
          <div style={{ fontSize: 12, color: '#7a6230', fontWeight: 500 }}>Total Late</div>
          <div style={{ fontSize: 24, fontWeight: 480, color: '#7a6230' }}>{stats.late}</div>
        </div>
      </div>

      {/* Calendar */}
      <Card>
        <CardContent className="p-6">
          <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: '0 0 16px 0' }}>November 2024</h3>
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="text-center" style={{ fontSize: 12, color: '#a3a6af', fontWeight: 500 }}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, i) => (
              <div
                key={i}
                className="h-10 flex items-center justify-center rounded-lg"
                style={{
                  background: day.date === 0 ? 'transparent' :
                    day.isWeekend ? '#f7f7f8' :
                    day.status ? statusColors[day.status].bg : '#f7f7f8',
                  fontSize: 13,
                  fontWeight: 480,
                  color: day.date === 0 ? 'transparent' :
                    day.isWeekend ? '#a3a6af' :
                    day.status ? statusColors[day.status].dot : '#a3a6af',
                }}
              >
                {day.date > 0 ? day.date : ''}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {Object.entries(statusColors).map(([status, colors]) => (
              <div key={status} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: colors.dot }} />
                <span style={{ fontSize: 12, color: '#777b86', textTransform: 'capitalize' }}>{status}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Records Table */}
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #a3a6af' }}>
                <th className="text-left px-6 py-3">Date</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Note</th>
              </tr>
            </thead>
            <tbody>
              {records.slice(0, 15).map((r) => (
                <tr key={r.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                  <td className="px-6 py-3" style={{ fontSize: 14 }}>
                    {new Date(r.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="px-6 py-3">
                    <Badge style={{ background: statusColors[r.status].bg, color: statusColors[r.status].dot, border: 'none', textTransform: 'capitalize' }}>
                      {r.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-3" style={{ fontSize: 13, color: '#777b86' }}>{r.note || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
