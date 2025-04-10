import { AuthContext } from '@/providers/Auth';
import { useContext } from 'react';

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context!;
};
