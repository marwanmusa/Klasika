import { NavLink, useLocation } from 'react-router-dom';
import type { UserRole } from '@/types';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  LayoutDashboard, Users, GraduationCap, CalendarCheck, ClipboardList,
  FileBarChart, Megaphone, MessageCircle, PenTool, BookOpen, Calendar,
  CreditCard, TrendingUp,
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const teacherNav: NavSection[] = [
  {
    items: [
      { label: 'Dashboard', href: '/teacher/dashboard', icon: LayoutDashboard },
      { label: 'Students', href: '/teacher/students', icon: Users },
      { label: 'Grades', href: '/teacher/grades', icon: GraduationCap },
      { label: 'Attendance', href: '/teacher/attendance', icon: CalendarCheck },
      { label: 'Assignments', href: '/teacher/assignments', icon: ClipboardList },
      { label: 'Reports', href: '/teacher/reports', icon: FileBarChart },
    ],
  },
  {
    title: 'Communication',
    items: [
      { label: 'Announcements', href: '/teacher/announcements', icon: Megaphone },
      { label: 'Chat', href: '/teacher/chat', icon: MessageCircle },
      { label: 'Blog', href: '/teacher/blog', icon: PenTool },
    ],
  },
];

const studentNav: NavSection[] = [
  {
    items: [
      { label: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
      { label: 'My Grades', href: '/student/grades', icon: GraduationCap },
      { label: 'Progress', href: '/student/progress', icon: TrendingUp },
      { label: 'Attendance', href: '/student/attendance', icon: CalendarCheck },
      { label: 'Assignments', href: '/student/assignments', icon: ClipboardList },
      { label: 'Schedule', href: '/student/schedule', icon: Calendar },
    ],
  },
  {
    title: 'Communication',
    items: [
      { label: 'Announcements', href: '/student/announcements', icon: BookOpen },
      { label: 'Chat', href: '/student/chat', icon: MessageCircle },
    ],
  },
];

const parentNav: NavSection[] = [
  {
    items: [
      { label: 'Dashboard', href: '/parent/dashboard', icon: LayoutDashboard },
      { label: 'Progress', href: '/parent/progress', icon: TrendingUp },
      { label: 'Attendance', href: '/parent/attendance', icon: CalendarCheck },
      { label: 'Grades', href: '/parent/grades', icon: GraduationCap },
      { label: 'Fees', href: '/parent/fees', icon: CreditCard },
    ],
  },
  {
    title: 'Communication',
    items: [
      { label: 'Announcements', href: '/parent/announcements', icon: Megaphone },
      { label: 'Chat', href: '/parent/chat', icon: MessageCircle },
    ],
  },
];

function getNavForRole(role: UserRole): NavSection[] {
  switch (role) {
    case 'teacher': return teacherNav;
    case 'student': return studentNav;
    case 'parent': return parentNav;
  }
}

function SidebarContent({ role, onNavigate }: { role: UserRole; onNavigate?: () => void }) {
  const location = useLocation();
  const sections = getNavForRole(role);

  return (
    <div className="flex flex-col h-full" style={{ background: '#f7f7f8' }}>
      {/* Logo */}
      <div className="px-6 py-5">
        <h1
          className="font-display"
          style={{ fontSize: 20, color: '#17191c', fontWeight: 400, margin: 0, letterSpacing: '-0.025em' }}
        >
          Klasika
        </h1>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3">
        {sections.map((section, si) => (
          <div key={si} className="mb-2">
            {section.title && (
              <div
                className="px-3 py-2"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#777b86',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {section.title}
              </div>
            )}
            {section.items.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={onNavigate}
                  className="flex items-center gap-3 px-3 transition-all"
                  style={{
                    padding: '12px 12px',
                    borderRadius: 12,
                    background: isActive ? '#ffffff' : 'transparent',
                    boxShadow: isActive ? 'rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.10) 0px 20px 25px -5px, rgba(0, 0, 0, 0.10) 0px 8px 10px -6px' : 'none',
                    textDecoration: 'none',
                    color: '#17191c',
                    fontSize: 15,
                    fontWeight: 450,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-0.009em',
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} style={{ color: '#17191c' }} />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

export default function Sidebar({ role }: { role: UserRole }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col h-screen sticky top-0"
        style={{ width: 240, minWidth: 240, background: '#f7f7f8' }}
      >
        <SidebarContent role={role} />
      </aside>

      {/* Mobile hamburger + sheet */}
      <div className="lg:hidden fixed top-3 left-3 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10" style={{ background: '#ffffff', boxShadow: 'var(--shadow-card)' }} />}>
            <Menu size={20} style={{ color: '#17191c' }} />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[240px]" style={{ background: '#f7f7f8' }}>
            <SidebarContent role={role} onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
