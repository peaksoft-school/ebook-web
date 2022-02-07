import { useSelector } from 'react-redux'
import VendorBookCard from '../../UI/VendorBookCard/VendorBookCard'
import classes from './BooksList.module.css'
const BooksList = () => {
	const book = useSelector((state) => state.bookCrat.books)


	return (
		<div className={classes.bookslistbox}>
			{book.map((item) => (
				<VendorBookCard book={item} key={item.id}/>
			))}
		</div>
	)
}
export default BooksList
