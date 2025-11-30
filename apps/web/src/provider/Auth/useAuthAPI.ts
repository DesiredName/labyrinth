import type {
  LoginUserRequestType,
  RegisterUserRequestType,
} from '@shared/ServerAPI';
import { ApiClient } from '../../utils/api-client';
import { useState, useCallback } from 'react';
import { type UserSafeAttributes } from '@webx/shared';

const useAuthAPI = (apiClient: ApiClient) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserSafeAttributes | null>(null);

  const checkAuth = useCallback(async () => {
    try {
      const user = await apiClient.auth.checkAuth();
      setIsAuthenticated(user != null);
      setUser(user);
      return user;
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsInitialized(true);
    }
  }, [apiClient]);

  const login = useCallback(
    async (credentials: LoginUserRequestType) => {
      setIsLoading(true);
      try {
        const user = await apiClient.auth.login(credentials);
        setIsAuthenticated(user != null);
        setUser(user);
        return true;
      } catch (ex) {
        setIsAuthenticated(false);
        setUser(null);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [apiClient],
  );

  const register = useCallback(
    async (userData: RegisterUserRequestType) => {
      setIsLoading(true);
      try {
        const user = await apiClient.auth.register(userData);
        setIsAuthenticated(user != null);
        setUser(user);
        return true;
      } catch (ex) {
        setIsAuthenticated(false);
        setUser(null);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [apiClient],
  );

  const signout = useCallback(async () => {
    setIsLoading(true);
    try {
      await apiClient.auth.signout();
    } finally {
      setIsAuthenticated(false);
      setUser(null);
      setIsLoading(false);
    }
    return true;
  }, [apiClient]);

  return {
    isLoading,
    isInitialized,
    isAuthenticated,
    setIsAuthenticated,
    checkAuth,
    login,
    register,
    signout,
    user,
  };
};

export { useAuthAPI };
