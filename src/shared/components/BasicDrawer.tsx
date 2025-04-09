import ActionButtons from '@/shared/components/ActionButtons';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import type { ReactNode } from 'react';
import '@/styles/override/drawer.css';

const LAYOUT_SIZE_DRAWER = 400;

type Props = {
  children?: ReactNode;
  width?: number;
  footer?: ReactNode;
  hiddenFooter?: boolean;
  btnCancelText?: string;
  btnOKText?: string;
  onCancel?: () => void;
  onOK?: () => void;
} & DrawerProps;

export const BasicDrawer = ({
  children,
  width,
  footer,
  btnCancelText,
  btnOKText,
  onCancel,
  onClose,
  onOK,
  hiddenFooter = false,
  ...props
}: Props) => {
  const renderFooter = () => {
    if (footer) {
      return footer;
    }

    return (
      <ActionButtons
        btnCancelText={btnCancelText}
        btnOkText={btnOKText}
        onOK={onOK}
        onCancel={onCancel}
      />
    );
  };

  return (
    <Drawer
      {...props}
      footer={hiddenFooter ? null : renderFooter()}
      keyboard={false}
      maskClosable={false}
      width={width || LAYOUT_SIZE_DRAWER}
      destroyOnClose
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
};
