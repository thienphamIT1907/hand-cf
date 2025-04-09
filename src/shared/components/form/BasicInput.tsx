import { cn } from '@/shared/utils/tailwind';
import type { InputProps } from 'antd';
import { Input } from 'antd';

type Props = {
  className?: string;
} & InputProps;

const BasicInput = ({ className, ...props }: Props) => (
  <Input
    {...props}
    className={cn('', className)}
    autoComplete="off"
    allowClear
  />
);
export default BasicInput;
