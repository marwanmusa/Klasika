import type { Assignment, Grade } from '@/types';

// ──────────────────────────────────────────────
// Assignments — 6 per subject
// ──────────────────────────────────────────────

export const assignments: Assignment[] = [
  // Mathematics
  { id: 'a001', title: 'Linear Equations Practice', subjectId: 'sub001', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-09-15', createdAt: '2024-09-08' },
  { id: 'a002', title: 'Algebra Quiz 1', subjectId: 'sub001', classId: 'c001', type: 'quiz', maxScore: 50, dueDate: '2024-09-22', createdAt: '2024-09-15' },
  { id: 'a003', title: 'Quadratic Functions Set', subjectId: 'sub001', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-10-06', createdAt: '2024-09-29' },
  { id: 'a004', title: 'Midterm Exam — Mathematics', subjectId: 'sub001', classId: 'c001', type: 'midterm', maxScore: 100, dueDate: '2024-10-20', createdAt: '2024-10-10' },
  { id: 'a005', title: 'Trigonometry Worksheet', subjectId: 'sub001', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-11-03', createdAt: '2024-10-27' },
  { id: 'a006', title: 'Final Exam — Mathematics', subjectId: 'sub001', classId: 'c001', type: 'final', maxScore: 100, dueDate: '2024-12-15', createdAt: '2024-12-01' },

  // English
  { id: 'a007', title: 'Essay: My Favorite Book', subjectId: 'sub002', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-09-16', createdAt: '2024-09-09' },
  { id: 'a008', title: 'Vocabulary Quiz 1', subjectId: 'sub002', classId: 'c001', type: 'quiz', maxScore: 50, dueDate: '2024-09-25', createdAt: '2024-09-18' },
  { id: 'a009', title: 'Grammar Exercises', subjectId: 'sub002', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-10-09', createdAt: '2024-10-02' },
  { id: 'a010', title: 'Midterm Exam — English', subjectId: 'sub002', classId: 'c001', type: 'midterm', maxScore: 100, dueDate: '2024-10-21', createdAt: '2024-10-11' },
  { id: 'a011', title: 'Persuasive Essay', subjectId: 'sub002', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-11-10', createdAt: '2024-11-03' },
  { id: 'a012', title: 'Final Exam — English', subjectId: 'sub002', classId: 'c001', type: 'final', maxScore: 100, dueDate: '2024-12-16', createdAt: '2024-12-02' },

  // Science
  { id: 'a013', title: 'Cell Biology Report', subjectId: 'sub003', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-09-17', createdAt: '2024-09-10' },
  { id: 'a014', title: 'Lab Quiz: Microscopy', subjectId: 'sub003', classId: 'c001', type: 'quiz', maxScore: 50, dueDate: '2024-09-28', createdAt: '2024-09-21' },
  { id: 'a015', title: 'Photosynthesis Lab Report', subjectId: 'sub003', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-10-12', createdAt: '2024-10-05' },
  { id: 'a016', title: 'Midterm Exam — Science', subjectId: 'sub003', classId: 'c001', type: 'midterm', maxScore: 100, dueDate: '2024-10-22', createdAt: '2024-10-12' },
  { id: 'a017', title: 'Genetics Problem Set', subjectId: 'sub003', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-11-15', createdAt: '2024-11-08' },
  { id: 'a018', title: 'Final Exam — Science', subjectId: 'sub003', classId: 'c001', type: 'final', maxScore: 100, dueDate: '2024-12-17', createdAt: '2024-12-03' },

  // History (Grade 10A only)
  { id: 'a019', title: 'Ancient Civilizations Essay', subjectId: 'sub004', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-09-18', createdAt: '2024-09-11' },
  { id: 'a020', title: 'Timeline Quiz', subjectId: 'sub004', classId: 'c001', type: 'quiz', maxScore: 50, dueDate: '2024-09-30', createdAt: '2024-09-23' },
  { id: 'a021', title: 'World War Analysis', subjectId: 'sub004', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-10-14', createdAt: '2024-10-07' },
  { id: 'a022', title: 'Midterm Exam — History', subjectId: 'sub004', classId: 'c001', type: 'midterm', maxScore: 100, dueDate: '2024-10-23', createdAt: '2024-10-13' },
  { id: 'a023', title: 'Cold War Research Paper', subjectId: 'sub004', classId: 'c001', type: 'homework', maxScore: 100, dueDate: '2024-11-18', createdAt: '2024-11-11' },
  { id: 'a024', title: 'Final Exam — History', subjectId: 'sub004', classId: 'c001', type: 'final', maxScore: 100, dueDate: '2024-12-18', createdAt: '2024-12-04' },

  // Math for Grade 10B
  { id: 'a025', title: 'Linear Equations Practice', subjectId: 'sub001', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-09-15', createdAt: '2024-09-08' },
  { id: 'a026', title: 'Algebra Quiz 1', subjectId: 'sub001', classId: 'c002', type: 'quiz', maxScore: 50, dueDate: '2024-09-22', createdAt: '2024-09-15' },
  { id: 'a027', title: 'Quadratic Functions Set', subjectId: 'sub001', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-10-06', createdAt: '2024-09-29' },
  { id: 'a028', title: 'Midterm Exam — Mathematics', subjectId: 'sub001', classId: 'c002', type: 'midterm', maxScore: 100, dueDate: '2024-10-20', createdAt: '2024-10-10' },
  { id: 'a029', title: 'Trigonometry Worksheet', subjectId: 'sub001', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-11-03', createdAt: '2024-10-27' },
  { id: 'a030', title: 'Final Exam — Mathematics', subjectId: 'sub001', classId: 'c002', type: 'final', maxScore: 100, dueDate: '2024-12-15', createdAt: '2024-12-01' },

  // English for Grade 10B
  { id: 'a031', title: 'Essay: My Favorite Book', subjectId: 'sub002', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-09-16', createdAt: '2024-09-09' },
  { id: 'a032', title: 'Vocabulary Quiz 1', subjectId: 'sub002', classId: 'c002', type: 'quiz', maxScore: 50, dueDate: '2024-09-25', createdAt: '2024-09-18' },
  { id: 'a033', title: 'Grammar Exercises', subjectId: 'sub002', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-10-09', createdAt: '2024-10-02' },
  { id: 'a034', title: 'Midterm Exam — English', subjectId: 'sub002', classId: 'c002', type: 'midterm', maxScore: 100, dueDate: '2024-10-21', createdAt: '2024-10-11' },
  { id: 'a035', title: 'Persuasive Essay', subjectId: 'sub002', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-11-10', createdAt: '2024-11-03' },
  { id: 'a036', title: 'Final Exam — English', subjectId: 'sub002', classId: 'c002', type: 'final', maxScore: 100, dueDate: '2024-12-16', createdAt: '2024-12-02' },

  // Science for Grade 10B
  { id: 'a037', title: 'Cell Biology Report', subjectId: 'sub003', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-09-17', createdAt: '2024-09-10' },
  { id: 'a038', title: 'Lab Quiz: Microscopy', subjectId: 'sub003', classId: 'c002', type: 'quiz', maxScore: 50, dueDate: '2024-09-28', createdAt: '2024-09-21' },
  { id: 'a039', title: 'Photosynthesis Lab Report', subjectId: 'sub003', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-10-12', createdAt: '2024-10-05' },
  { id: 'a040', title: 'Midterm Exam — Science', subjectId: 'sub003', classId: 'c002', type: 'midterm', maxScore: 100, dueDate: '2024-10-22', createdAt: '2024-10-12' },
  { id: 'a041', title: 'Genetics Problem Set', subjectId: 'sub003', classId: 'c002', type: 'homework', maxScore: 100, dueDate: '2024-11-15', createdAt: '2024-11-08' },
  { id: 'a042', title: 'Final Exam — Science', subjectId: 'sub003', classId: 'c002', type: 'final', maxScore: 100, dueDate: '2024-12-17', createdAt: '2024-12-03' },
];

// ──────────────────────────────────────────────
// Grades — all students × all their assignments
// ──────────────────────────────────────────────

export const grades: Grade[] = [
  // ── Aisha Putri (s001) — Grade 10A ──
  { id: 'g001', studentId: 's001', assignmentId: 'a001', subjectId: 'sub001', score: 88, maxScore: 100, gradedAt: '2024-09-16', remarks: 'Good understanding of linear equations' },
  { id: 'g002', studentId: 's001', assignmentId: 'a002', subjectId: 'sub001', score: 42, maxScore: 50, gradedAt: '2024-09-23', remarks: 'Well done' },
  { id: 'g003', studentId: 's001', assignmentId: 'a003', subjectId: 'sub001', score: 91, maxScore: 100, gradedAt: '2024-10-07', remarks: 'Excellent work on quadratics' },
  { id: 'g004', studentId: 's001', assignmentId: 'a004', subjectId: 'sub001', score: 85, maxScore: 100, gradedAt: '2024-10-21', remarks: 'Solid midterm performance' },
  { id: 'g005', studentId: 's001', assignmentId: 'a005', subjectId: 'sub001', score: 78, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g006', studentId: 's001', assignmentId: 'a006', subjectId: 'sub001', score: 82, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g007', studentId: 's001', assignmentId: 'a007', subjectId: 'sub002', score: 92, maxScore: 100, gradedAt: '2024-09-17', remarks: 'Wonderful essay structure' },
  { id: 'g008', studentId: 's001', assignmentId: 'a008', subjectId: 'sub002', score: 45, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g009', studentId: 's001', assignmentId: 'a009', subjectId: 'sub002', score: 88, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g010', studentId: 's001', assignmentId: 'a010', subjectId: 'sub002', score: 90, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g011', studentId: 's001', assignmentId: 'a011', subjectId: 'sub002', score: 85, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g012', studentId: 's001', assignmentId: 'a012', subjectId: 'sub002', score: 87, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g013', studentId: 's001', assignmentId: 'a013', subjectId: 'sub003', score: 75, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g014', studentId: 's001', assignmentId: 'a014', subjectId: 'sub003', score: 38, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g015', studentId: 's001', assignmentId: 'a015', subjectId: 'sub003', score: 82, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g016', studentId: 's001', assignmentId: 'a016', subjectId: 'sub003', score: 79, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g017', studentId: 's001', assignmentId: 'a017', subjectId: 'sub003', score: 84, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g018', studentId: 's001', assignmentId: 'a018', subjectId: 'sub003', score: 80, maxScore: 100, gradedAt: '2024-12-18' },
  { id: 'g019', studentId: 's001', assignmentId: 'a019', subjectId: 'sub004', score: 90, maxScore: 100, gradedAt: '2024-09-19' },
  { id: 'g020', studentId: 's001', assignmentId: 'a020', subjectId: 'sub004', score: 44, maxScore: 50, gradedAt: '2024-10-01' },
  { id: 'g021', studentId: 's001', assignmentId: 'a021', subjectId: 'sub004', score: 86, maxScore: 100, gradedAt: '2024-10-15' },
  { id: 'g022', studentId: 's001', assignmentId: 'a022', subjectId: 'sub004', score: 88, maxScore: 100, gradedAt: '2024-10-24' },
  { id: 'g023', studentId: 's001', assignmentId: 'a023', subjectId: 'sub004', score: 82, maxScore: 100, gradedAt: '2024-11-19' },
  { id: 'g024', studentId: 's001', assignmentId: 'a024', subjectId: 'sub004', score: 85, maxScore: 100, gradedAt: '2024-12-19' },

  // ── Rizki Pratama (s002) — Grade 10A ──
  { id: 'g025', studentId: 's002', assignmentId: 'a001', subjectId: 'sub001', score: 76, maxScore: 100, gradedAt: '2024-09-16' },
  { id: 'g026', studentId: 's002', assignmentId: 'a002', subjectId: 'sub001', score: 38, maxScore: 50, gradedAt: '2024-09-23' },
  { id: 'g027', studentId: 's002', assignmentId: 'a003', subjectId: 'sub001', score: 82, maxScore: 100, gradedAt: '2024-10-07' },
  { id: 'g028', studentId: 's002', assignmentId: 'a004', subjectId: 'sub001', score: 78, maxScore: 100, gradedAt: '2024-10-21' },
  { id: 'g029', studentId: 's002', assignmentId: 'a005', subjectId: 'sub001', score: 85, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g030', studentId: 's002', assignmentId: 'a006', subjectId: 'sub001', score: 80, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g031', studentId: 's002', assignmentId: 'a007', subjectId: 'sub002', score: 85, maxScore: 100, gradedAt: '2024-09-17' },
  { id: 'g032', studentId: 's002', assignmentId: 'a008', subjectId: 'sub002', score: 40, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g033', studentId: 's002', assignmentId: 'a009', subjectId: 'sub002', score: 79, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g034', studentId: 's002', assignmentId: 'a010', subjectId: 'sub002', score: 82, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g035', studentId: 's002', assignmentId: 'a011', subjectId: 'sub002', score: 78, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g036', studentId: 's002', assignmentId: 'a012', subjectId: 'sub002', score: 81, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g037', studentId: 's002', assignmentId: 'a013', subjectId: 'sub003', score: 88, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g038', studentId: 's002', assignmentId: 'a014', subjectId: 'sub003', score: 44, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g039', studentId: 's002', assignmentId: 'a015', subjectId: 'sub003', score: 85, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g040', studentId: 's002', assignmentId: 'a016', subjectId: 'sub003', score: 80, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g041', studentId: 's002', assignmentId: 'a017', subjectId: 'sub003', score: 82, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g042', studentId: 's002', assignmentId: 'a018', subjectId: 'sub003', score: 86, maxScore: 100, gradedAt: '2024-12-18' },
  { id: 'g043', studentId: 's002', assignmentId: 'a019', subjectId: 'sub004', score: 70, maxScore: 100, gradedAt: '2024-09-19' },
  { id: 'g044', studentId: 's002', assignmentId: 'a020', subjectId: 'sub004', score: 35, maxScore: 50, gradedAt: '2024-10-01' },
  { id: 'g045', studentId: 's002', assignmentId: 'a021', subjectId: 'sub004', score: 74, maxScore: 100, gradedAt: '2024-10-15' },
  { id: 'g046', studentId: 's002', assignmentId: 'a022', subjectId: 'sub004', score: 72, maxScore: 100, gradedAt: '2024-10-24' },
  { id: 'g047', studentId: 's002', assignmentId: 'a023', subjectId: 'sub004', score: 75, maxScore: 100, gradedAt: '2024-11-19' },
  { id: 'g048', studentId: 's002', assignmentId: 'a024', subjectId: 'sub004', score: 78, maxScore: 100, gradedAt: '2024-12-19' },

  // ── Dewi Sari (s003) — Grade 10A (top student) ──
  { id: 'g049', studentId: 's003', assignmentId: 'a001', subjectId: 'sub001', score: 95, maxScore: 100, gradedAt: '2024-09-16', remarks: 'Outstanding work' },
  { id: 'g050', studentId: 's003', assignmentId: 'a002', subjectId: 'sub001', score: 48, maxScore: 50, gradedAt: '2024-09-23' },
  { id: 'g051', studentId: 's003', assignmentId: 'a003', subjectId: 'sub001', score: 94, maxScore: 100, gradedAt: '2024-10-07' },
  { id: 'g052', studentId: 's003', assignmentId: 'a004', subjectId: 'sub001', score: 92, maxScore: 100, gradedAt: '2024-10-21' },
  { id: 'g053', studentId: 's003', assignmentId: 'a005', subjectId: 'sub001', score: 90, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g054', studentId: 's003', assignmentId: 'a006', subjectId: 'sub001', score: 93, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g055', studentId: 's003', assignmentId: 'a007', subjectId: 'sub002', score: 96, maxScore: 100, gradedAt: '2024-09-17' },
  { id: 'g056', studentId: 's003', assignmentId: 'a008', subjectId: 'sub002', score: 47, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g057', studentId: 's003', assignmentId: 'a009', subjectId: 'sub002', score: 93, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g058', studentId: 's003', assignmentId: 'a010', subjectId: 'sub002', score: 95, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g059', studentId: 's003', assignmentId: 'a011', subjectId: 'sub002', score: 91, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g060', studentId: 's003', assignmentId: 'a012', subjectId: 'sub002', score: 94, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g061', studentId: 's003', assignmentId: 'a013', subjectId: 'sub003', score: 89, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g062', studentId: 's003', assignmentId: 'a014', subjectId: 'sub003', score: 46, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g063', studentId: 's003', assignmentId: 'a015', subjectId: 'sub003', score: 91, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g064', studentId: 's003', assignmentId: 'a016', subjectId: 'sub003', score: 88, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g065', studentId: 's003', assignmentId: 'a017', subjectId: 'sub003', score: 92, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g066', studentId: 's003', assignmentId: 'a018', subjectId: 'sub003', score: 90, maxScore: 100, gradedAt: '2024-12-18' },
  { id: 'g067', studentId: 's003', assignmentId: 'a019', subjectId: 'sub004', score: 94, maxScore: 100, gradedAt: '2024-09-19' },
  { id: 'g068', studentId: 's003', assignmentId: 'a020', subjectId: 'sub004', score: 46, maxScore: 50, gradedAt: '2024-10-01' },
  { id: 'g069', studentId: 's003', assignmentId: 'a021', subjectId: 'sub004', score: 92, maxScore: 100, gradedAt: '2024-10-15' },
  { id: 'g070', studentId: 's003', assignmentId: 'a022', subjectId: 'sub004', score: 91, maxScore: 100, gradedAt: '2024-10-24' },
  { id: 'g071', studentId: 's003', assignmentId: 'a023', subjectId: 'sub004', score: 89, maxScore: 100, gradedAt: '2024-11-19' },
  { id: 'g072', studentId: 's003', assignmentId: 'a024', subjectId: 'sub004', score: 93, maxScore: 100, gradedAt: '2024-12-19' },

  // ── Fajar Nugroho (s004) — Grade 10A (lower GPA) ──
  { id: 'g073', studentId: 's004', assignmentId: 'a001', subjectId: 'sub001', score: 62, maxScore: 100, gradedAt: '2024-09-16' },
  { id: 'g074', studentId: 's004', assignmentId: 'a002', subjectId: 'sub001', score: 28, maxScore: 50, gradedAt: '2024-09-23' },
  { id: 'g075', studentId: 's004', assignmentId: 'a003', subjectId: 'sub001', score: 65, maxScore: 100, gradedAt: '2024-10-07' },
  { id: 'g076', studentId: 's004', assignmentId: 'a004', subjectId: 'sub001', score: 58, maxScore: 100, gradedAt: '2024-10-21' },
  { id: 'g077', studentId: 's004', assignmentId: 'a005', subjectId: 'sub001', score: 70, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g078', studentId: 's004', assignmentId: 'a006', subjectId: 'sub001', score: 64, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g079', studentId: 's004', assignmentId: 'a007', subjectId: 'sub002', score: 72, maxScore: 100, gradedAt: '2024-09-17' },
  { id: 'g080', studentId: 's004', assignmentId: 'a008', subjectId: 'sub002', score: 32, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g081', studentId: 's004', assignmentId: 'a009', subjectId: 'sub002', score: 68, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g082', studentId: 's004', assignmentId: 'a010', subjectId: 'sub002', score: 65, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g083', studentId: 's004', assignmentId: 'a011', subjectId: 'sub002', score: 71, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g084', studentId: 's004', assignmentId: 'a012', subjectId: 'sub002', score: 69, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g085', studentId: 's004', assignmentId: 'a013', subjectId: 'sub003', score: 68, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g086', studentId: 's004', assignmentId: 'a014', subjectId: 'sub003', score: 30, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g087', studentId: 's004', assignmentId: 'a015', subjectId: 'sub003', score: 72, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g088', studentId: 's004', assignmentId: 'a016', subjectId: 'sub003', score: 60, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g089', studentId: 's004', assignmentId: 'a017', subjectId: 'sub003', score: 74, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g090', studentId: 's004', assignmentId: 'a018', subjectId: 'sub003', score: 66, maxScore: 100, gradedAt: '2024-12-18' },
  { id: 'g091', studentId: 's004', assignmentId: 'a019', subjectId: 'sub004', score: 60, maxScore: 100, gradedAt: '2024-09-19' },
  { id: 'g092', studentId: 's004', assignmentId: 'a020', subjectId: 'sub004', score: 28, maxScore: 50, gradedAt: '2024-10-01' },
  { id: 'g093', studentId: 's004', assignmentId: 'a021', subjectId: 'sub004', score: 64, maxScore: 100, gradedAt: '2024-10-15' },
  { id: 'g094', studentId: 's004', assignmentId: 'a022', subjectId: 'sub004', score: 55, maxScore: 100, gradedAt: '2024-10-24' },
  { id: 'g095', studentId: 's004', assignmentId: 'a023', subjectId: 'sub004', score: 68, maxScore: 100, gradedAt: '2024-11-19' },
  { id: 'g096', studentId: 's004', assignmentId: 'a024', subjectId: 'sub004', score: 62, maxScore: 100, gradedAt: '2024-12-19' },

  // ── Maya Indah (s005) — Grade 10B ──
  { id: 'g097', studentId: 's005', assignmentId: 'a025', subjectId: 'sub001', score: 84, maxScore: 100, gradedAt: '2024-09-16' },
  { id: 'g098', studentId: 's005', assignmentId: 'a026', subjectId: 'sub001', score: 40, maxScore: 50, gradedAt: '2024-09-23' },
  { id: 'g099', studentId: 's005', assignmentId: 'a027', subjectId: 'sub001', score: 88, maxScore: 100, gradedAt: '2024-10-07' },
  { id: 'g100', studentId: 's005', assignmentId: 'a028', subjectId: 'sub001', score: 82, maxScore: 100, gradedAt: '2024-10-21' },
  { id: 'g101', studentId: 's005', assignmentId: 'a029', subjectId: 'sub001', score: 86, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g102', studentId: 's005', assignmentId: 'a030', subjectId: 'sub001', score: 84, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g103', studentId: 's005', assignmentId: 'a031', subjectId: 'sub002', score: 90, maxScore: 100, gradedAt: '2024-09-17' },
  { id: 'g104', studentId: 's005', assignmentId: 'a032', subjectId: 'sub002', score: 43, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g105', studentId: 's005', assignmentId: 'a033', subjectId: 'sub002', score: 85, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g106', studentId: 's005', assignmentId: 'a034', subjectId: 'sub002', score: 87, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g107', studentId: 's005', assignmentId: 'a035', subjectId: 'sub002', score: 82, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g108', studentId: 's005', assignmentId: 'a036', subjectId: 'sub002', score: 88, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g109', studentId: 's005', assignmentId: 'a037', subjectId: 'sub003', score: 78, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g110', studentId: 's005', assignmentId: 'a038', subjectId: 'sub003', score: 36, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g111', studentId: 's005', assignmentId: 'a039', subjectId: 'sub003', score: 80, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g112', studentId: 's005', assignmentId: 'a040', subjectId: 'sub003', score: 76, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g113', studentId: 's005', assignmentId: 'a041', subjectId: 'sub003', score: 82, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g114', studentId: 's005', assignmentId: 'a042', subjectId: 'sub003', score: 79, maxScore: 100, gradedAt: '2024-12-18' },

  // ── Budi Santoso (s006) — Grade 10B ──
  { id: 'g115', studentId: 's006', assignmentId: 'a025', subjectId: 'sub001', score: 72, maxScore: 100, gradedAt: '2024-09-16' },
  { id: 'g116', studentId: 's006', assignmentId: 'a026', subjectId: 'sub001', score: 34, maxScore: 50, gradedAt: '2024-09-23' },
  { id: 'g117', studentId: 's006', assignmentId: 'a027', subjectId: 'sub001', score: 78, maxScore: 100, gradedAt: '2024-10-07' },
  { id: 'g118', studentId: 's006', assignmentId: 'a028', subjectId: 'sub001', score: 70, maxScore: 100, gradedAt: '2024-10-21' },
  { id: 'g119', studentId: 's006', assignmentId: 'a029', subjectId: 'sub001', score: 75, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g120', studentId: 's006', assignmentId: 'a030', subjectId: 'sub001', score: 73, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g121', studentId: 's006', assignmentId: 'a031', subjectId: 'sub002', score: 80, maxScore: 100, gradedAt: '2024-09-17' },
  { id: 'g122', studentId: 's006', assignmentId: 'a032', subjectId: 'sub002', score: 38, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g123', studentId: 's006', assignmentId: 'a033', subjectId: 'sub002', score: 76, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g124', studentId: 's006', assignmentId: 'a034', subjectId: 'sub002', score: 74, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g125', studentId: 's006', assignmentId: 'a035', subjectId: 'sub002', score: 78, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g126', studentId: 's006', assignmentId: 'a036', subjectId: 'sub002', score: 75, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g127', studentId: 's006', assignmentId: 'a037', subjectId: 'sub003', score: 70, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g128', studentId: 's006', assignmentId: 'a038', subjectId: 'sub003', score: 32, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g129', studentId: 's006', assignmentId: 'a039', subjectId: 'sub003', score: 74, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g130', studentId: 's006', assignmentId: 'a040', subjectId: 'sub003', score: 68, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g131', studentId: 's006', assignmentId: 'a041', subjectId: 'sub003', score: 72, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g132', studentId: 's006', assignmentId: 'a042', subjectId: 'sub003', score: 70, maxScore: 100, gradedAt: '2024-12-18' },

  // ── Siti Rahma (s007) — Grade 10B (high performer) ──
  { id: 'g133', studentId: 's007', assignmentId: 'a025', subjectId: 'sub001', score: 92, maxScore: 100, gradedAt: '2024-09-16' },
  { id: 'g134', studentId: 's007', assignmentId: 'a026', subjectId: 'sub001', score: 46, maxScore: 50, gradedAt: '2024-09-23' },
  { id: 'g135', studentId: 's007', assignmentId: 'a027', subjectId: 'sub001', score: 90, maxScore: 100, gradedAt: '2024-10-07' },
  { id: 'g136', studentId: 's007', assignmentId: 'a028', subjectId: 'sub001', score: 88, maxScore: 100, gradedAt: '2024-10-21' },
  { id: 'g137', studentId: 's007', assignmentId: 'a029', subjectId: 'sub001', score: 91, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g138', studentId: 's007', assignmentId: 'a030', subjectId: 'sub001', score: 89, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g139', studentId: 's007', assignmentId: 'a031', subjectId: 'sub002', score: 94, maxScore: 100, gradedAt: '2024-09-17' },
  { id: 'g140', studentId: 's007', assignmentId: 'a032', subjectId: 'sub002', score: 46, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g141', studentId: 's007', assignmentId: 'a033', subjectId: 'sub002', score: 90, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g142', studentId: 's007', assignmentId: 'a034', subjectId: 'sub002', score: 92, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g143', studentId: 's007', assignmentId: 'a035', subjectId: 'sub002', score: 88, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g144', studentId: 's007', assignmentId: 'a036', subjectId: 'sub002', score: 91, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g145', studentId: 's007', assignmentId: 'a037', subjectId: 'sub003', score: 86, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g146', studentId: 's007', assignmentId: 'a038', subjectId: 'sub003', score: 42, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g147', studentId: 's007', assignmentId: 'a039', subjectId: 'sub003', score: 88, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g148', studentId: 's007', assignmentId: 'a040', subjectId: 'sub003', score: 84, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g149', studentId: 's007', assignmentId: 'a041', subjectId: 'sub003', score: 90, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g150', studentId: 's007', assignmentId: 'a042', subjectId: 'sub003', score: 87, maxScore: 100, gradedAt: '2024-12-18' },

  // ── Andi Wijaya (s008) — Grade 10B ──
  { id: 'g151', studentId: 's008', assignmentId: 'a025', subjectId: 'sub001', score: 78, maxScore: 100, gradedAt: '2024-09-16' },
  { id: 'g152', studentId: 's008', assignmentId: 'a026', subjectId: 'sub001', score: 36, maxScore: 50, gradedAt: '2024-09-23' },
  { id: 'g153', studentId: 's008', assignmentId: 'a027', subjectId: 'sub001', score: 80, maxScore: 100, gradedAt: '2024-10-07' },
  { id: 'g154', studentId: 's008', assignmentId: 'a028', subjectId: 'sub001', score: 75, maxScore: 100, gradedAt: '2024-10-21' },
  { id: 'g155', studentId: 's008', assignmentId: 'a029', subjectId: 'sub001', score: 82, maxScore: 100, gradedAt: '2024-11-04' },
  { id: 'g156', studentId: 's008', assignmentId: 'a030', subjectId: 'sub001', score: 79, maxScore: 100, gradedAt: '2024-12-16' },
  { id: 'g157', studentId: 's008', assignmentId: 'a031', subjectId: 'sub002', score: 82, maxScore: 100, gradedAt: '2024-09-17' },
  { id: 'g158', studentId: 's008', assignmentId: 'a032', subjectId: 'sub002', score: 39, maxScore: 50, gradedAt: '2024-09-26' },
  { id: 'g159', studentId: 's008', assignmentId: 'a033', subjectId: 'sub002', score: 78, maxScore: 100, gradedAt: '2024-10-10' },
  { id: 'g160', studentId: 's008', assignmentId: 'a034', subjectId: 'sub002', score: 80, maxScore: 100, gradedAt: '2024-10-22' },
  { id: 'g161', studentId: 's008', assignmentId: 'a035', subjectId: 'sub002', score: 76, maxScore: 100, gradedAt: '2024-11-11' },
  { id: 'g162', studentId: 's008', assignmentId: 'a036', subjectId: 'sub002', score: 81, maxScore: 100, gradedAt: '2024-12-17' },
  { id: 'g163', studentId: 's008', assignmentId: 'a037', subjectId: 'sub003', score: 74, maxScore: 100, gradedAt: '2024-09-18' },
  { id: 'g164', studentId: 's008', assignmentId: 'a038', subjectId: 'sub003', score: 35, maxScore: 50, gradedAt: '2024-09-29' },
  { id: 'g165', studentId: 's008', assignmentId: 'a039', subjectId: 'sub003', score: 76, maxScore: 100, gradedAt: '2024-10-13' },
  { id: 'g166', studentId: 's008', assignmentId: 'a040', subjectId: 'sub003', score: 72, maxScore: 100, gradedAt: '2024-10-23' },
  { id: 'g167', studentId: 's008', assignmentId: 'a041', subjectId: 'sub003', score: 78, maxScore: 100, gradedAt: '2024-11-16' },
  { id: 'g168', studentId: 's008', assignmentId: 'a042', subjectId: 'sub003', score: 75, maxScore: 100, gradedAt: '2024-12-18' },
];

// ──────────────────────────────────────────────
// Helper functions
// ──────────────────────────────────────────────

export function getGradesByStudent(studentId: string): Grade[] {
  return grades.filter((g) => g.studentId === studentId);
}

export function getGradesByAssignment(assignmentId: string): Grade[] {
  return grades.filter((g) => g.assignmentId === assignmentId);
}

export function getAssignmentsBySubject(subjectId: string): Assignment[] {
  return assignments.filter((a) => a.subjectId === subjectId);
}

export function getAssignmentsByClass(classId: string): Assignment[] {
  return assignments.filter((a) => a.classId === classId);
}

export function getAssignmentById(id: string) {
  return assignments.find((a) => a.id === id);
}

export function getGradeLetter(percentage: number): string {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}

export function getScoreColor(percentage: number): string {
  if (percentage >= 80) return '#3d6b4f';
  if (percentage >= 60) return '#7a6230';
  return '#8b4a2a';
}

export function computeSubjectAverage(studentId: string, subjectId: string): number {
  const studentGrades = grades.filter(
    (g) => g.studentId === studentId && g.subjectId === subjectId
  );
  if (studentGrades.length === 0) return 0;
  const totalPercentage = studentGrades.reduce(
    (sum, g) => sum + (g.score / g.maxScore) * 100,
    0
  );
  return Math.round((totalPercentage / studentGrades.length) * 100) / 100;
}

export function computeGPA(studentId: string): number {
  const studentGrades = grades.filter((g) => g.studentId === studentId);
  if (studentGrades.length === 0) return 0;
  const totalPercentage = studentGrades.reduce(
    (sum, g) => sum + (g.score / g.maxScore) * 100,
    0
  );
  const avg = totalPercentage / studentGrades.length;
  // Convert percentage to 4.0 scale
  if (avg >= 93) return 4.0;
  if (avg >= 90) return 3.9;
  if (avg >= 87) return 3.7;
  if (avg >= 83) return 3.5;
  if (avg >= 80) return 3.3;
  if (avg >= 77) return 3.0;
  if (avg >= 73) return 2.7;
  if (avg >= 70) return 2.3;
  if (avg >= 67) return 2.0;
  if (avg >= 63) return 1.7;
  if (avg >= 60) return 1.3;
  return 1.0;
}

export function getGradeTrendData(studentId: string, subjectId: string) {
  const studentGrades = grades
    .filter((g) => g.studentId === studentId && g.subjectId === subjectId)
    .sort((a, b) => new Date(a.gradedAt).getTime() - new Date(b.gradedAt).getTime());

  return studentGrades.map((g) => {
    const assignment = assignments.find((a) => a.id === g.assignmentId);
    return {
      name: assignment?.title?.split(' ').slice(0, 2).join(' ') || g.assignmentId,
      score: Math.round((g.score / g.maxScore) * 100),
      date: g.gradedAt,
    };
  });
}
