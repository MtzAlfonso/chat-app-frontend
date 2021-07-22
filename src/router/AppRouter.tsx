import { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoaderScreen } from '../components/ui/LoaderScreen';
import { AuthRouter } from './AuthRouter';
import { ChatRouter } from './ChatRouter';

export const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (auth.checking) {
    return <LoaderScreen />;
  }
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route path="/" component={ChatRouter} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
