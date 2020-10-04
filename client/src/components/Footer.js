import React from "react";
import githubLogo from "../components/icons/github-3-64.png";
import facebookLogo from "../components/icons/facebook-6-64.png";
import linkedinLogo from "../components/icons/linkedin-3-64.png";

const Footer = () => {
  return (
    <div className="ui footer footer-blue">
      <div className="ui center aligned container">
        <div className="ui stackable grid">
          <div className="four wide column">
            <h5 style={{ fontSize: "11px" }}>Start A Project</h5>
            <p>Why not contact our team to start your new project.</p>
          </div>
          <div className="four wide column">
            <h5 style={{ fontSize: "11px" }}>Contact Us</h5>
            <p>
              123 LateVenom Rd. Roseville, AU 54521 <br></br> +44 345 678 903{" "}
            </p>
          </div>
          <div className="four wide column"></div>
          <div className="two wide column"></div>
          <div className="two wide column middle aligned">
            <div className="ui three column grid">
              <div className="column" style={{ padding: "8px" }}>
                <img
                  className="ui circular image"
                  alt="githubicon"
                  src={githubLogo}
                ></img>
              </div>
              <div className="column" style={{ padding: "8px" }}>
                <img
                  className="ui circular image"
                  alt="facebookicon"
                  src={facebookLogo}
                ></img>
              </div>
              <div className="column" style={{ padding: "8px" }}>
                <img
                  className="ui circular image"
                  alt="linkedinicon"
                  src={linkedinLogo}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
