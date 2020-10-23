import React from "react";
import { GlobalStyles } from "./GlobalStyles";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import * as ROUTES from "./constants/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router basename="/movie-app">
        <GlobalStyles />
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.SIGNIN}>
            <SignIn />
          </Route>
          <Route exact path={ROUTES.SIGNUP}>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
