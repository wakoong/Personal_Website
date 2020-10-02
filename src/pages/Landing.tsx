import * as React from 'react';

import { Footer } from '../components';
import { MainSection, ProjectSection } from '../containers';

const Landing = ({ setTheme }) => {
  return (
    <React.Fragment>
      <MainSection setTheme={setTheme} />
      <ProjectSection />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
