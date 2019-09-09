import React from "react";

import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";

class Social extends React.Component {
  render() {
    return (
      <div className="social-wrapper">
        <a href="https://www.instagram.com/woosikka/">
          <img className="social-btn" src={instagram} alt="instagram" />
        </a>
        <img className="social-btn" src={facebook} alt="facebook" />
        <img className="social-btn" src={linkedin} alt="linkedin" />
        <img className="social-btn" src={twitter} alt="twitter" />
      </div>
    );
  }
}

export default Social;
