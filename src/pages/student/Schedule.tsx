import { Card, CardContent } from '@/components/ui/card';
import { students } from '@/data/users';
import { getScheduleByClass } from '@/data/classes';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const;
const timeSlots = [
  { start: '08:00', end: '09:30' },
  { start: '09:45', end: '11:15' },
  { start: '12:00', end: '13:30' },
];

export default function StudentSchedule() {
  const student = students[0];
  const schedule = getScheduleByClass(student.classId);

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left px-4 py-3" style={{ minWidth: 80 }}>Time</th>
                  {days.map((day) => (
                    <th key={day} className="text-center px-4 py-3" style={{ minWidth: 140 }}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, si) => (
                  <tr key={si} style={{ borderTop: '1px solid #e5e5e5' }}>
                    <td className="px-4 py-4 align-top">
                      <div style={{ fontSize: 13, fontWeight: 480, color: '#17191c' }}>{slot.start}</div>
                      <div style={{ fontSize: 12, color: '#a3a6af' }}>{slot.end}</div>
                    </td>
                    {days.map((day) => {
                      const cell = schedule.find(
                        (s) => s.day === day && s.timeStart === slot.start
                      );
                      return (
                        <td key={day} className="px-2 py-2">
                          {cell ? (
                            <div
                              className="p-3 rounded-xl text-center"
                              style={{ background: cell.color }}
                            >
                              <div style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{cell.subjectName}</div>
                              <div style={{ fontSize: 12, color: '#4c4c4c' }}>{cell.room}</div>
                              <div style={{ fontSize: 11, color: '#777b86' }}>{cell.teacherName}</div>
                            </div>
                          ) : (
                            <div className="p-3 text-center" style={{ color: '#a3a6af', fontSize: 13 }}>—</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
