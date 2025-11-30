import { useQuery } from '@tanstack/react-query';
import { useServerAPI } from '../provider/ServerAPI';

const useWebsites = () => {
  const serverAPI = useServerAPI();

  return useQuery({
    queryKey: [`websites-list`],
    queryFn: serverAPI.websites.read,
  });
};

export { useWebsites };
