import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/AuthContext';

import 'animate.css';

const ChatApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default ChatApp;
