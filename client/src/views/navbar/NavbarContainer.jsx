import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import Menu from "./components/Menu";
import toggleMenu from "./redux/actions";

class NavbarContainer extends Component {
  state = {
    isOpen: false
  };

  // toggleMenu = () => {
  //   const { isOpen } = this.state;
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen
  //   }));
  //
  //   toggleMenu(isOpen);
  // };

  render() {
    const { isOpen, toggleMenu } = this.props;
    return (
      <div>
        {isOpen && <Menu />}
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isOpen: state.menu.isOpen };
};

export default connect(
  mapStateToProps,
  { toggleMenu }
)(NavbarContainer);
