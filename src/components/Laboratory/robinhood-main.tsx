import React from 'react';
import { Router, Link } from '@reach/router';

import RobinhoodOverview from './robinhood-overview';
import RobinhoodETFs from './robinhood-etfs';
import RobinhoodStock from './robinhood-stocks';
import RobinhoodHistory from './robinhood-history';
import './robinhood.css';

const RobinhoodHeader = () => {
  const tabs = ['Overview', 'ETFs', 'Stocks', 'History'];
  // const urls = ['', 'etfs', 'stocks', 'history'];
  return (
    <div className='rb-header'>
      <ul className='header-tabs'>
        {tabs.map((tab, index) => (
          <Link to={tab.toLowerCase()} key={tab}>
            <li className='header-tab'>{tab}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

class RobinhoodMain extends React.Component {
  render() {
    const { account, portfolio, overview, orders } = this.props;
    const [etfs, stocks] = overview.reduce(
      ([e, s], inst) =>
        inst.simple_name.includes('ETF')
          ? [[...e, inst], s]
          : [e, [...s, inst]],
      [[], []]
    );

    const getTotal = (data) =>
      data
        .map((d) => d.last_trade_price * d.quantity)
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);

    return (
      <div className='rb-main'>
        <RobinhoodHeader />
        <Router>
          <RobinhoodOverview
            portfolio={portfolio}
            etfs={etfs}
            stocks={stocks}
            cash={account.cash}
            getTotal={getTotal}
            path='overview'
          />
          <RobinhoodETFs etfs={etfs} getTotal={getTotal} path='etfs' />
          <RobinhoodStock stocks={stocks} getTotal={getTotal} path='stocks' />
          <RobinhoodHistory orders={orders} path='history' />
        </Router>
      </div>
    );
  }
}

export default RobinhoodMain;
