import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LoaderScreen } from '../components/ui/LoaderScreen';
import { AuthRouter } from './AuthRouter';
import { ChatRouter } from './ChatRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
            <PublicRoute
              isAuthenticated={auth.isAuthenticated}
              component={AuthRouter}
              path="/auth"
            />
            <PrivateRoute
              isAuthenticated={auth.isAuthenticated}
              path="/"
              component={ChatRouter}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
