'use client';

import type React from 'react';
import { useState } from 'react';
import { Layout, Menu, Button, Image, Typography, Flex } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import '@/styles/override/sidebar.css';
import { cn } from '@/shared/utils/tailwind';
import { useSidebar } from '@/shared/hooks';
import { useRouterState } from '@tanstack/react-router';

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouterState();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const { menuItem } = useSidebar();

  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="relative h-screen overflow-y-auto overflow-x-hidden bg-white shadow-sm"
    >
      <Flex justify="center" align="center" className="min-h-13 h-13">
        {collapsed ? (
          <Text className="p-5 text-center text-4xl font-bold text-[#ff9966]">
            H
          </Text>
        ) : (
          <Flex justify="center" align="center" className="h-13 p-2">
            <Image
              src="/assets/images/hand-img.png"
              preview={false}
              rootClassName="min-h-13 w-full h-13"
            />
          </Flex>
        )}
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={[router.location.pathname]}
        className="sidebar-menu px-2"
        items={menuItem}
      />

      <div className={cn(`logout-container`, collapsed && 'collapsed')}>
        {collapsed ? (
          <Button
            className="flex w-full items-center justify-center border-none py-4 shadow-none outline-none"
            type="text"
            onClick={toggleCollapsed}
          >
            <MenuFoldOutlined />
          </Button>
        ) : (
          <Button
            className="flex w-full items-center justify-center border-none py-4 shadow-none outline-none"
            type="text"
            onClick={toggleCollapsed}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            <Text>Collapse</Text>
          </Button>
        )}
      </div>
    </Sider>
  );
};

export default Sidebar;
