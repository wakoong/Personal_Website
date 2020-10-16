import * as React from 'react';

import { Footer } from '../components';
import { MainSection, ProjectSection } from '../containers';
import { IThemeProps } from '../utils';

interface ILandingProps {
  setTheme: (theme: IThemeProps) => IThemeProps;
}

const Landing = ({ setTheme }: ILandingProps) => {
  return (
    <React.Fragment>
      <MainSection setTheme={setTheme} />
      <ProjectSection />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
