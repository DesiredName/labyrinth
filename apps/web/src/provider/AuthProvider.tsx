import React, {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from 'react';
import { ApiClient } from '../utils/api-client';
import { useAuth } from '../hooks/useAuth';

type AuthContextType = ReturnType<typeof useAuth>;

const apiClient = new ApiClient();

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = (props) => {
  const auth = useAuth(apiClient);

  useEffect(() => {
    auth.checkAuth();
  }, []);

  useEffect(() => {
    if (!auth.isAuthenticated) return;

    const interval = setInterval(async () => {
      await auth.checkAuth();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [auth.isAuthenticated]);

  return (
    <AuthContext.Provider value={{ ...auth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthContext };
