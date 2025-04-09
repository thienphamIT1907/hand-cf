import useMenuCategoryFields from '@/features/MenuCategoriesManagement/hooks/useMenuCategoryFields';
import { BasicDrawer } from '@/shared/components/BasicDrawer';
import { Button, Flex, Form, Switch, Typography } from 'antd';
import '@/styles/override/input.css';
import BasicInput from '@/shared/components/form/BasicInput';
import BasicForm from '@/shared/components/form/BasicForm';
import useCreateMenuCategory from '@/features/MenuCategoriesManagement/hooks/useCreateMenuCategory';

const { Text } = Typography;
const { Item } = Form;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateCategoryForm = ({ isOpen, onClose }: Props) => {
  const { isActiveField, titleField } = useMenuCategoryFields();

  const { form, isCreating, handleCreateCategory } = useCreateMenuCategory({
    onClose,
  });

  return (
    <BasicDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Create Category</Text>}
      open={isOpen}
      onClose={onClose}
      footer={
        <Flex gap={6} justify="flex-end">
          <Button
            size="large"
            type="text"
            onClick={onClose}
            disabled={isCreating}
          >
            Cancel
          </Button>
          <Button
            size="large"
            type="primary"
            loading={isCreating}
            onClick={() => {
              form.submit();
            }}
          >
            Create
          </Button>
        </Flex>
      }
    >
      <BasicForm
        form={form}
        onFinish={handleCreateCategory}
        initialValues={{
          [isActiveField.name]: true,
        }}
      >
        <Flex vertical gap={4}>
          <Item
            name={titleField.name}
            label={titleField.label}
            rules={titleField.rules}
          >
            <BasicInput placeholder={titleField.placeholder} className="p-2" />
          </Item>
          <Item
            name={isActiveField.name}
            label={isActiveField.label}
            valuePropName="checked"
          >
            <Switch />
          </Item>
        </Flex>
      </BasicForm>
    </BasicDrawer>
  );
};
export default CreateCategoryForm;
