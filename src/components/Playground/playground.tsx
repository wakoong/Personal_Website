import React from 'react';

import VerticalPanel from '../Common/verticalPanel.tsx';
import RAccount from './robinhood-account.tsx';

class Playground extends React.Component {
  render() {
    const tabs: string[] = [
      'Account Information',
      'Index Funds',
      'Regular Stocks',
    ];
    return (
      <div className="main-background">
        <div className="main-block">
          <VerticalPanel tabs={tabs} account={<RAccount />} />
        </div>
      </div>
    );
  }
}

export default Playground;
