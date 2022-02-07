import { useState } from 'react'
import classes from './BookTypeDropdown.module.css'
import { ReactComponent as SelectIcon } from '../../../assets/icons/Vector.svg'

const options = [
	{ title: 'Бумажные книги', value: 'PAPER' },
	{ title: 'Аудиокниги', value: 'AUDIO' },
	{ title: 'Электронные книги', value: 'EBOOK' },
]

const BookTypeDropdown = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggling = () => setIsOpen(!isOpen)
	const [selectedOption, setSelectedOption] = useState(null)
	const onOptionClicked = (value) => () => {
		setSelectedOption(value)
		setIsOpen(false)
	}

	return (
		<div>
			<div onClick={toggling} className={classes.selected}>
				{selectedOption || 'Аудиокниги'}
				<SelectIcon className={classes.icon} />
			</div>
			{isOpen && (
				<div className={classes.container2}>
					<div className={classes.context}>
						<ul>
							{options.map((option) => (
								<li
									key={option.value}
									value={option.value}
									onClick={onOptionClicked(option.title)}
									onSelect={props.onSelectOption}
								>
									{option.title}
									{option.title === 'Электронные книги' ? (
										!(<hr className={classes.line2} />)
									) : (
										<hr className={classes.line2} />
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default BookTypeDropdown
