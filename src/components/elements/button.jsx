import React from "react"
import PropTypes from "prop-types"
import "./../../assests/styles/button.scss"

const Button = props => {
  const buttonClassBase = "substyle"
  let btnSizeClass = null
  let btnColorType = null
  //Button Sizes
  const TYPE_LARGE_ROUND = 1
  const TYPE_LARGE_MEDIUM = 2
  const TYPE_LARGE_FLAT = 3

  //Button Colors
  const COLOR_WHITE = 1
  const COLOR_BLACK = 2
  const COLOR_GREEN = 3
  const COLOR_TWITER_BLUE = 4

  const { btnType, btnText, colorType, onClick } = props

  //Creating font Classes
  if (btnType === TYPE_LARGE_ROUND) btnSizeClass = "type-large-round"
  if (btnType === TYPE_LARGE_FLAT) btnSizeClass = "type-large-flat"
  if (btnType === TYPE_LARGE_MEDIUM) btnSizeClass = "type-large-medium"

  //Color Type
  if (colorType === COLOR_WHITE) btnColorType = "color-white"
  if (colorType === COLOR_GREEN) btnColorType = "color-purple"
  if (colorType === COLOR_BLACK) btnColorType = "color-black"
  if (colorType === COLOR_TWITER_BLUE) btnColorType = "color-twitter-blue"

  return (
    <div className="button-main">
      <button
        className={`${btnSizeClass} ${buttonClassBase} ${btnColorType}`}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  )
}

Button.propTypes = {
  btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  colorType: PropTypes.number.isRequired,
  btnType: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}

export default Button
