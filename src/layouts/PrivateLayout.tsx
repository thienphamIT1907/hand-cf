import SidebarProvider from '@/providers/SidebarProvider';
import Header from '@/shared/components/Header';
import SideBar from '@/shared/components/Sidebar';
import { Outlet } from '@tanstack/react-router';

export const PrivateLayout = () => (
  <SidebarProvider>
    <main className="flex bg-gray-100">
      <SideBar />
      <div className="flex h-screen w-full flex-col gap-4 overflow-hidden overflow-y-auto rounded-xl p-3">
        <Header />
        <div className="scrollbar-gutter size-full overflow-y-auto rounded-lg bg-white p-6 shadow-sm">
          <Outlet />
        </div>
      </div>
    </main>
  </SidebarProvider>
);
