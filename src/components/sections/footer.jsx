import React, { Component } from "react";
import "./../../styles/footer.scss";

import { Link } from "gatsby";

class Footer extends Component {
  render() {
    return (
      <div className="footer-main-class">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="footer-logo-image">
              <img src={""} alt="footer-logo" className="image-logo-footer" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <h5>Company</h5>
            <p>
              <a className="footer-class" href="#">
                Our Blog
              </a>
            </p>
            <p>
              <a className="footer-class" href="/career">
                Career
              </a>
            </p>
            <p>
              <a className="footer-class" href="/faq">
                Frequently Asked Questions
              </a>
            </p>
            <p>
              <a className="footer-class" href="#">
                Site Map
              </a>
            </p>
            <p>
              <a className="footer-class" href="#">
                Investors Corner
              </a>
            </p>
            <p>
              <a className="footer-class" href="/privacypolicy">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <h5>Social links</h5>
            <p>
              <a className="footer-class" href="#">
                Facebook
              </a>
            </p>
            <p>
              <a className="footer-class" href="#">
                Twitter
              </a>
            </p>
            <p>
              <a className="footer-class" href="#">
                Linkedin
              </a>
            </p>
            <p>
              <a className="footer-class" href="#">
                Angellist
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2">
            <h5>Mail Us</h5>
            <p>
              <a className="footer-class" href="#">
                1/A BGR Energy Building, Slip Road, Film City, Sector 16A,
                Noida, Uttar Pradesh 201301
              </a>
            </p>
            <p>
              <a className="footer-class" href="#">
                +91-8810560137
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
