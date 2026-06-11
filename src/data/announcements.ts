import type { Announcement } from '@/types';

export const announcements: Announcement[] = [
  {
    id: 'ann001',
    title: 'Final Exam Schedule Released',
    content: 'The final examination schedule for the Fall 2024 semester has been released. Mathematics exams will be held on December 15, English on December 16, Science on December 17, and History on December 18. Students are advised to begin their preparation early and consult with their teachers for study guides.',
    authorId: 't001',
    authorName: 'Sarah Mitchell',
    target: 'all',
    publishDate: '2024-12-01',
    isEvent: false,
  },
  {
    id: 'ann002',
    title: 'Parent-Teacher Conference',
    content: 'We are pleased to invite all parents to our annual Parent-Teacher Conference scheduled for December 20, 2024. This is an excellent opportunity to discuss your child\'s academic progress, attendance, and overall development. Individual time slots will be assigned — please check your email for your specific schedule.',
    authorId: 't002',
    authorName: 'James Hartwell',
    target: 'parents',
    publishDate: '2024-12-03',
    isEvent: true,
    eventDate: '2024-12-20',
  },
  {
    id: 'ann003',
    title: 'Science Fair Registration Open',
    content: 'Registration for the annual Klasika Science Fair is now open! Students can participate individually or in teams of up to 3. Projects should demonstrate a scientific hypothesis, experimental methodology, and clear conclusions. Registration deadline is January 10, 2025. See Dr. Kusnadi for more details.',
    authorId: 't003',
    authorName: 'Dr. Lina Kusnadi',
    target: 'students',
    publishDate: '2024-12-05',
    isEvent: true,
    eventDate: '2025-01-25',
  },
  {
    id: 'ann004',
    title: 'Holiday Break Notice',
    content: 'Klasika School will be closed for the winter holiday from December 23, 2024 through January 5, 2025. Classes resume on January 6, 2025. We wish all students and families a restful and joyful holiday season!',
    authorId: 't001',
    authorName: 'Sarah Mitchell',
    target: 'all',
    publishDate: '2024-12-10',
    isEvent: false,
  },
  {
    id: 'ann005',
    title: 'New Library Books Available',
    content: 'Our school library has received a new collection of books covering mathematics, literature, and natural sciences. Students are encouraged to explore the new additions. Library hours: Monday to Friday, 07:30 – 16:00.',
    authorId: 't002',
    authorName: 'James Hartwell',
    target: 'students',
    publishDate: '2024-12-08',
    isEvent: false,
  },
  {
    id: 'ann006',
    title: 'Outstanding Fee Reminder',
    content: 'This is a gentle reminder that all outstanding tuition fees for the Fall 2024 semester should be settled by December 31, 2024. Please visit the finance office or use the online payment portal for your convenience.',
    authorId: 't001',
    authorName: 'Sarah Mitchell',
    target: 'parents',
    publishDate: '2024-12-12',
    isEvent: false,
  },
];

export function getAnnouncementsForRole(role: 'teacher' | 'student' | 'parent'): Announcement[] {
  return announcements.filter((a) => {
    if (role === 'teacher') return true;
    if (a.target === 'all') return true;
    if (role === 'student' && a.target === 'students') return true;
    if (role === 'parent' && a.target === 'parents') return true;
    return false;
  });
}
