import { createContext } from 'react';
import { useAuthAPI } from './useAuthAPI';

type AuthContextType = ReturnType<typeof useAuthAPI>;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };
export type { AuthContextType };
