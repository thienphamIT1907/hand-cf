import CreateCategoryForm from '@/features/MenuCategoriesManagement/components/CreateCategoryForm';

type Props = {
  isOpenCreateForm: boolean;
  onCloseCreateForm: () => void;
};

const MenuCategoriesContainer = ({
  isOpenCreateForm,
  onCloseCreateForm,
}: Props) => (
  <CreateCategoryForm isOpen={isOpenCreateForm} onClose={onCloseCreateForm} />
);
export default MenuCategoriesContainer;
