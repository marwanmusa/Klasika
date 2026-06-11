import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAnnouncementsForRole } from '@/data/announcements';
import { blogPosts } from '@/data/blog';
import { ArrowLeft } from 'lucide-react';

export default function StudentAnnouncements() {
  const announcements = getAnnouncementsForRole('student');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const post = blogPosts.find((p) => p.id === selectedPost);

  if (post) {
    return (
      <div className="space-y-6 max-w-2xl">
        <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 cursor-pointer" style={{ background: 'none', border: 'none', fontSize: 14, fontWeight: 450, color: '#777b86' }}>
          <ArrowLeft size={16} /> Back
        </button>
        <div className="h-40 rounded-2xl" style={{ background: post.coverColor }} />
        <h1 style={{ fontSize: 24, fontWeight: 500, color: '#17191c', margin: 0 }}>{post.title}</h1>
        <div className="flex gap-3" style={{ fontSize: 13, color: '#777b86' }}>
          <span>{post.authorName}</span>
          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div style={{ fontSize: 16, color: '#4c4c4c', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{post.content}</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Announcements */}
      <div>
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
                  {new Date(ann.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {ann.authorName}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: '0 0 12px 0' }}>Blog</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <Card key={post.id} className="cursor-pointer transition-all hover:scale-[1.02]" onClick={() => setSelectedPost(post.id)}>
              <div className="h-24 rounded-t-3xl" style={{ background: post.coverColor }} />
              <CardContent className="p-4">
                <h4 style={{ fontSize: 14, fontWeight: 500, color: '#17191c', margin: '0 0 4px 0' }}>{post.title}</h4>
                <p style={{ fontSize: 12, color: '#777b86', margin: 0 }}>{post.excerpt.slice(0, 80)}...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
