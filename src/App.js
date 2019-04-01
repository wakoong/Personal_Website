import React from "react";
import ReactDOM from 'react-dom'
import { Router } from "@reach/router";
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

import Header from "./Header";
import Main from "./Main";
import Contact from "./Contact";
import Programming from "./Programming";

class App extends React.Component {
    render() {
        const links = ["Projects", "Programming", "Basketball", "Contact"]
        return(
            <div className="app">
                <header>
                    <Header />
                </header>
                <ReduxProvider store={store}>
                    <Router>
                        <Main path="/" links={links} /> 
                        <Programming path="/projects" />
                        <Contact path="/contact" /> 
                    </Router> 
                </ReduxProvider>
                     
                {/* <div className="wrapper">
                    <footer>
                        <ul className="footer-links-main">
                            {links.map(link => {
                            return <Footer key={link} link={link} /> 
                            })}
                        </ul>
                        <div className="footer-sm">
                            <Social />
                        </div>
                    </footer>
                </div> */}
            </div>
        )
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
