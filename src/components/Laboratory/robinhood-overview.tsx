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
      table,
      windowWidth,
      windowHeight,
    } = this.props;

    const data = [
      { value: getTotal(etfs), name: 'ETFs' },
      { value: getTotal(stocks), name: 'Stocks' },
      { value: Number(cash), name: 'Cash' },
    ];

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
          {/* <div>{cash / portfolio.last_core_portfolio_equity}</div> */}
        </div>
        <RobinhoodOverviewTable
          table={table}
          portfolio={portfolio}
          etfs={etfs}
          stocks={stocks}
        />
      </div>
    );
  }
}

const RobinhoodOverviewTable = ({ portfolio, etfs, stocks }) => {
  return (
    <div className='rb-overview-table'>
      <div className='row row-1'>
        <div className='row-title'>ETFs</div>
        <div className='row-body'>
          {etfs.map((e) => (
            <div className='item' key={e.symbol}>
              <div className='item-name'>{e.symbol}</div>
              <div className='item-val'>
                {(
                  ((e.last_trade_price * e.quantity) /
                    portfolio.last_core_portfolio_equity) *
                  100
                ).toFixed(2) + '%'}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='row row-2'>
        <div className='row-title'>Stocks</div>
        <div className='row-body'>
          {stocks.map((s) => (
            <div className='item' key={s.symbol}>
              <div className='item-name'>{s.simple_name}</div>
              <div className='item-val'>
                {(
                  ((s.last_trade_price * s.quantity) /
                    portfolio.last_core_portfolio_equity) *
                  100
                ).toFixed(2) + '%'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default windowSize(RobinhoodOverview);
