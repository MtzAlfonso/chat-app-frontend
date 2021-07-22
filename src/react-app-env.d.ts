/// <reference types="react-scripts" />

type FormLogin = {
  email: string;
  password: string;
  remember?: boolean;
};

type FormRegister = {
  name: string;
  email: FormLogin['email'];
  password: FormLogin['password'];
};

type AuthContextState = {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  verifyToken: () => Promise<boolean>;
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
