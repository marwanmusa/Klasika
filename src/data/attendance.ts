import type { AttendanceRecord, AttendanceStatus } from '@/types';

// Generate 30 days of attendance for each student
function generateAttendance(studentId: string, pattern: AttendanceStatus[]): AttendanceRecord[] {
  const records: AttendanceRecord[] = [];
  const startDate = new Date('2024-11-01');

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;

    records.push({
      id: `att-${studentId}-${i}`,
      studentId,
      date: date.toISOString().split('T')[0],
      status: pattern[i % pattern.length],
      note: pattern[i % pattern.length] === 'absent' ? 'Medical leave' :
            pattern[i % pattern.length] === 'late' ? 'Arrived at 08:15' : undefined,
    });
  }
  return records;
}

// Patterns for each student — mostly present with realistic absences/lates
const s001Pattern: AttendanceStatus[] = ['present', 'present', 'present', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'late'];
const s002Pattern: AttendanceStatus[] = ['present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present'];
const s003Pattern: AttendanceStatus[] = ['present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present'];
const s004Pattern: AttendanceStatus[] = ['present', 'present', 'absent', 'present', 'present', 'present', 'late', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'present', 'present'];
const s005Pattern: AttendanceStatus[] = ['present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present'];
const s006Pattern: AttendanceStatus[] = ['present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present'];
const s007Pattern: AttendanceStatus[] = ['present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present'];
const s008Pattern: AttendanceStatus[] = ['present', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'absent', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'late', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present', 'present'];

export const attendanceRecords: AttendanceRecord[] = [
  ...generateAttendance('s001', s001Pattern),
  ...generateAttendance('s002', s002Pattern),
  ...generateAttendance('s003', s003Pattern),
  ...generateAttendance('s004', s004Pattern),
  ...generateAttendance('s005', s005Pattern),
  ...generateAttendance('s006', s006Pattern),
  ...generateAttendance('s007', s007Pattern),
  ...generateAttendance('s008', s008Pattern),
];

export function getAttendanceByStudent(studentId: string): AttendanceRecord[] {
  return attendanceRecords.filter((r) => r.studentId === studentId);
}

export function getAttendanceByDate(date: string): AttendanceRecord[] {
  return attendanceRecords.filter((r) => r.date === date);
}

export function getAttendanceStats(studentId: string) {
  const records = getAttendanceByStudent(studentId);
  const total = records.length;
  const present = records.filter((r) => r.status === 'present').length;
  const absent = records.filter((r) => r.status === 'absent').length;
  const late = records.filter((r) => r.status === 'late').length;
  return {
    total,
    present,
    absent,
    late,
    presentRate: total > 0 ? Math.round((present / total) * 100) : 0,
  };
}
