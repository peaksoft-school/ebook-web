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
<<<<<<< HEAD
  "redirectActiveButton",
  "redirectButton"
=======
  "deleteProfile",
  "tabSwitcher",
  "btnActive"
>>>>>>> a9702fa88e0435f901e13d195da69a9cf18f0d1a
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