import React from "react";

import Social from "../Social/social.tsx";

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="index-banner">
        </section>
        <div className="main-description">
          <Social />
        </div>
      </main>
    );
  }
}

export default Main;
