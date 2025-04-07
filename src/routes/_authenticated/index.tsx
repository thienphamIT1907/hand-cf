// src/routes/_authenticated/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { Typography } from 'antd';

const { Text } = Typography;

const Home = () => (
  <div>
    <Text>Home Page</Text>
    <Text>Welcome to the home page!</Text>
  </div>
);

export const Route = createFileRoute('/_authenticated/')({
  component: Home,
});
