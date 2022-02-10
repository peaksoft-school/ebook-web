import React, { useState } from 'react'
import classes from './VendorBookCard.module.css'
import { ReactComponent as Icon } from '../../../assets/icons/Controls Icon.svg'
import { ReactComponent as RubishIcon } from '../../../assets/icons/rabish.svg'
import { ReactComponent as ReductorIcon } from '../../../assets/icons/changeValue.svg'

const VendorBookCard = ({ book, isOpen, className, children }) => {
	const [popUpShown, setPopUpShown] = useState(false)

	const popUpChangeHandler = () => {
		setPopUpShown((prevState) => !prevState)
	}
	return (
		<div className={classes.containterVendorBookCard}>
			<ul className={classes.styles}>
				<li>
					<div
						className={`${classes.card} ${className}`}
						onClick={isOpen}
					>
						{children}
						<Icon
							className={classes.vector}
							onClick={popUpChangeHandler}
						/>
						<div
							className={`${
								popUpShown ? classes.open : classes.close
							}`}
						>
							<button className={classes.redactor}>
								<RubishIcon className={classes.rubishIcon} />{' '}
								Редактировать{' '}
							</button>
							<hr className={classes.line2} />
							<button className={classes.redactor}>
								<ReductorIcon className={classes.rubishIcon} />{' '}
								Удалить
							</button>
						</div>
						<img
							className={classes.vedorbookcardimg}
							src={book.url}
							alt=''
						/>
						<div className={classes.info}>
							<div>
								<p className={classes.title}>{book.bookName}</p>
								<p className={classes.date}>date</p>
							</div>
							<div className={classes.pricel}>
								<p className={classes.price}>{book.netPrice}</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default VendorBookCard
