import React from 'react';

import VerticalPanel from '../Common/verticalPanel.tsx';
import RAccount from './robinhood-account.tsx';

class Playground extends React.Component {
  render() {
    const tabs: string[] = ['Overview', 'ETFs', 'Regular Stocks'];
    const components: React.Component[] = [<RAccount />, null, null];
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
