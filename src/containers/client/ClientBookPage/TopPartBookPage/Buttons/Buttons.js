import classes from './Buttons.module.css'
import Button from '../../../../../components/UI/Button/Button'

const Buttons = () => {
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

export default Buttons
