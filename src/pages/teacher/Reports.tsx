import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { students } from '@/data/users';
import { subjects } from '@/data/classes';
import { computeSubjectAverage, getGradeLetter, getGradeTrendData, getScoreColor } from '@/data/grades';
import { getAttendanceStats } from '@/data/attendance';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';

export default function TeacherReports() {
  const [selectedStudentId, setSelectedStudentId] = useState('s001');
  const student = students.find((s) => s.id === selectedStudentId)!;
  const stats = getAttendanceStats(selectedStudentId);

  const studentSubjects = ['s001','s002','s003','s004'].includes(selectedStudentId)
    ? subjects.filter(s => ['sub001','sub002','sub003','sub004'].includes(s.id))
    : subjects.filter(s => ['sub001','sub002','sub003'].includes(s.id));

  // Combine trend data from all subjects
  const allTrendData = studentSubjects.flatMap((sub) =>
    getGradeTrendData(selectedStudentId, sub.id).map((d) => ({
      ...d,
      subject: sub.name,
    }))
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Compute rank (simplified)
  const classStudents = students.filter((s) => s.classId === student.classId);
  const sorted = [...classStudents].sort((a, b) => b.gpa - a.gpa);
  const rank = sorted.findIndex((s) => s.id === selectedStudentId) + 1;

  return (
    <div className="space-y-6">
      {/* Student selector */}
      <select
        value={selectedStudentId}
        onChange={(e) => setSelectedStudentId(e.target.value)}
        className="px-4 py-2"
        style={{ borderRadius: 16, border: '1px solid #a3a6af', fontSize: 14, fontFamily: "'Inter', sans-serif" }}
      >
        {students.map((s) => (
          <option key={s.id} value={s.id}>{s.name} — {s.className}</option>
        ))}
      </select>

      {/* Report Card Header */}
      <Card style={{ background: '#fbe1d1' }}>
        <CardContent className="p-6">
          <h2 className="font-display" style={{ fontSize: 28, color: '#17191c', fontWeight: 400, margin: '0 0 4px 0', letterSpacing: '-0.025em' }}>
            Progress Report
          </h2>
          <p style={{ fontSize: 16, color: '#4c4c4c', margin: '0 0 16px 0' }}>{student.name} — {student.className}</p>
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
        </CardContent>
      </Card>

      {/* Subject Table */}
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #a3a6af' }}>
                <th className="text-left px-6 py-3">Subject</th>
                <th className="text-center px-6 py-3">Average</th>
                <th className="text-center px-6 py-3">Grade</th>
                <th className="text-left px-6 py-3">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {studentSubjects.map((sub) => {
                const avg = computeSubjectAverage(selectedStudentId, sub.id);
                const letter = getGradeLetter(avg);
                return (
                  <tr key={sub.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <td className="px-6 py-4" style={{ fontWeight: 450 }}>{sub.name}</td>
                    <td className="px-6 py-4 text-center">
                      <span style={{ fontWeight: 480, color: getScoreColor(avg) }}>{avg.toFixed(1)}%</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge style={{
                        background: letter === 'A' ? '#fbe1d1' : '#f7f7f8',
                        color: letter === 'A' ? '#5d2a1a' : '#777b86',
                        border: 'none',
                      }}>
                        {letter}
                      </Badge>
                    </td>
                    <td className="px-6 py-4" style={{ fontSize: 13, color: '#777b86' }}>
                      {avg >= 90 ? 'Outstanding performance' : avg >= 80 ? 'Good work, keep it up' : avg >= 70 ? 'Satisfactory, room for improvement' : 'Needs additional support'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Grade Trend Chart */}
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

      {/* Export button */}
      <button
        onClick={() => toast.success('PDF exported successfully!')}
        className="px-5 py-2.5 cursor-pointer transition-opacity hover:opacity-80"
        style={{ borderRadius: 9999, background: '#17191c', color: '#ffffff', fontSize: 14, fontWeight: 450, border: 'none' }}
      >
        Export PDF
      </button>
    </div>
  );
}
