import { useEffect, type ReactNode } from 'react';
import { useAuthAPI } from './useAuthAPI';
import { AuthContext } from './AuthContext';
import { useServerAPI } from '../ServerAPI';

const AuthProvider: React.FC<{ children: ReactNode }> = (props) => {
  const apiClient = useServerAPI();
  const auth = useAuthAPI(apiClient);

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
