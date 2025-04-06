import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AntdProvider from '@/providers/AntdProvider';
import { AuthProvider } from '@/providers/Auth';
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AntdProvider>
        <App />
      </AntdProvider>
    </AuthProvider>
  </StrictMode>,
);
