import React from 'react';
import { Router, Link } from '@reach/router';

import Robinhood from './robinhood';

import robinhood from '../../assets/images/robinhood.png';
import CP from '../../assets/images/CoachPlayer.png';

class Laboratory extends React.Component {
  render() {
    return (
      <div className="lab">
        <Link to="/robinhood">
          <div className="lab-card">
            <img
              className="lab-img"
              src={robinhood}
              alt="Stock Management App"
            />
          </div>
        </Link>
        <Link to="/coach-and-player">
          <div className="lab-card">
            {' '}
            <img className="lab-img" src={CP} alt="Coach-and-Player" />
          </div>
        </Link>
        <div className="lab-card">
          {' '}
          <img className="lab-img" src={CP} alt="Coach-and-Player" />
        </div>
      </div>
    );
  }
}

export default Laboratory;
