import { createContext } from 'react';
import { useAuth } from './useAuthAPI';

type AuthContextType = ReturnType<typeof useAuth>;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };
export type { AuthContextType };
