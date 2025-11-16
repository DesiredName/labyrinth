import type {
  SigninUserRequestType,
  SignupUserRequestType,
} from '@shared/ServerAPI';
import { ApiClient } from '../../utils/api-client';
import { useState, useCallback } from 'react';
import { type UserSafeAttributes } from '@webx/shared';

const useAuth = (apiClient: ApiClient) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserSafeAttributes | null>(null);

  const checkAuth = useCallback(async () => {
    setIsInitialized(false);
    try {
      const response = await apiClient.checkAuth();
      setIsAuthenticated(response.success);
      setUser(response.data);
      return response;
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsInitialized(true);
    }
  }, [apiClient]);

  const signin = useCallback(
    async (credentials: SigninUserRequestType) => {
      setIsLoading(true);
      try {
        const response = await apiClient.signin(credentials);
        setIsAuthenticated(response.success);
        setUser(response.data);
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

  const signup = useCallback(
    async (userData: SignupUserRequestType) => {
      setIsLoading(true);
      try {
        const response = await apiClient.signup(userData);
        setIsAuthenticated(response.success);
        setUser(response.data);
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
      await apiClient.signout();
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
    signin,
    signup,
    signout,
    user,
  };
};

export { useAuth };
