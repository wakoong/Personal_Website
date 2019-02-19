import React from 'react';
import { Link } from "@reach/router";

class Nav extends React.Component {
    render() {
        const { nav } = this.props;
        return(
            <Link to={`/${nav}`.toLowerCase()} className="tab">
                {nav}
            </Link>
        )
    }
}

export default Nav;