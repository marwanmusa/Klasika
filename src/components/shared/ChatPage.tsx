import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getThreadsForUser } from '@/data/messages';
import { getUserById } from '@/data/users';
import type { ChatThread } from '@/types';
import { Send } from 'lucide-react';

interface ChatPageProps {
  userId: string;
}

export default function ChatPage({ userId }: ChatPageProps) {
  const threads = getThreadsForUser(userId);
  const [activeThreadId, setActiveThreadId] = useState(threads[0]?.id || '');
  const activeThread = threads.find((t) => t.id === activeThreadId);

  const getOtherName = (thread: ChatThread) => {
    const otherIdx = thread.participants.indexOf(userId) === 0 ? 1 : 0;
    return thread.participantNames[otherIdx];
  };

  const getOtherUser = (thread: ChatThread) => {
    const otherId = thread.participants.find((p) => p !== userId);
    return otherId ? getUserById(otherId) : null;
  };

  return (
    <Card className="flex overflow-hidden" style={{ height: 'calc(100vh - 160px)', minHeight: 500 }}>
      {/* Thread list */}
      <div className="w-72 shrink-0 border-r" style={{ borderColor: '#e5e5e5' }}>
        <div className="p-4" style={{ borderBottom: '1px solid #e5e5e5' }}>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: '#17191c', margin: 0 }}>Messages</h3>
        </div>
        <ScrollArea className="h-[calc(100%-56px)]">
          {threads.map((thread) => {
            const other = getOtherUser(thread);
            const isActive = thread.id === activeThreadId;
            return (
              <div
                key={thread.id}
                className="flex items-start gap-3 p-4 cursor-pointer transition-colors"
                style={{
                  background: isActive ? '#f7f7f8' : 'transparent',
                  borderBottom: '1px solid #f0f0f0',
                }}
                onClick={() => setActiveThreadId(thread.id)}
              >
                <Avatar className="h-9 w-9 shrink-0" style={{ background: other?.avatarColor || '#d3e3fc' }}>
                  <AvatarFallback style={{ background: other?.avatarColor || '#d3e3fc', color: '#17191c', fontSize: 12, fontWeight: 500 }}>
                    {other?.initials || '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>{getOtherName(thread)}</span>
                    {thread.unreadCount > 0 && (
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: '#5d2a1a', color: '#ffffff', fontSize: 10, fontWeight: 500 }}
                      >
                        {thread.unreadCount}
                      </span>
                    )}
                  </div>
                  <p
                    className="truncate"
                    style={{ fontSize: 13, color: '#a3a6af', margin: 0 }}
                  >
                    {thread.lastMessage}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollArea>
      </div>

      {/* Message panel */}
      <div className="flex-1 flex flex-col">
        {activeThread ? (
          <>
            {/* Thread header */}
            <div className="p-4 flex items-center gap-3" style={{ borderBottom: '1px solid #e5e5e5' }}>
              <Avatar className="h-8 w-8" style={{ background: getOtherUser(activeThread)?.avatarColor || '#d3e3fc' }}>
                <AvatarFallback style={{ background: getOtherUser(activeThread)?.avatarColor || '#d3e3fc', color: '#17191c', fontSize: 12, fontWeight: 500 }}>
                  {getOtherUser(activeThread)?.initials || '?'}
                </AvatarFallback>
              </Avatar>
              <span style={{ fontSize: 15, fontWeight: 450, color: '#17191c' }}>{getOtherName(activeThread)}</span>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-3">
                {activeThread.messages.map((msg) => {
                  const isMine = msg.senderId === userId;
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className="max-w-[70%] px-4 py-2.5"
                        style={{
                          borderRadius: 12,
                          background: isMine ? '#17191c' : '#d3e3fc',
                          color: isMine ? '#ffffff' : '#17191c',
                          fontSize: 14,
                          lineHeight: 1.5,
                        }}
                      >
                        <p style={{ margin: 0 }}>{msg.content}</p>
                        <div
                          className="mt-1"
                          style={{
                            fontSize: 11,
                            color: isMine ? 'rgba(255,255,255,0.6)' : '#777b86',
                            textAlign: 'right',
                          }}
                        >
                          {new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4" style={{ borderTop: '1px solid #e5e5e5' }}>
              <div className="flex items-center gap-2">
                <Input
                  id="chat-input"
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shrink-0"
                  style={{ background: '#17191c', border: 'none' }}
                >
                  <Send size={16} style={{ color: '#ffffff' }} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p style={{ fontSize: 14, color: '#a3a6af' }}>Select a conversation</p>
          </div>
        )}
      </div>
    </Card>
  );
}
