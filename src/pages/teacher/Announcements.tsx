import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { announcements } from '@/data/announcements';
import { Plus } from 'lucide-react';

const targetBadge: Record<string, { bg: string; color: string }> = {
  all: { bg: '#f7f7f8', color: '#777b86' },
  students: { bg: '#d3e3fc', color: '#17191c' },
  parents: { bg: '#fbe1d1', color: '#5d2a1a' },
};

export default function TeacherAnnouncements() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button style={{ background: '#17191c', color: '#ffffff', borderRadius: 9999, fontSize: 14, fontWeight: 450 }}>
              <Plus size={16} className="mr-2" />
              New Announcement
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="space-y-4 p-2">
              <h3 style={{ fontSize: 18, fontWeight: 500, color: '#17191c', margin: 0 }}>New Announcement</h3>
              <Input id="announcement-title" placeholder="Title" />
              <Textarea id="announcement-content" placeholder="Content" rows={4} />
              <select className="w-full px-4 py-2" style={{ borderRadius: 16, border: '1px solid #a3a6af', fontSize: 14, fontFamily: "'Inter', sans-serif" }}>
                <option value="all">All</option>
                <option value="students">Students Only</option>
                <option value="parents">Parents Only</option>
              </select>
              <input type="date" className="w-full px-4 py-2" style={{ borderRadius: 16, border: '1px solid #a3a6af', fontSize: 14, fontFamily: "'Inter', sans-serif" }} />
              <Button onClick={() => setDialogOpen(false)} className="w-full" style={{ background: '#17191c', color: '#ffffff', borderRadius: 9999 }}>
                Publish
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {announcements.map((ann) => {
          const badge = targetBadge[ann.target] || targetBadge.all;
          return (
            <Card key={ann.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: 0 }}>{ann.title}</h3>
                  <div className="flex gap-2 shrink-0 ml-4">
                    <Badge style={{ background: badge.bg, color: badge.color, border: 'none', textTransform: 'capitalize' }}>
                      {ann.target}
                    </Badge>
                    {ann.isEvent && (
                      <Badge style={{ background: '#d1e8d5', color: '#3d6b4f', border: 'none' }}>
                        Event
                      </Badge>
                    )}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#4c4c4c', margin: '0 0 8px 0', lineHeight: 1.6 }}>{ann.content}</p>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: 12, color: '#a3a6af' }}>{ann.authorName}</span>
                  <span style={{ fontSize: 12, color: '#a3a6af' }}>
                    {new Date(ann.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  {ann.eventDate && (
                    <span style={{ fontSize: 12, color: '#5d2a1a', fontWeight: 480 }}>
                      Event: {new Date(ann.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
