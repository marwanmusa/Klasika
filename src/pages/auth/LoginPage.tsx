import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { UserRole } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

const roles: { role: UserRole; label: string; desc: string }[] = [
  { role: 'teacher', label: 'Teacher', desc: 'Sarah Mitchell' },
  { role: 'student', label: 'Student', desc: 'Aisha Putri' },
  { role: 'parent', label: 'Parent', desc: 'Ibu Kartini Putri' },
];

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('teacher');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
    navigate(`/${selectedRole}/dashboard`);
  };

  const handleQuickLogin = (role: UserRole) => {
    onLogin(role);
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel — Hero */}
      <div
        className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 lg:w-1/2"
        style={{ background: '#f7f7f8' }}
      >
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: '#17191c' }}
            >
              <GraduationCap size={20} style={{ color: '#ffffff' }} />
            </div>
            <span
              className="font-display"
              style={{ fontSize: 20, color: '#17191c', fontWeight: 400 }}
            >
              Klasika
            </span>
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: 44,
              color: '#17191c',
              fontWeight: 400,
              lineHeight: 1.1,
              margin: '0 0 16px 0',
              letterSpacing: '-0.025em',
            }}
          >
            Where learning
            <br />
            meets clarity.
          </h1>
          <p
            style={{
              fontSize: 18,
              color: '#4c4c4c',
              fontWeight: 400,
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
              letterSpacing: '-0.009em',
            }}
          >
            A modern school management platform for teachers, students, and
            parents — designed with intention.
          </p>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div
        className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 lg:w-1/2"
        style={{ background: '#ffffff' }}
      >
        <div className="max-w-sm w-full mx-auto">
          <h2
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: '#17191c',
              fontFamily: "'Inter', sans-serif",
              margin: '0 0 8px 0',
              letterSpacing: '-0.009em',
            }}
          >
            Sign in
          </h2>
          <p
            style={{
              fontSize: 14,
              color: '#777b86',
              fontFamily: "'Inter', sans-serif",
              margin: '0 0 32px 0',
              letterSpacing: '-0.009em',
            }}
          >
            Choose a role to explore the prototype
          </p>

          {/* Role Quick-Select */}
          <div className="flex gap-2 mb-6">
            {roles.map(({ role, label }) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className="flex-1 px-4 py-2 transition-all cursor-pointer"
                style={{
                  borderRadius: 9999,
                  fontSize: 14,
                  fontWeight: 450,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '-0.009em',
                  border: selectedRole === role ? 'none' : '1px solid #a3a6af',
                  background: selectedRole === role ? '#17191c' : '#f7f7f8',
                  color: selectedRole === role ? '#ffffff' : '#17191c',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#777b86',
                  fontFamily: "'Inter', sans-serif",
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                Email
              </label>
              <Input
                id="login-email"
                type="email"
                placeholder="teacher@klasika.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#777b86',
                  fontFamily: "'Inter', sans-serif",
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                Password
              </label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              style={{
                background: '#17191c',
                color: '#ffffff',
                borderRadius: 9999,
                fontSize: 15,
                fontWeight: 450,
                padding: '10px 20px',
                height: 'auto',
              }}
            >
              Sign in as {roles.find((r) => r.role === selectedRole)?.label}
            </Button>
          </form>

          {/* Quick Login Buttons */}
          <div className="mt-8">
            <div
              className="flex items-center gap-3 mb-4"
              style={{ fontSize: 12, color: '#a3a6af', fontFamily: "'Inter', sans-serif" }}
            >
              <div className="flex-1 h-px" style={{ background: '#a3a6af' }} />
              <span>or quick access</span>
              <div className="flex-1 h-px" style={{ background: '#a3a6af' }} />
            </div>
            <div className="space-y-2">
              {roles.map(({ role, label, desc }) => (
                <button
                  key={role}
                  onClick={() => handleQuickLogin(role)}
                  className="w-full flex items-center justify-between px-4 py-3 transition-all cursor-pointer"
                  style={{
                    borderRadius: 16,
                    border: '1px solid #a3a6af',
                    background: 'transparent',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 450, color: '#17191c' }}>
                    Login as {label}
                  </span>
                  <span style={{ fontSize: 13, color: '#777b86' }}>{desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
