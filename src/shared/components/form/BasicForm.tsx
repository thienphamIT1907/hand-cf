import type { FormLayout } from 'antd/es/form/Form';
import type { FormProps } from 'antd/lib';
import { Form, type FormInstance } from 'antd';
import React from 'react';
import { cn } from '@/shared/utils/tailwind';
import CustomRequiredMark from '@/shared/components/form/CustomRequiredMark';

type Props = {
  allowScrollToFirstError?: boolean;
  children: React.ReactNode;
  className?: string;
  form: FormInstance;
  layout?: FormLayout;
  rootFormClassName?: string;
} & FormProps;

const renderCustomMark = (
  label: React.ReactNode,
  { required }: { required: boolean },
) => <CustomRequiredMark isRequired={required} label={label} />;

const BaseForm = ({
  form,
  className,
  rootFormClassName,
  children,
  layout = 'vertical',
  allowScrollToFirstError = true,
  ...props
}: Props) => (
  <div className={cn(rootFormClassName)}>
    <Form
      {...props}
      scrollToFirstError={
        allowScrollToFirstError
          ? {
              behavior: 'smooth',
              block: 'center',
            }
          : false
      }
      className={cn(className && className)}
      form={form}
      layout={layout}
      requiredMark={renderCustomMark}
    >
      {children}
    </Form>
  </div>
);

export default BaseForm;
