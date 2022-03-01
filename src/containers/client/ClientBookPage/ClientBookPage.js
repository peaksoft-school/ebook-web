import classes from './ClientBookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import { oneElectronicBook } from '../../../utils/constants/books'

const BookPage = () => {
   const sendRequestToFavority = (bookId) => {
      console.log(bookId)
   }
   const sendRequestToBasket = (bookId) => {
      console.log(bookId)
   }
   return (
      <div className={classes.ContainerForBook}>
         <TopPartBookPage
            sendToBasket={sendRequestToBasket}
            sendToFavority={sendRequestToFavority}
            book={oneElectronicBook}
         />
         <BottomPartBookPage book={oneElectronicBook} />
      </div>
   )
}

export default BookPage
