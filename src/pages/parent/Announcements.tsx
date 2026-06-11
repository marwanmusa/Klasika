import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAnnouncementsForRole } from '@/data/announcements';
import { CalendarDays } from 'lucide-react';

export default function ParentAnnouncements() {
  const announcements = getAnnouncementsForRole('parent');
  const events = announcements
    .filter((a) => a.isEvent && a.eventDate)
    .sort((a, b) => new Date(a.eventDate!).getTime() - new Date(b.eventDate!).getTime());

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Announcement feed */}
      <div className="lg:col-span-2">
        <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: '0 0 12px 0' }}>Announcements</h3>
        <div className="space-y-4">
          {announcements.map((ann) => (
            <Card key={ann.id}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h4 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: 0 }}>{ann.title}</h4>
                  {ann.isEvent && <Badge style={{ background: '#d1e8d5', color: '#3d6b4f', border: 'none' }}>Event</Badge>}
                </div>
                <p style={{ fontSize: 14, color: '#4c4c4c', margin: '0 0 8px 0', lineHeight: 1.5 }}>{ann.content}</p>
                <span style={{ fontSize: 12, color: '#a3a6af' }}>
                  {new Date(ann.publishDate + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {ann.authorName}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming events */}
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: '0 0 12px 0' }}>Upcoming Events</h3>
        <div className="space-y-3">
          {events.length === 0 && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CalendarDays size={40} style={{ color: '#a3a6af' }} />
              <p style={{ fontSize: 14, color: '#777b86', marginTop: 8 }}>No upcoming events</p>
            </div>
          )}
          {events.map((ev) => {
            const date = new Date(ev.eventDate! + 'T12:00:00');
            return (
              <Card key={ev.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className="flex flex-col items-center justify-center shrink-0 rounded-2xl"
                    style={{ width: 52, height: 52, background: '#fbe1d1' }}
                  >
                    <span style={{ fontSize: 11, color: '#5d2a1a', fontWeight: 500, textTransform: 'uppercase' }}>
                      {date.toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span style={{ fontSize: 18, color: '#5d2a1a', fontWeight: 480, lineHeight: 1 }}>
                      {date.getDate()}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{ev.title}</div>
                    <div style={{ fontSize: 12, color: '#777b86' }}>
                      {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
