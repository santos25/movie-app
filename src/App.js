import React from "react";
import { GlobalStyles } from "./GlobalStyles";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";

import * as ROUTES from "./constants/Routes";
import { ProtectedRoutes, IsUserRedirect } from "./helpers/Routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  const user = null;

  return (
    <div>
      <Router basename="/movie-app">
        <GlobalStyles />
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
          <ProtectedRoutes user={user} exact path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoutes>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.SIGNIN}
          >
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.SIGNUP}
          >
            <SignUp />
          </IsUserRedirect>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
