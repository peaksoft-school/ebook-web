import { useSelector } from 'react-redux'
import VendorBookCard from '../../UI/VendorBookCard/VendorBookCard'
import classes from './BooksList.module.css'
const BooksList = () => {
	const books = useSelector((state) => state.bookCrat.books)
	console.log(books);

	return (
		<div className={classes.bookslistbox}>
			{books.map((item) => (
				<VendorBookCard book={item} key={item.id}/>
			))}
		</div>
	)
}
export default BooksList
