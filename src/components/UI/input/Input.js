import React, { forwardRef } from 'react';
import './Input.css'


const Input = forwardRef(({
    className,  
    id, 
    label, 
    placeholder },ref) => {
     
  return (
      <div className={`input ${className}`}>
         <label htmlFor={id}>{label}</label>
         <input placeholder={placeholder} ref={ref}/>
      </div>
      
  );
});

export default Input;
