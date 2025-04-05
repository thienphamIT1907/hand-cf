import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import AntdProvider from '@/providers/AntdProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntdProvider>
      <App />
    </AntdProvider>
  </StrictMode>,
);
