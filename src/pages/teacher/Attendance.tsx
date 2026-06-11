import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { students } from '@/data/users';
import { classes } from '@/data/classes';
import { attendanceRecords } from '@/data/attendance';
import type { AttendanceStatus } from '@/types';

const statusStyles: Record<AttendanceStatus, { bg: string; color: string; label: string }> = {
  present: { bg: '#d1e8d5', color: '#3d6b4f', label: 'Present' },
  absent: { bg: '#f0ddd5', color: '#8b4a2a', label: 'Absent' },
  late: { bg: '#f0e9d0', color: '#7a6230', label: 'Late' },
};

export default function TeacherAttendance() {
  const [selectedDate, setSelectedDate] = useState('2024-11-11');
  const [selectedClass, setSelectedClass] = useState('c001');
  const [localRecords, setLocalRecords] = useState(attendanceRecords);

  const classStudents = students.filter((s) => s.classId === selectedClass);
  const dateRecords = localRecords.filter((r) => r.date === selectedDate);

  const getStudentStatus = (studentId: string): AttendanceStatus => {
    const record = dateRecords.find((r) => r.studentId === studentId);
    return record?.status || 'present';
  };

  const toggleStatus = (studentId: string, status: AttendanceStatus) => {
    setLocalRecords((prev) => {
      const existing = prev.findIndex(
        (r) => r.studentId === studentId && r.date === selectedDate
      );
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { ...updated[existing], status };
        return updated;
      }
      return [
        ...prev,
        { id: `att-new-${studentId}-${selectedDate}`, studentId, date: selectedDate, status },
      ];
    });
  };

  const presentCount = classStudents.filter((s) => getStudentStatus(s.id) === 'present').length;
  const absentCount = classStudents.filter((s) => getStudentStatus(s.id) === 'absent').length;
  const lateCount = classStudents.filter((s) => getStudentStatus(s.id) === 'late').length;

  // Generate heatmap data for the month
  const getDaysInMonth = () => {
    const days = [];
    const start = new Date('2024-11-01');
    for (let i = 0; i < 30; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        days.push(d.toISOString().split('T')[0]);
      }
    }
    return days;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2"
          style={{
            borderRadius: 16,
            border: '1px solid #a3a6af',
            fontSize: 14,
            fontFamily: "'Inter', sans-serif",
          }}
        />
        <div className="flex gap-2">
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setSelectedClass(cls.id)}
              className="px-4 py-2 cursor-pointer"
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
      </div>

      {/* Summary */}
      <div className="flex gap-4">
        <div className="px-4 py-2 rounded-full" style={{ background: '#d1e8d5', fontSize: 14, fontWeight: 480, color: '#3d6b4f' }}>
          {presentCount} Present
        </div>
        <div className="px-4 py-2 rounded-full" style={{ background: '#f0ddd5', fontSize: 14, fontWeight: 480, color: '#8b4a2a' }}>
          {absentCount} Absent
        </div>
        <div className="px-4 py-2 rounded-full" style={{ background: '#f0e9d0', fontSize: 14, fontWeight: 480, color: '#7a6230' }}>
          {lateCount} Late
        </div>
      </div>

      {/* Student List */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y" style={{ borderColor: '#e5e5e5' }}>
            {classStudents.map((student) => {
              const status = getStudentStatus(student.id);
              return (
                <div key={student.id} className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: student.avatarColor, fontSize: 12, fontWeight: 500, color: '#17191c' }}
                    >
                      {student.initials}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{student.name}</span>
                  </div>
                  <div className="flex gap-2">
                    {(['present', 'absent', 'late'] as AttendanceStatus[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleStatus(student.id, s)}
                        className="px-3 py-1.5 cursor-pointer transition-all"
                        style={{
                          borderRadius: 9999,
                          fontSize: 13,
                          fontWeight: 450,
                          border: status === s ? 'none' : '1px solid #e5e5e5',
                          background: status === s ? statusStyles[s].bg : 'transparent',
                          color: status === s ? statusStyles[s].color : '#a3a6af',
                        }}
                      >
                        {statusStyles[s].label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Heatmap */}
      <Card>
        <CardContent className="p-6">
          <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: '0 0 16px 0' }}>
            Monthly Attendance Overview
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {getDaysInMonth().map((day) => {
              const dayRecords = localRecords.filter(
                (r) => r.date === day && classStudents.some((s) => s.id === r.studentId)
              );
              const absentDay = dayRecords.filter((r) => r.status === 'absent').length;
              const lateDay = dayRecords.filter((r) => r.status === 'late').length;
              const bg = absentDay > 1 ? '#f0ddd5' : lateDay > 0 ? '#f0e9d0' : '#d1e8d5';
              return (
                <div
                  key={day}
                  className="p-2 text-center rounded-lg cursor-pointer transition-all"
                  style={{
                    background: selectedDate === day ? '#17191c' : bg,
                    color: selectedDate === day ? '#ffffff' : '#17191c',
                    fontSize: 12,
                    fontWeight: 480,
                  }}
                  onClick={() => setSelectedDate(day)}
                >
                  {new Date(day + 'T12:00:00').getDate()}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
