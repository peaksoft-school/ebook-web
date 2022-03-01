import classes from './VendorBookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import { oneElectronicBook } from '../../../utils/constants/books'

const BookPage = () => {
   const sendDeletedBookHundler = (bookId) => {
      console.log(bookId)
      // book delete api
   }
   return (
      <div className={classes.ContainerForBook}>
         <TopPartBookPage
            sendDeletedBook={sendDeletedBookHundler}
            book={oneElectronicBook}
         />
         <BottomPartBookPage book={oneElectronicBook} />
      </div>
   )
}

export default BookPage
