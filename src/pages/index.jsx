import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { Footer } from "./../components/sections";
import Img from "gatsby-image";
import "./../assests/styles/index.scss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      basketball: file(relativePath: { eq: "home/basketball.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      explore: file(relativePath: { eq: "home/explore.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainImage: file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      streetfood: file(relativePath: { eq: "home/street-food.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div className="index-main">
      <div className="vw-100">
        <div className="custom-row">
          <div className="left-content">
            <div className="w-100 center-column">
              <Img
                className="image-explore"
                fluid={data.explore.childImageSharp.fluid}
              />
              <h1>
                Explore new locations, <br /> Share your experiences, <br />
                Meet new people
              </h1>
            </div>
            <div className="w-100 center-column">
              <Img
                className="image-basketball"
                fluid={data.basketball.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className="right-content">
            <div className="w-100 right-image-column">
              <div className="w-100 center-column">
                <h1 className="request-invite w-100 center-row">
                  Join Waitlist
                  <i className="fas fa-arrow-right"></i>
                </h1>
                <Img
                  className="image-streetfood"
                  fluid={data.streetfood.childImageSharp.fluid}
                />
                <h1>
                  From hidden food corner to new playground. Find and share
                  places which doesn’t exist on map
                </h1>
                <h1> OR </h1>
                <h1>Challenge people next door for friendly matches.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="center-column end-section">
          <Img
            className="image-main"
            fluid={data.mainImage.childImageSharp.fluid}
          />
          <h1 className="text-main">
            For people who love to travel and explore new places
          </h1>
          <h1 className="request-invite w-100 center-row">
            Join Waitlist
            <i className="fas fa-arrow-right"></i>
          </h1>
          <div className="coming-soon"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
