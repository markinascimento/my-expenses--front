// -> ReactJS
import { createContext, useCallback, useState, type ReactNode } from 'react';

// -> Config
import { storageKeys } from '../config/storageKeys';

// -> Types
import type { UserDTO } from '../types/UserDTO';

export interface IAuthContext {
  signedIn: boolean;
  user: UserDTO | null;
  signOut(): void;
  signIn(accessToken: string, user: UserDTO): void;
}

const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const accessTokenStorage = localStorage.getItem(storageKeys.TOKEN);
    return !!accessTokenStorage;
  });

  const [user, setUser] = useState<UserDTO | null>(() => {
    const userStorage = JSON.parse(localStorage.getItem(storageKeys.USER)!);
    return userStorage ?? null;
  });
  
  const signIn = useCallback((accessToken: string, user: UserDTO) => {
    localStorage.setItem(storageKeys.TOKEN, accessToken);
    localStorage.setItem(storageKeys.USER, JSON.stringify(user));
    setSignedIn(true);
    setUser(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(storageKeys.TOKEN);
    localStorage.removeItem(storageKeys.USER);
    setSignedIn(false);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signedIn,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext };
