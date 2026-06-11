import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { students } from '@/data/users';
import { subjects, classes } from '@/data/classes';
import { assignments, grades, getGradesByAssignment, getScoreColor } from '@/data/grades';

export default function TeacherGrades() {
  const [selectedSubject, setSelectedSubject] = useState('sub001');
  const [selectedClass, setSelectedClass] = useState('c001');

  const classStudents = students.filter((s) => s.classId === selectedClass);
  const classAssignments = assignments.filter(
    (a) => a.subjectId === selectedSubject && a.classId === selectedClass
  );

  const getScore = (studentId: string, assignmentId: string) => {
    const grade = grades.find(
      (g) => g.studentId === studentId && g.assignmentId === assignmentId
    );
    return grade;
  };

  const getClassAverage = (assignmentId: string) => {
    const aGrades = getGradesByAssignment(assignmentId);
    if (aGrades.length === 0) return 0;
    return Math.round(
      aGrades.reduce((sum, g) => sum + (g.score / g.maxScore) * 100, 0) / aGrades.length
    );
  };

  return (
    <div className="space-y-6">
      {/* Class selector */}
      <div className="flex gap-2">
        {classes.map((cls) => (
          <button
            key={cls.id}
            onClick={() => setSelectedClass(cls.id)}
            className="px-4 py-2 cursor-pointer transition-all"
            style={{
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 450,
              border: selectedClass === cls.id ? 'none' : '1px solid #a3a6af',
              background: selectedClass === cls.id ? '#17191c' : 'transparent',
              color: selectedClass === cls.id ? '#ffffff' : '#17191c',
            }}
          >
            {cls.name}
          </button>
        ))}
      </div>

      {/* Subject tabs */}
      <Tabs value={selectedSubject} onValueChange={setSelectedSubject}>
        <TabsList style={{ background: 'transparent', borderBottom: '1px solid #a3a6af', borderRadius: 0, padding: 0, height: 'auto' }}>
          {subjects
            .filter((s) => s.classIds.includes(selectedClass))
            .map((sub) => (
              <TabsTrigger key={sub.id} value={sub.id} style={{ borderRadius: 0, padding: '8px 16px' }}>
                {sub.name}
              </TabsTrigger>
            ))}
        </TabsList>

        <TabsContent value={selectedSubject}>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: '1px solid #a3a6af' }}>
                      <th className="text-left px-4 py-3 sticky left-0 bg-white" style={{ minWidth: 150 }}>Student</th>
                      {classAssignments.map((a) => (
                        <th key={a.id} className="text-center px-3 py-3" style={{ minWidth: 90 }}>
                          <div style={{ fontSize: 12 }}>{a.title.split(' ').slice(0, 2).join(' ')}</div>
                          <div style={{ fontSize: 11, color: '#a3a6af', fontWeight: 400, textTransform: 'none' }}>/{a.maxScore}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {classStudents.map((student) => (
                      <tr key={student.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                        <td className="px-4 py-3 sticky left-0 bg-white" style={{ fontSize: 14, fontWeight: 450 }}>
                          {student.name}
                        </td>
                        {classAssignments.map((a) => {
                          const grade = getScore(student.id, a.id);
                          const pct = grade ? (grade.score / grade.maxScore) * 100 : 0;
                          return (
                            <td key={a.id} className="text-center px-3 py-3">
                              {grade ? (
                                <span style={{ fontSize: 14, fontWeight: 480, color: getScoreColor(pct) }}>
                                  {grade.score}
                                </span>
                              ) : (
                                <span style={{ color: '#a3a6af', fontSize: 13 }}>—</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    {/* Average row */}
                    <tr style={{ background: '#f7f7f8' }}>
                      <td className="px-4 py-3 sticky left-0" style={{ fontSize: 13, fontWeight: 500, color: '#777b86', background: '#f7f7f8' }}>
                        Class Average
                      </td>
                      {classAssignments.map((a) => (
                        <td key={a.id} className="text-center px-3 py-3">
                          <span style={{ fontSize: 13, fontWeight: 480, color: '#777b86' }}>
                            {getClassAverage(a.id)}%
                          </span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
