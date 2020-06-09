import React, { Component } from "react";
import "./../../assests/styles/footer.scss";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div className="footer-main-class">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="footer-logo-image">
            <Link to="/">
              <Img
                fluid={data.mainImage.childImageSharp.fluid}
                alt="footer-logo"
                className="image-logo-footer"
              />
            </Link>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2 col-lg-2">
          <h5>Company</h5>
          <p>
            <a
              className="footer-class"
              href="https://angel.co/company/blendtale"
            >
              Career
            </a>
          </p>
          <p>
            <Link className="footer-class" to="/faq">
              FAQ
            </Link>
          </p>
        </div>
        <div className="col-6 col-sm-6 col-md-2 col-lg-2">
          <h5>Resources </h5>
          <p>
            <Link className="footer-class" to="#">
              Site Map
            </Link>
          </p>
          <p>
            <Link className="footer-class" to="#">
              Investors Corner
            </Link>
          </p>
          <p>
            <Link className="footer-class" to="/privacy">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="col-6 col-sm-6 col-md-2 col-lg-2">
          <h5>Social links</h5>
          <p>
            <a
              className="footer-class"
              href="https://www.facebook.com/Blendtale-102809801474035/"
            >
              Facebook
            </a>
          </p>
          <p>
            <a className="footer-class" href="https://twitter.com/blendtale">
              Twitter
            </a>
          </p>
          <p>
            <Link className="footer-class" to="#">
              Linkedin
            </Link>
          </p>
          <p>
            <a
              className="footer-class"
              href="https://angel.co/company/blendtale"
            >
              Angellist
            </a>
          </p>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <h5>Contact Us</h5>
          <p>
            <Link className="footer-class" to="#">
              Floor 19, C-001/A2, <br /> Sector 16B, Noida, <br /> Uttar
              Pradesh, 201301 <br /> India
            </Link>
          </p>
          <p>
            <Link className="footer-class" to="#">
              +91-8810560137
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
