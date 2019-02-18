import React from "react";

import Nav from "./Nav";

class Header extends React.Component {
    state = {
        nav: ""
    }

    render() {
        const navTabs = ["About", "Projects", "Basketball", "Contact"]
        return (
            <div className="header">
                <div className="navTabs">
                <Nav nav="Woosik Koong" />
                    {navTabs.map(nav => {
                        return <Nav key={nav} nav={nav} />
                    })}
                </div>
            </div>
        )
    }
}

export default Header;