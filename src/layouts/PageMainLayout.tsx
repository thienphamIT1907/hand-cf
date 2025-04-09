import { cn } from '@/shared/utils/tailwind';
import React from 'react';

type PageMainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const PageMainLayout = ({ children, className }: PageMainLayoutProps) => (
  <div className={cn('', className && className)}>{children}</div>
);

export default PageMainLayout;
