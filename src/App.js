import React from "react";
import { Router } from "@reach/router";

import Header from "./Header";
import Main from "./Main";
import Contact from "./Contact";
import Programming from "./Programming";
import Footer from "./Footer";
import Social from "./Social";

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

export default App;