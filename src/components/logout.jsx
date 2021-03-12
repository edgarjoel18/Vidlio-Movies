import React, { Component } from "react";
import auth from "../Starter Code/services/authService.js";
class Logout extends Component {
  componentDidMount() {
    auth.logout();

    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
