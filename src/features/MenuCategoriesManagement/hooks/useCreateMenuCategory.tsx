import type { MenuCategory } from '@/features/MenuCategoriesManagement/types';
import supabaseClient from '@/libs/supabase';
import { useToast } from '@/shared/hooks';
import { useMutation } from '@tanstack/react-query';
import { Form } from 'antd';

const { useForm } = Form;

type Props = {
  onClose: () => void;
};

const useCreateMenuCategory = ({ onClose }: Props) => {
  const { showToast } = useToast();
  const [form] = useForm();

  const { isPending: isCreating, mutate: handleCreateCategory } = useMutation({
    mutationFn: async (input: MenuCategory) => {
      const { error } = await supabaseClient
        .from('MenuCategories')
        .insert([input]);

      if (error) {
        return Promise.reject();
      }
    },
    onSuccess: () => {
      showToast({
        message: 'Create Category Successfully!',
        type: 'success',
      });
      onClose();
    },
    onError: () => {
      showToast({
        message: 'Error. Cannot create Category.',
        type: 'error',
      });
    },
  });

  return {
    form,
    isCreating,
    handleCreateCategory,
  };
};
export default useCreateMenuCategory;
