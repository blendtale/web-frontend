import React, { Component } from "react";
import "./../assests/styles/FAQ.scss";
import FAQImage from "./../assests/images/faq/frequently_asked.png";
import { TextImageRowContainer } from "./../components/layout";
import { Footer } from "./../components/sections";
class FAQ extends Component {
  render() {
    return (
      <div>
        <div className="faq-main-component">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <TextImageRowContainer
                imageUri={FAQImage}
                heading="The most common Questions"
                para="Here are the answers for some of the questions people frequently ask us. "
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FAQ;

// TextImageRowContainer.propTypes = {
//   imageUri: PropTypes.string.isRequired,
//   heading: PropTypes.string.isRequired,
//   para: PropTypes.string,
//   alt: PropTypes.string,
//   linkText: PropTypes.string,
//   linkUrl: PropTypes.string,
//   linkFunction: PropTypes.func,
//   heightType: PropTypes.number
//  }
