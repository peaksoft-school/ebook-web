import React from 'react';
import  './Button.css'

const STYLES = [
  "btn--btn1",
  "btn--btn2",
  "btn--btn3",
  "btn--btn4",
  "btn--btn5",
  "btn--btn6",
]

const Button = ({
  type, 
  className, 
  onClick, 
  disabled, 
  children,
  buttonStyle,
  ...restProps
 }) => {

 const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle
     : STYLES[0]

  return (
   <button
    type={type || 'button'}
    className={`btn ${className} ${checkButtonStyle}`}
    onClick={onClick}
    disabled={disabled}
    >
      {children}
  </button>
  )
};

export default Button;