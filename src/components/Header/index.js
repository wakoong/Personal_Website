import React from "react";
// import { Link } from "@reach/router";

import Nav from "../Nav";
// import Social from "./Social";

class Header extends React.Component {
  state = {
    nav: ""
  };

  render() {
    const navTabs = ["About", "Projects", "Workout", "Contact"];
    return (
      <React.Fragment>
        {/* <div className="social">
                    <Social />
                </div>  */}
        <nav>
          <ul>
            <Nav nav="" tab="WK" />
            {navTabs.map(nav => {
              return <Nav key={nav} nav={nav} tab={nav} />;
            })}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
