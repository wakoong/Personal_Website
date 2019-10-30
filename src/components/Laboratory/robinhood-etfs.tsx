import React from 'react';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';

import PieChart from '../D3/PieChart.js';
import * as helper from '../Common/helper';

class ETFs extends React.Component {
  render() {
    const { etfs, getTotal, windowWidth, windowHeight } = this.props;

    let data = etfs.map((e) => ({
      value: e.last_trade_price * e.quantity,
      name: e.symbol,
    }));
    console.log('data', data);
    const etfsTotal = getTotal(etfs);
    return (
      <div className='rb-overview'>
        <div className='rb-overview-graph'>
          <PieChart
            data={data}
            width={'100%'}
            height={'100%'}
            innerRadius={30}
            outerRadius={helper.pieWidth(windowWidth, windowHeight)}
            translateX={helper.translateX(windowWidth)}
            translateY={helper.translateY(windowWidth, windowHeight)}
          />
        </div>
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

export default windowSize(ETFs);
