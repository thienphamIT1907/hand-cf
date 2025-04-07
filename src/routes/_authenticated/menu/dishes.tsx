import DishesPage from '@/pages/DishesPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/menu/dishes')({
  component: DishesPage,
});
