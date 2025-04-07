import Icon from '@/shared/components/Icon';
import { SidebarRouteKey, SubSidebarRouteKey } from '@/shared/types/sidebar';
import { Link } from '@tanstack/react-router';
import { type MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const useSidebar = () => {
  const menuItem: MenuItem[] = [
    {
      key: SidebarRouteKey.Dashboard,
      label: <Link to={SidebarRouteKey.Dashboard}>Dashboard</Link>,
      icon: <Icon name="ChartPie" size={20} />,
    },
    {
      key: SidebarRouteKey.MyOrders,
      label: <Link to={SidebarRouteKey.MyOrders}>My Orders</Link>,
      icon: <Icon name="NotepadText" size={20} />,
    },
    {
      key: SidebarRouteKey.Menu,
      label: <Link to={SidebarRouteKey.Menu}>Menu</Link>,
      icon: <Icon name="Utensils" size={20} />,
      children: [
        {
          key: SubSidebarRouteKey.MenuCategories,
          label: <Link to={SubSidebarRouteKey.MenuCategories}>Categories</Link>,
          icon: <Icon name="TableProperties" size={20} />,
        },
        {
          key: SubSidebarRouteKey.Dishes,
          label: <Link to={SubSidebarRouteKey.Dishes}>Dishes</Link>,
          icon: <Icon name="Soup" size={20} />,
        },
      ],
    },
  ];

  return {
    menuItem,
  };
};
