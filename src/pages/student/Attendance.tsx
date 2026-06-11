import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { students } from '@/data/users';
import { getAttendanceByStudent, getAttendanceStats } from '@/data/attendance';
import type { AttendanceStatus } from '@/types';

const statusColors: Record<AttendanceStatus, { bg: string; dot: string }> = {
  present: { bg: '#d1e8d5', dot: '#3d6b4f' },
  absent: { bg: '#f0ddd5', dot: '#8b4a2a' },
  late: { bg: '#f0e9d0', dot: '#7a6230' },
};

export default function StudentAttendance() {
  const student = students[0];
  const records = getAttendanceByStudent(student.id);
  const stats = getAttendanceStats(student.id);

  // Calendar data for November 2024
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
