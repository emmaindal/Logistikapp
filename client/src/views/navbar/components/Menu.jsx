import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <div>
      <MenuContainer>
        <StyledLink first="first" to="/">
          Login Component
        </StyledLink>
        <StyledLink to="/example">Example Component</StyledLink>
      </MenuContainer>
    </div>
  );
};

export default Menu;

const MenuContainer = styled.nav`
  position: absolute;
  background-color: rgba(53, 99, 236);
  width: 250px;
  min-height: 100vh;
`;

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
    margin-top: ${props => (props.first ? "80px" : "2%")};
  }
`;
