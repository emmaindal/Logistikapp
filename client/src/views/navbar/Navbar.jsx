import React from "react";
import styled from "styled-components";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = ({ menuIsOpen, toggleMenu }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledIconButton
          onClick={toggleMenu}
          color="inherit"
          aria-label="Menu"
        >
          {!menuIsOpen && <MenuIcon />}
          {menuIsOpen && <CloseIcon />}
        </StyledIconButton>
        <StyledTypography variant="h6" color="inherit">
          LogistikApp
        </StyledTypography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;

const StyledIconButton = styled(IconButton)`
  &&& {
    padding: 0;
  }
`;
const StyledAppBar = styled(AppBar)`
  &&& {
    background-color: rgba(53, 99, 236, 0.87);
  }
`;
const StyledTypography = styled(Typography)`
  &&& {
    margin-left: auto;
  }
`;
