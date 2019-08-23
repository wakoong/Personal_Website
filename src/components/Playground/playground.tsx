import React from 'react';

export interface PlaygroundProps {
  ticker: string;
  price: number;
}

class Playground extends React.Component<PlaygroundProps> {
  render() {
    return (
      <div className="main-background">
        <div className="main-block">playground</div>
      </div>
    );
  }
}

export default Playground;
