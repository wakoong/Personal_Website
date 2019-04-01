import React from "react";
import ReactDOM from 'react-dom'
import { Router } from "@reach/router";

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
                    <Router>
                        <Main path="/" links={links} /> 
                        <Programming path="/projects" />
                        <Contact path="/contact" /> 
                    </Router>  
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
