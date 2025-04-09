import type { HTMLAttributes } from 'react';
import { Typography } from 'antd';
import React from 'react';
import { cn } from '@/shared/utils/tailwind';

const { Title } = Typography;

type PageTitleProps = {
  className?: HTMLAttributes<HTMLElement>['className'];
  desc?: React.ReactNode | string;
  extraButton?: React.ReactNode;
  showBottomLine?: boolean;
  title: React.ReactNode | string;
};

const PageTitle = ({
  title,
  showBottomLine = true,
  extraButton,
  className,
  desc,
}: PageTitleProps) => (
  <div
    className={cn(
      'mb-4 mt-0 flex items-baseline justify-between pt-0',
      showBottomLine && 'border-gray-light-200 border-b border-solid',
      className,
    )}
  >
    <div>
      {typeof title === 'string' ? (
        <Title className="m-0 line-clamp-1 p-0 font-medium" level={3}>
          {title}
        </Title>
      ) : (
        title
      )}
      {desc}
    </div>

    {!!extraButton && extraButton}
  </div>
);

export default PageTitle;
