// src/routes/_authenticated.tsx
import { PrivateLayout } from '@/layouts/PrivateLayout';
import type { AuthContextType } from '@/shared/types';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context as AuthContextType;
    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: PrivateLayout,
});
