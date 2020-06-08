import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      basketball: file(relativePath: { eq: "home/basketball.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      explore: file(relativePath: { eq: "home/explore.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      streetfood: file(relativePath: { eq: "home/street-food.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  return <div className="index-main"></div>;
};

export default IndexPage;
