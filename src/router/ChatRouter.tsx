import { Redirect, Route, Switch } from 'react-router-dom';
import { AppMenu } from '../components/ui/AppMenu';
import ChatsPage from '../pages/ChatsPage';

export const ChatRouter = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/chats" component={ChatsPage} />
        <Route exact path="/amigos" component={ChatsPage} />
        <Route exact path="/perfil" component={ChatsPage} />
        <Redirect to="/chats" />
      </Switch>
      <AppMenu />
    </div>
  );
};
