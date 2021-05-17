import { useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/NotFound";
import PrivateRoutes from "./components/HOC/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.actions";

function App() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.authenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(isUserLoggedIn());
    }
  });

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <PrivateRoutes exact path="/" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
