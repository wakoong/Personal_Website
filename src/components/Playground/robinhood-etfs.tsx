import React from 'react';
import { connect } from 'react-redux';

import { SimplePieChart } from '../D3/PieChart';

class ETFs extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        {authenticated ? (
          <React.Fragment>
            <h1 className="tab-body-title">ETFs Overview</h1>
          </React.Fragment>
        ) : (
          <div>{/* <SimplePieChart /> */}</div>
        )}
      </div>
    );
  }
}

export default ETFs;
