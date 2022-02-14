import { forwardRef, useState } from 'react'
import './CustomTextarea.css'

const CustomTextarea = forwardRef((props, ref) => {
	const [letter, setLetter] = useState(0)

	const leterCounter = (e) => {
		setLetter(e.target.value.length)
	}

	const {className,id,label,maxlengthofletters,hasError ,...rest} = props 

	return (
		<div className={`customTextarea ${className}`}>
			<label htmlFor={id}>{label}</label>
			<textarea
				{...rest}
				className={`textarea ${hasError ? 'hasError' : ''} ${className} `}
				onChange={leterCounter}
				ref={ref}
			/>
			<p className='letterCss'>
				{letter}/{maxlengthofletters}
			</p>
		</div>
	)
})

export default CustomTextarea
