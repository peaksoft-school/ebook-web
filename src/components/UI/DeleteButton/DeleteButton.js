import classes from './DeleteButton.module.css'
import deleteIcon from '../../../assets/icons/deleteIcon.svg'

<<<<<<< HEAD
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
=======
const DeleteButton = ({ onClick }) => {
   return (
      <div
         role="presentation"
         onClick={onClick}
         className={classes.borderDeleteIcon}
      >
         <img src={deleteIcon} alt="delete icon" />
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
      </div>
   )
}

export default DeleteButton
