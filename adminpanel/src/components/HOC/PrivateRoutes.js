import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signIn" />;
        }
      }}
    />
  );
}

export default PrivateRoutes;
