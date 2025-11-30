import { useWebsites } from '../../hooks/useWebsites';

const WebsitesList = () => {
  const { websites } = useWebsites();

  return <div>{websites}</div>;
};

export { WebsitesList };
