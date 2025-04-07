import type { NotificationArgsProps } from 'antd';
import type {
  IconType,
  NotificationInstance,
} from 'antd/es/notification/interface';
import { NotificationContext } from '@/providers/AntdNotification';
import { useCallback, useContext } from 'react';
import Icon from '@/shared/components/Icon';

export const useToast = () => {
  const notificationApi = useContext(
    NotificationContext,
  ) as NotificationInstance;

  const renderIcon = (type: IconType) => {
    switch (type) {
      case 'success':
        return <Icon name="CircleCheck" />;
      case 'warning':
        return <Icon name="CircleAlert" />;
      case 'error':
        return <Icon name="CircleX" />;
      case 'info':
      default:
        return;
    }
  };

  const showToast = useCallback(
    ({
      message,
      description,
      type = 'info',
      ...rest
    }: NotificationArgsProps) => {
      const options: NotificationArgsProps = {
        icon: renderIcon(type),
        message,
        description,
        placement: 'topRight',
        duration: 2,
        style: { width: `${450}px` },
        ...rest,
      };

      notificationApi[type](options);
    },
    [notificationApi],
  );

  const showErrorToast = useCallback(
    ({
      message,
      description,
      type = 'error',
      ...rest
    }: NotificationArgsProps) => {
      const options: NotificationArgsProps = {
        icon: renderIcon('error'),
        message: message ?? 'Error',
        description: description ?? 'Something wrong !',
        placement: 'topRight',
        duration: 2,
        style: { width: `${450}px` },
        ...rest,
      };

      notificationApi[type](options);
    },
    [notificationApi],
  );

  return { showToast, showErrorToast };
};
