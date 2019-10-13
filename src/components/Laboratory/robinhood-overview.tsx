import React from 'react';

import './robinhood.css';

class RobinhoodOverview extends React.Component {
  render() {
    return (
      <div className='rb-overview'>
        <div className='rb-overview-graph'>graph</div>
        <RobinhoodOverviewTable />
      </div>
    );
  }
}

const RobinhoodOverviewTable = () => {
  return (
    <div className='rb-overview-table'>
      <div className='row row-1'>
        <div className='row-title'>ETFs</div>
        <div className='row-body'>
          <div className='item'>
            <div className='item-name'>a</div>
            <div className='item-val'>10%</div>
          </div>
          <div className='item'>b</div>
          <div className='item'>c</div>
        </div>
      </div>
      <div className='row row-2'>
        <div className='row-title'>ETFs</div>
        <div className='row-body'>50%</div>
      </div>
    </div>
  );
};

export default RobinhoodOverview;
