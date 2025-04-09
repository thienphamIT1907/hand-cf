type CustomRequiredMarkProps = {
  isRequired: boolean;
  label: React.ReactNode | string;
};

const CustomRequiredMark = ({ label, isRequired }: CustomRequiredMarkProps) => (
  <>
    <p className="text-gray-light-600 text-sm font-medium">{label}</p>
    {isRequired ? <span className="pl-1 text-red-500">*</span> : null}
  </>
);

export default CustomRequiredMark;
