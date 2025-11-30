import { useWebsites } from '../../hooks/useWebsites';

const WebsitesList = () => {
  const { data: websites } = useWebsites();

  return (
    <ul>
      {websites?.map((w) => (
        <li key={w.id}>{w.url}</li>
      ))}
    </ul>
  );
};

export { WebsitesList };
