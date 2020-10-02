import * as React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const Logo = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2em;
  font-weight: 900;
  color: ${(props) => props.theme.emphasisColor};
  padding: 1em;
  cursor: pointer;

  &:hover {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Nav = styled.nav`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.emphasisColor};
  font-weight: 300;
  margin: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0 1em;
    list-style: none;
    cursor: pointer;

    &:hover,
    &:active {
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  }

  @media (min-width: 768px) {
    width: auto;
    ul {
      justify-content: space-evenly;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>WOOSIK.K</Logo>
      <Nav>
        <ul>
          <li>Experience</li>
          <li>Projects</li>
          <li>Writings</li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;