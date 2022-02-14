import { forwardRef } from 'react'
import './CustomCheckbox.css'

const CustomCheckbox = forwardRef((props, ref) => {
	return (
		<div className={`customCheckboxContainer ${props.className}`}>
			<label className={`container ${props.className}`}>
				{props.label}
				<input type='checkbox' ref={ref} />
				<span className={`checkmark ${props.className}`}></span>
			</label>
		</div>
	)
})

export default CustomCheckbox
