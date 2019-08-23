import React from 'react';

export interface PlaygroundProps {
  ticker: string,
  price: number
}

class Playground extends React.Component<PlaygroundProps> {
  render() {
    return (
      <div>
        playground
      </div>
    )
  }
}

export default Playground;