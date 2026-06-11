// ──────────────────────────────────────────────
// Klasika — TypeScript Interfaces
// ──────────────────────────────────────────────

export type UserRole = 'teacher' | 'student' | 'parent';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  initials: string;
  avatarColor: string;
}

export interface Teacher extends User {
  role: 'teacher';
  subjects: string[];
  classIds: string[];
}

export interface Student extends User {
  role: 'student';
  studentNumber: string;
  classId: string;
  className: string;
  gpa: number;
  attendanceRate: number;
  dateOfBirth: string;
  address: string;
  parentIds: string[];
  rank?: number;
}

export interface Parent extends User {
  role: 'parent';
  childrenIds: string[];
  phone: string;
}

export interface ClassInfo {
  id: string;
  name: string;
  grade: string;
  subjectIds: string[];
  studentIds: string[];
  teacherId: string;
}

export interface Subject {
  id: string;
  name: string;
  teacherId: string;
  classIds: string[];
  color: string;
}

export type AssignmentType = 'homework' | 'quiz' | 'midterm' | 'final';
export type AssignmentStatus = 'pending' | 'submitted' | 'graded' | 'overdue';

export interface Assignment {
  id: string;
  title: string;
  subjectId: string;
  classId: string;
  type: AssignmentType;
  maxScore: number;
  dueDate: string;
  createdAt: string;
  description?: string;
}

export interface Grade {
  id: string;
  studentId: string;
  assignmentId: string;
  subjectId: string;
  score: number;
  maxScore: number;
  gradedAt: string;
  remarks?: string;
}

export interface StudentAssignment {
  assignment: Assignment;
  status: AssignmentStatus;
  grade?: Grade;
}

export type AttendanceStatus = 'present' | 'absent' | 'late';

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: AttendanceStatus;
  subjectId?: string;
  note?: string;
}

export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface ChatThread {
  id: string;
  participants: string[];
  participantNames: string[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  target: 'all' | 'students' | 'parents';
  publishDate: string;
  isEvent: boolean;
  eventDate?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  authorId: string;
  authorName: string;
  publishDate: string;
  coverColor: string;
}

export interface Fee {
  id: string;
  parentId: string;
  studentId: string;
  description: string;
  amount: number;
  paidAmount: number;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
}

export interface ScheduleSlot {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  timeStart: string;
  timeEnd: string;
  subjectId: string;
  subjectName: string;
  room: string;
  teacherName: string;
  color: string;
}

export interface GradeSummary {
  subjectId: string;
  subjectName: string;
  average: number;
  grade: string;
  remarks: string;
}
