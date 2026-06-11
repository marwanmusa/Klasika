import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { parents, getStudentById } from '@/data/users';
import { getFeesByParent, getFeeSummary } from '@/data/fees';
import type { Fee } from '@/types';
import { toast } from 'sonner';

const rupiah = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const statusStyles: Record<Fee['status'], { bg: string; color: string; label: string }> = {
  paid: { bg: '#d1e8d5', color: '#3d6b4f', label: 'Paid' },
  pending: { bg: '#f0e9d0', color: '#7a6230', label: 'Pending' },
  overdue: { bg: '#f0ddd5', color: '#8b4a2a', label: 'Overdue' },
};

export default function ParentFees() {
  const parent = parents[0];
  const fees = getFeesByParent(parent.id);
  const summary = getFeeSummary(parent.id);
  const outstanding = fees.filter((f) => f.status !== 'paid');

  const handlePay = (fee: Fee) => {
    toast.success('Payment initiated', {
      description: `${fee.description} — ${rupiah(fee.amount - fee.paidAmount)}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5">
            <div style={{ fontSize: 13, color: '#777b86' }}>Total Billed</div>
            <div style={{ fontSize: 24, fontWeight: 480, color: '#17191c', marginTop: 4 }}>{rupiah(summary.totalDue)}</div>
          </CardContent>
        </Card>
        <Card style={{ background: '#d1e8d5' }}>
          <CardContent className="p-5">
            <div style={{ fontSize: 13, color: '#3d6b4f' }}>Amount Paid</div>
            <div style={{ fontSize: 24, fontWeight: 480, color: '#3d6b4f', marginTop: 4 }}>{rupiah(summary.totalPaid)}</div>
          </CardContent>
        </Card>
        <Card style={{ background: summary.outstanding > 0 ? '#f0ddd5' : '#f7f7f8' }}>
          <CardContent className="p-5">
            <div style={{ fontSize: 13, color: summary.outstanding > 0 ? '#8b4a2a' : '#777b86' }}>Outstanding Balance</div>
            <div style={{ fontSize: 24, fontWeight: 480, color: summary.outstanding > 0 ? '#8b4a2a' : '#17191c', marginTop: 4 }}>{rupiah(summary.outstanding)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Outstanding invoices */}
      {outstanding.length > 0 && (
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: '0 0 12px 0' }}>Outstanding Invoices</h3>
          <div className="space-y-3">
            {outstanding.map((fee) => {
              const student = getStudentById(fee.studentId);
              const due = fee.amount - fee.paidAmount;
              return (
                <Card key={fee.id}>
                  <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 450, color: '#17191c' }}>{fee.description}</div>
                      <div style={{ fontSize: 13, color: '#777b86', marginTop: 2 }}>
                        {student?.name} · Due {new Date(fee.dueDate + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div style={{ fontSize: 16, fontWeight: 480, color: '#17191c' }}>{rupiah(due)}</div>
                        <Badge style={{ background: statusStyles[fee.status].bg, color: statusStyles[fee.status].color, border: 'none' }}>
                          {statusStyles[fee.status].label}
                        </Badge>
                      </div>
                      <Button
                        onClick={() => handlePay(fee)}
                        style={{ background: '#17191c', color: '#ffffff', borderRadius: 9999, fontSize: 14, fontWeight: 450, padding: '8px 20px', height: 'auto' }}
                      >
                        Pay Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Payment history */}
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: '0 0 12px 0' }}>Payment History</h3>
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid #a3a6af' }}>
                  <th className="text-left px-6 py-3">Date</th>
                  <th className="text-left px-6 py-3">Description</th>
                  <th className="text-left px-6 py-3">Student</th>
                  <th className="text-right px-6 py-3">Amount</th>
                  <th className="text-center px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee) => {
                  const student = getStudentById(fee.studentId);
                  const dateLabel = fee.paidDate || fee.dueDate;
                  return (
                    <tr key={fee.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                      <td className="px-6 py-3" style={{ fontSize: 14, color: '#4c4c4c' }}>
                        {new Date(dateLabel + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-3" style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{fee.description}</td>
                      <td className="px-6 py-3" style={{ fontSize: 14, color: '#4c4c4c' }}>{student?.name}</td>
                      <td className="px-6 py-3 text-right" style={{ fontSize: 14, fontWeight: 480, color: '#17191c' }}>{rupiah(fee.amount)}</td>
                      <td className="px-6 py-3 text-center">
                        <Badge style={{ background: statusStyles[fee.status].bg, color: statusStyles[fee.status].color, border: 'none' }}>
                          {statusStyles[fee.status].label}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
