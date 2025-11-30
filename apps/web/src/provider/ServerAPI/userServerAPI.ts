import { useContext } from 'react';
import {
  ServerAPIContext,
  type ServerAPIContextType,
} from './ServerAPIContext';

const userServerAPI = (): ServerAPIContextType => {
  const context = useContext(ServerAPIContext);
  if (!context) {
    throw new Error('userServerAPI must be used within an ServerAPIProvider');
  }
  return context;
};

export { userServerAPI };
