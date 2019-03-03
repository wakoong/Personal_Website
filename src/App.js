import React from "react";
import { Router } from "@reach/router";

import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Programming from "./Programming";

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <header>
                    <Header />
                </header>
                <Router>
                    <About path="/about" /> 
                    <Programming path="/projects" />
                    <Contact path="/contact" /> 
                </Router>  
                <footer>
                    
                </footer>
            </div>
        )
    }
}

export default App;