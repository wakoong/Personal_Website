import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Router, RouteComponentProps } from '@reach/router';
import { Provider as ReduxProvider } from 'react-redux';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import About from './components/About/index';
import CP from './components/Laboratory/cp/index';
import { Header } from './components';
import Laboratory from './components/Laboratory/laboratory';
import Landing from './pages/Landing';
import NBA from './components/Laboratory/nba/index';
import Robinhood from './components/Laboratory/robinhood/index';
import store from './store';
import { OaklandAsTheme } from './utils';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`;

const App = () => {
  const [theme, setTheme] = React.useState(OaklandAsTheme);

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
            <RouterPage path='/coach-and-player' pageComponent={<CP />} />
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
