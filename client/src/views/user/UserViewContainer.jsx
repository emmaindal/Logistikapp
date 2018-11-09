import React, { Component } from "react";

import UserView from "./UserView";

class UserViewContainer extends Component {
  handleClickCategory = item => {
    console.log(item, "vald");
  };

  render() {
    return <UserView handleClickCategory={this.handleClickCategory} />;
  }
}

export default UserViewContainer;
