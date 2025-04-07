import MyOrdersPage from '@/pages/MyOrdersPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/my-orders/')({
  component: MyOrdersPage,
});
