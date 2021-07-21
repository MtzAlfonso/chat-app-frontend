import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { LoaderScreen } from '../components/ui/LoaderScreen';
import { AuthRouter } from './AuthRouter';
import { ChatRouter } from './ChatRouter';

export const AppRouter = (): JSX.Element => {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setChecking(false);
    }, 2000);
  }, []);

  if (checking) {
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
