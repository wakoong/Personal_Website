import React from "react";
import { Router } from "@reach/router";

import Header from "./Header";
import About from "./About";
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
                    <About path="/" links={links} /> 
                    <Programming path="/projects" />
                    <Contact path="/contact" /> 
                </Router>  
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
            </div>
        )
    }
}

export default App;