import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import NavBar from "./Navigation/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import JokeList from "./components/JokeList";
function App(props) {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={LogIn} />
      <Route path="/login" component={LogIn} />
      <Route path="/register" component={SignUp} />
      <PrivateRoute path="/jokes" component={JokeList} props={props} />
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    username: state.username,
    jokes: state.jokes,
    logintransaction: false,
    joketransaction: false,
    token: state.token
  };
};

export default connect(
  mapStateToProps,

  {}
)(App);
