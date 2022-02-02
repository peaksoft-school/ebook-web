import React, { forwardRef } from 'react'
import classes from './InputField.module.css'

const InputField = forwardRef((props, ref) => (

	<div className='form-group'>
		{props.label && (
			<label htmlFor='input-field' className={classes.reusableLabel}>
				{props.label}
				<span className={classes.article}>*</span>
			</label>
		)}
		<input
			className={`${classes.input} ${props.className}`}
			{...props}
			ref={ref}
		/>
	</div>
    
))

export default InputField
