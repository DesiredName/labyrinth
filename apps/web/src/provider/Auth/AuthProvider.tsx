import { useEffect, type ReactNode } from 'react';
import { useAuth } from './useAuthAPI';
import { ApiClient } from '../../utils/api-client';
import { AuthContext } from './AuthContext';

const apiClient = new ApiClient();

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

export { AuthProvider };
