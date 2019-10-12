import React from 'react';

import Robinhood from './robinhood';

import robinhood from '../../assets/images/robinhood.png';
import CP from '../../assets/images/CoachPlayer.png';

class Laboratory extends React.Component {
  render() {
    return (
      <div className="lab">
        <div className="project-card">
          <img src={robinhood} alt="Stock Management App" />
        </div>
        <div className="project-card">
          {' '}
          <img src={CP} alt="Coach-and-Player" />
        </div>
        <div className="project-card">
          {' '}
          <img src={CP} alt="Coach-and-Player" />
        </div>
      </div>
    );
  }
}

export default Laboratory;
