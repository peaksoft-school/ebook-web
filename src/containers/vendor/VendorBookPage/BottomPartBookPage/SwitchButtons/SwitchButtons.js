import classes from './SwitchButtons.module.css'
import Button from '../../../../../components/UI/Button/Button'

const SwitchButtons = (props) => {
   const { book, transition, redirectToAbout, redirectToFragment } = props

   return (
      <div className={classes.containerForSwitch}>
         <Button
            variant={
               transition === 'about'
                  ? 'redirectActiveButton'
                  : 'redirectButton'
            }
            onClick={redirectToAbout}
         >
            О книге
         </Button>
         {book.book_type === 'electronic' && (
            <Button
               variant={
                  transition === 'fragment'
                     ? 'redirectActiveButton'
                     : 'redirectButton'
               }
               onClick={redirectToFragment}
            >
               Читать фрагмент
            </Button>
         )}
      </div>
   )
}

export default SwitchButtons
