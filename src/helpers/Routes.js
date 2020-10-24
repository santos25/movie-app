import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SIGNIN } from "../constants/Routes";

export const ProtectedRoutes = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: SIGNIN,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
                //   state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};
