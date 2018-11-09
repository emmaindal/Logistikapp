import React, { Component } from "react";
import { connect } from "react-redux";

import UserView from "./UserView";

import setCategory from "./redux/actions";

class UserViewContainer extends Component {
  handleClickCategory = item => {
    const { setCategory } = this.props;
    setCategory(item);
  };

  render() {
    const { category } = this.props;
    return (
      <UserView
        category={category}
        handleClickCategory={this.handleClickCategory}
      />
    );
  }
}

const mapStateToProps = state => {
  return { category: state.user.category };
};

export default connect(
  mapStateToProps,
  { setCategory }
)(UserViewContainer);
