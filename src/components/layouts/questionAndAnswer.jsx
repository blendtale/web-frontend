import React, { Component } from "react";
import "./../../assests/styles/questionAndAnswer.scss";
import PropTypes from "prop-types";

class QuestionAndAnswer extends Component {
  state = {
    visible: false,
  };

  visibilityToggler = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { heading, children } = this.props;
    return (
      <div
        className="QuestionAndHeadingComp"
        onClick={() => this.visibilityToggler()}
      >
        <h3> {heading} </h3>
        {this.state.visible ? <div>{children}</div> : null}
      </div>
    );
  }
}

QuestionAndAnswer.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), //as you can render an array of elements
    PropTypes.element, //for a single component/element
  ]).isRequired,
};
export default QuestionAndAnswer;
