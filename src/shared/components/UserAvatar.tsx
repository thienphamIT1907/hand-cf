import Icon from '@/shared/components/Icon';
import { Flex, Typography } from 'antd';

const { Text } = Typography;
export const UserAvatar = () => {
  // const { handleLogout, isLoggingOut } = useLogout();
  // const { currentUser } = useSession();

  const isLoggingOut = false;

  return (
    <div className="flex items-center justify-center gap-x-1">
      <Icon name="CircleUserRound" size={22} className="self-start" />
      <Flex vertical>
        <Text className="text-base">
          {/* {currentUser?.email || '...'} */}
          admin@gmail.com
        </Text>
        <Flex gap={4} align="center" justify="flex-end">
          <Text className="cursor-pointer text-sm text-gray-400 hover:underline">
            Logout
          </Text>
          {isLoggingOut ? (
            <Icon
              name="LoaderCircle"
              className="animate-spin rounded-full text-gray-400 shadow-lg"
            />
          ) : (
            <Icon name="LogOut" className="size-3 text-gray-400" />
          )}
        </Flex>
      </Flex>
    </div>
  );
};
