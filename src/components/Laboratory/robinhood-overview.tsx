import React from 'react';

import './robinhood.css';

class RobinhoodOverview extends React.Component {
  render() {
    const { account, portfolio, overview } = this.props;
    return (
      <div className='rb-overview'>
        <div className='rb-overview-graph'>graph</div>
        <RobinhoodOverviewTable
          portfolio={portfolio}
          overview={overview}
        />
      </div>
    );
  }
}

const RobinhoodOverviewTable = ({ portfolio, overview }) => {
  const [etfs, stocks] = overview.reduce(
    ([e, s], inst) =>
      inst.simple_name.includes('ETF') ? [[...e, inst], s] : [e, [...s, inst]],
    [[], []]
  );

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
        <div className='row-title'>ETFs</div>
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

export default RobinhoodOverview;
