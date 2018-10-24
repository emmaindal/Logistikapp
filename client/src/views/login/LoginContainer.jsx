import React, { Component } from "react";

import Login from "./Login";

class LoginContainer extends Component {

  state = {
    username: '',
    password: '',
    showPassword: 'false',
  }

  render() {
    return <Login
      showPassword={this.state.showPassword}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      handleClickShowPassword={this.handleClickShowPassword}

    />;
  }

  handleSubmit = (event) => {
    // Send form
    // or
    // reroute user to next page 
  }

  handleChange = prop => event => {
    event.preventDefault();
    this.setState({ [prop]: event.target.value })
  }

  handleClickShowPassword = () => {
    console.log(this.state.showPassword);
    
    this.setState({showPassword: !this.state.showPassword})
    // change showPassword state to true or false depending on icon state.
  }
}

export default LoginContainer;
