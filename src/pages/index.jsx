import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Footer, Navbar } from "./../components/sections";
import Img from "gatsby-image";
import "./../assests/styles/index.scss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      basketball: file(relativePath: { eq: "home/basketball.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      explore: file(relativePath: { eq: "home/explore.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainImage: file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street: file(relativePath: { eq: "home/streetnew.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trek: file(relativePath: { eq: "home/trek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div className="index-main">
      <div className="center-row">
        <div className="main-content">
          <div className="d-none d-md-block desktop-content">
            <div className="custom-row">
              <div className="left-content">
                <div className="w-100 center-column">
                  <div className="starting-image">
                    <Img
                      className="image-explore"
                      fluid={data.explore.childImageSharp.fluid}
                    />
                  </div>
                  <h1 className="h1">
                    Explore new locations, <br /> Share your experiences, <br />
                    Meet new people
                  </h1>
                </div>
                <div className="w-100 center-column">
                  <Img
                    className="image-basketball"
                    fluid={data.basketball.childImageSharp.fluid}
                  />
                  <h1 className="h1">
                    Explore checkins on a map instead of just feeds
                  </h1>
                  <h1 className="h1">
                    Challenge people next door for friendly matches
                  </h1>
                  <h1 className="h1">Create your own travel bucket</h1>
                </div>
              </div>
              <div className="right-content">
                <div className="w-100 right-image-column">
                  <div className="w-100 center-column">
                    <h1
                      className="h1"
                      onClick={() => (window.location.href = "/invite")}
                      className="request-invite w-100 center-row"
                    >
                      Join Waitlist
                      <i className="fas fa-arrow-right"></i>
                    </h1>
                    <Img
                      className="image-street"
                      fluid={data.street.childImageSharp.fluid}
                    />
                    <h1 className="h1">
                      Compete with friends, capture forts, make alliances and
                      unlock exclusive offers based on your badges
                    </h1>
                    <h1 className="h1">
                      Find hidden treks, secret late night food corners or
                      unpopular playgrounds
                    </h1>
                    <Img
                      className="image-trek"
                      fluid={data.trek.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Class */}
          <div className="d-block d-md-none mobile-main">
            <Navbar />
            <div className="center-column">
              <h1 className="h1">
                Explore new locations, <br /> Share your experiences, <br />
                Meet new people
              </h1>
              <Img
                className="image-mobile"
                fluid={data.explore.childImageSharp.fluid}
              />
              <h1 className="h1">
                Compete with friends, capture forts, make alliances and unlock
                exclusive offers based on your badges
              </h1>
              <h1 className="h1">
                Find those hidden treks, secret late night food corners or
                unpopular playgrounds
              </h1>
              <Img
                className="image-mobile"
                fluid={data.street.childImageSharp.fluid}
              />
              <h1 className="h1">
                Explore checkins on a map instead of just feeds
              </h1>
              <h1 className="h1">
                Challenge people next door for friendly matches
              </h1>
              <h1 className="h1">Create your own travel bucket</h1>
              <Img
                className="image-mobile"
                fluid={data.basketball.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className="center-column common">
            <Img
              className="image-main"
              fluid={data.mainImage.childImageSharp.fluid}
            />
            <h1 className="h1 text-main">
              For people who love to travel and explore new places
            </h1>
            <div className="column-container"></div>
            <h1
              className="h1"
              onClick={() => (window.location.href = "/invite")}
              className="request-invite w-100 center-row"
            >
              Join Waitlist
              <i className="fas fa-arrow-right"></i>
            </h1>
            <div className="coming-soon"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
