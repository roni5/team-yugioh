import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { testAuth } from "../../utils/googleAuth";
import axios from "axios";

const PrivateRoute = ({ children, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [onboarded, setOnboarded] = useState(true);

  useEffect(() => {
    testAuth()
      .then((res) => {
        setAuthenticated(res);
        axios.get("/api/user/get_url").then((res) => {
          console.log(res.data, "checking");
          res.data === "" ? setOnboarded(false) : setOnboarded(true);
        });
      })
      .catch(() => {
        setRedirect(true);
      });
  }, []);

  if (redirect) {
    return <Redirect to="/login" />;
  } else if (authenticated && !onboarded) {
    return <Redirect to="/onboarding" />;
  } else {
    return authenticated && <Route {...rest}>{children}</Route>;
  }
};

export default PrivateRoute;
