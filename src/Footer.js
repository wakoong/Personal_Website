import React from "react";
import { Link } from "@reach/router";

class Footer extends React.Component {
    render() {
        const { link } = this.props;
        return(
            <React.Fragment>
                <li>
                    <Link to={`/${link}`.toLowerCase()}>{link}</Link>
                </li>
            </React.Fragment>
        )
    }
}

export default Footer;