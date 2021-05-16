import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/NotFound";
import PrivateRoutes from "./components/HOC/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <PrivateRoutes exact path="/" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
