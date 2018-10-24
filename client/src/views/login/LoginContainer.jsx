import React, { Component } from "react";

import Login from "./Login";

class LoginContainer extends Component {

  state = {
    username: '',
    password: '',
    showPassword: 'false'
  }

  render() {
    return <Login />;
  }
}

export default LoginContainer;
