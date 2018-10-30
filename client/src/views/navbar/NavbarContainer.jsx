import React, { Component } from "react";

import Navbar from "./Navbar";
import Menu from "./components/Menu";

class NavbarContainer extends Component {
  state = {
    menuIsOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuIsOpen: !prevState.menuIsOpen
    }));
  };

  render() {
    const { menuIsOpen } = this.state;
    return (
      <div>
        {menuIsOpen && <Menu />}
        <Navbar menuIsOpen={menuIsOpen} toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}

export default NavbarContainer;
