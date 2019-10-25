import React from 'react';
import { connect } from 'react-redux';

import SimpleTable from '../Common/Material-UI/simpleTable.tsx';
import { SimplePieChart } from '../D3/PieChart';

class Stocks extends React.Component {
  render() {
    const { stocks, getTotal } = this.props;
    const stocksTotal = getTotal(stocks);
    return (
      <div className='rb-overview'>
        <RobinhoodOverviewTable stocks={stocks} total={stocksTotal} />
      </div>
    );
  }
}

const RobinhoodOverviewTable = ({ stocks, total }) => {
  return (
    <div className='rb-overview-table'>
      <div className='row row-2'>
        <div className='row-title'>Stocks</div>
        <div className='row-body'>
          {stocks.map((s) => (
            <div className='item' key={s.symbol}>
              <div className='item-name'>{s.symbol}</div>
              <div className='item-val'>
                {(((s.last_trade_price * s.quantity) / total) * 100).toFixed(
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

export default Stocks;
