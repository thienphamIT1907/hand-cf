import MenuCategoriesPage from '@/pages/MenuCategoriesPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/menu/categories')({
  component: MenuCategoriesPage,
});
