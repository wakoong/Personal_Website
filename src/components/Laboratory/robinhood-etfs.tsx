import React from 'react';
import { connect } from 'react-redux';

import { SimplePieChart } from '../D3/PieChart';

class ETFs extends React.Component {
  render() {
    const { etfs, getTotal } = this.props;
    const etfsTotal = getTotal(etfs);
    return (
      <div className='rb-overview'>
        <RobinhoodOverviewTable etfs={etfs} total={etfsTotal} />
      </div>
    );
  }
}

const RobinhoodOverviewTable = ({ etfs, total }) => {
  return (
    <div className='rb-overview-table'>
      <div className='row row-1'>
        <div className='row-title'>ETFs</div>
        <div className='row-body'>
          {etfs.map((e) => (
            <div className='item' key={e.symbol}>
              <div className='item-name'>{e.symbol}</div>
              <div className='item-val'>
                {(((e.last_trade_price * e.quantity) / total) * 100).toFixed(
                  2
                ) + '%'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ETFs;
