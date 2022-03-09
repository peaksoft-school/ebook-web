import classes from './PopUp.module.css'
import { ReactComponent as RubishIcon } from '../../../../../assets/icons/rubish.svg'
import { ReactComponent as ReductorIcon } from '../../../../../assets/icons/changeValue.svg'

const PopUp = () => {
   const onEditHundler = () => {
      // there will be function, which edit book
   }

   const onDeleteHundler = () => {
      // there will be function, which delete book
   }

   return (
      <div className={classes.open}>
         <button
            type="button"
            onClick={onEditHundler}
            className={classes.redactor}
         >
            <RubishIcon className={classes.rubishIcon} /> Редактировать{' '}
         </button>
         <hr className={classes.line2} />
         <button
            type="button"
            onClick={onDeleteHundler}
            className={classes.redactor}
         >
            <ReductorIcon className={classes.rubishIcon} /> Удалить
         </button>
      </div>
   )
}

export default PopUp
