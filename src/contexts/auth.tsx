import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import useLocalStorage from '~/hooks/useLocalStorage';
import { generateAccountData } from '~/utils';
import { AccountData } from '~/utils/generate-account-data';

interface AuthState {
  signed: boolean;
  account: AccountData;
}

interface AuthContext {
  signed: boolean;
  account: AccountData;
  signIn(name: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [storedUser, setStoredUser] = useLocalStorage<string | null>('user');

  const signIn = useCallback(
    (name) => {
      setStoredUser(name);

      setData({ signed: true, account: generateAccountData(name) });
    },
    [setStoredUser],
  );

  const signOut = useCallback(() => {
    setStoredUser(null);
    setData({} as AuthState);
  }, [setStoredUser]);

  const value = React.useMemo(
    () => ({
      signed: data.signed,
      account: data.account,
      signIn,
      signOut,
    }),
    [data, signIn, signOut],
  );

  useEffect(() => {
    if (storedUser) {
      setData({ signed: true, account: generateAccountData(storedUser) });
    }
  }, []); // eslint-disable-line

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
