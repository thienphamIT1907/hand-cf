import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AntdProvider from '@/providers/AntdProvider';
import { AuthProvider } from '@/providers/Auth';
import App from '@/App';
import TanstackQueryProvider from '@/providers/TanstackQuery';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AntdProvider>
        <TanstackQueryProvider>
          <App />
        </TanstackQueryProvider>
      </AntdProvider>
    </AuthProvider>
  </StrictMode>,
);
