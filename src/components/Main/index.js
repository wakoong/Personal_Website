import React from "react";

import Social from "../Social";

class Main extends React.Component {
  render() {
    // const { links } = this.props;
    return (
      <main>
        <section className="index-banner">
          {/* <h2>Welcome to my website!</h2>
                        <h1>Follow my journey</h1> */}
        </section>
        <div className="main-description">
          <Social />
        </div>
        {/* <div className="wrapper">
                    <section className="index-links">
                        {links.map(link => {
                            return <Banner key={link} banner={link} />
                        })}
                    </section>
                </div> */}
      </main>
    );
  }
}

export default Main;
