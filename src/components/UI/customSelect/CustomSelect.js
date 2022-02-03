import React, { forwardRef } from 'react'
import './CustomSelect.css'

const CustomSelect = forwardRef((props, ref) => {

	const { getOptionLabel , getOptionValue} = props

	const options = props.data.map((item,index) => (
		<option
			key={index}
			id={getOptionValue ? getOptionValue(item) : item.id}
		>
			{getOptionLabel ? getOptionLabel(item) : item.name}
		</option>
	))

	return (
		<div className='customBox'>
			<label id={props.id} className='customSelect'>
				{props.label}
			</label>
			<select
				ref={ref}
				{...props}
				name='customSearch'
				className={`select ${props.className}`}
				required
				defaultValue=''
			>
				<option className='option' value='' disabled hidden>
					{props.initialstate}
				</option>
				{options}
			</select>
		</div>
	)
})

export default CustomSelect
