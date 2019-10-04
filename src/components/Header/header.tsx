import React from "react";

import Nav from "../Nav/nav.tsx";

export interface HeaderProps {
  nav: string;
  tab: string;
  key: string;
}

class Header extends React.Component<HeaderProps> {
  state = {
    nav: ""
  };

  render() {
    const navTabs: string[] = ["About", "Playground"];
    return (
      <header>
        <nav>
          <ul>
            <Nav nav="" tab="WK" />
            {navTabs.map((nav) => {
              return <Nav key={nav} nav={nav} tab={nav} />;
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
