import React, { Component } from "react";

import Login from "./Login";

class LoginContainer extends Component {

  state = {
    username: '',
    password: '',
    showPassword: 'false',
  }

  render() {
    return <Login showPassword={this.state.showPassword} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>;
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = prop => event => {
    event.preventDefault();
    this.setState({ [prop] : event.target.value})
  }

}

export default LoginContainer;
