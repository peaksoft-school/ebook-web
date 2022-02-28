import classes from './ClientBookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import { oneElectronicBook } from '../../../utils/constants/books'

const BookPage = () => {
   return (
      <div className={classes.ContainerForBook}>
         <TopPartBookPage book={oneElectronicBook} />
         <BottomPartBookPage book={oneElectronicBook} />
      </div>
   )
}

export default BookPage
