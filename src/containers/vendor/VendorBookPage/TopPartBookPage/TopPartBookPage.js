import classes from './TopPartBookPage.module.css'
import ContainerForBriefInformation from './ContainerForBriefInformation/ContainerForBriefInformation'
import SmallContainer from './SmallContainer/SmallContainer'
import BookActionButtons from './BookActionButtons/BookActionButtons'

const TopPartBookPage = ({ book, sendDeletedBook }) => {
   return (
      <div className={classes.meddiumContainer}>
         <img
            className={classes.firstImage}
            src={book.firstImage}
            alt="some images"
         />
         <img
            className={classes.secondImage}
            src={book.secondImage}
            alt="some images"
         />
         <div className={classes.containerForInformation}>
            <h1 className={classes.title}>{book.book_name}</h1>
            <SmallContainer book={book} />
            <ContainerForBriefInformation book={book} />
            <BookActionButtons
               sendDeletedBook={sendDeletedBook}
               bookName={book.book_name}
               bookId={book.id}
            />
         </div>
      </div>
   )
}

export default TopPartBookPage
