import classes from './AdminBookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import { oneElectronicBook } from '../../../utils/constants/books'

const BookPage = () => {
   const sendRequestRejectingHundler = (sendRequest) => {
      console.log(sendRequest)
      // api reject not add yet
   }
   const sendRequestAcceptingHundler = (bookId) => {
      console.log(bookId)
      // api accept not add yet
   }
   return (
      <div className={classes.ContainerForBook}>
         <TopPartBookPage
            book={oneElectronicBook}
            sendRequestRejectingBook={sendRequestRejectingHundler}
            sendRequestAcceptingBook={sendRequestAcceptingHundler}
         />
         <BottomPartBookPage book={oneElectronicBook} />
      </div>
   )
}

export default BookPage
