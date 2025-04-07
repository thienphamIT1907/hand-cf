import type { LoginFormInput } from '@/features/Auth/types';
import Icon from '@/shared/components/Icon';
import { useToast } from '@/shared/hooks/useToast';
import { Button, Divider, Form, Input } from 'antd';
import type { Rule } from 'antd/es/form';

const { useForm, Item } = Form;

const validateRules: Rule[] = [
  {
    required: true,
    message: 'Vui lòng nhập đủ thông tin',
  },
  {
    pattern: /^[^@]+@[^@]+\.[^@.]{2,}$/,
    message: 'Email không hợp lệ',
  },
];

const renderEye = (visible: boolean) =>
  visible ? (
    <Icon className="cursor-pointer" name="Eye" />
  ) : (
    <Icon className="cursor-pointer" name="EyeClosed" />
  );

export const LoginForm = () => {
  const { showToast } = useToast();
  const [form] = useForm<LoginFormInput>();
  //   const { handleLogin, isLogging } = useLogin();

  const onFinish = (_: LoginFormInput) => {
    form
      .validateFields()
      .then(() => {
        // handleLogin(formValues);
      })
      .catch(() => {
        showToast({
          type: 'error',
          message: 'Lỗi',
          description: 'Thông tin đăng nhập không hợp lệ!',
        });
      });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      className="mt-10 w-full max-w-[300px]"
      onFinish={onFinish}
      initialValues={{
        email: 'admin@cs447bus.com',
        password: '123123',
      }}
    >
      <Item name="email" rules={validateRules}>
        <Input
          size="large"
          placeholder="Email"
          type="email"
          //   disabled={isLogging}
        />
      </Item>

      <Item
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
        className="mt-8"
      >
        <Input.Password
          size="large"
          //   disabled={isLogging}
          placeholder="Mật khẩu"
          iconRender={renderEye}
        />
      </Item>
      <Divider className="my-10" />
      <Button
        className="w-full border-none bg-[#c35959] text-white shadow-lg shadow-[#e19191] outline-none"
        size="large"
        htmlType="submit"
        // loading={isLogging}
      >
        Đăng nhập
      </Button>
    </Form>
  );
};
