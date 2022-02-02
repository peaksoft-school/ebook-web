import React, { forwardRef } from 'react'
import './CustomSelect.css'

const CustomSelect = forwardRef((props, ref) => {
	const options = props.data.map((item) => (
		<option
			key={
				props.arrayValueChanges
					? props.arrayValueChanges(item)
					: item.id
			}
			id={
				props.arrayValueChanges
					? props.arrayValueChanges(item)
					: item.id
			}
		>
			{props.arrayLabelChanges
				? props.arrayLabelChanges(item)
				: item.name}
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
