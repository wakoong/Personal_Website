import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Router, RouteComponentProps } from '@reach/router';
import { Provider as ReduxProvider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import About from '../components/About/index';
import CP from '../components/Laboratory/cp/index';
import { Header } from '../components';
import Laboratory from '../components/Laboratory/laboratory';
import Landing from './Landing';
import NBA from '../components/Laboratory/nba/index';
import Robinhood from '../components/Laboratory/robinhood/index';
import store from '../store';

import { OaklandAsTheme } from '../utils';

const App = () => {
  return (
    <ThemeProvider theme={OaklandAsTheme}>
      <div className='app'>
        <Header />
        <ReduxProvider store={store}>
          <Router>
            <RouterPage path='/' pageComponent={<Landing />} />
            <RouterPage path='/about' pageComponent={<About />} />
            <RouterPage path='/laboratory' pageComponent={<Laboratory />} />
            <RouterPage path='/robinhood/*' pageComponent={<Robinhood />} />
            <RouterPage path='/coach-and-player' pageComponent={<CP />} />
          </Router>
        </ReduxProvider>
      </div>
    </ThemeProvider>
  );
};

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(<App />, document.getElementById('root'));
