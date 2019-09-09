import React from 'react';
import { connect } from 'react-redux';

import {
  getOrders,
  getInstrument,
  getPositions,
} from './robinhood-account-redux.tsx';
import SortingTable from '../Common/Material-UI/sortingTable.tsx';
import { SimplePieChart } from '../D3/PieChart';

class Stocks extends React.Component {
  render() {
    const { authenticated, orders, instruments, positions } = this.props;
    // console.log(instruments);
    const data = [];
    return (
      <div>
        {authenticated && orders ? (
          <React.Fragment>
            <h1 className="tab-body-title">Stocks Overview</h1>
            {instruments.map((inst, index) => {
              return <div key={index}>{inst.simple_name}</div>;
            })}
            {positions.map((p, index) => {
              data.push(p.average_buy_price * p.quantity);
              return <div key={index}>{p.average_buy_price}</div>;
            })}
            <SimplePieChart data={data} />
            {/* <SortingTable /> */}
          </React.Fragment>
        ) : (
          <div>no</div>
        )}
      </div>
    );
  }
}

export default Stocks;
