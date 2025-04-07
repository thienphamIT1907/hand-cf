import { cn } from '@/shared/utils/tailwind';
import { Typography } from 'antd';

const { Text } = Typography;

type TableTitleProps = {
  className?: string;
  title?: string;
};

export const TableTitle = ({ title, className }: TableTitleProps) => (
  <>
    {title ? (
      <Text
        className={cn(
          'text-gray-light-900 text-xl font-bold',
          className && className,
        )}
      >
        {title}
      </Text>
    ) : null}
  </>
);
