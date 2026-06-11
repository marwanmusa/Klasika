import { useState, useCallback, useEffect } from 'react';
import type { User, UserRole } from '@/types';
import { teachers, students, parents } from '@/data/users';

// Default login users per role
const defaultUsers: Record<UserRole, User> = {
  teacher: teachers[0],
  student: students[0],
  parent: parents[0],
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('klasika_user');
    if (stored) {
      try {
        return JSON.parse(stored) as User;
      } catch {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('klasika_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('klasika_user');
    }
  }, [user]);

  const login = useCallback((role: UserRole) => {
    setUser(defaultUsers[role]);
  }, []);

  const loginWithUser = useCallback((u: User) => {
    setUser(u);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('klasika_user');
  }, []);

  const isAuthenticated = user !== null;

  return {
    user,
    isAuthenticated,
    login,
    loginWithUser,
    logout,
  };
}
