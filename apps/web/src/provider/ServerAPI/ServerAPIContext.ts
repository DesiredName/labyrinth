import { createContext } from 'react';
import { ApiClient } from '../../utils/api-client';

type ServerAPIContextType = InstanceType<typeof ApiClient>;

const ServerAPIContext = createContext<ServerAPIContextType | undefined>(
  undefined,
);

export { ServerAPIContext };
export type { ServerAPIContextType };
