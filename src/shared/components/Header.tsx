import { Flex } from 'antd';
import { Clock } from '@/shared/components/Clock';
import { UserAvatar } from '@/shared/components/UserAvatar';

const Header = () => (
  <div className="flex w-full items-center justify-between gap-x-8 rounded-md bg-white px-4 py-2 shadow-sm">
    <div className="flex items-center justify-center gap-x-4">
      <Flex justify="flex-start" align="center" gap={10}>
        <Clock />
      </Flex>
    </div>
    <UserAvatar />
  </div>
);

export default Header;
