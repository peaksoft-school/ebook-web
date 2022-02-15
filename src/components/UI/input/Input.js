import React, { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef((props, ref) => {
<<<<<<< HEAD
   const { hasError, className, id, label, ...rest } = props
   return (
      <div className={`input ${className} `}>
         <label htmlFor={id}>{label}</label>
         <input
            id={id}
            ref={ref}
            {...rest}
            className={`${hasError ? 'hasError' : ''}`}
         />
=======
   return (
      <div className={`input ${props.className}`}>
         <label htmlFor={props.id}>{props.label}</label>
         <input id={props.id} ref={ref} {...props} />
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
      </div>
   )
})

export default Input
