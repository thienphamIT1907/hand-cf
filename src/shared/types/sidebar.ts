export enum SidebarRouteKey {
  Dashboard = '/',
  MyOrders = '/my-orders',
  Menu = '/menu',
}

enum SubSidebarKey {
  MenuCategories = 'categories',
  Dishes = 'dishes',
}

export enum SubSidebarRouteKey {
  MenuCategories = `${SidebarRouteKey.Menu}/${SubSidebarKey.MenuCategories}`,
  Dishes = `${SidebarRouteKey.Menu}/${SubSidebarKey.Dishes}`,
}
