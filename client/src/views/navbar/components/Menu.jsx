import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ClickAwayListener, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const Menu = ({ toggleMenu, handleClickAway }) => {
  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <MenuContainer>
          <StyledIconButton
            onClick={toggleMenu}
            color="inherit"
            aria-label="Menu"
          >
            <CloseIcon />
          </StyledIconButton>

          <StyledLink first="first" to="/" onClick={toggleMenu}>
            Login
          </StyledLink>
          <StyledLink to="/salesposition" onClick={toggleMenu}>
            Admin
          </StyledLink>
          <StyledLink to="/user" onClick={toggleMenu}>
            User
          </StyledLink>
        </MenuContainer>
      </ClickAwayListener>
    </div>
  )
}

export default Menu

const StyledIconButton = styled(IconButton)`
  &&& {
    padding: 2%;
    cursor: pointer;
    float: right;
    color: white;
  }
`

const MenuContainer = styled.nav`
  z-index: 9999;
  position: absolute;
  background-color: rgba(53, 99, 236);
  width: 250px;
  min-height: 100vh;
`

const StyledLink = styled(Link)`
  &&& {
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 2px;
    text-decoration: none;
    list-style-type: none;
    color: white;
    padding: 5%;
    margin: 2%;
    display: block;
    margin-top: ${props => (props.first ? '20%' : '1%')};
  }
`
