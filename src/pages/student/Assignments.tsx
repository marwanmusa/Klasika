import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { assignments, grades, getGradeLetter } from '@/data/grades';
import { subjects } from '@/data/classes';
import { students } from '@/data/users';
import type { AssignmentStatus } from '@/types';

export default function StudentAssignments() {
  const student = students[0];
  const [tab, setTab] = useState('all');

  // Build student assignments with status
  const studentAssignments = assignments
    .filter(a => a.classId === student.classId)
    .map(a => {
      const grade = grades.find(g => g.studentId === student.id && g.assignmentId === a.id);
      const now = new Date('2024-12-15');
      const due = new Date(a.dueDate);
      let status: AssignmentStatus;
      if (grade) status = 'graded';
      else if (due < now) status = 'overdue';
      else status = 'pending';
      return { assignment: a, status, grade };
    });

  const filtered = tab === 'all' ? studentAssignments :
    studentAssignments.filter(sa => sa.status === tab);

  const statusBadge: Record<string, { bg: string; color: string }> = {
    pending: { bg: '#f0e9d0', color: '#7a6230' },
    submitted: { bg: '#d3e3fc', color: '#17191c' },
    graded: { bg: '#d1e8d5', color: '#3d6b4f' },
    overdue: { bg: '#f0ddd5', color: '#8b4a2a' },
  };

  return (
    <div className="space-y-6">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList style={{ background: 'transparent', borderBottom: '1px solid #a3a6af', borderRadius: 0, padding: 0, height: 'auto' }}>
          <TabsTrigger value="all" style={{ borderRadius: 0, padding: '8px 16px' }}>All</TabsTrigger>
          <TabsTrigger value="pending" style={{ borderRadius: 0, padding: '8px 16px' }}>Pending</TabsTrigger>
          <TabsTrigger value="graded" style={{ borderRadius: 0, padding: '8px 16px' }}>Graded</TabsTrigger>
          <TabsTrigger value="overdue" style={{ borderRadius: 0, padding: '8px 16px' }}>Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value={tab}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(({ assignment: a, status, grade }) => {
              const sub = subjects.find(s => s.id === a.subjectId);
              const style = statusBadge[status];
              const pct = grade ? (grade.score / grade.maxScore) * 100 : 0;
              return (
                <Card
                  key={a.id}
                  style={{ borderLeft: status === 'overdue' ? '3px solid #8b4a2a' : undefined }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge style={{ background: sub?.color || '#f7f7f8', color: '#17191c', border: 'none', fontSize: 11 }}>
                        {sub?.name}
                      </Badge>
                      <Badge style={{ background: style.bg, color: style.color, border: 'none', textTransform: 'capitalize', fontSize: 11 }}>
                        {status}
                      </Badge>
                    </div>
                    <h4 style={{ fontSize: 14, fontWeight: 500, color: '#17191c', margin: '0 0 6px 0' }}>{a.title}</h4>
                    <div style={{ fontSize: 13, color: '#777b86' }}>
                      Due: {new Date(a.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    {grade && (
                      <div className="flex items-center gap-2 mt-3">
                        <span style={{ fontSize: 16, fontWeight: 480, color: pct >= 80 ? '#3d6b4f' : pct >= 60 ? '#7a6230' : '#8b4a2a' }}>
                          {grade.score}/{grade.maxScore}
                        </span>
                        <Badge style={{ background: pct >= 90 ? '#fbe1d1' : '#f7f7f8', color: pct >= 90 ? '#5d2a1a' : '#777b86', border: 'none' }}>
                          {getGradeLetter(pct)}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
