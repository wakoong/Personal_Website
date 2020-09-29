import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { HashRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Header from '../Common/Atoms/header.tsx';
import Main from '../Main';
import Laboratory from '../Laboratory/laboratory.tsx';
import About from '../About';
import Robinhood from '../Laboratory/robinhood/';
import CP from '../Laboratory/cp/';
import NBA from '../Laboratory/nba';
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
            <NBA path='/nba' />
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
)
