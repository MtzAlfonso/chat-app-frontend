import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';
import { AuthContext } from './AuthContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: SocketContextState = {
  online: false,
  socket: undefined,
  connectSocket: () => {},
  disconnectSocket: () => {},
};

export const SocketContext = createContext<SocketContextState>(initialState);

export const SocketProvider = ({ children }: Props) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    'http://localhost:4000'
  );
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.isAuthenticated) {
      connectSocket();
    }
  }, [auth.isAuthenticated, connectSocket]);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      disconnectSocket();
    }
  }, [auth.isAuthenticated, disconnectSocket]);

  return (
    <SocketContext.Provider
      value={{ socket, online, connectSocket, disconnectSocket }}
    >
      {children}
    </SocketContext.Provider>
  );
};
