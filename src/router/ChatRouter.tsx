import { Redirect, Route, Switch } from 'react-router-dom';
import { AppMenu } from '../components/ui/AppMenu';
import ChatsPage from '../pages/ChatsPage';
import DirectChatPage from '../pages/DirectChatPage';
import ProfilePage from '../pages/ProfilePage';

export const ChatRouter = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/chats/:user">
          <DirectChatPage />
        </Route>
        <Route exact path="/chats">
          <ChatsPage />
          <AppMenu />
        </Route>
        <Route exact path="/amigos">
          <ChatsPage />
          <AppMenu />
        </Route>
        <Route exact path="/perfil">
          <ProfilePage />
          <AppMenu />
        </Route>
        <Redirect to="/chats" />
      </Switch>
    </div>
  );
};
