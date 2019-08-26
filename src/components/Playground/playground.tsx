import React from 'react';

import VerticalPanel from '../Common/verticalPanel.tsx';

class Playground extends React.Component {
  render() {
    return (
      <div className="main-background">
        <div className="main-block">
          <VerticalPanel />
        </div>
      </div>
    );
  }
}

export default Playground;
