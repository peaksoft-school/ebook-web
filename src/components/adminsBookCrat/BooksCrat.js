import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../store/cratReducer/bookCratSlice'
import BooksList from './booksList/BooksList'
import { ReactComponent as Arrow } from '../../../src/assets/icons/arrowforbooks.svg'

// import CustomSelect from '../UI/customSelect/CustomSelect'
import classes from './BooksCrat.module.css'
import Popup from '../UI/popUp/Popup'

const BooksCratLayout = (props) => {
	const { status, error } = useSelector((state) => state.bookCrat)
	// const state = useSelector(state => console.log();)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchBooks())
	}, [dispatch])
	const [buttonPopupGenres, setButtonPopupGenres] = useState(true)
	// const [buttonPopupBookType, setButtonPopupBookType] = useState(false)
	return (
		<div className={classes.bookCratBox}>
			{status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>An error occered: {error}</h2>}
			<div className={classes.customselectbox}>
				<button onClick={() => setButtonPopupGenres(true)}>open</button>
				<button onClick={() => setButtonPopupGenres(true)}>open</button>
				<button className={classes.buttonforGenres}>
					Жанры <Arrow className={classes.arrowforGenres} />
				</button>
				<button className={classes.buttonforGenres}>
					Аудиокниги <Arrow className={classes.arrowforGenres} />
				</button>
				<Popup
					trigger={buttonPopupGenres}
					setTrigger={setButtonPopupGenres}
				/>
			</div>
			<div>
				<BooksList />
			</div>
		</div>
	)
}
export default BooksCratLayout
