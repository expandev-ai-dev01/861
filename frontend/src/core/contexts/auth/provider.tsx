import { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './context';
import type { User, AuthContextValue } from './types';

/**
 * @component AuthProvider
 * @summary Provides authentication context to the application
 * @domain core
 * @type context-provider
 * @category authentication
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          // TODO: Validate token with backend
          // const userData = await authService.validateToken(token);
          // setUser(userData);
          // setIsAuthenticated(true);
        }
      } catch (error) {
        localStorage.removeItem('auth_token');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual login with backend
      // const { user: userData, token } = await authService.login(email, password);
      // localStorage.setItem('auth_token', token);
      // setUser(userData);
      // setIsAuthenticated(true);
      // return userData;

      // Temporary mock implementation
      const mockUser: User = {
        id: '1',
        email,
        name: 'Mock User',
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      return mockUser;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      // TODO: Implement actual logout with backend
      // await authService.logout();
    } finally {
      localStorage.removeItem('auth_token');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const value: AuthContextValue = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
