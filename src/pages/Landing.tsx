import * as React from 'react';

import { MainSection, ProjectSection } from '../containers';

const Landing = ({ setTheme }) => {
  return (
    <React.Fragment>
      <MainSection setTheme={setTheme} />
      <ProjectSection />
    </React.Fragment>
  );
};

export default Landing;
