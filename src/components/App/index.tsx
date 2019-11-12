import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from '@reach/router';
import {HashRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';

import Header from '../Header/header.tsx';
import Main from '../Main/main.tsx';
import Laboratory from '../Laboratory/laboratory.tsx';
import About from '../About/about.tsx';
import Robinhood from '../Laboratory/robinhood.tsx';
import CP from '../Laboratory/CP.tsx';
import store from '../../store';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <ReduxProvider store={store}>
          <Router>
            <Main path='/' />
            <About path='/about' />
            <Laboratory path='/laboratory' />
            <Robinhood path='/robinhood/*' />
            <CP path='/coach-and-player' />
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
