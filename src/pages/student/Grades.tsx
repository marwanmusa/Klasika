import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { students } from '@/data/users';
import { subjects } from '@/data/classes';
import { grades, assignments, computeSubjectAverage, getGradeLetter, getScoreColor } from '@/data/grades';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StudentGrades() {
  const student = students[0];
  const studentSubjects = subjects.filter(s => ['sub001','sub002','sub003','sub004'].includes(s.id));
  const [activeTab, setActiveTab] = useState(studentSubjects[0].id);

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList style={{ background: 'transparent', borderBottom: '1px solid #a3a6af', borderRadius: 0, padding: 0, height: 'auto' }}>
          {studentSubjects.map((sub) => (
            <TabsTrigger key={sub.id} value={sub.id} style={{ borderRadius: 0, padding: '8px 16px' }}>
              {sub.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {studentSubjects.map((sub) => {
          const avg = computeSubjectAverage(student.id, sub.id);
          const subGrades = grades.filter(g => g.studentId === student.id && g.subjectId === sub.id)
            .sort((a, b) => new Date(a.gradedAt).getTime() - new Date(b.gradedAt).getTime());

          const chartData = subGrades.map((g) => {
            const a = assignments.find(a => a.id === g.assignmentId);
            return { name: a?.title?.split(' ').slice(0, 2).join(' ') || '', score: Math.round((g.score / g.maxScore) * 100) };
          });

          return (
            <TabsContent key={sub.id} value={sub.id}>
              {/* Average */}
              <div className="flex items-center gap-4 mb-6">
                <div className="px-5 py-3 rounded-2xl" style={{ background: '#fbe1d1' }}>
                  <span style={{ fontSize: 12, color: '#5d2a1a', fontWeight: 500 }}>Subject Average</span>
                  <div style={{ fontSize: 28, fontWeight: 480, color: '#5d2a1a' }}>{avg.toFixed(1)}%</div>
                </div>
                <Badge style={{ background: getGradeLetter(avg) === 'A' ? '#fbe1d1' : '#f7f7f8', color: getGradeLetter(avg) === 'A' ? '#5d2a1a' : '#777b86', border: 'none', fontSize: 16, padding: '4px 14px' }}>
                  {getGradeLetter(avg)}
                </Badge>
              </div>

              {/* Bar Chart */}
              <Card style={{ background: '#d3e3fc' }}>
                <CardContent className="p-6">
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#a3a6af" />
                        <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#777b86' }} />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#777b86' }} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#4a90e2" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Assignment Table */}
              <Card className="mt-4">
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #a3a6af' }}>
                        <th className="text-left px-6 py-3">Assignment</th>
                        <th className="text-left px-6 py-3">Type</th>
                        <th className="text-center px-6 py-3">Score</th>
                        <th className="text-center px-6 py-3">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subGrades.map((g) => {
                        const a = assignments.find(a => a.id === g.assignmentId);
                        const pct = (g.score / g.maxScore) * 100;
                        return (
                          <tr key={g.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                            <td className="px-6 py-4" style={{ fontWeight: 450 }}>{a?.title}</td>
                            <td className="px-6 py-4">
                              <Badge style={{ background: '#f7f7f8', color: '#777b86', border: 'none', textTransform: 'capitalize' }}>
                                {a?.type}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span style={{ fontWeight: 480, color: getScoreColor(pct) }}>{g.score}/{g.maxScore}</span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Badge style={{ background: pct >= 90 ? '#fbe1d1' : '#f7f7f8', color: pct >= 90 ? '#5d2a1a' : '#777b86', border: 'none' }}>
                                {getGradeLetter(pct)}
                              </Badge>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
