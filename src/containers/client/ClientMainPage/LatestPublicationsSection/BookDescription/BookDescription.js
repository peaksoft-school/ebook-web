import classes from './BookDescription.module.css'
import Button from '../../../../../components/UI/Button/Button'

const BookDescription = ({ aboutBook, price }) => {
   return (
      <div className={classes.bookDescription}>
         <p className={classes.bookTitle}>ИСТОРИЯ КНИГИ</p>
         <p className={classes.aboutBook}>{aboutBook}</p>
         <div className={classes.bottomPartAboutBook}>
            <Button variant="aboutMoreBtn">Подробнее</Button>
            <p className={classes.price}>{price} C</p>
         </div>
      </div>
   )
}

export default BookDescription
