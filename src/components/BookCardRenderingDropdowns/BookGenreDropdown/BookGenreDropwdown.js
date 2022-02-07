import { useState } from 'react'
import classes from './BookGenreDropdown.module.css'
import { ReactComponent as SelectIcon } from '../../../assets/icons/Vector.svg'

const BookGenreDropdown = (props) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggling = () => setIsOpen(!isOpen)

	const [selectedOption, setSelectedOption] = useState(null)

	const onOptionClicked = (value) => () => {
		setSelectedOption(value.name)
		setIsOpen(false)
	}

	return (
		<div>
			<div onClick={toggling} className={classes.selected}>
				{selectedOption || 'Жанры'}
				<SelectIcon className={classes.icon} />
			</div>
			{isOpen && (
				<div className={classes.frame}>
					<div className={`${classes.scroll} ${classes.content}`}>
						<ul>
							{props.genres.map((option) => (
								<li
									onClick={onOptionClicked(option)}
									key={option.id}
									onSelect={props.onSelectOption}
								>
									{
										<div className={classes.items}>
											<p className={classes.title}>
												{option.name}
											</p>
											<p className={classes.amount}>
												{option.id}
											</p>
										</div>
									}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default BookGenreDropdown
