import { GET_BOOK_BY_ID } from '../../../utils/constants/urls'
import { sendRequest } from '../../../utils/helpers'
import VendorBookCard from '../../UI/VendorBookCard/VendorBookCard'
import classes from './BooksList.module.css'

const BooksList = (props) => {
   const { books } = props
   const getBookId = async (id) => {
      const requestConfig = {
         method: 'GET',
         url: GET_BOOK_BY_ID + id,
      }
      const getSingleBookById = await sendRequest(requestConfig)
      return getSingleBookById
   }
   const renderBook =
      books.length !== 0 ? (
         books.allBooks.map((item) => (
            <VendorBookCard
               book={item}
               key={item.bookId}
               onGetBookId={getBookId}
            />
         ))
      ) : (
         <p>No books</p>
      )
   return <div className={classes.bookslistbox}>{renderBook}</div>
}
export default BooksList
