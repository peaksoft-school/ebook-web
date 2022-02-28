import classes from './BookActionButtons.module.css'
import Button from '../../../../../components/UI/Button/Button'

const BookActionButtons = () => {
   return (
      <div className={classes.containerForBtn}>
         <Button variant="light" className={classes.button}>
            В избранное
         </Button>
         <Button variant="secondary" className={classes.button}>
            Добавить в корзину
         </Button>
      </div>
   )
}

export default BookActionButtons
