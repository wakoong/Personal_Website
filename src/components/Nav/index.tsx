import React from "react";
import { Link } from "@reach/router";

interface NavBarProps {
  nav: String,
  tab: String
}

class Nav extends React.Component<NavBarProps> {
  render() {
    const { nav, tab } = this.props;
    return (
      <li>
        <Link to={`/${nav}`.toLowerCase()}>{tab}</Link>
      </li>
    );
  }
}

export default Nav;
