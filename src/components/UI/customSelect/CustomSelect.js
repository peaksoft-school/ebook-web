import React, { forwardRef } from 'react'
import './CustomSelect.css'

const CustomSelect = forwardRef((props, ref) => {
   const {
      getOptionLabel,
      getOptionValue,
      className,
      initialstate,
      label,
      id,
      ...rest
   } = props

   const options = props.data.map((item) => (
      <option
         key={getOptionValue ? getOptionValue(item) : item.id}
         id={getOptionValue ? getOptionValue(item) : item.id}
      >
         {getOptionLabel ? getOptionLabel(item) : item.name}
      </option>
   ))

   return (
      <div className="customBox">
         <label id={props.id} className="customSelect">
            {label}
         </label>
         <select
            ref={ref}
            {...rest}
            name="customSearch"
            className={`select ${className}`}
            required
            defaultValue=""
         >
            <option className="option" value="" disabled hidden>
               {initialstate}
            </option>
            {options}
         </select>
      </div>
   )
})

export default CustomSelect
