import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  signin: (email?: string, password?: string) => Promise<boolean>;
  signup: (
    username?: string,
    email?: string,
    password?: string,
  ) => Promise<boolean>;
  signout: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/user/profile', {
        method: 'POST',
        credentials: 'include',
      });

      setIsAuthenticated(res.ok === true);
    } catch (err) {
      setIsAuthenticated(false);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => checkAuth(), 60 * 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const signin = async (email?: string, password?: string) => {
    setisLoading(true);
    const res = await fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    setisLoading(false);
    setIsAuthenticated(res.ok === true);
    return res.ok;
  };

  const signup = async (
    username?: string,
    email?: string,
    password?: string,
  ) => {
    setisLoading(true);
    const res = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
      credentials: 'include',
    });

    setisLoading(false);
    setIsAuthenticated(res.ok === true);
    return res.ok;
  };

  const signout = async () => {
    setisLoading(true);
    await fetch('http://localhost:3000/api/auth/signout', {
      method: 'POST',
      credentials: 'include',
    })
      .catch(() => {})
      .finally(() => {
        setisLoading(false);
        setIsAuthenticated(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signin, signup, signout, isLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
