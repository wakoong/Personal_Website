import React from 'react';
import { Router, Link } from '@reach/router';

import RobinhoodOverview from './robinhood-overview';
import './robinhood.css';

class RobinhoodMain extends React.Component {
  render() {
    return (
      <div className='rb-main'>
        <RobinhoodHeader />
        <Router>
          <RobinhoodOverview path='/' />
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
