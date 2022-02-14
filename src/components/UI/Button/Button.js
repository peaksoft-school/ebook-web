import React from 'react'
import './Button.css'

const STYLES = [
   'primary',
   'secondary',
   'tertiary',
   'load',
   'contained',
   'select',
   'light',
   'redirectActiveButton',
   'redirectButton',
   'deleteProfile',
   'tabSwitcher',
   'btnActive',
   'variantBecomeToSeller',
   'btnActive',
]

const Button = ({ className, onClick, disabled, children, variant }) => {
   const checkButtonStyle = STYLES.includes(variant) ? variant : STYLES[0]

   return (
      <button
         type="button"
         className={`btn ${className} ${checkButtonStyle}`}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </button>
   )
}

export default Button
