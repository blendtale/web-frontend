import React from "react";
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
  return (
    <div className="index-main">
      <div className="center-row">
        <div className="main-content">
          <div className="d-none d-md-block desktop-content">
            <div className="custom-row">
              <div className="left-content">
                <div className="w-100 center-column">
                  <Img
                    className="image-explore"
                    fluid={data.explore.childImageSharp.fluid}
                  />
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
                      className="image-streetfood"
                      fluid={data.streetfood.childImageSharp.fluid}
                    />
                    <h1 className="h1">
                      From hidden food corner to new playground. Find and share
                      places which doesn’t exist on map
                    </h1>
                    <h1 className="h1"> OR </h1>
                    <h1 className="h1">
                      Challenge people next door for friendly matches.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none mobile-main">
            <div className="center-column">
              <Img
                className="image-mobile"
                fluid={data.explore.childImageSharp.fluid}
              />
              <h1 className="h1">
                Explore new locations, <br /> Share your experiences, <br />
                Meet new people
              </h1>
              <Img
                className="image-mobile"
                fluid={data.streetfood.childImageSharp.fluid}
              />
              <h1 className="h1">
                From hidden food corner to new playground. Find and share places
                which doesn’t exist on map
              </h1>
              <Img
                className="image-mobile"
                fluid={data.basketball.childImageSharp.fluid}
              />
              <h1 className="h1">
                Challenge people next door for friendly matches.
              </h1>
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
            <div className="features w-100">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="column-center boxes">
                    <h2>Badges</h2>
                    <p>
                      Compete with friends, capture forts, make alliances and
                      unlock exclusive offers based on your badges
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="column-center boxes">
                    <h2>World View</h2>
                    <p>
                      Explore places your friends have visited on a map instead
                      of feeds. Find and view activites happening at different
                      parts of the world
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="column-center boxes">
                    <h2>Community Maps</h2>
                    <p>
                      Maps made by the community memebers. find those hidden
                      treks, secret late night food corners or unpopular
                      playgrounds
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div className="column-center boxes">
                    <h2>Privacy and Security</h2>
                    <p>
                      Machine intelligence to seggeregate public and private
                      posts. Super easy to understand privacy and security
                      settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
