import React from 'react';
import { connect } from 'react-redux';

import SimpleTable from '../Common/Material-UI/simpleTable.tsx';
import { SimplePieChart } from '../D3/PieChart';

class Stocks extends React.Component {
  render() {
    const { authenticated, orders, instruments, positions } = this.props;
    // console.log(instruments, positions, orders);
    const data = [1, 2, 3];
    return (
      <div>
        {authenticated ? (
          <div className="tab-body">
            <h1 className="tab-body-title">Stocks Overview</h1>
            {/* <div className="flex-box">
              <div className="pie-chart"> */}
            {/* <SimplePieChart data={data} /> */}
            {/* </div>
            </div> */}
            <div />
          </div>
        ) : (
          <div>no</div>
        )}
      </div>
    );
  }
}

export default Stocks;
