// src/routes/_authenticated/products.tsx
import { createFileRoute } from '@tanstack/react-router';

const Products = () => (
  <div>
    <h1>Products Page</h1>
    <p>Here are our products</p>
  </div>
);

export const Route = createFileRoute('/_authenticated/products')({
  component: Products,
});
