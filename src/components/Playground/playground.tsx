import React from 'react';

import VerticalPanel from '../Common/verticalPanel.tsx';
import RAccount from './robinhood-account.tsx';
import ETFs from './robinhood-etfs.tsx';
import Stocks from './robinhood-stocks.tsx';

class Playground extends React.Component {
  render() {
    const tabs: string[] = ['Overview', 'ETFs', 'Regular Stocks'];
    const components: React.Component[] = [<RAccount />, <ETFs />, <Stocks />];
    return (
      <div className="main-background">
        <div className="main-block">
          <VerticalPanel tabs={tabs} components={components} />
        </div>
      </div>
    );
  }
}

export default Playground;
