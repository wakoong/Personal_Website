import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

class App extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <Header />
                </header>
                <Router>
                    <About path="/about" /> 
                    <Contact path="/contact" /> 
                </Router>  
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));