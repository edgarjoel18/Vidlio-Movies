import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRoute.jsx";
import Movies from "./components/movies.jsx";
import MovieForm from "./components/movieForm.jsx";
import Customers from "./components/customers.jsx";
import Rentals from "./components/rentals.jsx";
import NotFound from "./components/notFound.jsx";
import Navbar from "./components/navBar.jsx";
import LoginForm from "./components/loginForm.jsx";
import RegisterForm from "./components/registerForm.jsx";
import Logout from "./components/logout.jsx";
import auth from "./Starter Code/services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends React.Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="main">
        <ToastContainer />
        <Navbar user={user} />
        <main className="container">
          <Switch>
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            ></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
