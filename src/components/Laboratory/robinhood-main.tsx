import React from 'react';
import { Router, Link } from '@reach/router';

import RobinhoodOverview from './robinhood-overview';
import RobinhoodETFs from './robinhood-etfs';
import RobinhoodStock from './robinhood-stocks';
import './robinhood.css';

class RobinhoodMain extends React.Component {
  render() {
    const { account, portfolio, overview } = this.props;

    return (
      <div className='rb-main'>
        <RobinhoodHeader />
        <Router>
          <RobinhoodOverview
            account={account}
            overview={overview}
            portfolio={portfolio}
            path='/'
          />
          <RobinhoodETFs path='etfs' />
          <RobinhoodStock path='stocks' />
        </Router>
      </div>
    );
  }
}

const RobinhoodHeader = () => {
  const tabs = ['Overview', 'ETFs', 'Stocks'];
  const urls = ['', 'etfs', 'stocks'];
  return (
    <div className='rb-header'>
      <ul className='header-tabs'>
        {tabs.map((tab, index) => (
          <Link to={urls[index]} key={tab}>
            <li className='header-tab'>{tab}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RobinhoodMain;
