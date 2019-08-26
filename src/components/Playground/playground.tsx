import React from 'react';

import Button from '@material-ui/core/Button';

export interface PlaygroundProps {
  ticker: string;
  price: number;
}

class Playground extends React.Component<PlaygroundProps> {
  render() {
    return (
      <div className="main-background">
        <div className="main-block">
          <Button variant="contained" color="primary">
            playground
          </Button>
        </div>
      </div>
    );
  }
}

export default Playground;
