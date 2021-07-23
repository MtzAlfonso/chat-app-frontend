import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';

import 'animate.css';

const ChatApp = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  );
};

export default ChatApp;
