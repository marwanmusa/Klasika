import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { assignments, getGradesByAssignment } from '@/data/grades';
import { subjects } from '@/data/classes';
import { students } from '@/data/users';
import { Plus } from 'lucide-react';

const typeBadgeStyles: Record<string, { bg: string; color: string }> = {
  homework: { bg: '#f7f7f8', color: '#777b86' },
  quiz: { bg: '#d3e3fc', color: '#17191c' },
  midterm: { bg: '#fbe1d1', color: '#5d2a1a' },
  final: { bg: '#17191c', color: '#ffffff' },
};

export default function TeacherAssignments() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const grouped = subjects.map((sub) => ({
    subject: sub,
    assignments: assignments.filter((a) => a.subjectId === sub.id && a.classId === 'c001'),
  }));

  return (
    <div className="space-y-8">
      {/* Header with Add button */}
      <div className="flex items-center justify-between">
        <div />
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger render={<Button style={{ background: '#17191c', color: '#ffffff', borderRadius: 9999, fontSize: 14, fontWeight: 450 }} />}>
            <Plus size={16} className="mr-2" />
            Add Assignment
          </DialogTrigger>
          <DialogContent>
            <div className="space-y-4 p-2">
              <h3 style={{ fontSize: 18, fontWeight: 500, color: '#17191c', margin: 0 }}>New Assignment</h3>
              <div className="space-y-3">
                <Input id="assignment-title" placeholder="Assignment title" />
                <select
                  className="w-full px-4 py-2"
                  style={{ borderRadius: 16, border: '1px solid #a3a6af', fontSize: 14, fontFamily: "'Inter', sans-serif" }}
                >
                  <option>Homework</option>
                  <option>Quiz</option>
                  <option>Midterm</option>
                  <option>Final</option>
                </select>
                <select
                  className="w-full px-4 py-2"
                  style={{ borderRadius: 16, border: '1px solid #a3a6af', fontSize: 14, fontFamily: "'Inter', sans-serif" }}
                >
                  {subjects.map((s) => (
                    <option key={s.id}>{s.name}</option>
                  ))}
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-2"
                  style={{ borderRadius: 16, border: '1px solid #a3a6af', fontSize: 14, fontFamily: "'Inter', sans-serif" }}
                />
                <Input id="assignment-max-score" placeholder="Max score (e.g., 100)" type="number" />
              </div>
              <Button
                onClick={() => setDialogOpen(false)}
                className="w-full"
                style={{ background: '#17191c', color: '#ffffff', borderRadius: 9999 }}
              >
                Create Assignment
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Grouped by subject */}
      {grouped.map(({ subject, assignments: subAssignments }) => (
        <div key={subject.id}>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: '0 0 12px 0' }}>{subject.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subAssignments.map((a) => {
              const graded = getGradesByAssignment(a.id).length;
              const totalStudents = students.filter((s) => s.classId === a.classId).length;
              const style = typeBadgeStyles[a.type] || typeBadgeStyles.homework;
              return (
                <Card key={a.id}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h4 style={{ fontSize: 14, fontWeight: 500, color: '#17191c', margin: 0 }}>{a.title}</h4>
                      <Badge style={{ background: style.bg, color: style.color, border: 'none', textTransform: 'capitalize' }}>
                        {a.type}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div style={{ fontSize: 13, color: '#777b86' }}>
                        Due: {new Date(a.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div style={{ fontSize: 13, color: '#777b86' }}>
                        Max Score: {a.maxScore}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-1.5 rounded-full" style={{ background: '#f7f7f8' }}>
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: `${(graded / totalStudents) * 100}%`,
                              background: graded === totalStudents ? '#3d6b4f' : '#4a90e2',
                            }}
                          />
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 480, color: '#777b86' }}>
                          {graded}/{totalStudents}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
