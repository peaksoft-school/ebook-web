import { forwardRef, useState } from 'react'
import './CustomTextarea.css'

const CustomTextarea = forwardRef((props, ref) => {
   const [letter, setLetter] = useState(0)

   const leterCounter = (e) => {
      setLetter(e.target.value.length)
   }

   return (
      <div className={`customTextarea ${props.className}`}>
         <label htmlFor={props.id}>{props.label}</label>
         <textarea
            {...props}
            className={`textarea ${props.className}`}
            onChange={leterCounter}
            ref={ref}
         />
         <p className="letterCss">
            {letter}/{props.maxlengthofletters}
         </p>
      </div>
   )
})

export default CustomTextarea
