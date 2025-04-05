import * as LucideIcons from 'lucide-react';

type Props = {
  name: keyof typeof LucideIcons;
  size?: number;
  color?: string;
};

const Icon = ({ name, size, color, ...props }: Props) => {
  const LucideIcon = LucideIcons[name] as React.ElementType | undefined;

  return LucideIcon ? (
    <LucideIcon size={size} color={color} {...props} />
  ) : null;
};
export default Icon;
