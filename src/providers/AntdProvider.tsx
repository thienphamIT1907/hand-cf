import { designTokens } from '@/libs/antd/designToken';
import { AntdNotificationProvider } from '@/providers/AntdNotification';
import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: designTokens.colors.primary,
    fontFamily: designTokens.typography.fontFamily,
    fontSize: parseInt(designTokens.typography.fontSize.base),
    margin: parseInt(designTokens.spacing.md),
    padding: parseInt(designTokens.spacing.sm),
    borderRadius: designTokens.borderRadius.default,
  },
};

const AntdProvider = ({ children }: { children: React.ReactNode }) => (
  <ConfigProvider componentSize="middle" theme={theme}>
    <AntdNotificationProvider>{children}</AntdNotificationProvider>
  </ConfigProvider>
);
export default AntdProvider;
