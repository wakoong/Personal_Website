import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Provider as ReduxProvider } from "react-redux";

import Header from "../Header";
import Main from "../Main";
import Contact from "../Contact";
import Programming from "../Programming";
import Workout from "../Workout";
import store from "../../store";


class App extends React.Component {
  render() {
    const links = ["Projects", "Programming", "Workout", "Contact"];
    return (
      <div className="app">
        <header>
          <Header />
        </header>
        <ReduxProvider store={store}>
          <Router>
            <Main path="/" links={links} />
            <Programming path="/projects" />
            <Workout path="/workout" />
            <Contact path="/contact" />
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
