import React from "react";

import "./../../assests/styles/navbar.scss";
import Logo from "./../../assests/images/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-padding">
      <nav className="navbar navbar-expand-lg navbar-light">
        <img
          src={Logo}
          href="#"
          width="180"
          height="60"
          className="d-inline-block align-top customo-logo"
          alt="company-logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-li">
              <a className="navbar-text-right" href="/">
                Home
              </a>
            </li>
            <li className="navbar-li">
              <a
                className="navbar-text-right"
                href="https://angel.co/company/blendtale"
              >
                Career
              </a>
            </li>
            <li className="navbar-li">
              <a
                className="navbar-text-right navbar-text-standout"
                href="/invite"
              >
                {" "}
                Join Waitlist
                <i className="fas fa-arrow-right custom-fa-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
