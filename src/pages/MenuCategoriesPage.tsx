import MenuCategoriesContainer from '@/features/MenuCategoriesManagement/components/MenuCategoriesContainer';
import PageMainLayout from '@/layouts/PageMainLayout';
import Icon from '@/shared/components/Icon';
import PageTitle from '@/shared/components/PageTitle';
import { useToggle } from '@/shared/hooks';
import { Button, Typography } from 'antd';

const { Text } = Typography;

const MenuCategoriesPage = () => {
  const {
    open: isOpenCreateForm,
    onOpen: openCreateForm,
    onClose: closeCreateForm,
  } = useToggle();

  return (
    <PageMainLayout>
      <PageTitle
        title="Menu Categories"
        showBottomLine={false}
        extraButton={
          <Button
            type="primary"
            size="large"
            icon={<Icon name="Plus" size={18} />}
            onClick={openCreateForm}
          >
            <Text className="text-white">Create Category</Text>
          </Button>
        }
      />
      <MenuCategoriesContainer
        isOpenCreateForm={isOpenCreateForm}
        onCloseCreateForm={closeCreateForm}
      />
    </PageMainLayout>
  );
};
export default MenuCategoriesPage;
