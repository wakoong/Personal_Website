import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { Provider as ReduxProvider } from 'react-redux';

import Header from '../Header/header.tsx';
import Main from '../Main/main.tsx';
import Playground from '../Playground/playground.tsx';
import About from '../About/about.tsx';
import store from '../../store';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ReduxProvider store={store}>
          <Router>
            <Main path="/" />
            <About path="/about" />
            <Playground path="/playground" />
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
