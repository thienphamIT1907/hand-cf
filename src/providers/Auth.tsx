// src/auth.tsx
import type { ReactNode } from 'react';
import { createContext, useState } from 'react';
import type { AuthContextType } from '@/shared/types';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// TODO: Update this after integrate supabase auth
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
