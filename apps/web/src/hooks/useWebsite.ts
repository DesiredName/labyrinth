import { useMutation, useQuery } from '@tanstack/react-query';
import { useServerAPI } from '../provider/ServerAPI';

const useReadWebsite = (search: string) => {
  const serverAPI = useServerAPI();

  return useQuery({
    queryKey: [`website`, search],
    queryFn: () => serverAPI.website.read(search),
  });
};

const useCreateWebsite = () => {
  const serverAPI = useServerAPI();

  return useMutation({
    mutationFn: serverAPI.website.create,
  });
};

const useUpdateWebsite = () => {
  const serverAPI = useServerAPI();

  return useMutation({
    mutationFn: serverAPI.website.update,
  });
};

const useDeleteWebsite = () => {
  const serverAPI = useServerAPI();

  return useMutation({
    mutationFn: serverAPI.website.delete,
  });
};

export { useReadWebsite, useCreateWebsite, useUpdateWebsite, useDeleteWebsite };
