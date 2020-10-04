import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui header-blue secondary menu">
      <div className="right menu" style={{ fontSize: "10px" }}>
        <Link to="/" className="text-white item">
          HOMEPAGE
        </Link>

        <Link to="/" className="text-white item">
          CONTACT
        </Link>

        <Link
          to="/"
          className="text-white ui inverted white basic button item"
          style={{ fontSize: "10px" }}
        >
          SIGNIN
        </Link>

        <Link
          to="/"
          className="text-white ui inverted white basic button item"
          style={{ fontSize: "10px" }}
        >
          CREATE ACCOUNT
        </Link>
      </div>
    </div>
  );
};

export default Header;
