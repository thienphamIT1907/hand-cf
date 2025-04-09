const useMenuCategoryFields = () => {
  const titleField = useMemo(
    () => ({
      label: 'Title',
      rules: [{ required: true, message: 'This field is required!' }],
      name: 'title',
      placeholder: 'Exp: Drink, Fruit and vegetables...',
    }),
    [],
  );

  const isActiveField = useMemo(
    () => ({
      label: 'Active',
      rules: [],
      name: 'isActive',
      placeholder: '',
    }),
    [],
  );

  const imageField = useMemo(
    () => ({
      label: 'Images',
      rules: [],
      name: 'image',
      placeholder: '',
    }),
    [],
  );

  return {
    titleField,
    isActiveField,
    imageField,
  };
};
export default useMenuCategoryFields;
