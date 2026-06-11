import type { Teacher, Student, Parent } from '@/types';

// ──────────────────────────────────────────────
// Teachers
// ──────────────────────────────────────────────

export const teachers: Teacher[] = [
  {
    id: 't001',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@klasika.edu',
    role: 'teacher',
    initials: 'SM',
    avatarColor: '#d3e3fc',
    subjects: ['Mathematics'],
    classIds: ['c001', 'c002'],
  },
  {
    id: 't002',
    name: 'James Hartwell',
    email: 'james.hartwell@klasika.edu',
    role: 'teacher',
    initials: 'JH',
    avatarColor: '#fbe1d1',
    subjects: ['English'],
    classIds: ['c001', 'c002'],
  },
  {
    id: 't003',
    name: 'Dr. Lina Kusnadi',
    email: 'lina.kusnadi@klasika.edu',
    role: 'teacher',
    initials: 'LK',
    avatarColor: '#d1ece0',
    subjects: ['Science'],
    classIds: ['c001', 'c002'],
  },
];

// ──────────────────────────────────────────────
// Students
// ──────────────────────────────────────────────

export const students: Student[] = [
  {
    id: 's001',
    name: 'Aisha Putri',
    email: 'aisha.putri@student.klasika.edu',
    role: 'student',
    initials: 'AP',
    avatarColor: '#fbe1d1',
    studentNumber: '2024001',
    classId: 'c001',
    className: 'Grade 10A',
    gpa: 3.72,
    attendanceRate: 94,
    dateOfBirth: '2008-03-15',
    address: 'Jl. Merdeka No. 12, Jakarta',
    parentIds: ['p001'],
  },
  {
    id: 's002',
    name: 'Rizki Pratama',
    email: 'rizki.pratama@student.klasika.edu',
    role: 'student',
    initials: 'RP',
    avatarColor: '#d3e3fc',
    studentNumber: '2024002',
    classId: 'c001',
    className: 'Grade 10A',
    gpa: 3.45,
    attendanceRate: 97,
    dateOfBirth: '2008-07-22',
    address: 'Jl. Sudirman No. 45, Jakarta',
    parentIds: ['p002'],
  },
  {
    id: 's003',
    name: 'Dewi Sari',
    email: 'dewi.sari@student.klasika.edu',
    role: 'student',
    initials: 'DS',
    avatarColor: '#d1ece0',
    studentNumber: '2024003',
    classId: 'c001',
    className: 'Grade 10A',
    gpa: 3.88,
    attendanceRate: 100,
    dateOfBirth: '2008-01-10',
    address: 'Jl. Gatot Subroto No. 8, Jakarta',
    parentIds: ['p001'],
  },
  {
    id: 's004',
    name: 'Fajar Nugroho',
    email: 'fajar.nugroho@student.klasika.edu',
    role: 'student',
    initials: 'FN',
    avatarColor: '#fbe1d1',
    studentNumber: '2024004',
    classId: 'c001',
    className: 'Grade 10A',
    gpa: 2.95,
    attendanceRate: 87,
    dateOfBirth: '2008-11-03',
    address: 'Jl. Thamrin No. 33, Jakarta',
    parentIds: ['p003'],
  },
  {
    id: 's005',
    name: 'Maya Indah',
    email: 'maya.indah@student.klasika.edu',
    role: 'student',
    initials: 'MI',
    avatarColor: '#d3e3fc',
    studentNumber: '2024005',
    classId: 'c002',
    className: 'Grade 10B',
    gpa: 3.60,
    attendanceRate: 93,
    dateOfBirth: '2008-05-28',
    address: 'Jl. Kuningan No. 17, Jakarta',
    parentIds: ['p002'],
  },
  {
    id: 's006',
    name: 'Budi Santoso',
    email: 'budi.santoso@student.klasika.edu',
    role: 'student',
    initials: 'BS',
    avatarColor: '#d1ece0',
    studentNumber: '2024006',
    classId: 'c002',
    className: 'Grade 10B',
    gpa: 3.15,
    attendanceRate: 90,
    dateOfBirth: '2008-09-14',
    address: 'Jl. Rasuna Said No. 21, Jakarta',
    parentIds: ['p003'],
  },
  {
    id: 's007',
    name: 'Siti Rahma',
    email: 'siti.rahma@student.klasika.edu',
    role: 'student',
    initials: 'SR',
    avatarColor: '#fbe1d1',
    studentNumber: '2024007',
    classId: 'c002',
    className: 'Grade 10B',
    gpa: 3.82,
    attendanceRate: 97,
    dateOfBirth: '2008-02-19',
    address: 'Jl. Casablanca No. 5, Jakarta',
    parentIds: ['p004'],
  },
  {
    id: 's008',
    name: 'Andi Wijaya',
    email: 'andi.wijaya@student.klasika.edu',
    role: 'student',
    initials: 'AW',
    avatarColor: '#d3e3fc',
    studentNumber: '2024008',
    classId: 'c002',
    className: 'Grade 10B',
    gpa: 3.30,
    attendanceRate: 91,
    dateOfBirth: '2008-08-07',
    address: 'Jl. Senopati No. 29, Jakarta',
    parentIds: ['p004'],
  },
];

// ──────────────────────────────────────────────
// Parents
// ──────────────────────────────────────────────

export const parents: Parent[] = [
  {
    id: 'p001',
    name: 'Ibu Kartini Putri',
    email: 'kartini.putri@email.com',
    role: 'parent',
    initials: 'KP',
    avatarColor: '#fbe1d1',
    childrenIds: ['s001', 's003'],
    phone: '+62 812-3456-7890',
  },
  {
    id: 'p002',
    name: 'Bapak Hendra Pratama',
    email: 'hendra.pratama@email.com',
    role: 'parent',
    initials: 'HP',
    avatarColor: '#d3e3fc',
    childrenIds: ['s002', 's005'],
    phone: '+62 813-9876-5432',
  },
  {
    id: 'p003',
    name: 'Ibu Ratna Nugroho',
    email: 'ratna.nugroho@email.com',
    role: 'parent',
    initials: 'RN',
    avatarColor: '#d1ece0',
    childrenIds: ['s004', 's006'],
    phone: '+62 815-1234-5678',
  },
  {
    id: 'p004',
    name: 'Bapak Surya Wijaya',
    email: 'surya.wijaya@email.com',
    role: 'parent',
    initials: 'SW',
    avatarColor: '#fbe1d1',
    childrenIds: ['s007', 's008'],
    phone: '+62 817-8765-4321',
  },
];

export const allUsers = [...teachers, ...students, ...parents];

export function getUserById(id: string) {
  return allUsers.find((u) => u.id === id);
}

export function getTeacherById(id: string) {
  return teachers.find((t) => t.id === id);
}

export function getStudentById(id: string) {
  return students.find((s) => s.id === id);
}

export function getParentById(id: string) {
  return parents.find((p) => p.id === id);
}
