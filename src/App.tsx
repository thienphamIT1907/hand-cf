import '@/index.css';
import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useAuth } from '@/shared/hooks';

const App = () => {
  const auth = useAuth();
  return (
    <RouterProvider
      router={createRouter({ routeTree })}
      context={{ isAuthenticated: auth.isAuthenticated }}
    />
  );
};
export default App;
