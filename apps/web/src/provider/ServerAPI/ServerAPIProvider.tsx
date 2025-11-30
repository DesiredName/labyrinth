import { type ReactNode } from 'react';
import { ServerAPIContext } from './ServerAPIContext';
import { ApiClient } from '../../utils/api-client';

const ServerAPIProvider: React.FC<{ children: ReactNode }> = (props) => {
  const apiClient = new ApiClient();

  return (
    <ServerAPIContext.Provider value={apiClient}>
      {props.children}
    </ServerAPIContext.Provider>
  );
};

export { ServerAPIProvider };
