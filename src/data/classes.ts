import type { ClassInfo, Subject, ScheduleSlot } from '@/types';

// ──────────────────────────────────────────────
// Subjects
// ──────────────────────────────────────────────

export const subjects: Subject[] = [
  {
    id: 'sub001',
    name: 'Mathematics',
    teacherId: 't001',
    classIds: ['c001', 'c002'],
    color: '#fbe1d1',
  },
  {
    id: 'sub002',
    name: 'English',
    teacherId: 't002',
    classIds: ['c001', 'c002'],
    color: '#d3e3fc',
  },
  {
    id: 'sub003',
    name: 'Science',
    teacherId: 't003',
    classIds: ['c001', 'c002'],
    color: '#d1ece0',
  },
  {
    id: 'sub004',
    name: 'History',
    teacherId: 't002',
    classIds: ['c001'],
    color: '#f0e9d0',
  },
];

// ──────────────────────────────────────────────
// Classes
// ──────────────────────────────────────────────

export const classes: ClassInfo[] = [
  {
    id: 'c001',
    name: 'Grade 10A',
    grade: '10',
    subjectIds: ['sub001', 'sub002', 'sub003', 'sub004'],
    studentIds: ['s001', 's002', 's003', 's004'],
    teacherId: 't001',
  },
  {
    id: 'c002',
    name: 'Grade 10B',
    grade: '10',
    subjectIds: ['sub001', 'sub002', 'sub003'],
    studentIds: ['s005', 's006', 's007', 's008'],
    teacherId: 't001',
  },
];

// ──────────────────────────────────────────────
// Schedule
// ──────────────────────────────────────────────

export const scheduleGrade10A: ScheduleSlot[] = [
  { day: 'Monday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.201', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Monday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub002', subjectName: 'English', room: 'R.103', teacherName: 'James Hartwell', color: '#d3e3fc' },
  { day: 'Monday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 1', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Tuesday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 1', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Tuesday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub004', subjectName: 'History', room: 'R.105', teacherName: 'James Hartwell', color: '#f0e9d0' },
  { day: 'Tuesday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.201', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Wednesday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub002', subjectName: 'English', room: 'R.103', teacherName: 'James Hartwell', color: '#d3e3fc' },
  { day: 'Wednesday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.201', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Wednesday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 1', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Thursday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub004', subjectName: 'History', room: 'R.105', teacherName: 'James Hartwell', color: '#f0e9d0' },
  { day: 'Thursday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 1', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Thursday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub002', subjectName: 'English', room: 'R.103', teacherName: 'James Hartwell', color: '#d3e3fc' },
  { day: 'Friday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.201', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Friday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub002', subjectName: 'English', room: 'R.103', teacherName: 'James Hartwell', color: '#d3e3fc' },
];

export const scheduleGrade10B: ScheduleSlot[] = [
  { day: 'Monday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub002', subjectName: 'English', room: 'R.104', teacherName: 'James Hartwell', color: '#d3e3fc' },
  { day: 'Monday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 2', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Monday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.202', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Tuesday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.202', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Tuesday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub002', subjectName: 'English', room: 'R.104', teacherName: 'James Hartwell', color: '#d3e3fc' },
  { day: 'Tuesday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 2', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Wednesday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 2', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Wednesday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.202', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Wednesday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub002', subjectName: 'English', room: 'R.104', teacherName: 'James Hartwell', color: '#d3e3fc' },
  { day: 'Thursday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub002', subjectName: 'English', room: 'R.104', teacherName: 'James Hartwell', color: '#d3e3fc' },
  { day: 'Thursday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.202', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
  { day: 'Thursday', timeStart: '12:00', timeEnd: '13:30', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 2', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Friday', timeStart: '08:00', timeEnd: '09:30', subjectId: 'sub003', subjectName: 'Science', room: 'Lab 2', teacherName: 'Dr. Lina Kusnadi', color: '#d1ece0' },
  { day: 'Friday', timeStart: '09:45', timeEnd: '11:15', subjectId: 'sub001', subjectName: 'Mathematics', room: 'R.202', teacherName: 'Sarah Mitchell', color: '#fbe1d1' },
];

export function getScheduleByClass(classId: string): ScheduleSlot[] {
  return classId === 'c001' ? scheduleGrade10A : scheduleGrade10B;
}

export function getSubjectById(id: string) {
  return subjects.find((s) => s.id === id);
}

export function getClassById(id: string) {
  return classes.find((c) => c.id === id);
}
