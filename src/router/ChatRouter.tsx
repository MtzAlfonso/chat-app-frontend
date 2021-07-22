import { Redirect, Route, Switch } from 'react-router-dom';
import { AppMenu } from '../components/ui/AppMenu';
import ChatsPage from '../pages/ChatsPage';
import DirectChatPage from '../pages/DirectChatPage';

export const ChatRouter = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/chats/:user" component={DirectChatPage}>
          <DirectChatPage />
        </Route>
        <Route exact path="/chats" component={ChatsPage}>
          <ChatsPage />
          <AppMenu />
        </Route>
        <Route exact path="/amigos" component={ChatsPage}>
          <ChatsPage />
          <AppMenu />
        </Route>
        <Route exact path="/perfil" component={ChatsPage}>
          <ChatsPage />
          <AppMenu />
        </Route>
        <Redirect to="/chats" />
      </Switch>
    </div>
  );
};
