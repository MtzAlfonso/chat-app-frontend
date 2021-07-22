/// <reference types="react-scripts" />

type AuthContextState = {
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  // verifyToken,
  logout: () => void;
};
