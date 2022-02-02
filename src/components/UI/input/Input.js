import React, { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef(
	(
		{
			className,
			id,
			label,
			placeholder,
			type,
			maxLength,
			onFocus,
			step,
			accept,
		},
		ref,
	) => {
		return (
			<div className={`input ${className}`}>
				<label htmlFor={id}>{label}</label>
				<input
					id={id}
					step={step}
					accept={accept}
					onFocus={onFocus}
					type={type}
					placeholder={placeholder}
					ref={ref}
					maxLength={maxLength}
				/>
			</div>
		)
	},
)

export default Input
