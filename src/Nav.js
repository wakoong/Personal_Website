import React from 'react';

class Nav extends React.Component {
    render() {
        const { nav } = this.props;
        return(
            <div className="tab">
                {nav}
            </div>
        )
    }
}

export default Nav;