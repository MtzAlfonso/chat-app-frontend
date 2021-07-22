/// <reference types="react-scripts" />

type FormLogin = {
  email: string;
  password: string;
  remember?: boolean;
};

type AuthContextState = {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => void;
  // verifyToken,
  logout: () => void;
  auth: AuthState;
};

type AuthState = {
  uid: string | null;
  checking: boolean;
  isAuthenticated: boolean;
  name: string | null;
  email: string | null;
};

type AuthLoginResponse = {
  ok: boolean;
  user: {
    online: boolean;
    name: string;
    email: string;
    uid: string;
  };
  token: string;
};
