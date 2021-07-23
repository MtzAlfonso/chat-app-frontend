import { useCallback, useState } from 'react';
import { createContext } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: AuthState = {
  uid: null,
  checking: true,
  isAuthenticated: false,
  name: null,
  email: null,
};

const contextDefaultValues: AuthContextState = {
  login: async () => false,
  register: async () => false,
  logout: async () => false,
  verifyToken: async () => false,
  auth: initialState,
};

export const AuthContext =
  createContext<AuthContextState>(contextDefaultValues);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email: string, password: string): Promise<boolean> => {
    const response = await fetchWithoutToken(
      'login',
      { email, password },
      'POST'
    );

    const { ok, user, token } = response;

    if (ok) {
      localStorage.setItem('token', token);

      setAuth({
        uid: user.uid,
        checking: false,
        isAuthenticated: true,
        name: user.name,
        email: user.email,
      });
    }

    return ok;
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    const response = await fetchWithoutToken(
      'login/new',
      { name, email, password },
      'POST'
    );

    const { ok, user, token } = response;

    if (ok) {
      localStorage.setItem('token', token);

      setAuth({
        uid: user.uid,
        checking: false,
        isAuthenticated: true,
        name: user.name,
        email: user.email,
      });
    }

    return ok;
  };

  const verifyToken: () => Promise<boolean> =
    useCallback(async (): Promise<boolean> => {
      const token = localStorage.getItem('token');
      if (!token) {
        setAuth({
          ...initialState,
          checking: false,
          isAuthenticated: false,
        });
        return false;
      }

      const response = await fetchWithToken('login/renew');
      const { ok, user } = response;

      if (ok) {
        localStorage.setItem('token', token);
        setAuth({
          uid: user.uid,
          checking: false,
          isAuthenticated: true,
          name: user.name,
          email: user.email,
        });
        return true;
      } else {
        setAuth({
          ...initialState,
          checking: false,
          isAuthenticated: false,
        });
        return false;
      }
    }, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        verifyToken,
        logout,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
