import { useAuth } from '@/shared/hooks';
import { Link, Outlet } from '@tanstack/react-router';
import { Button } from 'antd';

export const PrivateLayout = () => {
  const { logout } = useAuth();

  return (
    <div>
      <header>
        <nav>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>{' '}
          <Link to="/products" className="[&.active]:font-bold">
            Products
          </Link>{' '}
          <Button onClick={logout}>Logout</Button>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
