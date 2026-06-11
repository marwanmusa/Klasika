import type { User } from '@/types';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface TopBarProps {
  title: string;
  user: User;
  onLogout: () => void;
}

export default function TopBar({ title, user, onLogout }: TopBarProps) {
  return (
    <header
      className="flex items-center justify-between px-6 lg:px-8"
      style={{
        height: 64,
        background: '#ffffff',
        borderBottom: '1px solid #a3a6af',
      }}
    >
      {/* Page title — offset on mobile for hamburger */}
      <h2
        className="pl-12 lg:pl-0"
        style={{
          fontSize: 17,
          fontWeight: 480,
          color: '#17191c',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '-0.009em',
          margin: 0,
        }}
      >
        {title}
      </h2>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
              <Bell size={20} style={{ color: '#777b86' }} />
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full"
                style={{ background: '#5d2a1a' }}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Notifications</TooltipContent>
        </Tooltip>

        {/* User avatar */}
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8" style={{ background: user.avatarColor }}>
            <AvatarFallback
              style={{
                background: user.avatarColor,
                color: '#17191c',
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {user.initials}
            </AvatarFallback>
          </Avatar>
          <span
            className="hidden sm:block"
            style={{
              fontSize: 14,
              fontWeight: 450,
              color: '#17191c',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {user.name}
          </span>
        </div>

        {/* Logout */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={onLogout}>
              <LogOut size={18} style={{ color: '#777b86' }} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Sign out</TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}
