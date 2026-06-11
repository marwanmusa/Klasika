import type { ChatThread } from '@/types';

export const chatThreads: ChatThread[] = [
  // Teacher Sarah ↔ Parent Kartini (about Aisha)
  {
    id: 'thread001',
    participants: ['t001', 'p001'],
    participantNames: ['Sarah Mitchell', 'Ibu Kartini Putri'],
    lastMessage: 'Thank you for the update, Ms. Mitchell.',
    lastMessageTime: '2024-12-10T14:30:00',
    unreadCount: 0,
    messages: [
      { id: 'm001', threadId: 'thread001', senderId: 't001', senderName: 'Sarah Mitchell', content: 'Good morning Ibu Kartini. I wanted to discuss Aisha\'s progress in Mathematics this semester.', timestamp: '2024-12-10T09:00:00', read: true },
      { id: 'm002', threadId: 'thread001', senderId: 'p001', senderName: 'Ibu Kartini Putri', content: 'Good morning Ms. Mitchell. Of course, how is she doing?', timestamp: '2024-12-10T09:15:00', read: true },
      { id: 'm003', threadId: 'thread001', senderId: 't001', senderName: 'Sarah Mitchell', content: 'Aisha has shown consistent improvement. Her midterm score was 85 and she\'s been participating actively in class discussions. I believe she has potential for an A if she keeps up with the practice sets.', timestamp: '2024-12-10T09:30:00', read: true },
      { id: 'm004', threadId: 'thread001', senderId: 'p001', senderName: 'Ibu Kartini Putri', content: 'That\'s wonderful to hear! She has been studying extra at home. Is there anything specific we should focus on before finals?', timestamp: '2024-12-10T10:00:00', read: true },
      { id: 'm005', threadId: 'thread001', senderId: 't001', senderName: 'Sarah Mitchell', content: 'I\'d recommend focusing on trigonometry — that\'s the area where she scored lower. I can share some additional practice materials if you\'d like.', timestamp: '2024-12-10T10:20:00', read: true },
      { id: 'm006', threadId: 'thread001', senderId: 'p001', senderName: 'Ibu Kartini Putri', content: 'That would be very helpful. Please share them when you can.', timestamp: '2024-12-10T14:00:00', read: true },
      { id: 'm007', threadId: 'thread001', senderId: 't001', senderName: 'Sarah Mitchell', content: 'I\'ve uploaded the materials to the student portal. Aisha can access them anytime.', timestamp: '2024-12-10T14:15:00', read: true },
      { id: 'm008', threadId: 'thread001', senderId: 'p001', senderName: 'Ibu Kartini Putri', content: 'Thank you for the update, Ms. Mitchell.', timestamp: '2024-12-10T14:30:00', read: true },
    ],
  },
  // Teacher James ↔ Student Rizki
  {
    id: 'thread002',
    participants: ['t002', 's002'],
    participantNames: ['James Hartwell', 'Rizki Pratama'],
    lastMessage: 'I\'ll revise it and resubmit by Friday.',
    lastMessageTime: '2024-12-09T11:45:00',
    unreadCount: 1,
    messages: [
      { id: 'm009', threadId: 'thread002', senderId: 't002', senderName: 'James Hartwell', content: 'Hi Rizki, I wanted to give you feedback on your persuasive essay before the final version is due.', timestamp: '2024-12-09T09:00:00', read: true },
      { id: 'm010', threadId: 'thread002', senderId: 's002', senderName: 'Rizki Pratama', content: 'Hello Mr. Hartwell! Yes, please share your feedback.', timestamp: '2024-12-09T09:30:00', read: true },
      { id: 'm011', threadId: 'thread002', senderId: 't002', senderName: 'James Hartwell', content: 'Your argument structure is strong, but the conclusion needs more impact. Try restating your thesis with a call to action. Also, check paragraphs 3 and 4 for transition words.', timestamp: '2024-12-09T10:00:00', read: true },
      { id: 'm012', threadId: 'thread002', senderId: 's002', senderName: 'Rizki Pratama', content: 'Thank you for the detailed feedback! Should I also add more evidence in paragraph 2?', timestamp: '2024-12-09T10:30:00', read: true },
      { id: 'm013', threadId: 'thread002', senderId: 't002', senderName: 'James Hartwell', content: 'Good observation — yes, one more supporting example would strengthen that section considerably.', timestamp: '2024-12-09T11:00:00', read: true },
      { id: 'm014', threadId: 'thread002', senderId: 's002', senderName: 'Rizki Pratama', content: 'I\'ll revise it and resubmit by Friday.', timestamp: '2024-12-09T11:45:00', read: false },
    ],
  },
  // Teacher Lina ↔ Parent Ratna (about Fajar)
  {
    id: 'thread003',
    participants: ['t003', 'p003'],
    participantNames: ['Dr. Lina Kusnadi', 'Ibu Ratna Nugroho'],
    lastMessage: 'We\'ll work on it together at home. Thank you for your patience.',
    lastMessageTime: '2024-12-08T16:00:00',
    unreadCount: 2,
    messages: [
      { id: 'm015', threadId: 'thread003', senderId: 't003', senderName: 'Dr. Lina Kusnadi', content: 'Selamat siang Ibu Ratna. I\'m reaching out about Fajar\'s performance in Science. His grades have been below average this semester.', timestamp: '2024-12-08T13:00:00', read: true },
      { id: 'm016', threadId: 'thread003', senderId: 'p003', senderName: 'Ibu Ratna Nugroho', content: 'Thank you for letting me know, Dr. Kusnadi. We\'ve noticed he seems less interested in studying lately. What areas is he struggling with?', timestamp: '2024-12-08T13:30:00', read: true },
      { id: 'm017', threadId: 'thread003', senderId: 't003', senderName: 'Dr. Lina Kusnadi', content: 'His lab reports are generally good, which shows he understands the concepts when he engages. But his quiz and exam scores suggest he isn\'t reviewing the material regularly. The genetics unit especially needs attention before finals.', timestamp: '2024-12-08T14:00:00', read: true },
      { id: 'm018', threadId: 'thread003', senderId: 'p003', senderName: 'Ibu Ratna Nugroho', content: 'I see. Would it help if he attended extra study sessions?', timestamp: '2024-12-08T15:00:00', read: false },
      { id: 'm019', threadId: 'thread003', senderId: 't003', senderName: 'Dr. Lina Kusnadi', content: 'Absolutely. We have peer tutoring sessions on Wednesdays after school. I can also prepare a study guide specifically for him.', timestamp: '2024-12-08T15:30:00', read: false },
      { id: 'm020', threadId: 'thread003', senderId: 'p003', senderName: 'Ibu Ratna Nugroho', content: 'We\'ll work on it together at home. Thank you for your patience.', timestamp: '2024-12-08T16:00:00', read: false },
    ],
  },
  // Teacher Sarah ↔ Student Dewi
  {
    id: 'thread004',
    participants: ['t001', 's003'],
    participantNames: ['Sarah Mitchell', 'Dewi Sari'],
    lastMessage: 'I\'d love to join! Thank you for thinking of me.',
    lastMessageTime: '2024-12-07T12:30:00',
    unreadCount: 0,
    messages: [
      { id: 'm021', threadId: 'thread004', senderId: 't001', senderName: 'Sarah Mitchell', content: 'Hi Dewi! Congratulations on your outstanding midterm results. You had the highest score in the class.', timestamp: '2024-12-07T10:00:00', read: true },
      { id: 'm022', threadId: 'thread004', senderId: 's003', senderName: 'Dewi Sari', content: 'Thank you so much, Ms. Mitchell! I really enjoyed the quadratic functions unit.', timestamp: '2024-12-07T10:30:00', read: true },
      { id: 'm023', threadId: 'thread004', senderId: 't001', senderName: 'Sarah Mitchell', content: 'I wanted to let you know that there\'s a Math Olympiad competition coming up in January. Given your performance, I think you\'d be a great candidate to represent our school.', timestamp: '2024-12-07T11:00:00', read: true },
      { id: 'm024', threadId: 'thread004', senderId: 's003', senderName: 'Dewi Sari', content: 'I\'d love to join! Thank you for thinking of me.', timestamp: '2024-12-07T12:30:00', read: true },
    ],
  },
];

export function getThreadsForUser(userId: string): ChatThread[] {
  return chatThreads.filter((t) => t.participants.includes(userId));
}

export function getThreadById(threadId: string): ChatThread | undefined {
  return chatThreads.find((t) => t.id === threadId);
}
