import React from 'react';
import windowSize from 'react-window-size';

import PieChart from '../D3/PieChart.js';
import * as helper from '../Common/helper';
import './robinhood.css';

class RobinhoodOverview extends React.Component {
  render() {
    const {
      portfolio,
      etfs,
      stocks,
      cash,
      getTotal,
      getTable,
      windowWidth,
      windowHeight,
    } = this.props;

    const data = [
      { value: getTotal(etfs), name: 'ETFs' },
      { value: getTotal(stocks), name: 'Stocks' },
      { value: Number(cash), name: 'Cash' },
    ];

    return (
      <div className='rb-page'>
        <div className='rb-graph'>
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
        <div className='rb-table'>
          {getTable('ETFs', etfs, portfolio.last_core_portfolio_equity)}
          {getTable('Stocks', stocks, portfolio.last_core_portfolio_equity)}
        </div>
      </div>
    );
  }
}

export default windowSize(RobinhoodOverview);
