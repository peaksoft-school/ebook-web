import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../store/cratReducer/bookCratSlice'
import BooksList from './booksList/BooksList'
import { ROUTES } from '../../utils/constants/constants'
import { ReactComponent as Plus } from '../../../src/assets/icons/addBookPlus.svg'
import classes from './BooksCrat.module.css'
import BookTypeDropdown from '../BookCardRenderingDropdowns/BookTypeDropdown/BookTypeDropdown'
import BookGenreDropdown from '../BookCardRenderingDropdowns/BookGenreDropdown/BookGenreDropwdown'
import { Link } from 'react-router-dom'

const BooksCratLayout = (props) => {
	const { status, error } = useSelector((state) => state.bookCrat)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchBooks())
	}, [dispatch])

	const [genres, setGenres] = useState([])

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users?_limit=10',
				)
				if (!response.ok) {
					throw new Error('Server Error!')
				}
				const data = await response.json()
				setGenres(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchGenres()
	}, [])

	return (
		<div className={classes.bookCratBox}>
			{status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>An error occered: {error}</h2>}
			<div className={classes.customselectbox}>
				<div className={classes.booktypedropdown}>
					<BookTypeDropdown />
					<BookGenreDropdown genres={genres} />
				</div>
				<div className={classes.linkToNextPage}>
					<Link to={ROUTES.ADDBOOKS}>
						<button className={classes.addBooksButton}>
							<Plus className={classes.plusforbtn} /> Добавить
							Книгу
						</button>
					</Link>
				</div>
			</div>
			<div>
				<p className={classes.totalBooksP}>Всего: </p>
				<BooksList />
			</div>
		</div>
	)
}
export default BooksCratLayout
