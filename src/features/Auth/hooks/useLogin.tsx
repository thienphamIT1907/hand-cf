import { useToast } from '@/shared/hooks';
import { useState } from 'react';
import sha256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';
import type { LoginFormInput } from '@/features/Auth/types';
import supabase from '@/libs/supabase';

export const useLogin = () => {
  const [isLogging, setIsLogging] = useState(false);
  const { showToast } = useToast();

  const handleLogin = async ({ email, password }: LoginFormInput) => {
    setIsLogging(true);
    if (password) {
      const hashedPassword = sha256(password).toString(CryptoJS.enc.Hex);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: hashedPassword,
      });
      if (error) {
        showToast({
          type: 'error',
          message: 'Error',
          description: error?.message || 'Đăng nhập không hợp lệ!',
        });
      } else {
        // navigate('');
      }
    }
    setIsLogging(false);
  };

  return {
    handleLogin,
    isLogging,
  };
};
