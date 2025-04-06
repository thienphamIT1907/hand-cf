// src/routes/_authenticated/index.tsx
import { createFileRoute } from '@tanstack/react-router';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
);

export const Route = createFileRoute('/_authenticated/')({
  component: Home,
});
