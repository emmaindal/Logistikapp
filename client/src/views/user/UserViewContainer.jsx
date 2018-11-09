import React, { Component } from "react";
import { connect } from "react-redux";

import UserView from "./UserView";

import setCategory from "./redux/actions";

class UserViewContainer extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    const { category, setCategory } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));

    if (category !== "") {
      setCategory("");
    }
  };

  handleClickCategory = item => {
    const { setCategory } = this.props;
    this.toggleModal();
    setCategory(item);
  };

  render() {
    const {
      props: { category },
      state: { isOpen },
      toggleModal
    } = this;
    return (
      <UserView
        toggleModal={toggleModal}
        isOpen={isOpen}
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
