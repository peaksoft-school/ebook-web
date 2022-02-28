import VendorBookCard from '../../UI/VendorBookCard/VendorBookCard'
import classes from './BooksList.module.css'

const BooksList = (props) => {
   const { books } = props

   const renderBook =
      books.length !== 0 ? (
         books.allBooks.map((item) => (
            <VendorBookCard book={item} key={item.bookId} />
         ))
      ) : (
         <p>No books</p>
      )
   return <div className={classes.bookslistbox}>{renderBook}</div>
}
export default BooksList
