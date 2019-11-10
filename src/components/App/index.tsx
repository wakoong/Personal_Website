import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Header from '../Header/header.tsx';
import Main from '../Main/main.tsx';
import Laboratory from '../Laboratory/laboratory.tsx';
import About from '../About/about.tsx';
import Robinhood from '../Laboratory/robinhood.tsx';
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
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
