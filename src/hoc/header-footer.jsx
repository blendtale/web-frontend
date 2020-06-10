import React from "react";
import { Footer, Navbar } from "./../components/sections";
import PropTypes from "prop-types";

const HeaderFooter = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};
HeaderFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeaderFooter;
