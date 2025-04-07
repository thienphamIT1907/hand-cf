import * as LucideIcons from 'lucide-react';

type Props = {
  name: keyof typeof LucideIcons;
  size?: number;
  color?: string;
  className?: string;
};

const Icon = ({ name, size, color, className, ...props }: Props) => {
  const LucideIcon = LucideIcons[name] as React.ElementType;

  return LucideIcon ? (
    <LucideIcon size={size} color={color} className={className} {...props} />
  ) : null;
};
export default Icon;
