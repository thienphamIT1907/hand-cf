import type { Customer } from '@/features/CustomersManagement/types';
import supabase from '@/libs/supabase';
import { QueryKey } from '@/types/queryKeys';
import { useQuery } from '@tanstack/react-query';

const fetchCustomers = async (): Promise<Customer[]> => {
  const { data, error } = await supabase
    .from('Customers')
    .select('*')
    .order('createdAt', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

const useGetCustomers = () =>
  useQuery({
    queryKey: [QueryKey.Customers],
    queryFn: fetchCustomers,
  });
export default useGetCustomers;
