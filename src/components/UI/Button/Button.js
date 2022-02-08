import React from 'react';
import  './Button.css'

const STYLES = [
  "primary",
  "secondary",
  "tertiary",
  "load",
  "contained",
  "select",
  "light",
  "deleteProfile",
  "tabSwitcher",
  "btnActive"
]

const Button = ({
  type, 
  className, 
  onClick, 
  disabled, 
  children,
  variant,
  ...restProps
 }) => {

 const checkButtonStyle = STYLES.includes(variant)
     ? variant
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