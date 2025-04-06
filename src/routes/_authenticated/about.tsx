// src/routes/_authenticated/about.tsx
import { createFileRoute } from '@tanstack/react-router';

const About = () => (
  <div>
    <h1>About Page</h1>
    <p>This is the about page</p>
  </div>
);

export const Route = createFileRoute('/_authenticated/about')({
  component: About,
});
