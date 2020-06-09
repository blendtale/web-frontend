import React from "react";
import PropTypes from "prop-types";
import "./../../assests/styles/rowContainers.scss";

const TextImageRowContainer = (props) => {
  let imageHeight = "";
  const {
    imageUri,
    heading,
    para,
    alt,
    heightType,
    linkUrl,
    linkFunction,
    linkText,
  } = props;
  const height_manual = 0;
  if (heightType === height_manual) imageHeight = "hardcodedImageHeight";

  return (
    <div className="text-image-column-container-main-class">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <img
            src={imageUri}
            alt={alt}
            className={`image-column-container ${imageHeight}`}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <div className="custom-small-container-class">
            <h2>{heading}</h2>
            <p className="image-column-para">{para}</p>
            <div>
              <p>
                {linkText ? (
                  <a
                    className="text-image-row-anchor"
                    href={linkUrl ? linkUrl : "#"}
                    onClick={linkFunction ? linkFunction : () => false}
                  >
                    {linkText}
                    <i className="fas fa-arrow-right custom-fa-right"></i>
                  </a>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TextImageRowContainer.propTypes = {
  imageUri: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  para: PropTypes.string,
  alt: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  linkFunction: PropTypes.func,
  heightType: PropTypes.number,
};

export { TextImageRowContainer };
