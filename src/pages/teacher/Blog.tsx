import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { blogPosts } from '@/data/blog';
import { ArrowLeft, Plus } from 'lucide-react';

export default function TeacherBlog() {
  const [view, setView] = useState<'list' | 'new' | 'detail'>('list');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = blogPosts.find((p) => p.id === selectedPostId);

  if (view === 'new') {
    return (
      <div className="space-y-6">
        <button onClick={() => setView('list')} className="flex items-center gap-2 cursor-pointer" style={{ background: 'none', border: 'none', fontSize: 14, fontWeight: 450, color: '#777b86' }}>
          <ArrowLeft size={16} /> Back to posts
        </button>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 style={{ fontSize: 20, fontWeight: 500, color: '#17191c', margin: 0 }}>New Post</h2>
            <Input id="blog-title" placeholder="Post title" style={{ fontSize: 18 }} />
            <Textarea id="blog-content" placeholder="Write your post..." rows={12} />
            <Button onClick={() => setView('list')} style={{ background: '#17191c', color: '#ffffff', borderRadius: 9999 }}>
              Publish
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (view === 'detail' && selectedPost) {
    return (
      <div className="space-y-6 max-w-2xl">
        <button onClick={() => setView('list')} className="flex items-center gap-2 cursor-pointer" style={{ background: 'none', border: 'none', fontSize: 14, fontWeight: 450, color: '#777b86' }}>
          <ArrowLeft size={16} /> Back to posts
        </button>
        <div className="h-48 rounded-2xl" style={{ background: selectedPost.coverColor }} />
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 500, color: '#17191c', margin: '0 0 8px 0', letterSpacing: '-0.009em' }}>{selectedPost.title}</h1>
          <div className="flex gap-3 mb-6" style={{ fontSize: 13, color: '#777b86' }}>
            <span>{selectedPost.authorName}</span>
            <span>{new Date(selectedPost.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div style={{ fontSize: 16, color: '#4c4c4c', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
            {selectedPost.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={() => setView('new')} style={{ background: '#17191c', color: '#ffffff', borderRadius: 9999, fontSize: 14, fontWeight: 450 }}>
          <Plus size={16} className="mr-2" /> New Post
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="cursor-pointer transition-all hover:scale-[1.02]"
            onClick={() => { setSelectedPostId(post.id); setView('detail'); }}
          >
            <div className="h-32 rounded-t-3xl" style={{ background: post.coverColor }} />
            <CardContent className="p-5">
              <h3 style={{ fontSize: 16, fontWeight: 500, color: '#17191c', margin: '0 0 6px 0' }}>{post.title}</h3>
              <p style={{ fontSize: 13, color: '#777b86', margin: '0 0 12px 0', lineHeight: 1.5 }}>{post.excerpt}</p>
              <div className="flex gap-3" style={{ fontSize: 12, color: '#a3a6af' }}>
                <span>{post.authorName}</span>
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
