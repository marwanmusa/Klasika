import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { students } from '@/data/users';
import { subjects } from '@/data/classes';
import { computeSubjectAverage, getGradeLetter, getGradeTrendData, getScoreColor } from '@/data/grades';
import { getAttendanceStats } from '@/data/attendance';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StudentProgress() {
  const student = students[0];
  const stats = getAttendanceStats(student.id);
  const studentSubjects = subjects.filter(s => ['sub001','sub002','sub003','sub004'].includes(s.id));
  const classStudents = students.filter(s => s.classId === student.classId);
  const sorted = [...classStudents].sort((a, b) => b.gpa - a.gpa);
  const rank = sorted.findIndex(s => s.id === student.id) + 1;

  const allTrendData = studentSubjects.flatMap((sub) =>
    getGradeTrendData(student.id, sub.id)
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const gpaMessage = student.gpa >= 3.5 ? 'Great work! Keep it up. 🌟' :
    student.gpa >= 3.0 ? 'Good progress! You\'re on the right track.' :
    student.gpa >= 2.5 ? 'Keep pushing — you can do better!' :
    'Let\'s work together to improve your grades.';

  return (
    <div className="space-y-6">
      <Card style={{ background: '#fbe1d1' }}>
        <CardContent className="p-6">
          <h2 className="font-display" style={{ fontSize: 28, color: '#17191c', fontWeight: 400, margin: '0 0 4px 0', letterSpacing: '-0.025em' }}>
            Progress Report
          </h2>
          <p style={{ fontSize: 16, color: '#5d2a1a', margin: '0 0 16px 0' }}>{student.name} — {student.className}</p>
          <div className="flex flex-wrap gap-6">
            <div>
              <div style={{ fontSize: 12, color: '#5d2a1a', fontWeight: 500 }}>GPA</div>
              <div style={{ fontSize: 28, fontWeight: 480, color: '#5d2a1a' }}>{student.gpa.toFixed(2)}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#5d2a1a', fontWeight: 500 }}>Class Rank</div>
              <div style={{ fontSize: 28, fontWeight: 480, color: '#5d2a1a' }}>#{rank} <span style={{ fontSize: 14, fontWeight: 400 }}>of {classStudents.length}</span></div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#5d2a1a', fontWeight: 500 }}>Attendance</div>
              <div style={{ fontSize: 28, fontWeight: 480, color: '#5d2a1a' }}>{stats.presentRate}%</div>
            </div>
          </div>
          <p style={{ fontSize: 16, color: '#5d2a1a', margin: '16px 0 0 0', fontWeight: 450 }}>{gpaMessage}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #a3a6af' }}>
                <th className="text-left px-6 py-3">Subject</th>
                <th className="text-center px-6 py-3">Average</th>
                <th className="text-center px-6 py-3">Grade</th>
              </tr>
            </thead>
            <tbody>
              {studentSubjects.map((sub) => {
                const avg = computeSubjectAverage(student.id, sub.id);
                return (
                  <tr key={sub.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <td className="px-6 py-4" style={{ fontWeight: 450 }}>{sub.name}</td>
                    <td className="px-6 py-4 text-center"><span style={{ fontWeight: 480, color: getScoreColor(avg) }}>{avg.toFixed(1)}%</span></td>
                    <td className="px-6 py-4 text-center"><Badge style={{ background: getGradeLetter(avg) === 'A' ? '#fbe1d1' : '#f7f7f8', color: getGradeLetter(avg) === 'A' ? '#5d2a1a' : '#777b86', border: 'none' }}>{getGradeLetter(avg)}</Badge></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card style={{ background: '#fbe1d1' }}>
        <CardContent className="p-6">
          <h3 style={{ fontSize: 15, fontWeight: 500, color: '#5d2a1a', margin: '0 0 16px 0' }}>Grade Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={allTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#a3a6af" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#5d2a1a' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#5d2a1a' }} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#5d2a1a" strokeWidth={2} dot={{ fill: '#5d2a1a', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
