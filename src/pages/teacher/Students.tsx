import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { students } from '@/data/users';
import { getGradesByStudent, computeSubjectAverage } from '@/data/grades';
import { getAttendanceStats } from '@/data/attendance';
import { subjects } from '@/data/classes';
import type { Student } from '@/types';
import { Search } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function TeacherStudents() {
  const [search, setSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.studentNumber.includes(search) ||
    s.className.toLowerCase().includes(search.toLowerCase())
  );

  const getBarColor = (value: number) => {
    if (value >= 80) return '#3d9a5f';   // green — great
    if (value >= 60) return '#4a90e2';   // blue  — solid
    if (value >= 40) return '#e0973e';   // amber — needs work
    return '#d94f4f';                     // red   — struggling
  };

  const getSubjectData = (studentId: string) => {
    const studentSubjects = studentId.startsWith('s00') && ['s001','s002','s003','s004'].includes(studentId)
      ? subjects.filter(s => ['sub001','sub002','sub003','sub004'].includes(s.id))
      : subjects.filter(s => ['sub001','sub002','sub003'].includes(s.id));

    return studentSubjects.map((sub) => {
      const avg = computeSubjectAverage(studentId, sub.id);
      return {
        name: sub.name,
        average: avg,
        fill: getBarColor(avg),
      };
    });
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#a3a6af' }} />
        <Input
          id="student-search"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid #a3a6af' }}>
                  <th className="text-left px-6 py-3">Student</th>
                  <th className="text-left px-6 py-3">Class</th>
                  <th className="text-left px-6 py-3">GPA</th>
                  <th className="text-left px-6 py-3">Attendance</th>
                  <th className="text-left px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((student) => {
                  const stats = getAttendanceStats(student.id);
                  return (
                    <tr
                      key={student.id}
                      className="cursor-pointer transition-colors"
                      style={{ borderBottom: '1px solid #e5e5e5' }}
                      onClick={() => setSelectedStudent(student)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8" style={{ background: student.avatarColor }}>
                            <AvatarFallback style={{ background: student.avatarColor, color: '#17191c', fontSize: 12, fontWeight: 500 }}>
                              {student.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{student.name}</div>
                            <div style={{ fontSize: 12, color: '#a3a6af' }}>{student.studentNumber}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4" style={{ fontSize: 14 }}>{student.className}</td>
                      <td className="px-6 py-4">
                        <span style={{ fontSize: 14, fontWeight: 480, color: student.gpa >= 3.5 ? '#3d6b4f' : student.gpa >= 2.5 ? '#7a6230' : '#8b4a2a' }}>
                          {student.gpa.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span style={{ fontSize: 14, fontWeight: 480 }}>{stats.presentRate}%</span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          style={{
                            background: student.gpa >= 3.0 ? '#d1e8d5' : '#f0ddd5',
                            color: student.gpa >= 3.0 ? '#3d6b4f' : '#8b4a2a',
                            border: 'none',
                          }}
                        >
                          {student.gpa >= 3.0 ? 'Good Standing' : 'Needs Attention'}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Student Detail Popup */}
      <Dialog open={!!selectedStudent} onOpenChange={(open) => !open && setSelectedStudent(null)}>
        <DialogContent className="sm:max-w-xl overflow-y-auto" style={{ maxHeight: '85vh' }}>
          {selectedStudent && (() => {
            const student = selectedStudent;
            const stats = getAttendanceStats(student.id);
            return (
              <div className="space-y-6">
                {/* Header */}
                <DialogHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14" style={{ background: student.avatarColor }}>
                      <AvatarFallback style={{ background: student.avatarColor, color: '#17191c', fontSize: 18, fontWeight: 500 }}>
                        {student.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <DialogTitle style={{ fontSize: 18, fontWeight: 500, color: '#17191c' }}>{student.name}</DialogTitle>
                      <p style={{ fontSize: 14, color: '#777b86', margin: 0 }}>{student.className} · #{student.studentNumber}</p>
                    </div>
                  </div>
                </DialogHeader>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl text-center" style={{ background: '#fbe1d1' }}>
                    <div style={{ fontSize: 22, fontWeight: 480, color: '#5d2a1a' }}>{student.gpa.toFixed(2)}</div>
                    <div style={{ fontSize: 12, color: '#5d2a1a' }}>GPA</div>
                  </div>
                  <div className="p-3 rounded-xl text-center" style={{ background: '#d3e3fc' }}>
                    <div style={{ fontSize: 22, fontWeight: 480, color: '#17191c' }}>{stats.presentRate}%</div>
                    <div style={{ fontSize: 12, color: '#777b86' }}>Attendance</div>
                  </div>
                  <div className="p-3 rounded-xl text-center" style={{ background: '#f7f7f8' }}>
                    <div style={{ fontSize: 22, fontWeight: 480, color: '#17191c' }}>{getGradesByStudent(student.id).length}</div>
                    <div style={{ fontSize: 12, color: '#777b86' }}>Grades</div>
                  </div>
                </div>

                {/* Subject Performance Chart */}
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 500, color: '#17191c', margin: '0 0 12px 0' }}>Subject Performance</h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={getSubjectData(student.id)}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#a3a6af" />
                        <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#777b86' }} />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#777b86' }} />
                        <Tooltip />
                        <Bar dataKey="average" radius={[4, 4, 0, 0]}>
                        {getSubjectData(student.id).map((entry, index) => (
                          <Cell key={index} fill={entry.fill} />
                        ))}
                      </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h4 style={{ fontSize: 14, fontWeight: 500, color: '#17191c', margin: 0 }}>Details</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div style={{ fontSize: 13, color: '#777b86' }}>Date of Birth</div>
                    <div style={{ fontSize: 13, color: '#17191c' }}>{student.dateOfBirth}</div>
                    <div style={{ fontSize: 13, color: '#777b86' }}>Address</div>
                    <div style={{ fontSize: 13, color: '#17191c' }}>{student.address}</div>
                  </div>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
