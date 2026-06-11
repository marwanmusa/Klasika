import type {
  Teacher,
  Student,
  Parent,
  ChatThread,
  AttendanceRecord,
  Fee,
  Announcement,
  BlogPost,
  Subject,
  ClassInfo,
  ScheduleSlot,
  Assignment,
  Grade
} from '@/types';

const API_BASE = 'http://localhost:3001';

/**
 * Standard HTTP Request helper
 */
async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

/**
 * API endpoints corresponding to the mock backend database collections
 */
export const api = {
  // --- Users ---
  getTeachers: () => request<Teacher[]>('/teachers'),
  getTeacher: (id: string) => request<Teacher>(`/teachers/${id}`),
  getStudents: () => request<Student[]>('/students'),
  getStudent: (id: string) => request<Student>(`/students/${id}`),
  getParents: () => request<Parent[]>('/parents'),
  getParent: (id: string) => request<Parent>(`/parents/${id}`),

  // --- Attendance ---
  getAttendance: () => request<AttendanceRecord[]>('/attendanceRecords'),
  getAttendanceByStudent: (studentId: string) =>
    request<AttendanceRecord[]>(`/attendanceRecords?studentId=${studentId}`),
  createAttendanceRecord: (record: Omit<AttendanceRecord, 'id'>) =>
    request<AttendanceRecord>('/attendanceRecords', {
      method: 'POST',
      body: JSON.stringify(record),
    }),
  updateAttendanceRecord: (id: string, record: Partial<AttendanceRecord>) =>
    request<AttendanceRecord>(`/attendanceRecords/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(record),
    }),

  // --- Classes & Timetables ---
  getSubjects: () => request<Subject[]>('/subjects'),
  getClasses: () => request<ClassInfo[]>('/classes'),
  getScheduleGrade10A: () => request<ScheduleSlot[]>('/scheduleGrade10A'),
  getScheduleGrade10B: () => request<ScheduleSlot[]>('/scheduleGrade10B'),

  // --- Grades & Assignments ---
  getAssignments: () => request<Assignment[]>('/assignments'),
  createAssignment: (assignment: Omit<Assignment, 'id'>) =>
    request<Assignment>('/assignments', {
      method: 'POST',
      body: JSON.stringify(assignment),
    }),
  getGrades: () => request<Grade[]>('/grades'),
  getGradesByStudent: (studentId: string) =>
    request<Grade[]>(`/grades?studentId=${studentId}`),
  createGrade: (grade: Omit<Grade, 'id'>) =>
    request<Grade>('/grades', {
      method: 'POST',
      body: JSON.stringify(grade),
    }),
  updateGrade: (id: string, grade: Partial<Grade>) =>
    request<Grade>(`/grades/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(grade),
    }),

  // --- Fees & Billing ---
  getFees: () => request<Fee[]>('/fees'),
  getFeesByParent: (parentId: string) =>
    request<Fee[]>(`/fees?parentId=${parentId}`),
  updateFeeStatus: (id: string, status: 'paid' | 'unpaid') =>
    request<Fee>(`/fees/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status, paidDate: status === 'paid' ? new Date().toISOString().split('T')[0] : undefined }),
    }),

  // --- Announcements ---
  getAnnouncements: () => request<Announcement[]>('/announcements'),
  createAnnouncement: (announcement: Omit<Announcement, 'id'>) =>
    request<Announcement>('/announcements', {
      method: 'POST',
      body: JSON.stringify(announcement),
    }),

  // --- Blog Posts ---
  getBlogPosts: () => request<BlogPost[]>('/blogPosts'),
  createBlogPost: (post: Omit<BlogPost, 'id'>) =>
    request<BlogPost>('/blogPosts', {
      method: 'POST',
      body: JSON.stringify(post),
    }),

  // --- Chat Threads & Messages ---
  getChatThreads: () => request<ChatThread[]>('/chatThreads'),
  getChatThreadsForUser: (userId: string) =>
    request<ChatThread[]>(`/chatThreads?participants_like=${userId}`),
  updateChatThread: (id: string, thread: Partial<ChatThread>) =>
    request<ChatThread>(`/chatThreads/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(thread),
    }),
};
