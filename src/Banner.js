import React from 'react';
import { Link } from "@reach/router";

class Banner extends React.Component {
    render() {
        const { banner } = this.props;
        return(
            <div className="index-boxlink">
                <h3>
                    <Link to={`/${banner}`.toLowerCase()}>{banner}</Link>
                </h3>
            </div>
        )
    }
}

export default Banner;