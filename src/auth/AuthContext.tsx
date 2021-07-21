import { useCallback, useState } from 'react';
import { createContext } from 'react';

interface IStateSchema {
  uid: string | null;
  checking: boolean;
  loggedIn: boolean;
  name: string | null;
  email: string | null;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: IStateSchema = {
  uid: null,
  checking: true,
  loggedIn: false,
  name: null,
  email: null,
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(initialState);

  const login = (email: string, password: string) => {};

  const register = (name: string, email: string, password: string) => {};

  const verifyToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
