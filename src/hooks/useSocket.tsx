import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { serializeToken } from '../helpers/serializeToken';

export const useSocket = (serverPath: string): SocketContextState => {
  const [socket, setSocket] = useState<Socket>(io);
  const [online, setOnline] = useState(false);

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('token');

    const socketTemp = io(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: { 'x-token': serializeToken(token) },
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  };
};
