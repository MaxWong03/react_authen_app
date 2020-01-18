import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

export default function App() {
  const [auth, setAuth] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {}
  })
  const { loggedInStatus, user } = auth;

  const handleSuccessfulAuth = (data) => {
    setAuth({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => (
              <Home
                loggedInStatus={loggedInStatus}
                handleSuccessfulAuth={handleSuccessfulAuth}
              />
            )}
          />
          <Route
            exact
            path={'/dashboard'}
            render={() => (
              <Dashboard loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
