import VendorBookCard from '../../UI/VendorBookCard/VendorBookCard'
import classes from './BooksList.module.css'

const BooksList = (props) => {
   const { books } = props
   return (
      <div className={classes.bookslistbox}>
         {books.map((item) => (
            <VendorBookCard book={item} key={item.id} />
         ))}
      </div>
   )
}
export default BooksList
