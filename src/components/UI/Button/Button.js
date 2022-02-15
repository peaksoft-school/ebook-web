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

<<<<<<< HEAD
const Button = ({
   type,
   className,
   onClick,
   disabled,
   children,
   variant,
   ...restProps
}) => {
=======
const Button = ({ className, onClick, disabled, children, variant }) => {
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
   const checkButtonStyle = STYLES.includes(variant) ? variant : STYLES[0]

   return (
      <button
<<<<<<< HEAD
         type={type || 'button'}
         className={`btn ${className} ${checkButtonStyle}`}
         onClick={onClick}
         disabled={disabled}
         {...restProps}
=======
         type="button"
         className={`btn ${className} ${checkButtonStyle}`}
         onClick={onClick}
         disabled={disabled}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
      >
         {children}
      </button>
   )
}

export default Button
