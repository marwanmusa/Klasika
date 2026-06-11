import type { Fee } from '@/types';

export const fees: Fee[] = [
  // Parent p001 — children s001 (Aisha) and s003 (Dewi)
  { id: 'fee001', parentId: 'p001', studentId: 's001', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-08-28', status: 'paid' },
  { id: 'fee002', parentId: 'p001', studentId: 's001', description: 'Lab Materials Fee', amount: 750000, paidAmount: 750000, dueDate: '2024-09-15', paidDate: '2024-09-14', status: 'paid' },
  { id: 'fee003', parentId: 'p001', studentId: 's001', description: 'Tuition Fee — Spring 2025', amount: 5000000, paidAmount: 0, dueDate: '2025-01-15', status: 'pending' },
  { id: 'fee004', parentId: 'p001', studentId: 's003', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-08-25', status: 'paid' },
  { id: 'fee005', parentId: 'p001', studentId: 's003', description: 'Lab Materials Fee', amount: 750000, paidAmount: 750000, dueDate: '2024-09-15', paidDate: '2024-09-10', status: 'paid' },
  { id: 'fee006', parentId: 'p001', studentId: 's003', description: 'Tuition Fee — Spring 2025', amount: 5000000, paidAmount: 0, dueDate: '2025-01-15', status: 'pending' },

  // Parent p002 — children s002 (Rizki) and s005 (Maya)
  { id: 'fee007', parentId: 'p002', studentId: 's002', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-08-30', status: 'paid' },
  { id: 'fee008', parentId: 'p002', studentId: 's002', description: 'Lab Materials Fee', amount: 750000, paidAmount: 0, dueDate: '2024-11-30', status: 'overdue' },
  { id: 'fee009', parentId: 'p002', studentId: 's005', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-09-01', status: 'paid' },
  { id: 'fee010', parentId: 'p002', studentId: 's005', description: 'Tuition Fee — Spring 2025', amount: 5000000, paidAmount: 2500000, dueDate: '2025-01-15', status: 'pending' },

  // Parent p003 — children s004 (Fajar) and s006 (Budi)
  { id: 'fee011', parentId: 'p003', studentId: 's004', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-08-29', status: 'paid' },
  { id: 'fee012', parentId: 'p003', studentId: 's004', description: 'Activity Fee', amount: 500000, paidAmount: 0, dueDate: '2024-12-01', status: 'overdue' },
  { id: 'fee013', parentId: 'p003', studentId: 's006', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-09-02', status: 'paid' },
  { id: 'fee014', parentId: 'p003', studentId: 's006', description: 'Lab Materials Fee', amount: 750000, paidAmount: 750000, dueDate: '2024-09-15', paidDate: '2024-09-12', status: 'paid' },

  // Parent p004 — children s007 (Siti) and s008 (Andi)
  { id: 'fee015', parentId: 'p004', studentId: 's007', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-08-20', status: 'paid' },
  { id: 'fee016', parentId: 'p004', studentId: 's007', description: 'Lab Materials Fee', amount: 750000, paidAmount: 750000, dueDate: '2024-09-15', paidDate: '2024-09-13', status: 'paid' },
  { id: 'fee017', parentId: 'p004', studentId: 's008', description: 'Tuition Fee — Fall 2024', amount: 5000000, paidAmount: 5000000, dueDate: '2024-09-01', paidDate: '2024-08-22', status: 'paid' },
  { id: 'fee018', parentId: 'p004', studentId: 's008', description: 'Tuition Fee — Spring 2025', amount: 5000000, paidAmount: 0, dueDate: '2025-01-15', status: 'pending' },
];

export function getFeesByParent(parentId: string): Fee[] {
  return fees.filter((f) => f.parentId === parentId);
}

export function getFeesByStudent(studentId: string): Fee[] {
  return fees.filter((f) => f.studentId === studentId);
}

export function getFeeSummary(parentId: string) {
  const parentFees = getFeesByParent(parentId);
  const totalDue = parentFees.reduce((sum, f) => sum + f.amount, 0);
  const totalPaid = parentFees.reduce((sum, f) => sum + f.paidAmount, 0);
  const outstanding = totalDue - totalPaid;
  const overdueCount = parentFees.filter((f) => f.status === 'overdue').length;
  return { totalDue, totalPaid, outstanding, overdueCount };
}
