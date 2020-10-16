import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Redirect, Router, RouteComponentProps } from '@reach/router';
import { Provider as ReduxProvider } from 'react-redux';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import About from './components/About/index';
import CP from './components/Laboratory/cp/index';
import { Header } from './components';
import Laboratory from './components/Laboratory/laboratory';
import { Landing, Projects } from './pages';
import NBA from './components/Laboratory/nba/index';
import Robinhood from './components/Laboratory/robinhood/index';
import store from './store';
import { DefaultTheme } from './utils';
import { ProjectDescription, ProjectSection } from './containers';
import { useLocalStorageState } from './hooks';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
  body {
    font-size: 10px;

    @media (min-width: 499px) {
      font-size: 12px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }

    a {
      text-decoration: none;
      color: inherit
    }
  }
`;

const App = () => {
  const [theme, setTheme] = useLocalStorageState('theme', DefaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Header />
        <ReduxProvider store={store}>
          <Router>
            <RouterPage
              path='/'
              pageComponent={<Landing setTheme={setTheme} />}
            />
            <RouterPage path='/about' pageComponent={<About />} />
            <RouterPage path='/laboratory' pageComponent={<Laboratory />} />
            <RouterPage path='/robinhood/*' pageComponent={<Robinhood />} />
            <Projects path='/projects'>
              <ProjectDescription path=':projectId' />
            </Projects>
          </Router>
        </ReduxProvider>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(<App />, document.getElementById('root'));
