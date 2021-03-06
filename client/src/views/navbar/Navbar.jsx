import React from 'react'
import styled from 'styled-components'

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledIconButton
          onClick={toggleMenu}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </StyledIconButton>
        <StyledTypography variant="h6" color="inherit">
          LogistikApp
        </StyledTypography>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Navbar

const StyledIconButton = styled(IconButton)`
  &&& {
    padding: 0;
  }
`
const StyledAppBar = styled(AppBar)`
  &&& {
    background-color: rgba(53, 99, 236, 0.87);
  }
`
const StyledTypography = styled(Typography)`
  &&& {
    font-weight: 200;
    letter-spacing: 3px;
    margin-left: auto;
  }
`
