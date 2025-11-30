import { useContext } from 'react';
import {
  ServerAPIContext,
  type ServerAPIContextType,
} from './ServerAPIContext';

const useServerAPI = (): ServerAPIContextType => {
  const context = useContext(ServerAPIContext);
  if (!context) {
    throw new Error('useServerAPI must be used within an ServerAPIProvider');
  }
  return context;
};

export { useServerAPI };
