import React, { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef((props, ref) => {
   return (
      <div className={`input ${props.className}`}>
         <label htmlFor={props.id}>{props.label}</label>
         <input id={props.id} ref={ref} {...props} />
      </div>
   )
})

export default Input
