import { forwardRef, useState } from 'react'
import './CustomTextarea.css'

const CustomTextarea = forwardRef((props, ref) => {
   const [letter, setLetter] = useState(0)

   const leterCounter = (e) => {
      setLetter(e.target.value.length)
   }

<<<<<<< HEAD
   const { className, id, label, maxlengthofletters, hasError, ...rest } = props

   return (
      <div className={`customTextarea ${className}`}>
         <label htmlFor={id}>{label}</label>
         <textarea
            {...rest}
            className={`textarea ${hasError ? 'hasError' : ''} ${className} `}
=======
   return (
      <div className={`customTextarea ${props.className}`}>
         <label htmlFor={props.id}>{props.label}</label>
         <textarea
            {...props}
            className={`textarea ${props.className}`}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
            onChange={leterCounter}
            ref={ref}
         />
         <p className="letterCss">
<<<<<<< HEAD
            {letter}/{maxlengthofletters}
=======
            {letter}/{props.maxlengthofletters}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
         </p>
      </div>
   )
})

export default CustomTextarea
