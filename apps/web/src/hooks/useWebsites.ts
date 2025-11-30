import { useQuery } from '@tanstack/react-query';

const useWebsites = () => {
  const {
    isPending,
    data: websites,
    refetch,
  } = useQuery({
    queryKey: [`websites-list`],
    queryFn: () => fetch(``).then((r) => r.json()),
  });

  return {
    isPending,
    websites,
    refetch,
  };
};

export { useWebsites };
