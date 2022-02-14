import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../../store/cratReducer/bookCratSlice'
import BooksList from './booksList/BooksList'
import { ROUTES } from '../../utils/constants/constants'
import { ReactComponent as Plus } from '../../../src/assets/icons/addBookPlus.svg'
import classes from './BooksCrat.module.css'
import BookTypeDropdown from '../BookCardRenderingDropdowns/BookTypeDropdown/BookTypeDropdown'
import BookGenreDropdown from '../BookCardRenderingDropdowns/BookGenreDropdown/BookGenreDropwdown'
import { Link } from 'react-router-dom'
import { sendRequest } from '../../utils/helpers'

const BooksCratLayout = (props) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchBooks())
	}, [dispatch])

	const [genres, setGenres] = useState([])

	const sendR = async () => {
		const response = await sendRequest({
			url: 'https://jsonplaceholder.typicode.com/photos?_limit=10',
		})
		// const data = await setGenres(response)
		// console.log(response);

		return await setGenres(response)
	}

	useEffect(() => {
		sendR()
	}, [])
	console.log(genres);
	return (
		<div className={classes.bookCratBox}>
			{/* {status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>An error occered: {error}</h2>} */}
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
				<BooksList books={genres}/>
			</div>
		</div>
	)
}
export default BooksCratLayout
