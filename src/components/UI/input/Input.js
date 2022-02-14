import React, { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef((props, ref) => {
	const { hasError, className, id, label,  ...rest } = props
	return (
		<div className={`input ${className} `}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				ref={ref}
				{...rest}
				className={`${hasError ? 'hasError' : ''}`}
			/>
		</div>
	)
})

export default Input
