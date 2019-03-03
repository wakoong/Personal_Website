import React from 'react';
import { Link } from "@reach/router";

class Nav extends React.Component {
    render() {
        const { nav, tab } = this.props;
        return(
            <li>  
                <Link to={`/${nav}`.toLowerCase()}>{tab}</Link>
            </li>
        )
    }
}

export default Nav;