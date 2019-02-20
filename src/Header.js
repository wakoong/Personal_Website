import React from "react";

import Nav from "./Nav";
import Social from "./Social";

class Header extends React.Component {
    state = {
        nav: ""
    }

    render() {
        const socialMedia = ["instagram"]
        const navTabs = ["About", "Projects", "Basketball", "Contact"]
        return (
            <div className="header">
                <div className="social">
                    {socialMedia.map(social => {
                        return <Social key={social} social={social} />
                    })}
                </div>
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