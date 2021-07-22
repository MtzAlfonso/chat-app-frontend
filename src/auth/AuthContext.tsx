// import { useCallback, useState } from 'react';
import { createContext } from 'react';
import { fetchWithoutToken } from '../helpers/fetch';

// interface IStateSchema {
//   uid: string | null;
//   checking: boolean;
//   loggedIn: boolean;
//   name: string | null;
//   email: string | null;
// }

export interface IAuthContext {
  login?: (email: string, password: string) => Promise<void>;
  register?: () => Promise<void>;
  // verifyToken,
  logout?: () => Promise<void>;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

// const initialState: IStateSchema = {
//   uid: null,
//   checking: true,
//   loggedIn: false,
//   name: null,
//   email: null,
// };

const contextDefaultValues: AuthContextState = {
  login: () => {},
  register: () => {},
  logout: () => {},
};

export const AuthContext =
  createContext<AuthContextState>(contextDefaultValues);

export const AuthProvider = ({ children }: Props) => {
  // const [auth, setAuth] = useState(initialState);

  const login = async (email: string, password: string) => {
    const response = await fetchWithoutToken(
      'login',
      { email, password },
      'POST'
    );

    console.log(response);
  };

  const register = (name: string, email: string, password: string) => {};

  // const verifyToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        // verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
