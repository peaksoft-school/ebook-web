import classes from './BookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import useHttp from '../../hooks/use-http'

const BookPage = () => {
   const config = {
      url: 'https://ebook-api-e48c7-default-rtdb.firebaseio.com/book.json',
   }
   const bookPagedata = useHttp(config)

   let booklist = {}
   if (bookPagedata.response !== []) {
      bookPagedata.response.map((item) => {
         booklist = item
         return booklist
      })
   }

   return (
      <div className={classes.ContainerForBook}>
         <TopPartBookPage booklist={booklist} />
         <BottomPartBookPage booklist={booklist} />
      </div>
   )
}

export default BookPage
