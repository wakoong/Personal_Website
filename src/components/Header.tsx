import * as React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import { useToggle } from '../hooks';
import CV from '../assets/files/cv.pdf'

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
  font-size: 1.2em;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    padding: 0 1em;
    list-style: none;
    cursor: pointer;

    .temp-tooltip {
      position: absolute;
      display: none;
      bottom: -2em;
      background: rgba(255, 255, 255, 0.7);
      text-align: center;
      z-index: 10;
    }

    &:hover,
    &:active,
    &:hover .temp-tooltip {
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
      display: block;
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
      <Logo>
        <Link to='/'>WOOSIK.K</Link>
      </Logo>
      <Nav>
        <ul>
          <Link to='/projects'>
            <li>Projects</li>
          </Link>
          <li>
            <p>Writing</p>
            <div className="temp-tooltip">Coming soon!</div>
          </li>
          <a href={CV} target="_blank">
            <li>CV</li>
          </a>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
