import classes from './DeleteButton.module.css'
import deleteIcon from '../../../assets/icons/deleteIcon.svg'

const DeleteButton = (props) => {
   const { onClick } = props
   return (
      <div>
         <div
            onClick={onClick}
            className={classes.borderDeleteIcon}
            role="presentation"
         >
            <img src={deleteIcon} alt="delete icon" />
         </div>
      </div>
   )
}

export default DeleteButton
