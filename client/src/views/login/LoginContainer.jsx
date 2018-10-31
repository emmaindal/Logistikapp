import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";

import handleShowPassword from "./redux/actions";

class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    // Send form
    // or
    // reroute user to next page
  };

  handleChange = prop => event => {
    event.preventDefault();
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { showPassword, handleShowPassword } = this.props;

    return (
      <Login
        showPassword={showPassword}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleClickShowPassword={handleShowPassword}
      />
    );
  }
}

const mapStateToProps = state => {
  return { showPassword: state.login.showPassword };
};

export default connect(
  mapStateToProps,
  { handleShowPassword }
)(LoginContainer);
