import React, { createContext, useState, useCallback, useContext } from 'react';

import useLocalStorage from '~/hooks/useLocalStorage';

interface AuthState {
  user?: string;
}

interface AuthContext {
  user?: string;
  signIn(name: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [storedUser, setStoredUser] = useLocalStorage<string | null>('user');

  const [data, setData] = useState<AuthState>(
    storedUser ? { user: storedUser } : {},
  );

  const signIn = useCallback(
    (name) => {
      setStoredUser(name);
      setData({ user: name });
    },
    [setStoredUser],
  );

  const signOut = useCallback(() => {
    setStoredUser(null);
    setData({});
  }, [setStoredUser]);

  const user = data?.user;

  const value = React.useMemo(() => ({ user, signIn, signOut }), [
    signIn,
    signOut,
    user,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return context;
};

export default useAuth;
