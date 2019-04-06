import React from "react";
// import { Link } from "@reach/router";

import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
{
  /* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
}

{
  /* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
}

{
  /* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
}
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
