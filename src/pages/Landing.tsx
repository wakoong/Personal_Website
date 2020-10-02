import * as React from 'react';

import { MainSection } from '../containers';

const Landing = ({ setTheme }) => {
  return (
    <React.Fragment>
      <MainSection setTheme={setTheme} />
    </React.Fragment>
  );
};

export default Landing;
