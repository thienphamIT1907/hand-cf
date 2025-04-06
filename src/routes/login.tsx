// src/routes/login.tsx
import { useAuth } from '@/shared/hooks';
import type { AuthContextType } from '@/shared/types';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { Button } from 'antd';

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      <Button onClick={login}>Login</Button>
    </div>
  );
};

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context as AuthContextType;
    if (isAuthenticated) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: Login,
});
