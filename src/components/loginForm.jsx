import React, { Component } from "react";
import { login } from "../Starter Code/services/authService.js";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../Starter Code/services/authService.js";
class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    // Login the user
    try {
      const { data } = this.state;
      await login(data.username, data.password);
      const { state } = this.props.location;
      // We need a full reload of the component
      window.location = state ? state.from.pathname : "/login";
      // this.props.history.push("/");
      toast.success(`Welcome back ${data.username}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;
    if (auth.getCurrentUser()) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
